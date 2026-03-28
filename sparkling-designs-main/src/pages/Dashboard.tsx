// import { useState, useEffect, useRef } from "react";
// import {
//     MapPin, ShoppingCart, Package, Users, Globe, User,
//     Store, Calendar, FileText, BarChart2, Truck, Mail, ChevronRight,
// } from "lucide-react";
// import { Header } from "@/components/layout/Header";
// import { cn } from "@/lib/utils";
// import { Link } from "react-router-dom";
// import gsap from "gsap";
// import "../App.css";
// import { link } from "fs";

// export const DashBoard = () => {
//     const [searchQuery, setSearchQuery] = useState("");

//     const logoContainerRef = useRef<HTMLDivElement>(null);
//     const logoRef = useRef<HTMLImageElement>(null);
//     const titleRef = useRef<HTMLImageElement>(null);
//     const cardsRef = useRef<HTMLElement[]>([]);
//     const linesRef = useRef<HTMLElement[]>([]);
//     useEffect(() => {
//         const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
//         // TEXT LINES – hidden initially
//         gsap.set(linesRef.current, {
//             y: 60,
//             opacity: 0,
//         });
//         // LOGO
//         gsap.set(logoRef.current, {
//             rotation: -360,
//             scale: 0.4,
//             opacity: 0,
//         });
//         // TITLE
//         gsap.set(titleRef.current, {
//             y: 30,
//             opacity: 0,
//         });
//         /*  LOGO + TEXT START SAME TIME */
//         tl.to(logoRef.current, {
//             rotation: 0,
//             scale: 1,
//             opacity: 1,
//             duration: 1.2,
//         }, 0)
//             .to(titleRef.current, {
//                 y: 0,
//                 opacity: 1,
//                 duration: 0.6,
//             }, 0.2)
//             .to(linesRef.current, {
//                 y: 0,
//                 opacity: 1,
//                 stagger: 0.15, // line by line
//                 duration: 0.7,
//             }, 0.1)

//             //  CARDS AFTER TEXT
//             .from(cardsRef.current, {
//                 opacity: 0,
//                 y: 50,
//                 scale: 0.9,
//                 stagger: 0.08,
//                 duration: 0.6,
//             }, "+=0.2");
//     }, []);
//     const dashboardCards = [
//         // { id: 1, title: "Live Tracking", icon: MapPin },
//         { id: 2, title: "Inventory Management", icon: ShoppingCart, link: "products" },
//         { id: 3, title: "Order Management", icon: Package ,link:"salesOrder"},
//         { id: 4, title: "Employee Management", icon: Users,link:"emp" },
//         { id: 5, title: "Reatiler Management", icon: Globe,link:"onboard_reaitler" },
//         { id: 6, title: "Shedule Management", icon: User,link:"/daily-shedule" },
//         { id: 7, title: "Daily Summery Management", icon: Store,link:"summery" },
//         { id: 8, title: "Reports Analytics", icon: Calendar,link:"report" },
//         { id: 9, title: "Policy", icon: FileText,link:"privacy_policy" },
//         // { id: 10, title: "Analytics", icon: BarChart2 },
//         { id: 12, title: "Messages", icon: Mail ,link:"message"},
//     ];
//     return (
//         <div className="min-h-screen  relative overflow-hidden">
//             {/* <Header searchValue={searchQuery} onSearchChange={setSearchQuery} /> */}

//             <div className="p-4 sm:p-6 lg:p-10 max-w-[1600px] mx-auto space-y-12 bg-dots-pattern">
//                 {/* HERO */}
//                 <div className="flex  lg:flex-row items-start lg:items-center justify-between gap-10">

//                     {/* TEXT */}
//                     <div className="max-w-xl overflow-hidden space-y-4">
//                         <div
//                             ref={(el) => el && (linesRef.current[0] = el)}
//                             className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/5 border"
//                         >
//                             <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
//                             <span className="text-xs font-semibold uppercase">Dashboard</span>
//                         </div>

//                         <h1
//                             ref={(el) => el && (linesRef.current[1] = el)}
//                             className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900"
//                         >
//                             Welcome Back,
//                             <br />
//                             <span className="relative inline-block">
//                               Power Soaps Business Dashboard
//                                 <span className="absolute left-0 -bottom-2 h-[3px] w-full bg-gradient-to-r from-primary to-transparent"></span>
//                             </span>
//                         </h1>

//                         <p
//                             ref={(el) => el && (linesRef.current[2] = el)}
//                             className="text-base sm:text-lg text-gray-600"
//                         >
//                             Monitor operations, manage orders, and track performance.
//                         </p>
//                     </div>

//                     {/* LOGO + TITLE */}
//                     <div
//                         ref={logoContainerRef}
//                         className="relative md:w-[250px] lg:w-[420px] h-[260px] flex items-center justify-center hidden md:block"
//                     >
//                         <img
//                             ref={logoRef}
//                             src="/logo.png"
//                             alt="Logo"
//                             className="absolute w-[120px] sm:w-[160px] md:w-[360px]"
//                         />

//                         <img
//                             ref={titleRef}
//                             src="/title.png"
//                             alt="Title"
//                             className="absolute top-[26%] w-[160px] sm:w-[200px] md:w-[360px]"
//                         />
//                     </div>
//                 </div>

//                 {/* GRID */}
//                 <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 sm:gap-6">
//                     {dashboardCards.map((item, index) => {
//                         const Icon = item.icon;

//                         return (
//                             <Link
//                                 key={item.id}
//                                 data-aos="fade-up"
//                                 data-aos-duration="1000"
//                                 data-aos-delay={index * 100}
//                                 to={item.link || "#"}
//                                 className="group flex flex-col items-center justify-center gap-4 p-4 h-40 rounded-2xl
//                    bg-card border border-border
//                    transition-all hover:-translate-y-2 hover:shadow-xl"
//                             >
//                                 <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center">
//                                     <Icon className="text-primary group-hover:scale-110 transition" />
//                                 </div>

//                                 <span className="text-sm font-bold text-gray-800 text-center">
//                                     {item.title}
//                                 </span>
//                             </Link>
//                         );
//                     })}
//                 </div>

//             </div>
//         </div>
//     );
// };

import { useState, useEffect, useRef } from "react";
import {
    MapPin, ShoppingCart, Package, Users, Globe, User,
    Store, Calendar, FileText, Truck, Mail, ArrowUpRight
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { DashBoardHeader } from "@/components/layout/DashBoardHeader";

export const DashBoard = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const heroContentRef = useRef<HTMLDivElement>(null);
    const logoContainerRef = useRef<HTMLDivElement>(null);
    const logoRef = useRef<HTMLImageElement>(null);
    const titleRef = useRef<HTMLImageElement>(null);
    const cardsRef = useRef<(HTMLAnchorElement | null)[]>([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

            // Set initial states
            gsap.set(logoRef.current, { rotation: -180, scale: 0.5, opacity: 0 });
            gsap.set(titleRef.current, { y: 20, opacity: 0 });
            gsap.set(cardsRef.current, { opacity: 0, y: 40, scale: 0.98 });

            // 1. Hero Content Animation
            tl.fromTo(
                heroContentRef.current?.children ? Array.from(heroContentRef.current.children) : [],
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 1, stagger: 0.1 }
            )
                // 2. Logo & Title Animation
                .to(logoRef.current, {
                    rotation: 0,
                    scale: 1,
                    opacity: 1,
                    duration: 1.2,
                    ease: "back.out(1.2)"
                }, "-=0.8")
                .to(titleRef.current, {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                }, "-=1.0")
                // 3. Bento Grid Cards Animation
                .to(cardsRef.current, {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.8,
                    stagger: 0.05,
                }, "-=0.6");
        }, containerRef);

        return () => ctx.revert();
    }, []);

    // Added specific hex colors for the dynamic glows (Tailwind can't compile dynamic string class names)
    const dashboardCards = [

        { id: 1, title: "Inventory", icon: ShoppingCart, link: "products", color: "text-blue-500", bg: "bg-blue-50", glow: "rgba(59,130,246,0.15)", size: "col-span-1" },
        { id: 2, title: "Orders", icon: Package, link: "salesOrder", color: "text-emerald-500", bg: "bg-emerald-50", glow: "rgba(16,185,129,0.15)", size: "col-span-1" },
        { id: 3, title: "Employees", icon: Users, link: "emp", color: "text-purple-500", bg: "bg-purple-50", glow: "rgba(168,85,247,0.15)", size: "col-span-1" },
        { id: 4, title: "Retailers", icon: Globe, link: "onboard_reaitler", color: "text-orange-500", bg: "bg-orange-50", glow: "rgba(249,115,22,0.15)", size: "col-span-1" },
        { id: 5, title: "Reports & Analytics", desc: "Export and analyze business metrics", icon: Calendar, link: "report", color: "text-teal-500", bg: "bg-teal-50", glow: "rgba(20,184,166,0.15)", size: "md:col-span-2 md:row-span-1" },
        { id: 6, title: "Schedules", icon: User, link: "/daily-shedule", color: "text-indigo-500", bg: "bg-indigo-50", glow: "rgba(99,102,241,0.15)", size: "col-span-1" },
        { id: 7, title: "Daily Summary", icon: Store, link: "summery", color: "text-cyan-500", bg: "bg-cyan-50", glow: "rgba(6,182,212,0.15)", size: "col-span-1" },
        { id: 8, title: "Policies", icon: FileText, link: "privacy_policy", color: "text-slate-500", bg: "bg-slate-100", glow: "rgba(100,116,139,0.15)", size: "col-span-1" },
        { id: 9, title: "Messages", icon: Mail, link: "message", color: "text-pink-500", bg: "bg-pink-50", glow: "rgba(236,72,153,0.15)", size: "col-span-1" },
    ];

    return (
        <div ref={containerRef} className="min-h-screen bg-slate-50/50 text-slate-900 font-sans relative overflow-x-hidden">
            {/* Soft background gradient blobs */}
            <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-pink-100/40 blur-[100px] pointer-events-none z-0"></div>
            <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-100/40 blur-[100px] pointer-events-none z-0"></div>

            <DashBoardHeader />
            <main className="relative z-10 p-4 sm:p-6 md:p-8 lg:p-12 max-w-[1400px] mx-auto min-h-[calc(100vh-80px)] flex flex-col justify-center">

                {/* HERO SECTION */}
                <div className="mb-10 lg:mb-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                   <div ref={heroContentRef} className="space-y-5 sm:space-y-6 flex-1 relative z-10">
    
    {/* PREMIUM BADGE */}
    <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-emerald-200/60 shadow-[0_2px_10px_-3px_rgba(16,185,129,0.15)] transition-all hover:shadow-emerald-500/20 cursor-default">
        <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
        </span>
        <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.25em] text-emerald-700">
            System Live
        </span>
    </div>

    {/* PREMIUM HEADING */}
    <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4rem] font-black tracking-tighter text-slate-900 leading-[1.05]">
        <span className="bg-clip-text text-transparent uppercase tracking-wider bg-gradient-to-r from-[#D11C78] to-[#E82B8C] drop-shadow-sm">
            Power Soaps
        </span>
        {/* Optional context word, scales beautifully on desktop */}
        <span className="text-slate-300/80 font-light tracking-tight ml-2">Portal</span>
    </h1>

    {/* SUBTITLE (Polished and ready to be uncommented if needed) */}
    {/* <p className="text-slate-500 max-w-2xl text-base sm:text-lg lg:text-xl leading-relaxed font-medium mt-2">
        Precision management for your entire supply chain. Monitor, analyze, and scale your operations with ease.
    </p> */}
    
</div>

                    {/* LOGO + TITLE */}
                    <div
                        ref={logoContainerRef}
                        className="relative w-[240px] lg:w-[320px] h-[180px] lg:h-[220px] hidden md:flex items-center justify-center shrink-0"
                    >
                        <img
                            ref={logoRef}
                            src="/logo.png"
                            alt="Logo"
                            className="absolute sm:w-[250px] w-[200px] lg:w-[350px] drop-shadow-2xl z-10"
                        />
                        <img
                            ref={titleRef}
                            src="/title.png"
                            alt="Title"
                            className="absolute sm:w-[250px] top-[35%] lg:top-[30%] w-[160px] lg:w-[350px] opacity-90 drop-shadow-md mix-blend-multiply"
                        />
                    </div>
                </div>

                {/* PREMIUM BENTO GRID */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 pb-12">
                    {dashboardCards.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <Link
                                key={item.id}
                                ref={(el) => (cardsRef.current[index] = el)}
                                to={item.link}
                                className={`
                                    group relative flex flex-col justify-between p-5 md:p-7 
                                    bg-white border border-slate-100 rounded-[1.5rem] md:rounded-[2rem] 
                                    shadow-sm hover:shadow-xl hover:-translate-y-1 
                                    transition-all duration-300 ease-out overflow-hidden
                                    ${item.size} min-h-[140px] md:min-h-[160px]
                                `}
                            >
                                {/* Top: Icon and Arrow */}
                                <div className="flex justify-between items-start z-10 w-full">
                                    <div className={`p-3 md:p-4 rounded-xl md:rounded-2xl ${item.bg} group-hover:scale-110 transition-transform duration-300 ease-out`}>
                                        <Icon className={`${item.color} h-5 w-5 md:h-8 md:w-8`} strokeWidth={2.5} />
                                    </div>
                                    <div className="p-2 bg-slate-50 rounded-full group-hover:bg-[#D11C78] transition-colors duration-300">
                                        <ArrowUpRight className="text-slate-400 group-hover:text-white transition-colors duration-300" size={16} strokeWidth={3} />
                                    </div>
                                </div>

                                {/* Bottom: Text */}
                                <div className="z-10 mt-6 md:mt-8">
                                    <h3 className="text-base  md:text-[16px] xl:text-[18px] font-bold text-slate-800 tracking-tight group-hover:text-[#D11C78] transition-colors duration-300">
                                        {item.title}
                                    </h3>
                                    {/* Only show description on wide cards */}
                                    {item.desc && (
                                        <p className="text-xs font-medium text-slate-400 mt-1 hidden md:block opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                            {item.desc}
                                        </p>
                                    )}
                                </div>

                                {/* Dynamic Background Glow on Hover */}
                                <div
                                    className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                    style={{ background: `radial-gradient(circle at bottom right, ${item.glow}, transparent 70%)` }}
                                />
                            </Link>
                        );
                    })}
                </div>
            </main>
        </div>
    );
};