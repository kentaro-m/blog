import { getDatabase, getPage, getPostContent } from '../../../lib/notion';
import { serialize } from 'next-mdx-remote/serialize';
import { formatDate } from '../../../lib/date';
import PostPage from './PostPage';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const revalidate = 60;

const databaseId = process.env.NOTION_DATABASE_ID ?? '';

type Props = {
  params: {
    id: string;
  };
};

const SITE_URL = 'https://blog.kentarom.com';
const SITE_TITLE = "kentarom's blog";

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const page = await getPage(params.id);
  // @ts-expect-error
  const pageTitle = page.properties.Name.title[0].text.content;
  const pageUrl = new URL(`/posts/${params.id}`, SITE_URL);

  return {
    title: `${pageTitle} | ${SITE_TITLE}`,
    metadataBase: pageUrl,
    openGraph: {
      type: 'article',
      title: pageTitle,
      siteName: SITE_TITLE,
      url: pageUrl,
      images: `${SITE_URL}/api/og?title=${encodeURIComponent(pageTitle)}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      creator: '@_kentaro_m',
      images: [`${SITE_URL}/api/og?title=${encodeURIComponent(pageTitle)}`],
    },
  };
};

export const generateStaticParams = async () => {
  const database = await getDatabase(databaseId, false);
  return database.map((page) => ({ id: page.id }));
};

const getPost = async (id: string) => {
  const [page, postContent] = await Promise.all([
    getPage(id),
    getPostContent(id),
  ]);
  const content = await serialize(postContent);
  // @ts-expect-error
  const date = page.properties.Date.date?.start || page.created_time;

  return {
    pathname: `/posts/${id}`,
    content,
    formattedDate: formatDate(date),
    // @ts-expect-error
    title: page.properties.Name.title[0],
  };
};

export default async function Post({ params }: Props) {
  if (!params.id) {
    notFound();
  }

  const post = await getPost(params.id);

  return <PostPage post={post} />;
}
