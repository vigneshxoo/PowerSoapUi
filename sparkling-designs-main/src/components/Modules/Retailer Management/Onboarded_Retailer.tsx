import React, { useState } from 'react';
import { Sidebar } from '@/components/layout/Sidebar';
import { Header } from '@/components/layout/Header';
import {
    X,
    Search,
    Store,
    UserPlus,
    FileUp,
    FileText,
    PencilLine,
    Eye,
    ChevronsLeft,
    ChevronsRight,
    User,
    Phone,
    Hash,
    UploadCloud,
    MapPin,
    Navigation,
    Plus,
    ArrowLeft
} from "lucide-react";
import { Link } from 'react-router-dom';

const mokeRetailers = [
    { code: "45901149", name: "Raja Store", type: "Semi Wholesale", unit: "-", mobile: "6633699999", contact: "-", date: "08/01/2026", outstanding: 0 },
    { code: "32387221", name: "Abirami Store", type: "Retailer", unit: "-", mobile: "9655589998", contact: "Ramesh", date: "08/01/2026", outstanding: 0 },
    { code: "84068393", name: "Test Shop1", type: "Retailer", unit: "-", mobile: "9995669996", contact: "VIGNESH", date: "06/01/2026", outstanding: 0 },
    { code: "10356495", name: "Limra store", type: "Retailer", unit: "-", mobile: "1234567890", contact: "-", date: "26/09/2023", outstanding: 0 },
];

export const OnboardedRetailer = () => {
    const [click, setClick] = useState(false);

    return (
        // Ensure standard background on main container; overlay handles the dimming
        <div className="min-h-screen bg-gray-50/30 text-slate-900 relative">

            <main className="lg:ml-64 min-h-screen flex flex-col">

                {/* MAIN CONTENT AREA */}
                <div className="p-4 sm:p-6 lg:p-10 xl:p-12 max-w-[1600px] mx-auto w-full space-y-6 lg:space-y-8">

                    {/* HERO SECTION */}
                    <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-6">
                        <div className="space-y-2">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-primary text-xs font-bold uppercase mb-1">
                                <Store className="h-3.5 w-3.5" />
                                Partner Network
                            </div>
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                                Retailer <span className="text-primary">List</span>
                            </h1>
                            <p className="text-gray-500 text-sm md:text-base lg:text-lg font-medium max-w-xl">
                                Manage your distribution network, view credits, and track partner performance.
                            </p>
                        </div>

                        {/* ACTION BAR */}
                        <div className="flex flex-wrap gap-3 items-center">
                            <button 
                                onClick={() => setClick(true)} 
                                className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-xl font-bold text-sm shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all active:scale-95"
                            >
                                <UserPlus className="h-4 w-4" />
                                Add Retailer
                            </button>
                            <button className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 text-gray-700 rounded-xl font-bold text-sm hover:bg-gray-50 transition-all shadow-sm">
                                <FileUp className="h-4 w-4 text-primary" />
                                Upload CSV
                            </button>
                            <button className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 text-gray-700 rounded-xl font-bold text-sm hover:bg-gray-50 transition-all shadow-sm">
                                <FileText className="h-4 w-4 text-red-500" />
                                PDF
                            </button>
                        </div>
                    </div>

                    {/* FILTERS & SEARCH */}
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-gray-200 shadow-sm">
                        <div className="relative w-full lg:w-[26rem]">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search by name, code or number..."
                                className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-100 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm font-semibold placeholder:text-gray-400"
                            />
                        </div>

                        <div className="flex flex-wrap items-center gap-3">
                            <select className="px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 font-semibold text-sm outline-none focus:ring-2 focus:ring-primary/20 transition-all min-w-[160px] cursor-pointer appearance-none">
                                <option>All Categories</option>
                                <option>Retailer</option>
                                <option>Semi Wholesale</option>
                            </select>
                            <button className="px-6 py-3 bg-primary text-white rounded-xl font-bold text-sm uppercase tracking-wider shadow-md hover:opacity-90 transition-all active:scale-95">
                                Go
                            </button>
                        </div>
                    </div>

                    {/* RETAILER TABLE */}
                    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left min-w-[1050px]">
                                <thead className="bg-gray-50 border-b border-gray-100">
                                    <tr>
                                        <th className="px-5 py-4 text-[11px] font-black uppercase text-gray-400 tracking-wider">Retailer Info</th>
                                        <th className="px-5 py-4 text-[11px] font-black uppercase text-gray-400 tracking-wider">Store Type</th>
                                        <th className="px-5 py-4 text-[11px] font-black uppercase text-gray-400 tracking-wider">Contact details</th>
                                        <th className="px-5 py-4 text-[11px] font-black uppercase text-gray-400 tracking-wider">Financials</th>
                                        <th className="px-5 py-4 text-[11px] font-black uppercase text-gray-400 tracking-wider">Paid Amount</th>
                                        <th className="px-5 py-4 text-[11px] font-black uppercase text-gray-400 tracking-wider text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-50">
                                    {mokeRetailers.map((shop) => (
                                        <tr key={shop.code} className="hover:bg-blue-50/40 transition-colors group">
                                            <td className="px-5 py-5">
                                                <Link to={'/Reaitler_takeorder'} className="font-bold text-primary text-sm md:text-base group-hover:translate-x-1 transition-transform">#{shop.code}</Link>
                                                <p className="text-gray-900 font-bold text-base mt-0.5 leading-tight">{shop.name}</p>
                                                <p className="text-[10px] text-gray-400 font-bold mt-1 uppercase tracking-wider">Joined: {shop.date}</p>
                                            </td>
                                            <td className="px-5 py-5">
                                                <span className={`px-3 py-1.5 rounded-xl font-bold text-[10px] uppercase tracking-wider ${shop.type === 'Retailer' ? 'bg-orange-50 text-orange-600 border border-orange-100' : 'bg-purple-50 text-purple-600 border border-purple-100'}`}>
                                                    {shop.type}
                                                </span>
                                            </td>
                                            <td className="px-5 py-5">
                                                <p className="font-bold text-gray-800 text-sm">{shop.mobile}</p>
                                                <p className="text-[11px] text-gray-400 font-semibold mt-0.5">POC: {shop.contact}</p>
                                            </td>
                                            <td className="px-5 py-5">
                                                <div className="space-y-0.5">
                                                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Outstanding</p>
                                                    <p className={`text-base md:text-lg font-black ${shop.outstanding > 0 ? 'text-red-500' : 'text-slate-900'}`}>
                                                        ₹{shop.outstanding.toLocaleString()}
                                                    </p>
                                                </div>
                                            </td>
                                            <td className="px-5 py-5">
                                                <p className="font-bold text-primary text-base">₹12,348</p>
                                            </td>
                                            <td className="px-5 py-5 text-right">
                                                <div className="flex items-center justify-end gap-2">
                                                    <button className="p-2.5 rounded-xl bg-white border border-gray-200 text-gray-400 hover:text-primary hover:border-primary/30 transition-all shadow-sm active:scale-90" title="Edit Retailer">
                                                        <PencilLine className="h-4 w-4" />
                                                    </button>
                                                    <button className="p-2.5 rounded-xl bg-white border border-gray-200 text-gray-400 hover:text-blue-500 hover:border-blue-200 transition-all shadow-sm active:scale-90" title="View Details">
                                                        <Eye className="h-4 w-4" />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* PAGINATION */}
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-6 py-6 border-t border-gray-200">
                        <p className="text-sm font-medium text-gray-500 order-2 lg:order-1">
                            Showing <span className="text-gray-900 font-bold">1-4</span> of <span className="text-gray-900 font-bold">4</span> retailers
                        </p>

                        <div className="flex items-center gap-2 order-1 lg:order-2">
                            <button className="p-2.5 rounded-xl border border-gray-200 bg-white text-gray-300 cursor-not-allowed shadow-sm">
                                <ChevronsLeft className="h-4 w-4" />
                            </button>
                            <div className="flex items-center gap-1 bg-gray-50 p-1 rounded-xl border border-gray-200">
                                <span className="h-9 w-9 flex items-center justify-center rounded-lg bg-primary text-white font-bold text-sm shadow-md">1</span>
                            </div>
                            <button className="p-2.5 rounded-xl border border-gray-200 bg-white text-gray-300 cursor-not-allowed shadow-sm">
                                <ChevronsRight className="h-4 w-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </main>

            {/* OVERLAY: ADD RETAILER */}
            {click && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 overflow-y-auto">
                    <div className="bg-white rounded-2xl w-full max-w-4xl shadow-2xl overflow-hidden relative my-auto border border-gray-100">
                        
                        {/* Decorative background element */}
                        <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
                            <Store size={160} />
                        </div>

                        {/* OVERLAY HEADER */}
                        <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between bg-white relative z-10">
                            <div>
                                <h2 className="text-2xl font-black text-slate-900">Add New Retailer</h2>
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">Partner Onboarding</p>
                            </div>
                            <button 
                                onClick={() => setClick(false)}
                                className="p-2 rounded-xl hover:bg-gray-100 text-gray-400 hover:text-gray-700 transition-colors"
                            >
                                <X className="h-6 w-6" />
                            </button>
                        </div>

                        {/* OVERLAY BODY/FORM */}
                        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto bg-gray-50/30 relative z-10">
                            <form className="space-y-8">
                                {/* SECTION 1: SHOP INFORMATION */}
                                <div className="space-y-4">
                                    <h3 className="text-sm font-black text-slate-800 uppercase tracking-tight flex items-center gap-2">
                                        <Store className="h-4 w-4 text-primary" /> Shop Details
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-black uppercase text-gray-500 ml-1">Shop Name *</label>
                                            <input type="text" placeholder="Enter Shop Name" className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm font-semibold" />
                                        </div>

                                        <div className="space-y-1.5">
                                            <label className="text-xs font-black uppercase text-gray-500 ml-1">Contact Person</label>
                                            <input type="text" placeholder="Enter Contact Person" className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm font-semibold" />
                                        </div>

                                        <div className="space-y-1.5">
                                            <label className="text-xs font-black uppercase text-gray-500 ml-1">Contact Number *</label>
                                            <input type="text" placeholder="Enter Contact Number" className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm font-semibold" />
                                        </div>

                                        <div className="space-y-1.5">
                                            <label className="text-xs font-black uppercase text-gray-500 ml-1">Shop Type *</label>
                                            <select className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm font-semibold appearance-none cursor-pointer">
                                                <option value="" disabled selected className="text-gray-400">Select Shop Type</option>
                                                <option>Retailer</option>
                                                <option>Semi Wholesale</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <hr className="border-gray-200" />

                                {/* SECTION 2: DOCUMENTATION */}
                                <div className="space-y-4">
                                    <h3 className="text-sm font-black text-slate-800 uppercase tracking-tight flex items-center gap-2">
                                        <FileText className="h-4 w-4 text-primary" /> Legal & Docs
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-start">
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-black uppercase text-gray-500 ml-1">GST Number</label>
                                            <input type="text" placeholder="Enter GST Number" className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm font-semibold" />
                                        </div>

                                        <div className="space-y-1.5">
                                            <label className="text-xs font-black uppercase text-gray-500 ml-1">Attach License</label>
                                            <label className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl border-2 border-dashed border-gray-300 bg-white hover:bg-primary/5 hover:border-primary/30 transition-all cursor-pointer group">
                                                <UploadCloud className="h-5 w-5 text-gray-400 group-hover:text-primary transition-colors" />
                                                <span className="text-sm font-bold text-gray-500 group-hover:text-primary transition-colors">Upload Document</span>
                                                <input type="file" className="hidden" />
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <hr className="border-gray-200" />

                                {/* SECTION 3: LOCATION DETAILS */}
                                <div className="space-y-4">
                                    <h3 className="text-sm font-black text-slate-800 uppercase tracking-tight flex items-center gap-2">
                                        <MapPin className="h-4 w-4 text-primary" /> Address Info
                                    </h3>
                                    <div className="space-y-4">
                                        <input type="text" placeholder="Enter Full Address" className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm font-semibold" />
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                                            <input type="text" placeholder="City" className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm font-semibold" />
                                            <input type="text" placeholder="Pincode" className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm font-semibold" />
                                            <div className="relative">
                                                <Navigation className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                                <input type="text" placeholder="Coordinates" className="w-full pl-9 pr-4 py-3 rounded-xl bg-white border border-gray-200 focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm font-semibold" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>

                        {/* OVERLAY FOOTER/ACTIONS */}
                        <div className="px-6 py-4 border-t border-gray-100 bg-white flex flex-col sm:flex-row items-center justify-end gap-3 relative z-10">
                            <button 
                                onClick={() => setClick(false)}
                                type="button" 
                                className="w-full sm:w-auto px-6 py-2.5 bg-white border border-gray-200 text-gray-600 rounded-xl font-bold text-sm hover:bg-gray-50 transition-all"
                            >
                                Cancel
                            </button>
                            <button 
                                type="button" 
                                className="w-full sm:w-auto px-8 py-2.5 bg-primary text-white rounded-xl font-bold text-sm shadow-md shadow-primary/20 hover:bg-primary/90 transition-all active:scale-95"
                            >
                                Save Retailer
                            </button>
                        </div>

                    </div>
                </div>
            )}
        </div>
    );
}