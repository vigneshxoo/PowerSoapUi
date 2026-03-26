import React, { useEffect } from 'react';
import { Sidebar } from '@/components/layout/Sidebar';
import { Header } from '@/components/layout/Header';
import { 
    Search, 
    Calendar, 
    Clock, 
    CheckCircle, 
    Trash2, 
    User,
    MailOpen,
    BellRing,
    MoreVertical,
    ChevronsLeft,
    ChevronsRight,
    Circle
} from "lucide-react";
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// Added a couple more mock items so you can see the feed layout in action
const mockNotifications = [
    { 
        slNo: 1, 
        title: "Vignesh", 
        description: "Created a notification for testing purposes.", 
        date: "26/03/2026", 
        time: "04:28 PM",
        status: "unread"
    },
    { 
        slNo: 2, 
        title: "System Update", 
        description: "Weekly territory mapping reports have been generated and are ready for review.", 
        date: "25/03/2026", 
        time: "10:00 AM",
        status: "read"
    },
    { 
        slNo: 3, 
        title: "Ramani Store", 
        description: "Requested a credit limit increase to ₹50,000 for the upcoming festive season.", 
        date: "24/03/2026", 
        time: "09:15 AM",
        status: "read"
    }
];

export const Communication = () => {

    // useEffect(() => {
    //     AOS.init({ duration: 600, once: true });
    // }, []);

    return (
        <div className="min-h-screen bg-white text-slate-900">

            <main className="lg:ml-64 min-h-screen flex flex-col overflow-x-hidden">
                
                {/* RESPONSIVE PADDING - Narrower max-width makes feeds much easier to read */}
                <div className="p-4 sm:p-6 lg:p-8 xl:p-10 max-w-[1200px] mx-auto w-full space-y-6 lg:space-y-8 flex flex-col flex-1">
                    
                    {/* TOP HERO SECTION */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div className="space-y-2" data-aos="fade-right">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-50 border border-orange-100 text-orange-600 text-xs font-bold uppercase mb-1">
                                <BellRing className="h-3.5 w-3.5" />
                                System Alerts
                            </div>
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                                Notifi<span className="text-primary">cations</span>
                            </h1>
                            <p className="text-gray-500 text-sm md:text-base font-medium max-w-xl mt-2">
                                Monitor real-time activities and system updates from your team.
                            </p>
                        </div>

                        {/* GLOBAL ACTIONS */}
                        <div className="flex flex-wrap gap-3 items-center" data-aos="fade-left" data-aos-delay="100">
                            <button className="flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white rounded-xl font-bold text-sm shadow-lg shadow-gray-900/20 hover:bg-black transition-all active:scale-95">
                                <CheckCircle className="h-4 w-4" />
                                Mark All Read
                            </button>
                            <button className="flex items-center gap-2 px-5 py-2.5 bg-white border border-rose-100 text-rose-500 rounded-xl font-bold text-sm hover:bg-rose-50 transition-all shadow-sm">
                                <Trash2 className="h-4 w-4" />
                                Clear History
                            </button>
                        </div>
                    </div>

                    {/* SEARCH BAR */}
                    <div 
                        className="relative w-full max-w-md"
                        data-aos="fade-up" 
                        data-aos-delay="150"
                    >
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input 
                            type="text" 
                            placeholder="Search alerts..." 
                            className="w-full pl-11 pr-4 py-3 bg-gray-50/50 rounded-2xl border border-gray-100 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm font-semibold placeholder:text-gray-400 shadow-sm" 
                        />
                    </div>

                    {/* NOTIFICATION FEED (Replaces the clunky table) */}
                    <div className="space-y-4 flex-1 mt-4">
                        {mockNotifications.map((note, index) => (
                            <div 
                                key={note.slNo} 
                                className={`relative bg-white rounded-2xl p-5 sm:p-6 border transition-all flex flex-col sm:flex-row gap-4 sm:gap-6 sm:items-start group ${
                                    note.status === 'unread' 
                                    ? 'border-primary/30 shadow-md hover:shadow-lg' 
                                    : 'border-gray-100 shadow-sm hover:border-gray-200 hover:shadow-md'
                                }`}
                                data-aos="fade-up"
                                data-aos-delay={200 + (index * 50)} // Staggered entry animation
                            >
                                {/* Unread Indicator Strip on the left edge */}
                                {note.status === 'unread' && (
                                    <div className="absolute left-0 top-6 bottom-6 w-1.5 bg-primary rounded-r-full" />
                                )}

                                {/* Icon Avatar */}
                                <div className={`h-12 w-12 sm:h-14 sm:w-14 rounded-full flex items-center justify-center shrink-0 border ${
                                    note.status === 'unread' 
                                    ? 'bg-blue-50 border-blue-100 text-primary' 
                                    : 'bg-gray-50 border-gray-100 text-gray-400'
                                }`}>
                                    <User size={24} strokeWidth={note.status === 'unread' ? 2.5 : 2} />
                                </div>

                                {/* Notification Content */}
                                <div className="flex-1 min-w-0 pt-1">
                                    <div className="flex items-center gap-2 mb-1.5">
                                        <h3 className={`font-black text-base sm:text-lg tracking-tight truncate ${note.status === 'unread' ? 'text-slate-900' : 'text-slate-700'}`}>
                                            {note.title}
                                        </h3>
                                        {note.status === 'unread' && (
                                            <span className="flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-black uppercase tracking-widest bg-blue-50 text-primary border border-blue-100">
                                                <Circle fill="currentColor" size={6} /> New
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-gray-500 font-medium text-sm sm:text-base leading-relaxed pr-4">
                                        {note.description}
                                    </p>
                                </div>

                                {/* Meta Data & Actions */}
                                <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between gap-4 w-full sm:w-auto mt-4 sm:mt-0 pt-4 sm:pt-0 border-t sm:border-0 border-gray-50 shrink-0">
                                    
                                    {/* Timestamp */}
                                    <div className="flex sm:flex-col items-center sm:items-end gap-3 sm:gap-1">
                                        <div className="flex items-center gap-1.5 text-slate-700 font-bold text-xs sm:text-sm">
                                            <Calendar size={14} className="text-gray-400" />
                                            {note.date}
                                        </div>
                                        <div className="hidden sm:block w-1 h-1 rounded-full bg-gray-300" />
                                        <div className="flex items-center gap-1.5 text-gray-400 font-bold text-[11px] sm:text-xs uppercase tracking-widest">
                                            <Clock size={12} />
                                            {note.time}
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex items-center gap-2">
                                        <button 
                                            className={`p-2.5 rounded-xl border transition-all ${
                                                note.status === 'unread' 
                                                ? 'bg-primary text-white border-primary shadow-md shadow-primary/20 hover:bg-primary/90' 
                                                : 'bg-white text-gray-400 border-gray-200 hover:text-primary hover:border-primary/30 hover:bg-blue-50'
                                            }`}
                                            title={note.status === 'unread' ? "Mark as Read" : "Open"}
                                        >
                                            <MailOpen size={16} />
                                        </button>
                                        <button className="p-2.5 rounded-xl bg-white text-gray-400 border border-gray-100 hover:bg-gray-50 hover:text-gray-600 transition-all opacity-0 group-hover:opacity-100 hidden sm:block">
                                            <MoreVertical size={16} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* PAGINATION / FOOTER */}
                    <div 
                        className="flex flex-col sm:flex-row items-center justify-between gap-4 py-4 border-t border-gray-100 mt-4"
                        data-aos="fade-up" 
                        data-aos-delay="400"
                    >
                        <p className="text-sm font-medium text-gray-400 order-2 sm:order-1 text-center sm:text-left">
                            Showing <span className="text-gray-900 font-bold">1</span> to <span className="text-gray-900 font-bold">{mockNotifications.length}</span> of <span className="text-gray-900 font-bold">{mockNotifications.length}</span> alerts
                        </p>

                        <div className="flex items-center gap-2 order-1 sm:order-2 w-full sm:w-auto justify-center sm:justify-end">
                            <button className="flex-1 sm:flex-none p-2.5 rounded-xl border border-gray-100 bg-white text-gray-300 cursor-not-allowed shadow-sm transition-all">
                                <ChevronsLeft className="h-5 w-5 mx-auto" />
                            </button>
                            <div className="flex items-center gap-1 bg-gray-50 p-1 rounded-xl border border-gray-100 shadow-inner">
                                <span className="h-9 w-9 flex items-center justify-center rounded-lg bg-primary text-white font-bold text-sm shadow-md cursor-pointer">1</span>
                            </div>
                            <button className="flex-1 sm:flex-none p-2.5 rounded-xl border border-gray-100 bg-white text-gray-400 hover:bg-gray-50 shadow-sm transition-all">
                                <ChevronsRight className="h-5 w-5 mx-auto" />
                            </button>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
}