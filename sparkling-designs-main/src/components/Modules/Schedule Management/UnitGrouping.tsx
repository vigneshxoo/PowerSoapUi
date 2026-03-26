import React, { useState } from 'react';
import { Sidebar } from '@/components/layout/Sidebar';
import { Header } from '@/components/layout/Header';
import { 
    Layers, 
    Search, 
    Plus, 
    Zap, 
    Eye, 
    MapPin,
    Power,
    Activity,
    ChevronsLeft,
    ChevronsRight,
    X,
    Filter
} from "lucide-react";
// import AOS from 'aos';
// import 'aos/dist/aos.css';

const mockUnits = [
    { id: 1, name: "valluvar nager", shops: 1, names: "Ramani store", status: "Active" },
    { id: 2, name: "valluvar nager", shops: 0, names: "-", status: "Inactive" },
    { id: 3, name: "Permal koivil street", shops: 0, names: "-", status: "Inactive" },
    { id: 4, name: "Kumara Store", shops: 1, names: "Raja Store", status: "Active" },
    { id: 5, name: "Settiya Street", shops: 1, names: "Abirami Store", status: "Active" },
    { id: 6, name: "Test Area Name", shops: 2, names: "Test Shop1, Test Shop2", status: "Active" },
];

export const UnitGrouping = () => {
    // State to manage the modal visibility
    const [isModalOpen, setIsModalOpen] = useState(false);

    // useEffect(() => {
    //     AOS.init({ duration: 600, once: true });
    // }, []);

    return (
        <div className="min-h-screen bg-white text-slate-900 relative">

            <main className="lg:ml-64 min-h-screen flex flex-col overflow-x-hidden">
                
                {/* RESPONSIVE PADDING */}
                <div className="p-4 sm:p-6 lg:p-8 xl:p-10 max-w-[1600px] mx-auto w-full space-y-6 lg:space-y-8 flex flex-col flex-1">
                    
                    {/* TOP HERO SECTION */}
                    <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-6">
                        <div className="space-y-2" data-aos="fade-right">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-primary text-xs font-bold uppercase mb-1">
                                <Layers className="h-3.5 w-3.5" />
                                Territory Mapping
                            </div>
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                                Unit <span className="text-primary">Grouping</span>
                            </h1>
                            <p className="text-gray-500 text-sm md:text-base font-medium max-w-xl mt-2">
                                Organize retail outlets into operational units and managed beats.
                            </p>
                        </div>

                        {/* PRIMARY ACTIONS */}
                        <div className="flex flex-wrap gap-3 items-center" data-aos="fade-left" data-aos-delay="100">
                            <button 
                                onClick={() => setIsModalOpen(true)}
                                className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-xl font-bold text-sm shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all active:scale-95"
                            >
                                <Plus className="h-4 w-4" />
                                Create New Unit
                            </button>
                            <button className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 text-gray-700 rounded-xl font-bold text-sm hover:bg-gray-50 transition-all shadow-sm">
                                <Zap className="h-4 w-4 text-orange-500" />
                                Customized Beat
                            </button>
                        </div>
                    </div>

                    {/* SEARCH & STATS BAR */}
                    <div className="flex flex-col md:flex-row gap-4" data-aos="fade-up" data-aos-delay="150">
                        {/* Search Bar - Takes up remaining space */}
                        <div className="flex-1 bg-gray-50/50 p-2 rounded-2xl border border-gray-100 shadow-sm flex items-center">
                            <div className="relative w-full">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                                <input 
                                    type="text" 
                                    placeholder="Search by unit or shop name..." 
                                    className="w-full pl-12 pr-4 py-3 bg-transparent rounded-xl text-sm font-semibold outline-none focus:bg-white transition-all placeholder:text-gray-400" 
                                />
                            </div>
                        </div>

                        {/* Total Units Metric Card */}
                        <div className="shrink-0 px-6 py-3.5 bg-gray-50 rounded-2xl border border-gray-100 flex items-center justify-between sm:justify-start gap-4 shadow-sm">
                            <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                                <Activity className="text-primary h-5 w-5" />
                            </div>
                            <div className="flex items-center gap-3">
                                <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest leading-none mb-0.5">Total Units</p>
                                <p className="text-xl sm:text-2xl font-black text-primary leading-none">06</p>
                            </div>
                        </div>
                    </div>

                    {/* GROUPING TABLE */}
                    <div className="bg-white rounded-2xl border border-gray-100 shadow-xl shadow-gray-200/40 overflow-hidden flex-1" data-aos="fade-up" data-aos-delay="250">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left min-w-[1000px]">
                                <thead className="bg-gray-50/80 border-b border-gray-100">
                                    <tr>
                                        <th className="px-5 py-4 text-[11px] font-black uppercase text-gray-400 tracking-wider w-24">Sl. No</th>
                                        <th className="px-5 py-4 text-[11px] font-black uppercase text-gray-400 tracking-wider">Unit & Territory</th>
                                        <th className="px-5 py-4 text-[11px] font-black uppercase text-gray-400 tracking-wider text-center">Shop Count</th>
                                        <th className="px-5 py-4 text-[11px] font-black uppercase text-gray-400 tracking-wider">Linked Shop Names</th>
                                        <th className="px-5 py-4 text-[11px] font-black uppercase text-gray-400 tracking-wider text-right">Management</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-50">
                                    {mockUnits.map((unit) => (
                                        <tr key={unit.id} className={`transition-colors group ${unit.status === 'Inactive' ? 'bg-rose-50/40 hover:bg-rose-50/60' : 'hover:bg-blue-50/30'}`}>
                                            <td className="px-5 py-5">
                                                <span className="font-black text-gray-300 text-sm group-hover:text-primary transition-colors">
                                                    {String(unit.id).padStart(2, '0')}
                                                </span>
                                            </td>
                                            <td className="px-5 py-5">
                                                <div className="flex items-center gap-3">
                                                    <div className="p-2 rounded-xl bg-white border border-gray-100 text-primary shadow-sm group-hover:shadow-md transition-all shrink-0">
                                                        <MapPin size={16} />
                                                    </div>
                                                    <p className="font-bold text-gray-900 text-sm md:text-base capitalize">{unit.name}</p>
                                                </div>
                                            </td>
                                            <td className="px-5 py-5 text-center">
                                                <span className={`inline-flex items-center justify-center h-8 w-8 rounded-full font-black text-xs border-2 shadow-sm ${unit.shops > 0 ? 'border-primary text-primary bg-blue-50' : 'border-gray-200 text-gray-400 bg-gray-50'}`}>
                                                    {unit.shops}
                                                </span>
                                            </td>
                                            <td className="px-5 py-5">
                                                {unit.names !== '-' ? (
                                                    <div className="flex flex-col items-start gap-1">
                                                        <p className="font-bold text-gray-800 text-sm max-w-xs truncate" title={unit.names}>{unit.names}</p>
                                                        <button className="text-[10px] font-black text-primary uppercase tracking-wider flex items-center gap-1 hover:text-blue-700 transition-colors hover:underline underline-offset-2">
                                                            <Eye size={12} /> View Details
                                                        </button>
                                                    </div>
                                                ) : (
                                                    <span className="text-gray-300 font-black">—</span>
                                                )}
                                            </td>
                                            <td className="px-5 py-5 text-right">
                                                <button className={`px-4 py-2 rounded-xl font-bold text-[10px] uppercase tracking-widest transition-all shadow-sm inline-flex items-center justify-center gap-1.5 ${unit.status === 'Active' ? 'bg-rose-500 text-white hover:bg-rose-600 shadow-rose-500/20 active:scale-95' : 'bg-emerald-500 text-white hover:bg-emerald-600 shadow-emerald-500/20 active:scale-95'}`}>
                                                    <Power size={12} strokeWidth={3} />
                                                    {unit.status === 'Active' ? 'Deactivate' : 'Activate'}
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* PAGINATION */}
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-2 border-t border-gray-100" data-aos="fade-up" data-aos-delay="350">
                        <p className="text-sm font-medium text-gray-400 order-2 sm:order-1 text-center sm:text-left">
                            Showing <span className="text-gray-900 font-bold">1</span> to <span className="text-gray-900 font-bold">{mockUnits.length}</span> of <span className="text-gray-900 font-bold">{mockUnits.length}</span> units
                        </p>

                        <div className="flex items-center gap-2 order-1 sm:order-2 w-full sm:w-auto justify-center sm:justify-end">
                            <button className="flex-1 sm:flex-none p-2.5 rounded-xl border border-gray-100 bg-white text-gray-300 cursor-not-allowed shadow-sm">
                                <ChevronsLeft className="h-5 w-5 mx-auto" />
                            </button>
                            <div className="flex items-center gap-1 bg-gray-50 p-1 rounded-xl border border-gray-100 shadow-inner">
                                <span className="h-9 w-9 flex items-center justify-center rounded-lg bg-primary text-white font-bold text-sm shadow-md cursor-pointer">1</span>
                            </div>
                            <button className="flex-1 sm:flex-none p-2.5 rounded-xl border border-gray-100 bg-white text-gray-400 hover:bg-gray-50 transition-all shadow-sm">
                                <ChevronsRight className="h-5 w-5 mx-auto" />
                            </button>
                        </div>
                    </div>

                </div>
            </main>

            {/* ========================================== */}
            {/* CREATE NEW UNIT MODAL (From Screenshot) */}
            {/* ========================================== */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 overflow-y-auto">
                    <div className="bg-white rounded-[1.5rem] w-full max-w-4xl shadow-2xl relative my-auto animate-in fade-in zoom-in-95 duration-200">
                        
                        {/* Modal Header */}
                        <div className="p-6 border-b border-gray-100 flex items-center justify-center relative">
                            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">Create New Unit</h2>
                            <button 
                                onClick={() => setIsModalOpen(false)}
                                className="absolute right-6 p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-700 transition-colors"
                            >
                                <X size={20} strokeWidth={3} />
                            </button>
                        </div>

                        {/* Modal Body */}
                        <div className="p-6 sm:p-8 space-y-8 bg-white">
                            
                            {/* Unit Name Input */}
                            <div className="max-w-xl mx-auto">
                                <input 
                                    type="text" 
                                    placeholder="Unit Name" 
                                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm font-semibold text-center placeholder:text-gray-400" 
                                />
                            </div>

                            {/* Two-Pane Shop Selector */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                
                                {/* Left Pane: Choose Shops */}
                                <div className="space-y-3">
                                    <label className="text-sm font-black text-slate-800">Choose Shops :</label>
                                    <div className="flex gap-2">
                                        <div className="relative flex-1">
                                            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                            <input 
                                                type="text" 
                                                placeholder="Search" 
                                                className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm font-semibold placeholder:text-gray-400"
                                            />
                                        </div>
                                        <button className="p-2.5 rounded-xl border border-gray-200 text-gray-400 hover:bg-gray-50 hover:text-primary transition-colors shadow-sm">
                                            <Filter className="h-5 w-5" />
                                        </button>
                                    </div>
                                    {/* Empty/List Area */}
                                    <div className="h-[250px] border border-gray-200 rounded-xl overflow-y-auto bg-gray-50/50 p-2 custom-scrollbar">
                                        {/* Future implementation: mapping through unselected shops here */}
                                    </div>
                                </div>

                                {/* Right Pane: Selected Shops */}
                                <div className="space-y-3">
                                    <label className="text-sm font-black text-slate-800">Selected Shops :</label>
                                    <div className="relative">
                                        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                        <input 
                                            type="text" 
                                            placeholder="Search" 
                                            className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm font-semibold placeholder:text-gray-400"
                                        />
                                    </div>
                                    {/* List Area */}
                                    <div className="h-[250px] border border-gray-200 rounded-xl overflow-y-auto bg-gray-50/50 p-3 space-y-2 custom-scrollbar">
                                        {/* Active Selected Shop Styling (From Screenshot) */}
                                        <div className="bg-[#f0f8ff] border border-blue-100 text-primary font-bold text-sm px-4 py-3 rounded-lg shadow-sm">
                                            Shop Name
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Modal Footer */}
                        <div className="p-6 border-t border-gray-100 flex items-center justify-end gap-3 sm:gap-4 bg-gray-50/80 rounded-b-[1.5rem]">
                            <button 
                                onClick={() => setIsModalOpen(false)}
                                className="px-6 py-2.5 text-[#1ca9e6] font-black uppercase tracking-wider text-xs sm:text-sm hover:bg-blue-50 rounded-xl transition-colors"
                            >
                                Cancel
                            </button>
                            <button className="px-8 py-2.5 bg-[#1ca9e6] hover:bg-[#158bbd] text-white rounded-xl font-black uppercase tracking-wider text-xs sm:text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all">
                                Save
                            </button>
                        </div>

                    </div>
                </div>
            )}

        </div>
    );
}