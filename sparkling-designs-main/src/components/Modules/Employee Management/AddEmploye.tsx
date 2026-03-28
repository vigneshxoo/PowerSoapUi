import React, { useEffect } from 'react';
import { 
    ArrowLeft, 
    Camera, 
    User, 
    MapPin, 
    Paperclip, 
    Plus, 
    Calendar, 
    Mail, 
    Phone, 
    Briefcase,
    ChevronRight
} from "lucide-react";
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const AddEmployee = () => {
    
    // Initialize AOS (If it's already initialized in your App.tsx, this is safe to keep or remove)
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            easing: 'ease-out-cubic',
        });
    }, []);

    return (
        // Upgraded background to match the premium dashboard gradient
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-[#fcfdfe] to-slate-100 selection:bg-[#D11C78]/20 font-sans"> 
            <main className="lg:ml-64 min-h-screen flex flex-col">
                
                <div className="p-4 sm:p-8 lg:p-12 max-w-[1100px] mx-auto w-full space-y-10">

                    {/* TOP NAVIGATION */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4" data-aos="fade-down">
                        <div className="flex items-center gap-5">
                            <Link to={'/emp'}>
                                <button className="group p-3.5 rounded-2xl border border-slate-200/80 bg-white/80 backdrop-blur-md hover:border-[#D11C78]/30 hover:bg-[#D11C78]/5 hover:-translate-x-1 transition-all duration-300 active:scale-95 shadow-sm">
                                    <ArrowLeft className="h-5 w-5 text-slate-500 group-hover:text-[#D11C78]" strokeWidth={2.5} />
                                </button>
                            </Link>
                            <div>
                                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-none">
                                    Add New <span className="text-[#D11C78]">Employee</span>
                                </h1>
                                <p className="text-slate-400 font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] mt-2 md:mt-3 flex items-center gap-2">
                                    Personnel Management <ChevronRight size={14} className="text-slate-300"/> Onboarding
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* MAIN FORM CARD - Premium Glassmorphism Look */}
                    <div 
                        className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden"
                        data-aos="fade-up" 
                        data-aos-delay="100"
                    >
                        <form className="p-6 sm:p-10 lg:p-12 space-y-14">

                            {/* SECTION 1: IDENTITY & ROLE */}
                            <section className="space-y-8" data-aos="fade-up" data-aos-delay="150">
                                <div className="flex items-center gap-3 border-b border-slate-100 pb-5">
                                    <div className="h-12 w-12 rounded-2xl bg-[#D11C78]/10 flex items-center justify-center text-[#D11C78] shadow-inner">
                                        <User size={22} strokeWidth={2.5} />
                                    </div>
                                    <h2 className="text-xl font-black text-slate-800 uppercase tracking-tight">Personal Identity</h2>
                                </div>

                                <div className="grid grid-cols-1 xl:grid-cols-12 gap-10">
                                    {/* Profile Image Upload */}
                                    <div className="xl:col-span-3 flex flex-col items-center">
                                        <div className="relative group cursor-pointer">
                                            <div className="h-36 w-36 sm:h-44 sm:w-44 rounded-[2.5rem] bg-slate-50/50 border-2 border-dashed border-slate-200 flex flex-col items-center justify-center transition-all duration-300 group-hover:bg-[#D11C78]/5 group-hover:border-[#D11C78]/40 overflow-hidden shadow-sm">
                                                <Camera className="h-10 w-10 text-slate-300 group-hover:text-[#D11C78] group-hover:scale-110 transition-all duration-500" />
                                                <span className="text-[9px] font-black uppercase text-slate-400 mt-3 tracking-widest group-hover:text-[#D11C78]/70 transition-colors">Upload Photo</span>
                                            </div>
                                            <button type="button" className="absolute -bottom-2 -right-2 p-3.5 bg-[#D11C78] rounded-2xl text-white shadow-xl shadow-[#D11C78]/30 hover:scale-110 transition-transform duration-300">
                                                <Plus size={20} strokeWidth={3} />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Form Fields */}
                                    <div className="xl:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
                                        {[
                                            { label: 'Full Name *', icon: User, placeholder: 'John Doe' },
                                            { label: 'Phone Number *', icon: Phone, placeholder: '+91 00000 00000' },
                                            { label: 'Email Address', icon: Mail, placeholder: 'john@example.com' },
                                            { label: 'Department *', icon: Briefcase, type: 'select' }
                                        ].map((field, idx) => (
                                            <div key={idx} className="space-y-2">
                                                <label className="text-[11px] font-black uppercase text-slate-400 tracking-wider ml-1">{field.label}</label>
                                                <div className="relative group">
                                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#D11C78] transition-colors duration-300 z-10">
                                                        <field.icon size={18} strokeWidth={2.5} />
                                                    </div>
                                                    {field.type === 'select' ? (
                                                        <select className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-50/50 border border-slate-200/60 hover:border-slate-300 focus:bg-white focus:border-[#D11C78]/50 focus:ring-4 focus:ring-[#D11C78]/10 outline-none transition-all duration-300 text-sm font-bold text-slate-700 appearance-none cursor-pointer relative z-0">
                                                            <option>Sales Department</option>
                                                            <option>Delivery Fleet</option>
                                                            <option>Warehouse Ops</option>
                                                        </select>
                                                    ) : (
                                                        <input type="text" placeholder={field.placeholder} className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-50/50 border border-slate-200/60 hover:border-slate-300 focus:bg-white focus:border-[#D11C78]/50 focus:ring-4 focus:ring-[#D11C78]/10 outline-none transition-all duration-300 text-sm font-bold text-slate-700 placeholder:text-slate-300" />
                                                    )}
                                                </div>
                                            </div>
                                        ))}

                                        <div className="space-y-2 md:col-span-2">
                                            <label className="text-[11px] font-black uppercase text-slate-400 tracking-wider ml-1">Gender Selection</label>
                                            <div className="flex flex-wrap sm:flex-nowrap gap-4">
                                                {['Male', 'Female', 'Other'].map((g) => (
                                                    <label key={g} className="flex-1 min-w-[100px] flex items-center justify-center gap-3 p-4 rounded-2xl bg-slate-50/50 border border-slate-200/60 cursor-pointer hover:bg-white hover:border-[#D11C78]/30 hover:shadow-sm transition-all duration-300 has-[:checked]:bg-[#D11C78]/5 has-[:checked]:border-[#D11C78] has-[:checked]:shadow-sm">
                                                        <input type="radio" name="gender" className="w-4 h-4 accent-[#D11C78]" />
                                                        <span className="text-sm font-bold text-slate-600">{g}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* SECTION 2: ADDRESS */}
                            <section className="space-y-8" data-aos="fade-up" data-aos-delay="200">
                                <div className="flex items-center gap-3 border-b border-slate-100 pb-5">
                                    <div className="h-12 w-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-500 shadow-inner">
                                        <MapPin size={22} strokeWidth={2.5} />
                                    </div>
                                    <h2 className="text-xl font-black text-slate-800 uppercase tracking-tight">Location Details</h2>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                    {['Residential Address', 'Street/Area', 'City', 'Pincode'].map((placeholder) => (
                                        <div key={placeholder} className="space-y-2">
                                            <input
                                                type="text"
                                                placeholder={placeholder}
                                                className="w-full px-5 py-4 rounded-2xl bg-slate-50/50 border border-slate-200/60 hover:border-slate-300 focus:bg-white focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all duration-300 text-sm font-bold text-slate-700 placeholder:text-slate-300"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* SECTION 3: ATTACHMENTS */}
                            <section className="space-y-8" data-aos="fade-up" data-aos-delay="250">
                                <div className="flex items-center gap-3 border-b border-slate-100 pb-5">
                                    <div className="h-12 w-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-500 shadow-inner">
                                        <Paperclip size={22} strokeWidth={2.5} />
                                    </div>
                                    <h2 className="text-xl font-black text-slate-800 uppercase tracking-tight">Documentation</h2>
                                </div>
                                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
                                    {['Aadhar Card', 'PAN Card', 'Address Proof', 'Agreement', 'Other'].map((label) => (
                                        <div key={label} className="group cursor-pointer">
                                            <div className="h-32 w-full rounded-[1.5rem] bg-slate-50/50 border-2 border-dashed border-slate-200 flex flex-col items-center justify-center group-hover:bg-emerald-50/30 group-hover:border-emerald-500/50 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                                                <div className="p-2.5 rounded-xl bg-white shadow-sm mb-3 group-hover:text-emerald-500 group-hover:shadow-emerald-500/20 text-slate-300 transition-all duration-300">
                                                    <Plus size={18} strokeWidth={3} />
                                                </div>
                                                <span className="text-[10px] font-black uppercase text-slate-400 group-hover:text-emerald-600 transition-colors tracking-tighter">{label}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* SUBMIT BUTTON */}
                            <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-slate-100" data-aos="fade-up" data-aos-delay="300">
                                <p className="text-[11px] font-bold text-slate-400 italic bg-slate-50 px-4 py-2 rounded-lg">* Required fields must be completed for onboarding.</p>
                                <button type="submit" className="w-full sm:w-auto px-12 py-4 bg-gradient-to-r from-[#D11C78] to-[#E82B8C] text-white rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl shadow-[#D11C78]/25 hover:shadow-2xl hover:shadow-[#D11C78]/40 hover:-translate-y-1 transition-all duration-300 active:scale-95">
                                    Finalize Employee Data
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
}