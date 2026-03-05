// app/icon.tsx
import { ImageResponse } from 'next/og'
 
// Route segment config
export const runtime = 'edge'
 
// Image metadata
export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'
 
// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 24,
          background: 'transparent',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#292524', // stone-800
          fontWeight: 900,
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        N
        <div
          style={{
            position: 'absolute',
            bottom: 4,
            right: 2,
            width: 6,
            height: 6,
            borderRadius: '50%',
            background: '#fb923c', // orange-400
          }}
        />
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  )
}