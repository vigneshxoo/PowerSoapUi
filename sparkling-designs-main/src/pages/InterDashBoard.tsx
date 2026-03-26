import { useEffect, useState } from "react";
import gsap from "gsap";
import { DashBoard } from "./Dashboard";
import NotFound from "./NotFound";

const IntroDashboard = (): JSX.Element => {
  const [showDashboard, setShowDashboard] = useState<boolean>(false);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => setShowDashboard(true),
    });

    tl.from(".brand-text", {
      scale: 0.4,
      opacity: 0,
      duration: 1.2,
      ease: "power4.out",
    })
      .to(
        ".bar",
        {
          height: 0,
          stagger: { amount: 0.5 },
          duration: 1.4,
          ease: "power4.inOut",
        },
        "+=0.3"
      )
      .to(
        ".brand-text",
        {
          y: "-20vh", // 🔥 viewport based (responsive)
          opacity: 0,
          duration: 0.3,
          ease: "power4.inOut",
        },
        "-=1"
      );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <>
      {/* INTRO */}
      {!showDashboard && (
        <>
          {/* OVERLAY BARS */}
          <div className="fixed inset-0 z-10 flex">
            {Array.from({ length: 12 }).map((_, index) => (
              <div
                key={index}
                className="bar h-screen flex-1 bg-neutral-900 "
              />
            ))}
          </div>

          {/* BRAND TEXT */}
          <div className="fixed inset-0 z-20 flex items-center justify-center px-4 pointer-events-none">
            <h1
              className="
                brand-text 
                text-white 
                font-extrabold 
                uppercase 
                tracking-[0.15em]
                text-[clamp(2.5rem,12vw,9rem)]
                text-center
              "
            >
              Power Soap
            </h1>
          </div>
        </>
      )}

      {/* DASHBOARD */}
      {showDashboard && (
        <div className="
        ">
          <DashBoard />
        </div>
      )}
    </>
  );
};

export default IntroDashboard;
