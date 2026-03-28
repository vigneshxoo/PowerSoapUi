import React from 'react';
import { Sidebar } from '@/components/layout/Sidebar';
import { Header } from '@/components/layout/Header';
import { 
    BarChart3, 
    Search, 
    Calendar, 
    Target, 
    MapPin, 
    ChevronsLeft,
    ChevronsRight,
    TrendingUp,
    Users,
    ShoppingBag
} from "lucide-react";

const mockSummary = [
    { date: "26/03/2026", distributor: "SREE ANNAMALAIYAR TRADERS - TRICHY", employee: "SALESMAN", dept: "Sales", outlets: "4/80", area: "DAILY BEAT", productivity: "20/5", amount: "2,703" },
    { date: "26/03/2026", distributor: "SANTHI AGENCIES - KURINJIPADI", employee: "Skumaresan", dept: "Sales", outlets: "3/107", area: "DAILY BEAT", productivity: "15/5", amount: "595" },
    { date: "26/03/2026", distributor: "RAJA AGENCIES - SILUKKUVARPATTI", employee: "SUBBIAH", dept: "Sales", outlets: "1/30", area: "THURSDAY", productivity: "5/5", amount: "1,297" },
    { date: "26/03/2026", distributor: "JEEVA MARKETING - MADURAI", employee: "R Rajendran", dept: "Sales", outlets: "9/77", area: "KARUPAURANI", productivity: "45/5", amount: "1,946" },
];

const StatCard = ({ icon: Icon, label, value, colorClass }: any) => (
    <div className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm flex items-center gap-4 transition-all hover:shadow-md hover:-translate-y-1">
        <div className={`p-3.5 rounded-2xl ${colorClass}`}>
            <Icon className="h-6 w-6" strokeWidth={2.5} />
        </div>
        <div>
            <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">{label}</p>
            <p className="text-2xl font-bold text-gray-900 tracking-tight leading-none mt-1">{value}</p>
        </div>
    </div>
);

export const DailySummary = () => {
    return (
        <div className="min-h-screen bg-[#F8FAFC] text-slate-900">
            
            <main className="lg:ml-64 min-h-screen flex flex-col overflow-x-hidden">
                
                {/* RESPONSIVE PADDING */}
                <div className="p-4 sm:p-6 lg:p-8 xl:p-10 max-w-[1600px] mx-auto w-full space-y-6 lg:space-y-8 flex flex-col flex-1">
                    
                    {/* HEADER SECTION */}
                    <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-6">
                        <div className="space-y-2">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-primary text-xs font-bold uppercase mb-1">
                                <BarChart3 className="h-3.5 w-3.5" />
                                Live Performance Analytics
                            </div>
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-800 leading-tight">
                                Daily <span className="text-[#D11C78]">Summary</span>
                            </h1>
                        </div>

                        {/* FILTERS */}
                        <div className="flex flex-col sm:flex-row items-center justify-end gap-3 w-full xl:w-auto">
                            {/* Date Range Picker */}
                            <div className="flex flex-col sm:flex-row items-center bg-white p-1.5 rounded-2xl border border-gray-200 shadow-sm w-full sm:w-auto">
                                <div className="relative flex-1 p-1 sm:w-36 group ">
                                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4  group-focus-within:text-blue-500 transition-colors" />
                                    <input type="date" className="w-full pl-9 pr-2 py-2 bg-transparent text-sm font-bold text-gray-700 outline-none cursor-pointer" defaultValue="2026-03-26" />
                                </div>
                                <div className="h-5 w-px bg-gray-200 mx-1 shrink-0" />
                                <div className="relative flex-1 sm:w-36 group ">
                                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 group-focus-within:text-blue-500 transition-colors" />
                                    <input type="date" className="w-full pl-9 pr-2 py-2 bg-transparent text-sm font-bold text-gray-700 outline-none cursor-pointer" defaultValue="2026-03-26" />
                                </div>
                            </div>
                            
                            {/* Search Input */}
                            <div className="relative w-full sm:w-64">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                <input 
                                    type="text" 
                                    placeholder="Search distributor..." 
                                    className="w-full pl-11 pr-4 py-2.5 bg-white rounded-2xl border border-gray-200 text-sm font-bold focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/30 transition-all outline-none placeholder:text-gray-400 shadow-sm" 
                                />
                            </div>
                        </div>
                    </div>

                    {/* TOP STATS - Responsive Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <StatCard icon={TrendingUp} label="Total Sales" value="₹ 6,541" colorClass="bg-emerald-50 text-emerald-600 border border-emerald-100" />
                        <StatCard icon={ShoppingBag} label="Outlets" value="17/294" colorClass="bg-blue-50 text-blue-600 border border-blue-100" />
                        <StatCard icon={Target} label="Productivity" value="85/20" colorClass="bg-purple-50 text-purple-600 border border-purple-100" />
                        <StatCard icon={Users} label="Active Staff" value="04" colorClass="bg-orange-50 text-orange-600 border border-orange-100" />
                    </div>

                    {/* MAIN CONTENT AREA */}
                    <div className="bg-white rounded-[2rem] border border-gray-100 shadow-xl shadow-gray-200/40 overflow-hidden flex-1">
                        
                        {/* DESKTOP TABLE VIEW */}
                        <div className="hidden lg:block overflow-x-auto">
                            <table className="w-full text-left min-w-[1000px]">
                                <thead className="bg-gray-50 border-b border-gray-100">
                                    <tr>
                                        {['Date', 'Distributor', 'Employee', 'Outlets', 'Area', 'Productivity', 'Amount'].map((head, idx) => (
                                            <th key={head} className={`px-6 py-5 text-[10px] font-black uppercase text-gray-400 tracking-widest ${idx === 6 ? 'text-right' : ''}`}>
                                                {head}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-50">
                                    {mockSummary.map((row, idx) => (
                                        <tr key={idx} className="hover:bg-blue-50/30 transition-colors group">
                                            <td className="px-6 py-5 whitespace-nowrap">
                                                <span className="text-blue-600 font-bold text-sm border-b border-blue-200/0 hover:border-blue-600 cursor-pointer transition-colors">
                                                    {row.date}
                                                </span>
                                            </td>
                                            <td className="px-6 py-5 max-w-[250px]">
                                                <p className="font-bold text-gray-900 text-sm truncate uppercase pr-4" title={row.distributor}>
                                                    {row.distributor}
                                                </p>
                                            </td>
                                            <td className="px-6 py-5 whitespace-nowrap">
                                                <div className="flex items-center gap-3">
                                                    <div className="h-9 w-9 rounded-xl bg-gray-50 flex items-center justify-center text-gray-500 font-black text-xs border border-gray-100 shadow-sm shrink-0">
                                                        {row.employee.charAt(0).toUpperCase()}
                                                    </div>
                                                    <div>
                                                        <p className="font-bold text-gray-900 text-sm leading-none">{row.employee}</p>
                                                        <p className="text-[10px] font-bold text-gray-400 uppercase mt-1 tracking-widest">{row.dept}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-5 whitespace-nowrap">
                                                <span className="px-3 py-1.5 bg-gray-50 border border-gray-100 rounded-lg font-black text-sm text-gray-700 shadow-sm">
                                                    {row.outlets}
                                                </span>
                                            </td>
                                            <td className="px-6 py-5 whitespace-nowrap">
                                                <div className="flex items-center gap-1.5 text-gray-600 font-bold text-xs uppercase">
                                                    <MapPin size={14} className="text-gray-400 group-hover:text-[#D11C78] transition-colors" /> 
                                                    {row.area}
                                                </div>
                                            </td>
                                            <td className="px-6 py-5 whitespace-nowrap">
                                                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-600 font-black text-sm border border-emerald-100 shadow-sm">
                                                    <Target size={14} strokeWidth={2.5} /> {row.productivity}
                                                </div>
                                            </td>
                                            <td className="px-6 py-5 text-right whitespace-nowrap">
                                                <div className="flex items-center justify-end gap-1 font-black text-lg">
                                                    <span className="text-gray-300 text-sm">₹</span>{row.amount}
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* MOBILE CARD VIEW */}
                        <div className="lg:hidden divide-y divide-gray-100">
                            {mockSummary.map((row, idx) => (
                                <div key={idx} className="p-5 space-y-4 hover:bg-gray-50/50 transition-colors">
                                    <div className="flex justify-between items-start gap-4">
                                        <div className="space-y-1.5 min-w-0">
                                            <span className="inline-block px-2 py-0.5 rounded text-[10px] font-black text-blue-600 bg-blue-50 border border-blue-100 uppercase tracking-widest">{row.date}</span>
                                            <h3 className="font-black text-gray-900 leading-tight uppercase text-sm truncate">{row.distributor}</h3>
                                        </div>
                                        <div className="text-right shrink-0">
                                            <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest mb-0.5">Amount</p>
                                            <p className="text-xl font-black text-gray-900 tracking-tight">₹{row.amount}</p>
                                        </div>
                                    </div>
                                    
                                    <div className="grid grid-cols-2 gap-3 bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
                                        <div className="space-y-1">
                                            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest flex items-center gap-1">
                                                <Users size={10} /> Employee
                                            </p>
                                            <p className="text-sm font-bold text-gray-800 truncate">{row.employee}</p>
                                        </div>
                                        <div className="space-y-1">
                                            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest flex items-center gap-1">
                                                <MapPin size={10} /> Area
                                            </p>
                                            <p className="text-sm font-bold text-gray-800 truncate">{row.area}</p>
                                        </div>
                                        <div className="space-y-1 mt-2">
                                            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest flex items-center gap-1">
                                                <ShoppingBag size={10} /> Outlets
                                            </p>
                                            <p className="text-sm font-bold text-gray-800">{row.outlets}</p>
                                        </div>
                                        <div className="space-y-1 mt-2">
                                            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest flex items-center gap-1">
                                                <Target size={10} /> Prod.
                                            </p>
                                            <div className="inline-flex items-center gap-1 text-emerald-600 text-sm font-black">
                                                {row.productivity}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* PAGINATION */}
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-2 border-t border-gray-100">
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest text-center sm:text-left order-2 sm:order-1">
                            Showing <span className="text-gray-900">1</span> to <span className="text-gray-900">4</span> of 24 entries
                        </p>
                        <div className="flex items-center gap-2 order-1 sm:order-2 w-full sm:w-auto justify-center sm:justify-end">
                            <button className="p-2.5 rounded-xl bg-white border border-gray-200 text-gray-300 disabled:opacity-50 shadow-sm transition-all">
                                <ChevronsLeft className="h-5 w-5" />
                            </button>
                            <div className="bg-gray-50 border border-gray-100 p-1 rounded-xl flex items-center gap-1 shadow-inner">
                                <span className="h-9 w-9 flex items-center justify-center rounded-lg bg-blue-600 text-white font-black shadow-md shadow-blue-500/30 text-sm cursor-pointer">1</span>
                                <span className="h-9 w-9 flex items-center justify-center rounded-lg text-gray-500 font-bold text-sm hover:bg-white hover:shadow-sm cursor-pointer transition-all">2</span>
                            </div>
                            <button className="p-2.5 rounded-xl bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 shadow-sm transition-all">
                                <ChevronsRight className="h-5 w-5" />
                            </button>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
}