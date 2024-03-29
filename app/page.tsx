import { getDatabase } from '../lib/notion';
import { formatDate } from '../lib/date';
import IndexPage from './IndexPage';
import { Metadata } from 'next';

type Post = {
  id: string;
  title: string;
  formattedDate: string;
};

const databaseId: string = process.env.NOTION_DATABASE_ID ?? '';

export const revalidate = 60;

type Status = 'Draft' | 'Published';

const SITE_URL = 'https://blog.kentarom.com';
const SITE_TITLE = "kentarom's blog";

export const metadata: Metadata = {
  title: SITE_TITLE,
  metadataBase: new URL(SITE_URL),
  openGraph: {
    type: 'article',
    title: SITE_TITLE,
    siteName: SITE_TITLE,
    url: SITE_URL,
    images: `${SITE_URL}/api/og?title=${encodeURIComponent(SITE_TITLE)}`,
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    creator: '@_kentaro_m',
    images: [`${SITE_URL}/api/og?title=${encodeURIComponent(SITE_TITLE)}`],
  },
};

const getPosts = async (): Promise<Post[]> => {
  const draftMode = process.env.NODE_ENV === 'development';
  const data = await getDatabase(databaseId, draftMode);
  return data
    .map((post): Post | undefined => {
      // @ts-expect-error
      const date = post.properties.Date.date?.start;

      return {
        id: post.id,
        // @ts-expect-error
        title: post.properties.Name.title[0].text.content,
        // @ts-expect-error
        formattedDate: formatDate(date || post.created_time),
      };
    })
    .filter((v): v is Exclude<typeof v, undefined> => v !== undefined);
};

export default async function Index() {
  const posts = await getPosts();
  return <IndexPage posts={posts} />;
}
