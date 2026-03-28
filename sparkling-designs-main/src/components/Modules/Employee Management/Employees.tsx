import React, { useEffect } from 'react';
import { Sidebar } from '@/components/layout/Sidebar';
import { Header } from '@/components/layout/Header';
import {
    Search,
    UserPlus,
    FileUp,
    FileDown,
    MapPin,
    History,
    PencilLine,
    Users,
    ChevronsLeft,
    ChevronsRight,
    Briefcase
} from "lucide-react";
import { Link, useNavigate } from 'react-router-dom';

const mokeEmployees = [
    { code: "DEL33710523", name: "vignesh", department: "Delivery", mobile: "7866464698", email: "-", joiningDate: "02/05/2026", dob: "02/04/2026" },
    { code: "SAL59241961", name: "ajith", department: "Sales", mobile: "9999999999", email: "-", joiningDate: "-", dob: "-" },
    { code: "SAL60775519", name: "Test sales Employ", department: "Sales", mobile: "6399666333", email: "-", joiningDate: "-", dob: "-" },
    { code: "SAL12993355", name: "Test Employee", department: "Sales", mobile: "6559999896", email: "-", joiningDate: "-", dob: "-" },
];

export const EmployeeManagement = () => {
    
    return (
        <div className="min-h-screen bg-white">
            {/* Added standard layout elements if needed based on your imports */}


            <main className="lg:ml-64 min-h-screen flex flex-col">


                {/* RESPONSIVE PADDING: Matches standard layout scale */}
                <div className="p-4 sm:p-6 lg:p-10 xl:p-12 max-w-[1600px] mx-auto w-full space-y-6 lg:space-y-8">

                    {/* HERO SECTION */}
                    <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-6">
                        <div className="space-y-2" data-aos="fade-right">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-primary text-xs font-bold uppercase mb-1">
                                <Users className="h-3.5 w-3.5" />
                                Workforce Management
                            </div>
                            {/* Adjusted Font Sizes: Scales smoothly */}
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-tight">
                                Employees <span className="text-[#D11C78]">List</span>
                            </h1>
                            <p className="text-gray-500 text-sm md:text-base lg:text-lg font-medium max-w-xl">
                                Monitor your team, track real-time locations, and manage employee records.
                            </p>
                        </div>

                        {/* ACTION BUTTONS - Scaled down paddings and radii for a sleeker UI */}
                        <div className="flex flex-wrap gap-3 items-center" data-aos="fade-left" data-aos-delay="100">
                            <Link to={"/addemp"}>
                                <button className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-xl font-bold text-sm shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all active:scale-95">
                                    <UserPlus className="h-4 w-4" />
                                    Add Employee
                                </button>
                            </Link>

                            <button className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 text-gray-700 rounded-xl font-bold text-sm hover:bg-gray-50 transition-all shadow-sm">
                                <FileUp className="h-4 w-4 text-primary" />
                                Upload CSV
                            </button>
                            <button className="flex items-center gap-2 px-4 py-2.5 text-primary font-bold hover:underline text-sm transition-all">
                                <FileDown className="h-4 w-4" />
                                Sample File
                            </button>
                        </div>
                    </div>

                    {/* SEARCH & FILTERS - Added the Search input to match other pages */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4" data-aos="fade-up" data-aos-delay="150">
                        <div className="relative w-full md:w-[22rem] order-2 md:order-1">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                            <input type="text" placeholder="Search employees, roles..." className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-100 bg-gray-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm" />
                        </div>
                        <p className="text-sm font-bold text-gray-400 uppercase tracking-widest order-1 md:order-2">
                            Total Employees: <span className="text-gray-900">{mokeEmployees.length}</span>
                        </p>
                    </div>

                    {/* EMPLOYEES TABLE */}
                    <div className="bg-white rounded-2xl border border-gray-100 shadow-xl shadow-gray-200/40 overflow-hidden" data-aos="fade-up" data-aos-delay="200">
                        <div className="overflow-x-auto">
                            {/* Adjusted min-w to fit well on standard monitors */}
                            <table className="w-full text-left min-w-[1000px]">
                                <thead className="bg-gray-50 border-b border-gray-100">
                                    <tr>
                                        <th className="px-5 py-4 text-[11px] font-black uppercase text-gray-400 tracking-wider">Employee Code</th>
                                        <th className="px-5 py-4 text-[11px] font-black uppercase text-gray-400 tracking-wider">Full Name</th>
                                        <th className="px-5 py-4 text-[11px] font-black uppercase text-gray-400 tracking-wider">Department</th>
                                        <th className="px-5 py-4 text-[11px] font-black uppercase text-gray-400 tracking-wider">Contact Info</th>
                                        <th className="px-5 py-4 text-[11px] font-black uppercase text-gray-400 tracking-wider">Tracking</th>
                                        <th className="px-5 py-4 text-[11px] font-black uppercase text-gray-400 tracking-wider">Logs</th>

                                        <th className="px-5 py-4 text-[11px] font-black uppercase text-gray-400 tracking-wider text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-50">
                                    {mokeEmployees.map((emp) => (
                                        <tr key={emp.code} className="hover:bg-blue-50/40 transition-colors group">
                                            {/* Standardized inner cell padding */}
                                            <td className="px-5 py-5">
                                                <p className="font-bold text-blue-500 text-sm md:text-base group-hover:translate-x-1 transition-transform">#{emp.code}</p>
                                                <p className="text-[10px] text-gray-400 font-bold mt-1 uppercase tracking-wider">JOINED: {emp.joiningDate}</p>
                                            </td>
                                            <td className="px-5 py-5 font-bold text-gray-900 text-sm md:text-base">
                                                {emp.name}
                                            </td>
                                            <td className="px-5 py-5">
                                                <div className="flex items-center gap-3">
                                                    <div className="p-2 rounded-xl bg-gray-50 text-primary group-hover:bg-white transition-all border border-transparent group-hover:border-gray-100 group-hover:shadow-sm">
                                                        <Briefcase className="h-4 w-4" />
                                                    </div>
                                                    <span className="font-bold text-gray-600 text-sm">{emp.department}</span>
                                                </div>
                                            </td>
                                            <td className="px-5 py-5">
                                                <p className="font-bold text-gray-800 text-sm">{emp.mobile}</p>
                                                <p className="text-[11px] text-gray-400 font-semibold mt-0.5">DOB: {emp.dob}</p>
                                            </td>
                                            <td className="px-5 py-5">
                                                <div className="flex items-center gap-2">
                                                    <button className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wide text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 px-2.5 py-1.5 rounded-lg transition-colors">
                                                        <MapPin className="h-3 w-3" />
                                                        Location
                                                    </button>

                                                </div>
                                            </td>
                                            <td>
                                                <button className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wide text-gray-500 hover:text-gray-700 bg-gray-100 hover:bg-gray-200 px-2.5 py-1.5 rounded-lg transition-colors">
                                                    <History className="h-3 w-3" />
                                                    Logs
                                                </button>
                                            </td>
                                            <td className="px-5 py-5 text-right">
                                                <button className="p-2.5 rounded-xl bg-white border border-gray-100 text-gray-400 hover:text-primary hover:border-primary/30 transition-all shadow-sm active:scale-90">
                                                    <PencilLine className="h-4 w-4" />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* PAGINATION */}
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-6 py-6 border-t border-gray-100" data-aos="fade-up" data-aos-delay="300">
                        <p className="text-sm font-medium text-gray-400 order-2 lg:order-1">
                            Showing <span className="text-gray-900 font-bold">1-4</span> of <span className="text-gray-900 font-bold">24</span> employees
                        </p>

                        <div className="flex items-center gap-2 order-1 lg:order-2">
                            <button className="p-2.5 rounded-xl bg-white text-gray-300 cursor-not-allowed border border-gray-200 shadow-sm">
                                <ChevronsLeft className="h-4 w-4" />
                            </button>

                            <div className="flex items-center gap-1 bg-gray-50 p-1 rounded-xl border border-gray-100">
                                <span className="h-9 w-9 flex items-center justify-center rounded-lg bg-primary text-white font-bold text-sm shadow-md">1</span>
                                <span className="h-9 w-9 flex items-center justify-center rounded-lg bg-transparent text-gray-500 font-medium text-sm cursor-pointer hover:bg-white hover:text-primary hover:shadow-sm transition-all">2</span>
                            </div>

                            <button className="p-2.5 rounded-xl bg-white text-gray-500 hover:bg-gray-50 hover:text-primary border border-gray-200 shadow-sm transition-all">
                                <ChevronsRight className="h-4 w-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}