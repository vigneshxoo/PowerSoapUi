import React from 'react';
import { Sidebar } from '@/components/layout/Sidebar';
import { Header } from '@/components/layout/Header';
import { 
    History, 
    TrendingUp, 
    Factory, 
    FlaskConical, 
    Globe2, 
    Users2, 
    Milestone,
    Award
} from "lucide-react";

export const AboutUs = () => {
    return (
        <div className="min-h-screen bg-white text-slate-900">

            <main className="lg:ml-64 min-h-screen flex flex-col">
                
                <div className="p-4 sm:p-10 lg:p-16 max-w-[1400px] mx-auto w-full space-y-16">
                    
                    {/* HERO SECTION */}
                    <div className="text-center space-y-6 max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-primary text-xs sm:text-sm font-black uppercase tracking-widest">
                            <History className="h-4 w-4" />
                            Our Legacy
                        </div>
                        <h1 className="text-5xl sm:text-7xl font-black tracking-tight leading-tight">
                            Powering Homes for <span className="text-primary text-stroke-sm">3 Decades</span>
                        </h1>
                        <p className="text-xl text-gray-500 font-medium leading-relaxed">
                            From a small manufacturing company to a <span className="text-slate-900 font-black">₹250 Crore FMCG giant</span>. 
                            M/s Abirami Soap Works LLP is the heart of quality and affordability.
                        </p>
                    </div>

                    {/* KEY STATS GRID */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {[
                            { label: "Employees", value: "600+", icon: <Users2 />, color: "bg-blue-50 text-blue-600" },
                            { label: "Revenue Target", value: "₹1000Cr", icon: <TrendingUp />, color: "bg-emerald-50 text-emerald-600" },
                            { label: "Global Sourcing", value: "6 Countries", icon: <Globe2 />, color: "bg-orange-50 text-orange-600" },
                            { label: "Experience", value: "30+ Years", icon: <Award />, color: "bg-purple-50 text-purple-600" },
                        ].map((stat, i) => (
                            <div key={i} className="p-8 rounded-[2.5rem] border border-gray-100 bg-white shadow-xl shadow-gray-100/50 flex flex-col items-center text-center group hover:-translate-y-2 transition-all">
                                <div className={`h-14 w-14 rounded-2xl ${stat.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                    {React.cloneElement(stat.icon as React.ReactElement, { size: 28 })}
                                </div>
                                <p className="text-3xl font-black tracking-tighter">{stat.value}</p>
                                <p className="text-xs font-black uppercase text-gray-400 tracking-widest mt-1">{stat.label}</p>
                            </div>
                        ))}
                    </div>

                    {/* THE JOURNEY / TIMELINE */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <div className="space-y-8">
                            <h2 className="text-4xl font-black tracking-tight flex items-center gap-4">
                                <Milestone className="text-primary h-10 w-10" />
                                The Story of <span className="text-primary">Power</span>
                            </h2>
                            <div className="space-y-10 border-l-4 border-gray-50 pl-8 ml-4">
                                <div className="relative">
                                    <div className="absolute -left-[42px] top-0 h-5 w-5 rounded-full bg-primary border-4 border-white shadow-sm" />
                                    <h4 className="font-black text-xl mb-2">1970s: The Foundation</h4>
                                    <p className="text-gray-500 font-medium leading-relaxed">
                                        Founded by <span className="text-slate-900 font-bold">Shri Krishna Nadar</span> as Gold Soap Company in Dindigul. Built on ethics and a vision for quality detergent for every household.
                                    </p>
                                </div>
                                <div className="relative">
                                    <div className="absolute -left-[42px] top-0 h-5 w-5 rounded-full bg-blue-200 border-4 border-white shadow-sm" />
                                    <h4 className="font-black text-xl mb-2">1994: The Rebirth</h4>
                                    <p className="text-gray-500 font-medium leading-relaxed">
                                        Under <span className="text-slate-900 font-bold">Mr. K. Dhanapal</span>, the brand was officially renamed to <span className="text-primary font-black uppercase">"Power"</span>, becoming a household name across South India.
                                    </p>
                                </div>
                                <div className="relative">
                                    <div className="absolute -left-[42px] top-0 h-5 w-5 rounded-full bg-blue-200 border-4 border-white shadow-sm" />
                                    <h4 className="font-black text-xl mb-2">Present & Future</h4>
                                    <p className="text-gray-500 font-medium leading-relaxed">
                                        Expanding into personal care with the <span className="font-bold">"Nature Power"</span> range and aiming for the 1000-crore magic figure with fully automated manufacturing.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* INFRASTRUCTURE & R&D CARDS */}
                        <div className="space-y-6">
                            <div className="bg-slate-900 rounded-[3rem] p-10 text-white relative overflow-hidden group">
                                <Factory className="absolute -right-10 -bottom-10 h-48 w-48 text-white/5 group-hover:rotate-12 transition-transform duration-700" />
                                <h3 className="text-2xl font-black mb-4 flex items-center gap-3">
                                    <Factory className="text-primary" /> State-of-the-Art
                                </h3>
                                <p className="text-slate-400 font-medium leading-relaxed mb-6">
                                    Our infrastructure spans across Chennai, Puducherry, Karaikal, and Silvassa. Every plant is equipped with fully-automated machinery to ensure world-class quality at an affordable cost.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {["Automated", "High Tech", "Massive Scale"].map((tag) => (
                                        <span key={tag} className="px-4 py-2 bg-white/10 rounded-xl text-[10px] font-black uppercase tracking-widest">{tag}</span>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-blue-600 rounded-[3rem] p-10 text-white relative overflow-hidden group">
                                <FlaskConical className="absolute -right-10 -bottom-10 h-48 w-48 text-white/10 group-hover:-rotate-12 transition-transform duration-700" />
                                <h3 className="text-2xl font-black mb-4 flex items-center gap-3">
                                    <FlaskConical className="text-blue-200" /> Research & Development
                                </h3>
                                <p className="text-blue-100 font-medium leading-relaxed">
                                    Our dedicated centre of scientists works consistently to innovate and add value. We source 80% of raw materials internally, with the rest imported from global leaders like Malaysia and Saudi Arabia.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* CONTACT CALL TO ACTION */}
                    <div className="bg-gray-50 rounded-[3rem] p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-gray-100">
                        <div className="flex items-center gap-6">
                            <div className="h-16 w-16 bg-white rounded-[1.5rem] shadow-sm flex items-center justify-center text-primary">
                                <Globe2 size={32} />
                            </div>
                            <div>
                                <h4 className="text-2xl font-black">Partner with us?</h4>
                                <p className="text-gray-500 font-bold uppercase text-xs tracking-widest">Global FMCG Leader</p>
                            </div>
                        </div>
                        <button className="w-full md:w-auto px-10 py-5 bg-primary text-white rounded-[2rem] font-black text-lg shadow-xl shadow-primary/20 hover:scale-105 transition-all active:scale-95">
                            Contact Admin
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
}