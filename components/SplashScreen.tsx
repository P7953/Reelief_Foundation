'use client'

import { useEffect, useState, useRef } from 'react'

// All 147 frames with their individual delays (in ms)
const FRAMES: { src: string; delay: number }[] = [
    { src: '/images/Webp/frame_000_delay-0.042s.webp', delay: 42 },
    { src: '/images/Webp/frame_001_delay-0.041s.webp', delay: 41 },
    { src: '/images/Webp/frame_002_delay-0.042s.webp', delay: 42 },
    { src: '/images/Webp/frame_003_delay-0.042s.webp', delay: 42 },
    { src: '/images/Webp/frame_004_delay-0.041s.webp', delay: 41 },
    { src: '/images/Webp/frame_005_delay-0.042s.webp', delay: 42 },
    { src: '/images/Webp/frame_006_delay-0.042s.webp', delay: 42 },
    { src: '/images/Webp/frame_007_delay-0.041s.webp', delay: 41 },
    { src: '/images/Webp/frame_008_delay-0.042s.webp', delay: 42 },
    { src: '/images/Webp/frame_009_delay-0.042s.webp', delay: 42 },
    { src: '/images/Webp/frame_010_delay-0.041s.webp', delay: 41 },
    { src: '/images/Webp/frame_011_delay-0.042s.webp', delay: 42 },
    { src: '/images/Webp/frame_012_delay-0.042s.webp', delay: 42 },
    { src: '/images/Webp/frame_013_delay-0.041s.webp', delay: 41 },
    { src: '/images/Webp/frame_014_delay-0.042s.webp', delay: 42 },
    { src: '/images/Webp/frame_015_delay-0.042s.webp', delay: 42 },
    { src: '/images/Webp/frame_016_delay-0.041s.webp', delay: 41 },
    { src: '/images/Webp/frame_017_delay-0.042s.webp', delay: 42 },
    { src: '/images/Webp/frame_018_delay-0.042s.webp', delay: 42 },
    { src: '/images/Webp/frame_019_delay-0.041s.webp', delay: 41 },
    { src: '/images/Webp/frame_020_delay-0.042s.webp', delay: 42 },
    { src: '/images/Webp/frame_021_delay-0.042s.webp', delay: 42 },
    { src: '/images/Webp/frame_022_delay-0.041s.webp', delay: 41 },
    { src: '/images/Webp/frame_023_delay-0.042s.webp', delay: 42 },
    { src: '/images/Webp/frame_024_delay-0.042s.webp', delay: 42 },
    { src: '/images/Webp/frame_025_delay-0.041s.webp', delay: 41 },
    { src: '/images/Webp/frame_026_delay-0.042s.webp', delay: 42 },
    { src: '/images/Webp/frame_027_delay-0.042s.webp', delay: 42 },
    { src: '/images/Webp/frame_028_delay-0.041s.webp', delay: 41 },
    { src: '/images/Webp/frame_029_delay-0.042s.webp', delay: 42 },
    { src: '/images/Webp/frame_030_delay-0.042s.webp', delay: 42 },
    { src: '/images/Webp/frame_031_delay-0.041s.webp', delay: 41 },
    { src: '/images/Webp/frame_032_delay-0.042s.webp', delay: 42 },
    { src: '/images/Webp/frame_033_delay-0.042s.webp', delay: 42 },
    { src: '/images/Webp/frame_034_delay-0.041s.webp', delay: 41 },
    { src: '/images/Webp/frame_035_delay-0.042s.webp', delay: 42 },
    { src: '/images/Webp/frame_036_delay-0.042s.webp', delay: 42 },
    { src: '/images/Webp/frame_037_delay-0.041s.webp', delay: 41 },
    { src: '/images/Webp/frame_038_delay-0.042s.webp', delay: 42 },
    { src: '/images/Webp/frame_039_delay-0.042s.webp', delay: 42 },
    { src: '/images/Webp/frame_040_delay-0.041s.webp', delay: 41 },
    { src: '/images/Webp/frame_041_delay-0.042s.webp', delay: 42 },
    { src: '/images/Webp/frame_042_delay-0.042s.webp', delay: 42 },
    { src: '/images/Webp/frame_043_delay-0.041s.webp', delay: 41 },
    { src: '/images/Webp/frame_044_delay-0.042s.webp', delay: 42 },
    { src: '/images/Webp/frame_045_delay-0.042s.webp', delay: 42 },
    { src: '/images/Webp/frame_046_delay-0.041s.webp', delay: 41 },
    { src: '/images/Webp/frame_047_delay-0.042s.webp', delay: 42 },
    { src: '/images/Webp/frame_048_delay-0.042s.webp', delay: 42 },
    { src: '/images/Webp/frame_049_delay-0.041s.webp', delay: 41 },
    { src: '/images/Webp/frame_050_delay-0.042s.webp', delay: 42 },
    { src: '/images/Webp/frame_051_delay-0.042s.webp', delay: 42 },
    { src: '/images/Webp/frame_052_delay-0.041s.webp', delay: 41 },
    { src: '/images/Webp/frame_053_delay-0.042s.webp', delay: 42 },
    { src: '/images/Webp/frame_054_delay-0.042s.webp', delay: 42 },
    { src: '/images/Webp/frame_055_delay-0.041s.webp', delay: 41 },
    { src: '/images/Webp/frame_056_delay-0.042s.webp', delay: 42 },
    { src: '/images/Webp/frame_057_delay-0.042s.webp', delay: 42 },
    { src: '/images/Webp/frame_058_delay-0.041s.webp', delay: 41 },
    { src: '/images/Webp/frame_059_delay-0.042s.webp', delay: 42 },
    { src: '/images/Webp/frame_060_delay-0.042s.webp', delay: 42 },
    { src: '/images/Webp/frame_061_delay-0.041s.webp', delay: 41 },
    { src: '/images/Webp/frame_062_delay-0.042s.webp', delay: 42 },
    { src: '/images/Webp/frame_063_delay-0.042s.webp', delay: 42 },
    { src: '/images/Webp/frame_064_delay-0.041s.webp', delay: 41 },
    { src: '/images/Webp/frame_065_delay-0.042s.webp', delay: 42 },
    { src: '/images/Webp/frame_066_delay-0.042s.webp', delay: 42 },
    { src: '/images/Webp/frame_067_delay-0.041s.webp', delay: 41 },
    { src: '/images/Webp/frame_068_delay-0.042s.webp', delay: 42 },
    { src: '/images/Webp/frame_069_delay-0.042s.webp', delay: 42 },
    { src: '/images/Webp/frame_070_delay-0.041s.webp', delay: 41 },
    { src: '/images/Webp/frame_071_delay-0.042s.webp', delay: 42 },
    { src: '/images/Webp/frame_072_delay-0.042s.webp', delay: 42 },
    { src: '/images/Webp/frame_073_delay-0.041s.webp', delay: 41 },
    { src: '/images/Webp/frame_074_delay-0.042s.webp', delay: 42 },
    { src: '/images/Webp/frame_075_delay-0.042s.webp', delay: 42 },
    { src: '/images/Webp/frame_076_delay-0.041s.webp', delay: 41 },
    { src: '/images/Webp/frame_077_delay-0.042s.webp', delay: 42 },
    { src: '/images/Webp/frame_078_delay-0.042s.webp', delay: 42 },
    { src: '/images/Webp/frame_079_delay-0.041s.webp', delay: 41 },
    { src: '/images/Webp/frame_080_delay-0.042s.webp', delay: 42 },
    { src: '/images/Webp/frame_081_delay-0.042s.webp', delay: 42 },
    { src: '/images/Webp/frame_082_delay-0.041s.webp', delay: 41 },
    { src: '/images/Webp/frame_083_delay-0.042s.webp', delay: 42 },
    { src: '/images/Webp/frame_084_delay-0.042s.webp', delay: 42 },
    { src: '/images/Webp/frame_085_delay-0.041s.webp', delay: 41 },
    { src: '/images/Webp/frame_086_delay-0.042s.webp', delay: 42 },
    { src: '/images/Webp/frame_087_delay-0.042s.webp', delay: 42 },
    { src: '/images/Webp/frame_088_delay-0.041s.webp', delay: 41 },
    { src: '/images/Webp/frame_089_delay-0.042s.webp', delay: 42 },
    { src: '/images/Webp/frame_090_delay-0.042s.webp', delay: 42 },
    { src: '/images/Webp/frame_091_delay-0.041s.webp', delay: 41 },
    { src: '/images/Webp/frame_092_delay-0.042s.webp', delay: 42 },
    { src: '/images/Webp/frame_093_delay-0.042s.webp', delay: 42 },
    { src: '/images/Webp/frame_094_delay-0.041s.webp', delay: 41 },
    { src: '/images/Webp/frame_095_delay-0.042s.webp', delay: 42 },
    { src: '/images/Webp/frame_096_delay-0.042s.webp', delay: 42 },
    { src: '/images/Webp/frame_097_delay-0.041s.webp', delay: 41 },
    { src: '/images/Webp/frame_098_delay-0.042s.webp', delay: 42 },
    { src: '/images/Webp/frame_099_delay-0.042s.webp', delay: 42 },
    { src: '/images/Webp/frame_100_delay-0.041s.webp', delay: 41 },
    { src: '/images/Webp/frame_101_delay-0.042s.webp', delay: 42 },
    { src: '/images/Webp/frame_102_delay-0.042s.webp', delay: 42 },
    { src: '/images/Webp/frame_103_delay-0.041s.webp', delay: 41 },
    { src: '/images/Webp/frame_104_delay-0.042s.webp', delay: 42 },
    { src: '/images/Webp/frame_105_delay-0.042s.webp', delay: 42 },
    { src: '/images/Webp/frame_106_delay-0.041s.webp', delay: 41 },
    { src: '/images/Webp/frame_107_delay-0.042s.webp', delay: 42 },
    { src: '/images/Webp/frame_108_delay-0.042s.webp', delay: 42 },
    { src: '/images/Webp/frame_109_delay-0.041s.webp', delay: 41 },
    { src: '/images/Webp/frame_110_delay-0.042s.webp', delay: 42 },
    { src: '/images/Webp/frame_111_delay-0.042s.webp', delay: 42 },
    { src: '/images/Webp/frame_112_delay-0.041s.webp', delay: 41 },
    { src: '/images/Webp/frame_113_delay-0.042s.webp', delay: 42 },
    { src: '/images/Webp/frame_114_delay-0.042s.webp', delay: 42 },
    { src: '/images/Webp/frame_115_delay-0.041s.webp', delay: 41 },
    { src: '/images/Webp/frame_116_delay-0.042s.webp', delay: 42 },
    { src: '/images/Webp/frame_117_delay-0.042s.webp', delay: 42 },
    { src: '/images/Webp/frame_118_delay-0.041s.webp', delay: 41 },
    { src: '/images/Webp/frame_119_delay-0.042s.webp', delay: 42 },
    { src: '/images/Webp/frame_120_delay-0.042s.webp', delay: 42 },
    { src: '/images/Webp/frame_121_delay-0.041s.webp', delay: 41 },
    { src: '/images/Webp/frame_122_delay-0.042s.webp', delay: 42 },
    { src: '/images/Webp/frame_123_delay-0.042s.webp', delay: 42 },
    { src: '/images/Webp/frame_124_delay-0.041s.webp', delay: 41 },
    { src: '/images/Webp/frame_125_delay-0.042s.webp', delay: 42 },
    { src: '/images/Webp/frame_126_delay-0.042s.webp', delay: 42 },
    { src: '/images/Webp/frame_127_delay-0.041s.webp', delay: 41 },
    { src: '/images/Webp/frame_128_delay-0.042s.webp', delay: 42 },
    { src: '/images/Webp/frame_129_delay-0.042s.webp', delay: 42 },
    { src: '/images/Webp/frame_130_delay-0.041s.webp', delay: 41 },
    { src: '/images/Webp/frame_131_delay-0.042s.webp', delay: 42 },
    { src: '/images/Webp/frame_132_delay-0.042s.webp', delay: 42 },
    { src: '/images/Webp/frame_133_delay-0.041s.webp', delay: 41 },
    { src: '/images/Webp/frame_134_delay-0.042s.webp', delay: 42 },
    { src: '/images/Webp/frame_135_delay-0.042s.webp', delay: 42 },
    { src: '/images/Webp/frame_136_delay-0.041s.webp', delay: 41 },
    { src: '/images/Webp/frame_137_delay-0.042s.webp', delay: 42 },
    { src: '/images/Webp/frame_138_delay-0.042s.webp', delay: 42 },
    { src: '/images/Webp/frame_139_delay-0.041s.webp', delay: 41 },
    { src: '/images/Webp/frame_140_delay-0.042s.webp', delay: 42 },
    { src: '/images/Webp/frame_141_delay-0.042s.webp', delay: 42 },
    { src: '/images/Webp/frame_142_delay-0.041s.webp', delay: 41 },
    { src: '/images/Webp/frame_143_delay-0.042s.webp', delay: 42 },
    { src: '/images/Webp/frame_144_delay-0.042s.webp', delay: 42 },
    { src: '/images/Webp/frame_145_delay-0.041s.webp', delay: 41 },
    { src: '/images/Webp/frame_146_delay-0.042s.webp', delay: 42 },
]

export default function SplashScreen({ onComplete }: { onComplete: () => void }) {
    const [currentFrame, setCurrentFrame] = useState(0)
    const [isFadingOut, setIsFadingOut] = useState(false)
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

    useEffect(() => {
        // Preload all frames for smooth playback
        FRAMES.forEach((frame) => {
            const img = new Image()
            img.src = frame.src
        })
    }, [])

    useEffect(() => {
        if (currentFrame < FRAMES.length - 1) {
            timeoutRef.current = setTimeout(() => {
                setCurrentFrame((prev) => prev + 1)
            }, FRAMES[currentFrame].delay)
        } else {
            // Last frame reached — start fade out after a brief pause
            timeoutRef.current = setTimeout(() => {
                setIsFadingOut(true)
                // After fade-out transition completes, notify parent
                setTimeout(() => {
                    onComplete()
                }, 700)
            }, 200)
        }

        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current)
        }
    }, [currentFrame, onComplete])

    return (
        <div
            style={{
                position: 'fixed',
                inset: 0,
                zIndex: 9999,
                backgroundColor: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                opacity: isFadingOut ? 0 : 1,
                transition: 'opacity 0.7s ease-in-out',
                pointerEvents: isFadingOut ? 'none' : 'all',
            }}
        >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src={FRAMES[currentFrame].src}
                alt="Loading animation"
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                }}
            />
        </div>
    )
}
