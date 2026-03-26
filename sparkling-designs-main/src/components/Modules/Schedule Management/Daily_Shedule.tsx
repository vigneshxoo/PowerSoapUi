import React, { useEffect } from 'react';
import { Sidebar } from '@/components/layout/Sidebar';
import { Header } from '@/components/layout/Header';
import { 
    CalendarCheck, 
    Search, 
    Clock, 
    MapPin, 
    Settings2,
    CheckCircle2,
    XCircle,
    ArrowRight,
    ChevronsLeft,
    ChevronsRight
} from "lucide-react";
import { Link } from 'react-router-dom';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

const mockSchedule = [
    { slNo: 1, unitName: "valluvar nager", shopNumber: 1, status: "Not scheduled" },
    { slNo: 2, unitName: "valluvar nager", shopNumber: 1, status: "Not scheduled" },
    { slNo: 3, unitName: "Permal koivil street", shopNumber: 1, status: "Scheduled" },
    { slNo: 4, unitName: "Kumara Store", shopNumber: 1, status: "Not scheduled" },
    { slNo: 5, unitName: "Settiya Street", shopNumber: 1, status: "Not scheduled" },
    { slNo: 6, unitName: "Test Area Name", shopNumber: 2, status: "Not scheduled" },
];

export const DailyScheduleManagement = () => {

    // useEffect(() => {
    //     AOS.init({ duration: 600, once: true });
    // }, []);

    return (
        <div className="min-h-screen bg-white text-slate-900">

            <main className="lg:ml-64 min-h-screen flex flex-col overflow-x-hidden">
                
                
                {/* RESPONSIVE PADDING */}
                <div className="p-4 sm:p-6 lg:p-8 xl:p-10 max-w-[1600px] mx-auto w-full space-y-6 lg:space-y-8 flex flex-col flex-1">
                    
                    {/* HERO SECTION */}
                    <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-6">
                        <div className="space-y-2" data-aos="fade-right">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-primary text-xs font-bold uppercase mb-1">
                                <Clock className="h-3.5 w-3.5" />
                                Operations Planning
                            </div>
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-tight">
                                Daily <span className="text-primary">Schedule</span>
                            </h1>
                            <p className="text-gray-500 text-sm md:text-base font-medium max-w-xl mt-2">
                                Plan your daily routes, assign beats, and track unit schedules efficiently.
                            </p>
                        </div>

                        {/* ACTION BUTTONS */}
                        <div className="flex flex-wrap gap-3 items-center" data-aos="fade-left" data-aos-delay="100">
                            <button className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-xl font-bold text-sm shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all active:scale-95">
                                <CalendarCheck className="h-4 w-4" />
                                Schedule Beat
                            </button>
                            <button className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 text-gray-700 rounded-xl font-bold text-sm hover:bg-gray-50 transition-all shadow-sm">
                                <Settings2 className="h-4 w-4 text-primary" />
                                Customised Schedule
                            </button>
                        </div>
                    </div>

                    {/* SEARCH & FILTER BAR */}
                    <div 
                        className="flex flex-col md:flex-row md:justify-end gap-4"
                        data-aos="fade-up" 
                        data-aos-delay="150"
                    >
                        <div className="relative w-full md:w-96 bg-gray-50/50 p-1.5 rounded-2xl border border-gray-100 shadow-sm">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                            <input 
                                type="text" 
                                placeholder="Search by unit name or area..." 
                                className="w-full pl-11 pr-4 py-2.5 rounded-xl bg-transparent focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm font-semibold placeholder:text-gray-400" 
                            />
                        </div>
                    </div>

                    {/* SCHEDULE TABLE */}
                    <div 
                        className="bg-white rounded-2xl border border-gray-100 shadow-xl shadow-gray-200/40 overflow-hidden flex-1"
                        data-aos="fade-up" 
                        data-aos-delay="250"
                    >
                        <div className="overflow-x-auto">
                            <table className="w-full text-left min-w-[900px]">
                                <thead className="bg-gray-50 border-b border-gray-100">
                                    <tr>
                                        <th className="px-5 py-4 text-[11px] font-black uppercase text-gray-400 tracking-wider w-24">Sl. No</th>
                                        <th className="px-5 py-4 text-[11px] font-black uppercase text-gray-400 tracking-wider">Unit Information</th>
                                        <th className="px-5 py-4 text-[11px] font-black uppercase text-gray-400 tracking-wider text-center">Shop Count</th>
                                        <th className="px-5 py-4 text-[11px] font-black uppercase text-gray-400 tracking-wider">Schedule Status</th>
                                        <th className="px-5 py-4 text-[11px] font-black uppercase text-gray-400 tracking-wider text-right">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-50">
                                    {mockSchedule.map((item) => (
                                        <tr key={item.slNo} className="hover:bg-blue-50/30 transition-colors group">
                                            
                                            {/* Sl No */}
                                            <td className="px-5 py-4">
                                                <Link to={"/createshedule"} className="font-black text-gray-400 text-sm group-hover:text-primary transition-colors">
                                                    {String(item.slNo).padStart(2, '0')}
                                                </Link>
                                            </td>

                                            {/* Unit Information */}
                                            <td className="px-5 py-4">
                                                <Link to={"/createshedule"} className="flex items-center gap-3">
                                                    <div className="h-10 w-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-primary group-hover:bg-white group-hover:shadow-sm transition-all shrink-0">
                                                        <MapPin size={18} />
                                                    </div>
                                                    <p className="font-bold text-gray-900 text-sm md:text-base capitalize group-hover:text-primary transition-colors cursor-pointer truncate">
                                                        {item.unitName}
                                                    </p>
                                                </Link>
                                            </td>

                                            {/* Shop Count */}
                                            <td className="px-5 py-4 text-center">
                                                <span className="inline-flex px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-100 text-gray-900 font-bold text-xs shadow-sm">
                                                    {item.shopNumber} Shops
                                                </span>
                                            </td>

                                            {/* Schedule Status - Preserving the "Algo Green" and Rose colors */}
                                            <td className="px-5 py-4">
                                                <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest border shadow-sm ${
                                                    item.status === 'Scheduled' 
                                                    ? 'bg-emerald-50 text-emerald-600 border-emerald-100' 
                                                    : 'bg-rose-50 text-rose-500 border-rose-100'
                                                }`}>
                                                    {item.status === 'Scheduled' ? <CheckCircle2 size={14} strokeWidth={2.5} /> : <XCircle size={14} strokeWidth={2.5} />}
                                                    {item.status}
                                                </div>
                                            </td>

                                            {/* Action */}
                                            <td className="px-5 py-4 text-right">
                                                <button className="p-2.5 rounded-xl border border-gray-100 bg-white text-gray-400 hover:text-primary hover:border-primary/20 hover:bg-blue-50 hover:shadow-sm transition-all group/btn inline-flex items-center justify-center">
                                                    <ArrowRight size={18} className="group-hover/btn:translate-x-0.5 transition-transform" />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* PAGINATION (Added to match the standard structure of other pages) */}
                    <div 
                        className="flex flex-col sm:flex-row items-center justify-between gap-4 py-2 border-t border-gray-100"
                        data-aos="fade-up" 
                        data-aos-delay="300"
                    >
                        <p className="text-sm font-medium text-gray-400 order-2 sm:order-1 text-center sm:text-left">
                            Showing <span className="text-gray-900 font-bold">1</span> to <span className="text-gray-900 font-bold">{mockSchedule.length}</span> of <span className="text-gray-900 font-bold">{mockSchedule.length}</span> units
                        </p>

                        <div className="flex items-center gap-2 order-1 sm:order-2 w-full sm:w-auto justify-center sm:justify-end">
                            <button className="flex-1 sm:flex-none p-2 rounded-xl border border-gray-100 bg-white text-gray-300 cursor-not-allowed shadow-sm transition-all">
                                <ChevronsLeft className="h-5 w-5 mx-auto" />
                            </button>
                            <div className="flex items-center gap-1 bg-gray-50 p-1 rounded-xl border border-gray-100 shadow-inner">
                                <span className="h-8 w-8 flex items-center justify-center rounded-lg bg-primary text-white font-bold text-sm shadow-md cursor-pointer">1</span>
                            </div>
                            <button className="flex-1 sm:flex-none p-2 rounded-xl border border-gray-100 bg-white text-gray-400 hover:bg-gray-50 shadow-sm transition-all">
                                <ChevronsRight className="h-5 w-5 mx-auto" />
                            </button>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
}