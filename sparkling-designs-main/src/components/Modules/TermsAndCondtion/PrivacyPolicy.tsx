import React from 'react';
import { Sidebar } from '@/components/layout/Sidebar';
import { Header } from '@/components/layout/Header';
import { 
    ShieldCheck, 
    Mail, 
    Lock, 
    Info, 
    ExternalLink,
    ChevronRight,
    ArrowLeft
} from "lucide-react";

export const PrivacyPolicy = () => {
    const sections = [
        "Consent", "Information we collect", "How we use your information", 
        "Log Files", "Cookies and Web Beacons", "CCPA Rights", "GDPR Rights"
    ];

    return (
        <div className="min-h-screen bg-white text-slate-900">

            <main className="lg:ml-64 min-h-screen flex flex-col">
                
                <div className="p-4 sm:p-10 lg:p-16 max-w-[1200px] mx-auto w-full">
                    
                    {/* HERO HEADER */}
                    <div className="space-y-6 mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 text-xs sm:text-sm font-black uppercase tracking-widest">
                            <ShieldCheck className="h-4 w-4" />
                            Data Protection
                        </div>
                        <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight">
                            Privacy <span className="text-primary">Policy</span>
                        </h1>
                        <p className="text-gray-500 text-lg font-medium max-w-2xl">
                            At Power Soaps, we are committed to protecting your personal information and your right to privacy.
                        </p>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-16">
                        
                        {/* LEFT NAV - STICKY DESKTOP */}
                        <aside className="hidden lg:block w-64 space-y-4 sticky top-32 h-fit">
                            <p className="text-[10px] font-black uppercase text-gray-400 tracking-[0.2em] mb-6">Contents</p>
                            {sections.map((section) => (
                                <button key={section} className="flex items-center justify-between w-full text-left py-2 group">
                                    <span className="text-sm font-bold text-gray-500 group-hover:text-primary transition-colors">{section}</span>
                                    <ChevronRight size={14} className="text-gray-300 group-hover:text-primary transition-all opacity-0 group-hover:opacity-100" />
                                </button>
                            ))}
                        </aside>

                        {/* CONTENT AREA */}
                        <div className="flex-1 space-y-12 pb-24">
                            
                            <section className="prose prose-slate max-w-none">
                                <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100 mb-10">
                                    <p className="font-bold text-gray-600 leading-relaxed m-0">
                                        At Power Soaps, accessible from <a href="https://www.powersoaps.com/" className="text-primary underline">https://www.powersoaps.com/</a>, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Power Soaps and how we use it.
                                    </p>
                                    <div className="mt-6 flex items-center gap-4 p-4 bg-white rounded-2xl border border-gray-100">
                                        <div className="h-10 w-10 bg-blue-50 rounded-xl flex items-center justify-center text-primary">
                                            <Mail size={20} />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black text-gray-400 uppercase">Questions?</p>
                                            <p className="font-black text-sm">Admin@powersoaps.com</p>
                                        </div>
                                    </div>
                                </div>

                                <h2 className="text-2xl font-black mb-4">Consent</h2>
                                <p className="text-gray-600 font-medium leading-relaxed mb-8">
                                    By using our website, you hereby consent to our Privacy Policy and agree to its terms.
                                </p>

                                <h2 className="text-2xl font-black mb-4">Information we collect</h2>
                                <p className="text-gray-600 font-medium leading-relaxed mb-4">
                                    The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
                                </p>
                                <ul className="space-y-3 mb-8">
                                    {["Direct contact details (Name, Email, Phone)", "Account registration data", "Attachments and messages"].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-gray-600 font-bold">
                                            <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                <h2 className="text-2xl font-black mb-4">How we use your information</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                    {[
                                        "Provide & maintain website", "Improve user experience", 
                                        "Analyze website usage", "Develop new features",
                                        "Marketing & Communication", "Fraud prevention"
                                    ].map((item, i) => (
                                        <div key={i} className="p-4 rounded-xl border border-gray-100 bg-gray-50/50 flex items-center gap-3">
                                            <CheckCircle size={16} className="text-emerald-500" />
                                            <span className="text-sm font-bold text-gray-700">{item}</span>
                                        </div>
                                    ))}
                                </div>

                                <h2 className="text-2xl font-black mb-4">Log Files</h2>
                                <p className="text-gray-600 font-medium leading-relaxed mb-8">
                                    Power Soaps follows a standard procedure of using log files. The information collected includes IP addresses, browser type, Internet Service Provider (ISP), date and time stamp, and referring/exit pages.
                                </p>

                                <div className="p-8 rounded-[2rem] bg-slate-900 text-white relative overflow-hidden mb-12">
                                    <Lock className="absolute -right-4 -bottom-4 h-32 w-32 text-white/5" />
                                    <h3 className="text-xl font-black mb-4">GDPR & CCPA Compliance</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed mb-6">
                                        We ensure all users are fully aware of their data protection rights, including the right to access, rectification, erasure, and data portability.
                                    </p>
                                    <button className="px-6 py-3 bg-primary rounded-xl font-black text-xs uppercase tracking-widest hover:bg-primary/90 transition-all">
                                        Exercise My Rights
                                    </button>
                                </div>

                                <h2 className="text-2xl font-black mb-4">Children's Information</h2>
                                <p className="text-gray-600 font-medium leading-relaxed">
                                    Another part of our priority is adding protection for children while using the internet. Power Soaps does not knowingly collect any Personal Identifiable Information from children under the age of 13.
                                </p>
                            </section>

                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

// Simple internal helper for checkmarks
const CheckCircle = ({ size, className }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M20 6L9 17L4 12" />
    </svg>
);