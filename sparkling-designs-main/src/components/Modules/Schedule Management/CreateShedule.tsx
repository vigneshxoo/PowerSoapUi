import React, { useEffect } from 'react';
import { Sidebar } from '@/components/layout/Sidebar';
import { Header } from '@/components/layout/Header';
import { 
    ArrowLeft, 
    Users, 
    Truck, 
    Store,
    Save,
    MapPin,
    UserCircle2,
    ChevronDown,
    CalendarDays
} from "lucide-react";
import { Link } from 'react-router-dom';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" ];

export const CreateSchedule = () => {

    // useEffect(() => {
    //     AOS.init({ duration: 600, once: true });
    // }, []);

    return (
        <div className="min-h-screen bg-[#f8fafc] text-slate-900">

            <main className="lg:ml-64 min-h-screen flex flex-col overflow-x-hidden">
                
                {/* RESPONSIVE PADDING */}
                <div className="p-4 sm:p-6 lg:p-8 xl:p-10 max-w-[1400px] mx-auto w-full space-y-6 lg:space-y-8 flex flex-col flex-1">
                    
                    {/* TOP NAVIGATION & ACTIONS */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        
                        <div className="flex items-start sm:items-center gap-4 sm:gap-6" data-aos="fade-right">
                            <Link to="/daily-shedule"> {/* Adjust link to match your router */}
                                <button className="p-2.5 sm:p-3 rounded-2xl bg-white border border-gray-200 hover:border-primary/50 hover:text-primary hover:shadow-md transition-all group mt-1 sm:mt-0">
                                    <ArrowLeft className="h-5 w-5 sm:h-6 sm:w-6 text-slate-700 group-hover:text-primary transition-colors" />
                                </button>
                            </Link>
                            <div>
                                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-tight">
                                    Assign <span className="text-[#D11C78]">Employees</span>
                                </h1>
                                
                                {/* Location Meta Data Pill */}
                                <div className="inline-flex items-center flex-wrap gap-2 mt-3 bg-white px-3 py-2 rounded-xl border border-gray-200 shadow-sm">
                                    <MapPin size={14} className="text-primary" />
                                    <span className="text-xs font-bold text-gray-700 uppercase tracking-widest">Valluvar Nager</span>
                                    <span className="h-1 w-1 rounded-full bg-gray-300 mx-1" />
                                    <Store size={14} className="text-primary" />
                                    <span className="text-xs font-bold text-gray-700 uppercase tracking-widest">1 Shop Available</span>
                                </div>
                            </div>
                        </div>

                        {/* Save Action */}
                        <div data-aos="fade-left" data-aos-delay="100">
                            <button className="w-full md:w-auto flex items-center justify-center gap-2 px-8 py-3.5 bg-primary text-white rounded-xl font-bold text-sm shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all active:scale-95">
                                <Save className="h-5 w-5" />
                                Save Schedule
                            </button>
                        </div>
                    </div>

                    {/* WEEKLY ASSIGNMENT PLANNER (Card Based UI) */}
                    <div 
                        className="bg-white rounded-2xl border border-gray-200 shadow-sm p-4 sm:p-6 lg:p-8"
                        data-aos="fade-up" 
                        data-aos-delay="200"
                    >
                        {/* Section Header */}
                        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                            <div className="h-10 w-10 rounded-xl bg-blue-50 flex items-center justify-center text-primary">
                                <CalendarDays size={20} />
                            </div>
                            <div>
                                <h2 className="text-lg font-black text-slate-900">Weekly Planner</h2>
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mt-0.5">Assign shifts for each day</p>
                            </div>
                        </div>

                        {/* Planner Grid */}
                        <div className="grid grid-cols-1 gap-4">
                            {days.map((day, index) => (
                                <div 
                                    key={day} 
                                    className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8 p-4 rounded-2xl border border-gray-100 bg-gray-50/30 hover:bg-blue-50/20 hover:border-primary/20 transition-all group"
                                >
                                    {/* Day Indicator */}
                                    <div className="flex items-center gap-3 w-40 shrink-0">
                                        <div className="h-8 w-8 rounded-full bg-white border border-gray-200 flex items-center justify-center font-black text-xs text-gray-400 group-hover:text-primary group-hover:border-primary/30 transition-colors shadow-sm">
                                            {index + 1}
                                        </div>
                                        <span className="font-black text-slate-800 text-base group-hover:text-primary transition-colors">
                                            {day}
                                        </span>
                                    </div>

                                    {/* Selectors Wrapper */}
                                    <div className="flex flex-col sm:flex-row gap-4 w-full">
                                        
                                        {/* Sales Employee Select */}
                                        <div className="flex-1 space-y-1.5">
                                            <label className="text-[10px] font-black uppercase text-gray-500 ml-1 flex items-center gap-1.5">
                                                <Users size={12} className="text-primary" /> Sales Employee
                                            </label>
                                            <div className="relative group/select">
                                                <UserCircle2 className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 group-focus-within/select:text-primary transition-colors" />
                                                <select className="w-full pl-10 pr-10 py-3 bg-white border border-gray-200 rounded-xl text-sm font-bold text-gray-700 outline-none focus:ring-2 focus:ring-primary/20 appearance-none transition-all cursor-pointer shadow-sm hover:border-gray-300">
                                                    <option value="" disabled selected>- Select Sales -</option>
                                                    <option>Karthikk</option>
                                                    <option>Test Employee</option>
                                                    <option>Test sales Employ</option>
                                                </select>
                                                <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                                            </div>
                                        </div>

                                        {/* Delivery Employee Select */}
                                        <div className="flex-1 space-y-1.5">
                                            <label className="text-[10px] font-black uppercase text-gray-500 ml-1 flex items-center gap-1.5">
                                                <Truck size={12} className="text-primary" /> Delivery Employee
                                            </label>
                                            <div className="relative group/select">
                                                <UserCircle2 className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 group-focus-within/select:text-primary transition-colors" />
                                                <select className="w-full pl-10 pr-10 py-3 bg-white border border-gray-200 rounded-xl text-sm font-bold text-gray-700 outline-none focus:ring-2 focus:ring-primary/20 appearance-none transition-all cursor-pointer shadow-sm hover:border-gray-300">
                                                    <option value="" disabled selected>- Select Delivery -</option>
                                                    <option>Vignesh</option>
                                                    <option>Arun Kumar</option>
                                                </select>
                                                <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>

                    {/* FOOTER ACTION */}
                    <div 
                        className="flex flex-col sm:flex-row items-center justify-between gap-4 py-4"
                        data-aos="fade-up" 
                        data-aos-delay="300"
                    >
                        <p className="text-xs font-bold text-gray-400 italic text-center sm:text-left">
                            * Changes made here will reflect in the Daily Schedule immediately.
                        </p>
                    </div>

                </div>
            </main>
        </div>
    );
}