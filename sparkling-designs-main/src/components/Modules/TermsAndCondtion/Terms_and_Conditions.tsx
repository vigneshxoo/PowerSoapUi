import React from 'react';
import { Sidebar } from '@/components/layout/Sidebar';
import { Header } from '@/components/layout/Header';
import { 
    FileText, 
    Gavel, 
    ShieldAlert, 
    Link as LinkIcon, 
    Copy, 
    Mail,
    Scale,
    ExternalLink
} from "lucide-react";

export const TermsAndConditions = () => {
    return (
        <div className="min-h-screen bg-white text-slate-900">
            

            <main className="lg:ml-64 min-h-screen flex flex-col">
                
                <div className="p-4 sm:p-10 lg:p-16 max-w-[1200px] mx-auto w-full">
                    
                    {/* HEADER SECTION */}
                    <div className="space-y-6 mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-primary text-xs sm:text-sm font-black uppercase tracking-widest">
                            <Scale className="h-4 w-4" />
                            Legal Agreement
                        </div>
                        <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
                            Terms & <span className="text-[#D11C78]">Conditions</span>
                        </h1>
                        <p className="text-gray-500 text-lg font-medium max-w-2xl">
                            Welcome to Power Soaps. These rules outline the regulations for the use of our website and services.
                        </p>
                    </div>

                    {/* QUICK SUMMARY GRID */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                        <div className="p-6 rounded-[2rem] bg-gray-50 border border-gray-100">
                            <div className="h-12 w-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary mb-4">
                                <FileText size={24} />
                            </div>
                            <h3 className="font-black text-sm uppercase mb-2">License</h3>
                            <p className="text-xs text-gray-500 font-bold leading-relaxed">Intellectual property rights are owned by Power Soaps. Personal use is permitted under restrictions.</p>
                        </div>
                        <div className="p-6 rounded-[2rem] bg-gray-50 border border-gray-100">
                            <div className="h-12 w-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-orange-500 mb-4">
                                <LinkIcon size={24} />
                            </div>
                            <h3 className="font-black text-sm uppercase mb-2">Linking</h3>
                            <p className="text-xs text-gray-500 font-bold leading-relaxed">Specific organizations may link to our site without prior approval under certain conditions.</p>
                        </div>
                        <div className="p-6 rounded-[2rem] bg-gray-50 border border-gray-100">
                            <div className="h-12 w-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-rose-500 mb-4">
                                <ShieldAlert size={24} />
                            </div>
                            <h3 className="font-black text-sm uppercase mb-2">Liability</h3>
                            <p className="text-xs text-gray-500 font-bold leading-relaxed">We are not responsible for content appearing on your website or external links.</p>
                        </div>
                    </div>

                    {/* MAIN CONTENT AREA */}
                    <div className="prose prose-slate max-w-none space-y-12 pb-20">
                        
                        <section className="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10">
                            <p className="m-0 font-bold text-gray-700 leading-relaxed">
                                By accessing this website we assume you accept these terms and conditions. Do not continue to use <span className="text-primary font-black">Power Soaps</span> if you do not agree to take all of the terms and conditions stated on this page.
                            </p>
                        </section>

                        <div className="space-y-8">
                            <h2 className="text-3xl font-black flex items-center gap-4">
                                <span className="text-gray-200 tracking-tighter text-5xl">01</span>
                                Cookies & Privacy
                            </h2>
                            <p className="text-gray-600 font-medium leading-relaxed">
                                We employ the use of cookies. By accessing Power Soaps, you agreed to use cookies in agreement with the Power Soaps's Privacy Policy. Most interactive websites use cookies to let us retrieve the user's details for each visit.
                            </p>

                            <h2 className="text-3xl font-black flex items-center gap-4">
                                <span className="text-gray-200 tracking-tighter text-5xl">02</span>
                                Intellectual Property
                            </h2>
                            <p className="text-gray-600 font-medium leading-relaxed mb-4">
                                Unless otherwise stated, Power Soaps and/or its licensors own the intellectual property rights for all material on Power Soaps. All rights are reserved. 
                            </p>
                            <div className="bg-rose-50 border border-rose-100 p-6 rounded-2xl">
                                <p className="text-rose-600 font-black text-xs uppercase tracking-widest mb-4">You must not:</p>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0 m-0">
                                    {[
                                        "Republish material from site", 
                                        "Sell or rent our material", 
                                        "Reproduce or duplicate content",
                                        "Redistribute Power Soaps content"
                                    ].map((text, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-rose-700 font-bold text-sm">
                                            <div className="h-1.5 w-1.5 rounded-full bg-rose-400" />
                                            {text}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <h2 className="text-3xl font-black flex items-center gap-4 pt-6">
                                <span className="text-gray-200 tracking-tighter text-5xl">03</span>
                                Hyperlinking to our Content
                            </h2>
                            <p className="text-gray-600 font-medium leading-relaxed">
                                The following organizations may link to our Website without prior written approval: Government agencies, Search engines, News organizations, and Online directory distributors.
                            </p>

                            <div className="p-8 rounded-[2rem] bg-slate-900 text-white relative overflow-hidden">
                                <Gavel className="absolute -right-6 -bottom-6 h-40 w-40 text-white/5 rotate-12" />
                                <h3 className="text-xl font-black mb-4">Disclaimer & Liability</h3>
                                <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xl">
                                    To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website. We will not be liable for any loss or damage of any nature.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 border border-white/10 text-[10px] font-black uppercase tracking-widest">
                                        Prevailing Law: Netherlands
                                    </div>
                                </div>
                            </div>

                            <h2 className="text-3xl font-black flex items-center gap-4 pt-6">
                                <span className="text-gray-200 tracking-tighter text-5xl">04</span>
                                User Comments
                            </h2>
                            <p className="text-gray-600 font-medium leading-relaxed">
                                Power Soaps reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive or causes breach of these Terms and Conditions.
                            </p>
                        </div>

                        {/* CONTACT FOOTER */}
                        <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8">
                            <div className="flex items-center gap-4">
                                <div className="h-14 w-14 rounded-2xl bg-gray-50 flex items-center justify-center text-primary">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="text-xs font-black text-gray-400 uppercase">Support Email</p>
                                    <p className="text-lg font-black text-slate-900">admin@powersoaps.com</p>
                                </div>
                            </div>
                            <button className="w-full md:w-auto px-10 py-4 bg-primary text-white rounded-2xl font-black shadow-xl shadow-primary/20 hover:scale-105 transition-all">
                                Acknowledge Terms
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}