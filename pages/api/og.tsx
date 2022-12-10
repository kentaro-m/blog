import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'

export const config = {
  runtime: 'experimental-edge',
}

const font = fetch(new URL('../../assets/BIZUDPGothic-Bold.ttf', import.meta.url)).then(
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
          background: '#080b14',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignContent: 'center',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 80,
          fontFamily: 'BIZ UDPGothic',
        }}
      >
        <div
          style={{
            width: '100%',
            fontSize: 60,
            fontWeight: 'bold',
            color: '#D6BCFA',
            lineHeight: 1.7,
            wordBreak: 'break-all',
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
              color: '#FFFFFF',
            }}
          >matsuken</div>
        </div>
      </div>
      ),
      {
        width: 1200,
        height: 600,
        fonts: [
          {
            name: 'BIZ UDPGothic',
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
