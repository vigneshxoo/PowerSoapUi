import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";

export const LogoAnimation = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const logoRef = useRef<HTMLImageElement>(null);
    const textRef = useRef<HTMLHeadingElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                defaults: { ease: "power3.out" },
            });

            // 1. Initial State
            gsap.set(logoRef.current, {
                y: window.innerHeight + 100, // Below screen
                x: 0, // Center horizontally (assumed due to css centering)
                scale: 2.5,
                rotation: -45,
                opacity: 0,
            });

            gsap.set(textRef.current, {
                x: 50,
                opacity: 0,
            });

            gsap.set(containerRef.current, {
                autoAlpha: 1, // Make sure container is visible
            });

            // 2. Animation Sequence
            // We want a CONTINUOUS motion.
            // Move from bottom-center to top-right in one go or very smooth blend.
            // Since it starts centered (fixed left-1/2), to go to top right we need x to be positive.

            // Calculate final positions
            // We want it in top-right corner.
            // Let's say top: 20px, right: 20px.
            // Current center is 50vw.
            // Target x is window.innerWidth - 20 - (logoWidth * scale / 2) - 50vw roughly
            // But simpler: just position it relative to the window.
            // Actually, if we use fixed positioning with left-1/2, x needs to be approx 50vw - padding.

            const targetX = (window.innerWidth / 2) - 80; // Approximate right edge minus padding
            const targetY = -window.innerHeight + 80; // Approximate top edge minus padding (adjusted for starting offset)
            // Note: Starting Y is relative to its CSS position.
            // CSS is bottom: -250px.
            // Let's refine the CSS to be simpler: left: 50%, top: 100% (or bottom: 0)
            // I'll stick to the CSS in the return statement for base positioning.

            tl.to(logoRef.current, {
                y: "-90vh", // Move almost to top
                x: targetX, // Move to right
                scale: 0.6, // Scale down to logo size
                rotation: 0, // Straighten
                opacity: 1,
                duration: 2.2, // "Short and snappy" but covering a lot of distance? Maybe 1.5-2s
                ease: "power4.out", // Strong easing for "snappy" entrance
            })
                .to(textRef.current, {
                    x: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power2.out", // Subtle professional easing
                }, "-=0.5"); // Overlap slightly with the end of logo movement

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center opacity-0"
            style={{ opacity: 1 }} // handled by gsap but set here to be safe or use autoAlpha
        >
            {/* Container for the end-position elements to group them?
          Actually, since logo moves across screen, keeping it absolute/fixed relative to screen is best.
      */}

            {/* 
        We position the logo initially at the bottom center.
        Using fixed positioning relative to viewport.
      */}
            <div
                className="fixed bottom-0 left-1/2 -translate-x-1/2 translate-y-full"
            // Wrapper div to hold logo and potentially text if they moved together, 
            // but text needs to stay in top right.
            // Actually, best approach:
            // Position everything in top right *initially* and `from` tween it?
            // Or position bottom *initially* and `to` tween it?
            // User asked for "animate FROM bottom".
            // Let's stick to the refs having independent transforms.
            >
                <img
                    ref={logoRef}
                    src="/logo.png"
                    alt="Power Soap Logo"
                    className="w-48 h-auto object-contain"
                // Initial styles set by GSAP
                />
            </div>

            {/* Brand Text - Fixed at top right final position */}
            <div
                className="fixed top-6 right-6 flex items-center"
            >
                {/* Placeholder for where the logo WILL end up, to align text? 
            No, GSAP will move the logo image to this vicinity.
            But to ensure alignment, it might be better to have the wrapper 
            move to the top right?
        */}

                {/* 
            Strategy adjustment:
            If we want perfect alignment, we can animate the *Wrapper* from bottom-center to top-right.
            However, we also want rotation on the *Logo Image*.
        */}
            </div>

            {/* 
         Revised Strategy for Code:
         1. Logo is independent.
         2. Text is independent fixed at top right.
         3. We animate Logo to visually align with Text.
      */}
            <h1
                ref={textRef}
                className="fixed top-8 right-20 text-xl font-bold text-slate-800 tracking-tight"
                style={{ opacity: 0 }} // Initial hidden
            >
                Power Soap
            </h1>
        </div>
    );
};
