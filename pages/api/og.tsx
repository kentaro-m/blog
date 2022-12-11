import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'

export const config = {
  runtime: 'experimental-edge',
}

const font = fetch(new URL('../../assets/NotoSansJP-Bold.otf', import.meta.url)).then(
  (res) => res.arrayBuffer(),
);

export default async function (req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    const SLICE_LENGTH = 64
    const hasTitle = searchParams.has('title');
    const title = hasTitle
      ? searchParams.get('title')?.slice(0, SLICE_LENGTH)
      : 'kentarom\'s blog';
    const fontData = await font;

    return new ImageResponse(
      (
        <div
          style={{
            width: '100%',
            height: '100%',
            /**
             * NOTE: 0: #d6bcfa, 50: #9f7aea, 100: #6b46c1
             * @see https://cssgradient.io/
             */
            background: 'linear-gradient(135deg, rgba(214,188,250,1) 0%, rgba(159,122,234,1) 50%, rgba(107,70,193,1) 100%)',
            padding: 25,
            display: 'flex',
          }}
        >
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignContent: 'center',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: 60,
              fontFamily: 'Noto Sans JP',
              borderRadius: 25,
              background: '#080b14',
            }}
          >
            <div
              style={{
                width: '100%',
                fontSize: 60,
                fontWeight: 'bold',
                color: '#D6BCFA',
              }}
            >
              {title}
            </div>
          <div
            style={{
              display: 'flex',
              width: '100%',
              alignItems: 'center',
            }}
          >
            <img
              src='https://github.com/kentaro-m.png'
              style={{
                width: 100,
                borderRadius: '50%',
                marginRight: '30px',
              }}
            />
            <div
              style={{
                fontWeight: 'bold',
                fontSize: 32,
                alignItems: 'center',
                color: '#E2E8F0',
              }}
            >matsuken</div>
          </div>
        </div>
      </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: 'Noto Sans JP',
            data: fontData,
            style: 'normal',
          },
        ],
      },
    )
  } catch (e: any) {
    console.log(`${e.message}`)
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}
