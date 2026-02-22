'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import SplashScreen from './SplashScreen'

// Module-level flag: resets to false on every full page load/reload
// because JS modules are re-evaluated fresh on each page load.
// When navigating between pages in Next.js (client-side), this module
// stays in memory, so splashDone remains true → splash is skipped.
let splashDone = false

export default function SplashWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()
    const isHomePage = pathname === '/'

    // null = determining, true = show splash, false = skip
    const [showSplash, setShowSplash] = useState<boolean | null>(null)

    useEffect(() => {
        if (!isHomePage || splashDone) {
            // Not the home page, or already shown → skip splash
            splashDone = true   // prevent future client-side navigations to home from triggering it
            setShowSplash(false)
        } else {
            // Fresh load on home page → show splash
            setShowSplash(true)
        }
    }, [isHomePage])

    const handleSplashComplete = () => {
        splashDone = true   // mark in memory so page navigations skip it
        setShowSplash(false)
    }

    // While determining, show a white screen only on home page to avoid flash
    if (showSplash === null) {
        return isHomePage
            ? <div style={{ position: 'fixed', inset: 0, backgroundColor: '#fff', zIndex: 9999 }} />
            : <>{children}</>
    }

    return (
        <>
            {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
            <div
                style={{
                    opacity: showSplash ? 0 : 1,
                    transition: 'opacity 0.5s ease-in-out',
                    visibility: showSplash ? 'hidden' : 'visible',
                }}
            >
                {children}
            </div>
        </>
    )
}
