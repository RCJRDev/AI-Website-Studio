import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Buildwise - Websites that work. Support that lasts.'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0f172a',
          backgroundImage: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)',
        }}
      >
        {/* Decorative circles */}
        <div
          style={{
            position: 'absolute',
            top: '10%',
            right: '20%',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: '#3b82f6',
            opacity: 0.2,
            filter: 'blur(60px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '10%',
            left: '20%',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: '#f97316',
            opacity: 0.15,
            filter: 'blur(50px)',
          }}
        />

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '60px',
            zIndex: 1,
          }}
        >
          {/* Logo */}
          <div
            style={{
              fontSize: 72,
              fontWeight: 'bold',
              color: '#ffffff',
              marginBottom: '40px',
              letterSpacing: '-0.02em',
            }}
          >
            Buildwise
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: 48,
              color: '#93c5fd',
              textAlign: 'center',
              maxWidth: '900px',
              lineHeight: 1.3,
            }}
          >
            Websites that work.
            <br />
            Support that lasts.
          </div>

          {/* Subtext */}
          <div
            style={{
              fontSize: 28,
              color: '#cbd5e1',
              marginTop: '40px',
              textAlign: 'center',
            }}
          >
            Custom-built websites for small businesses
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
