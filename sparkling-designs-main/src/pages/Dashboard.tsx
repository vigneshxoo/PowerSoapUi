import { useState, useEffect, useRef } from "react";
import {
    MapPin, ShoppingCart, Package, Users, Globe, User,
    Store, Calendar, FileText, BarChart2, Truck, Mail, ChevronRight,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import gsap from "gsap";
import "../App.css";
import { link } from "fs";

export const DashBoard = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const logoContainerRef = useRef<HTMLDivElement>(null);
    const logoRef = useRef<HTMLImageElement>(null);
    const titleRef = useRef<HTMLImageElement>(null);
    const cardsRef = useRef<HTMLElement[]>([]);
    const linesRef = useRef<HTMLElement[]>([]);
    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
        // TEXT LINES – hidden initially
        gsap.set(linesRef.current, {
            y: 60,
            opacity: 0,
        });
        // LOGO
        gsap.set(logoRef.current, {
            rotation: -360,
            scale: 0.4,
            opacity: 0,
        });
        // TITLE
        gsap.set(titleRef.current, {
            y: 30,
            opacity: 0,
        });
        /*  LOGO + TEXT START SAME TIME */
        tl.to(logoRef.current, {
            rotation: 0,
            scale: 1,
            opacity: 1,
            duration: 1.2,
        }, 0)
            .to(titleRef.current, {
                y: 0,
                opacity: 1,
                duration: 0.6,
            }, 0.2)
            .to(linesRef.current, {
                y: 0,
                opacity: 1,
                stagger: 0.15, // line by line
                duration: 0.7,
            }, 0.1)

            //  CARDS AFTER TEXT
            .from(cardsRef.current, {
                opacity: 0,
                y: 50,
                scale: 0.9,
                stagger: 0.08,
                duration: 0.6,
            }, "+=0.2");
    }, []);
    const dashboardCards = [
        // { id: 1, title: "Live Tracking", icon: MapPin },
        { id: 2, title: "Inventory Management", icon: ShoppingCart, link: "products" },
        { id: 3, title: "Order Management", icon: Package ,link:"salesOrder"},
        { id: 4, title: "Employee Management", icon: Users,link:"emp" },
        { id: 5, title: "Reatiler Management", icon: Globe,link:"onboard_reaitler" },
        { id: 6, title: "Shedule Management", icon: User,link:"/daily-shedule" },
        { id: 7, title: "Daily Summery Management", icon: Store,link:"summery" },
        { id: 8, title: "Reports Analytics", icon: Calendar,link:"report" },
        { id: 9, title: "Policy", icon: FileText,link:"privacy_policy" },
        // { id: 10, title: "Analytics", icon: BarChart2 },
        { id: 12, title: "Messages", icon: Mail ,link:"message"},
    ];
    return (
        <div className="min-h-screen  relative overflow-hidden">
            <Header searchValue={searchQuery} onSearchChange={setSearchQuery} />

            <div className="p-4 sm:p-6 lg:p-10 max-w-[1600px] mx-auto space-y-12 bg-dots-pattern">
                {/* HERO */}
                <div className="flex  lg:flex-row items-start lg:items-center justify-between gap-10">

                    {/* TEXT */}
                    <div className="max-w-xl overflow-hidden space-y-4">
                        <div
                            ref={(el) => el && (linesRef.current[0] = el)}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/5 border"
                        >
                            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                            <span className="text-xs font-semibold uppercase">Dashboard</span>
                        </div>

                        <h1
                            ref={(el) => el && (linesRef.current[1] = el)}
                            className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900"
                        >
                            Welcome Back,
                            <br />
                            <span className="relative inline-block">
                                Command Center
                                <span className="absolute left-0 -bottom-2 h-[3px] w-full bg-gradient-to-r from-primary to-transparent"></span>
                            </span>
                        </h1>

                        <p
                            ref={(el) => el && (linesRef.current[2] = el)}
                            className="text-base sm:text-lg text-gray-600"
                        >
                            Monitor operations, manage orders, and track performance.
                        </p>
                    </div>

                    {/* LOGO + TITLE */}
                    <div
                        ref={logoContainerRef}
                        className="relative md:w-[250px] lg:w-[420px] h-[260px] flex items-center justify-center hidden md:block"
                    >
                        <img
                            ref={logoRef}
                            src="/logo.png"
                            alt="Logo"
                            className="absolute w-[120px] sm:w-[160px] md:w-[360px]"
                        />

                        <img
                            ref={titleRef}
                            src="/title.png"
                            alt="Title"
                            className="absolute top-[26%] w-[160px] sm:w-[200px] md:w-[360px]"
                        />
                    </div>
                </div>

                {/* GRID */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 sm:gap-6">
                    {dashboardCards.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <Link
                                key={item.id}
                                data-aos="fade-up"
                                data-aos-duration="1000"
                                data-aos-delay={index * 100}
                                to={item.link || "#"}
                                className="group flex flex-col items-center justify-center gap-4 p-4 h-40 rounded-2xl
                   bg-card border border-border
                   transition-all hover:-translate-y-2 hover:shadow-xl"
                            >
                                <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                                    <Icon className="text-primary group-hover:scale-110 transition" />
                                </div>

                                <span className="text-sm font-bold text-gray-800 text-center">
                                    {item.title}
                                </span>
                            </Link>
                        );
                    })}
                </div>

            </div>
        </div>
    );
};



//         </div>
//     );
// };


//     const updateDimensions = () => {
//         if (containerRef.current) {
//             const rect = containerRef.current.getBoundingClientRect();
//             setDimensions({
//                 width: window.innerWidth,
//                 height: window.innerHeight
//             });
//         }
//     };

//     const resizeObserver = new ResizeObserver(updateDimensions);
//     if (containerRef.current) {
//         resizeObserver.observe(containerRef.current);
//     }

//     updateDimensions(); // Initial

//     return () => resizeObserver.disconnect();
// }, []);

// useEffect(() => {
//     if (!logoRef.current || !textRef.current || dimensions.width === 0) return;

//     // const hasAnimated = sessionStorage.getItem("dashboardLogoAnimated");

//     // if (hasAnimated) {
//     //     gsap.set(logoRef.current, {
//     //         x: (dimensions.width / 3) - 100,
//     //         y: -(dimensions.height - 120),
//     //         scale: 1,
//     //         rotation: 0,
//     //         opacity: 1,
//     //     });

//     //     gsap.set(textRef.current, {
//     //         opacity: 1,
//     //         x: 0,
//     //     });
//     //     return;
//     // }

//     // const ctx = gsap.context(() => {
//     //     const finalX = (dimensions.width / 3) - 100;
//     //     const finalY = -(dimensions.height - 120);

//     //     // Initial states
//     //     gsap.set(logoRef.current, {
//     //         y: 120,
//     //         scale: 5,
//     //         opacity: 0,
//     //         rotation: -45,
//     //     });

//     //     gsap.set(textRef.current, {
//     //         x: 80,
//     //         opacity: 0,
//     //     });

//     //     const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

//     //     tl
//     //         // 1️⃣ Bottom → Center (BIG)
//     //         .to(logoRef.current, {
//     //             y: -dimensions.height / 2,
//     //             scale: 3,
//     //             opacity: 1,
//     //             rotation: 0,
//     //             duration: 0.9,
//     //         })

//     //         // 2️⃣ HOLD CENTER (0.1s)
//     //         .to(logoRef.current, {
//     //             duration: 0.1,
//     //         })

//     //         // 3️⃣ Move to final responsive position
//     //         .to(logoRef.current, {
//     //             x: finalX,
//     //             y: finalY,
//     //             scale: 1,
//     //             rotation: 360,
//     //             duration: 1.1,
//     //             ease: "power2.inOut",
//     //         })

//     //         // 4️⃣ TEXT APPEAR
//     //         .to(textRef.current, {
//     //             x: 0,
//     //             opacity: 1,
//     //             duration: 0.5,
//     //             onComplete: () => setStartTyping(true)
//     //         }, "+=0.05")

//     //         // 5️⃣ MARK SESSION
//     //         .call(() => {
//     //             sessionStorage.setItem("dashboardLogoAnimated", "true");
//     //         });
//     // });

//     return () => ctx.revert();
// }, [dimensions]);


// LOGO + TEXT REFS
// const logoRef = useRef<HTMLDivElement>(null);
// const textRef = useRef<HTMLDivElement>(null);

// // Responsive dimensions
// const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

// useEffect(() => {


// const fullText = "Power Soaps";
// const [displayText, setDisplayText] = useState("");

// useEffect(() => {
//     if (!startTyping) return;

//     let index = fullText.length - 1;
//     let current = "";

//     const interval = setInterval(() => {
//         if (index < 0) {
//             clearInterval(interval);
//             return;
//         }
//         current = fullText[index] + current;
//         setDisplayText(current);
//         index--;
//     }, 110);

//     return () => clearInterval(interval);
// }, [startTyping])


//    <div 
//     ref={textRef}
//     className="mt-4 text-xl sm:text-4xl font-extrabold logo-text tracking-wide text-[#232A77] logo-text-2" 
// >
//     {displayText}
// </div>



{/* <div
                    ref={textRef}
                    className="fixed 2xl:right-[197px] 2xl:mt-[60px] xl:right-[135px] xl:mt-[60px] lg:right-[120px] lg:mt-[60px] md:right-[70px] md:mt-[40px] z-40 pointer-events-none opacity-0 hidden sm:block top-[150px] "
                    // style={{ transform: "translateX(80px)" }}
                >
                 <img src="/title.png" alt="Power Soap" className=" w-96 h-96 object-contain mt-[-100px]"/> 


                </div>

                <div
                    ref={logoRef}
                    className="fixed z-50 pointer-events-none opacity-0 hidden md:block bottom-[-160px] sm:bottom-[-180px] lg:bottom-[-210px] left-1/2 -translate-x-1/2"
                >
                    <img
                        src="/logo.png"
                        alt="Logo"
                        className="object-contain h-auto w-[180px] sm:w-[220px] md:w-[260px] lg:w-[300px] xl:w-[360px] 2xl:w-[350px]"
                    />
                </div> */}