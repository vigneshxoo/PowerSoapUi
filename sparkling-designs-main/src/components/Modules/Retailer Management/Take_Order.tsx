import React, { useState } from 'react';
import { Sidebar } from '@/components/layout/Sidebar';
import { Header } from '@/components/layout/Header';
import { 
    Search, 
    ArrowLeft, 
    ShoppingCart, 
    Layers,
    ChevronDown,
    Package,
    Minus,
    Plus,
    Receipt,
    CheckCircle2,
    X
} from "lucide-react";
import { Link } from 'react-router-dom';

const mokeProducts = [
    { id: 1, name: "Nature Power Beauty Soap [Papaya] 125 Gms * 60 PCS (G)", price: 50.00, defaultUnit: "Box" },
    { id: 2, name: "Tyko Liquid Pouch 500ML x 12Pcs", price: 50.00, defaultUnit: "Nos" },
    { id: 3, name: "Power Jumbo Detergent Cake Blue 110 Gms*78 Pcs (K)", price: 6.00, defaultUnit: "Nos" },
    { id: 4, name: "Power Jumbo Detergent Cake Pink 110 Gms*78 Pcs (K)", price: 6.00, defaultUnit: "Nos" },
    { id: 5, name: "Power Jumbo Detergent Cake Yellow 110 Gms*78 Pcs (K)", price: 6.00, defaultUnit: "Nos" },
    { id: 6, name: "Power Gold Detergent Cake (Blue) 250 Gms * 60 pcs", price: 25.00, defaultUnit: "Nos" },
];

export const ReatilerManagementTakeOrderList = () => {
    // State to handle the Order Summary Modal visibility
    const [showSummaryModal, setShowSummaryModal] = useState(false);

    return (
        <div className="min-h-screen bg-[#f8fafc] text-slate-900 relative">
            

            <main className="lg:ml-64 min-h-screen flex flex-col">
               
                
                {/* RESPONSIVE PADDING */}
                <div className="p-4 sm:p-6 lg:p-8 xl:p-10 max-w-[1800px] mx-auto w-full h-full flex flex-col">
                    
                    {/* HERO & NAVIGATION */}
                    <div className="flex items-center justify-between mb-6 xl:mb-8">
                        <div className="flex items-start sm:items-center gap-4 sm:gap-6">
                            <Link to="/retailers">
                                <button className="p-2.5 sm:p-3 rounded-2xl bg-white border border-gray-200 hover:border-primary/50 hover:text-primary hover:shadow-md transition-all group mt-1 sm:mt-0">
                                    <ArrowLeft className="h-5 w-5 sm:h-6 sm:w-6 text-slate-700 group-hover:text-primary transition-colors" />
                                </button>
                            </Link>
                            <div>
                                <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-slate-900 flex items-center gap-3">
                                    Order <span className="text-primary">Intake</span>
                                </h1>
                                <p className="text-gray-500 text-xs sm:text-sm md:text-base font-medium mt-1">
                                    Select products and quantities for this retailer.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* TWO-COLUMN LAYOUT */}
                    <div className="flex flex-col xl:flex-row gap-8 items-start pb-28 xl:pb-0">
                        
                        {/* LEFT COLUMN: PRODUCTS LIST */}
                        <div className="flex-1 w-full space-y-6">
                            
                            {/* MODERN SEARCH & FILTER BAR */}
                            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 bg-white p-2 sm:p-3 rounded-2xl sm:rounded-3xl border border-gray-100 shadow-sm">
                                <div className="relative w-full sm:w-64 border-b sm:border-b-0 sm:border-r border-gray-100">
                                    <Layers className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-primary" />
                                    <select className="w-full pl-12 pr-10 py-3 sm:py-3.5 bg-transparent text-sm font-bold text-slate-700 outline-none appearance-none cursor-pointer">
                                        <option value="" disabled selected>All Divisions</option>
                                        <option>Personal Care</option>
                                        <option>Home Care</option>
                                    </select>
                                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                                </div>
                                <div className="relative w-full flex-1">
                                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                                    <input 
                                        type="text" 
                                        placeholder="Search for products by name..." 
                                        className="w-full pl-12 pr-4 py-3 sm:py-3.5 bg-transparent focus:outline-none text-sm font-semibold placeholder:text-gray-400" 
                                    />
                                </div>
                            </div>

                            {/* PRODUCT CARDS */}
                            <div className="space-y-4">
                                {mokeProducts.map((product) => (
                                    <div key={product.id} className="bg-white p-4 sm:p-5 rounded-2xl sm:rounded-[1.5rem] border border-gray-100 shadow-sm hover:shadow-md hover:border-primary/20 transition-all flex flex-col lg:flex-row lg:items-center justify-between gap-5 group">
                                        
                                        {/* Product Info */}
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 sm:gap-3 mb-2">
                                                <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md uppercase tracking-wider">
                                                    In Stock
                                                </span>
                                            </div>
                                            <h3 className="font-bold text-slate-900 text-sm sm:text-base md:text-lg leading-tight group-hover:text-primary transition-colors pr-4">
                                                {product.name}
                                            </h3>
                                            <p className="text-gray-500 font-bold text-sm mt-2">
                                                MRP: <span className="text-slate-900">₹{product.price.toFixed(2)}</span>
                                            </p>
                                        </div>

                                        {/* Order Controls */}
                                        <div className="flex flex-wrap sm:flex-nowrap items-center justify-between sm:justify-start gap-3 sm:gap-4 bg-gray-50/50 p-3 rounded-xl sm:rounded-2xl border border-gray-100 w-full lg:w-auto mt-2 lg:mt-0">
                                            
                                            {/* Unit Type Dropdown */}
                                            <div className="flex flex-col gap-1 flex-1 sm:flex-none min-w-[70px]">
                                                <label className="text-[10px] font-black uppercase text-gray-400 ml-1 text-center sm:text-left">Unit</label>
                                                <div className="relative">
                                                    <select 
                                                        defaultValue={product.defaultUnit}
                                                        className="w-full sm:w-24 px-2 sm:px-3 py-2 sm:py-2.5 rounded-lg sm:rounded-xl bg-white border border-gray-200 font-bold text-xs sm:text-sm text-primary outline-none focus:ring-2 focus:ring-primary/20 transition-all cursor-pointer appearance-none text-center shadow-sm"
                                                    >
                                                        <option value="Box">Box</option>
                                                        <option value="Nos">Nos</option>
                                                    </select>
                                                    <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 h-3 w-3 text-primary pointer-events-none" />
                                                </div>
                                            </div>

                                            {/* Discount Dropdown */}
                                            <div className="flex flex-col gap-1 flex-1 sm:flex-none min-w-[70px]">
                                                <label className="text-[10px] font-black uppercase text-gray-400 ml-1 text-center sm:text-left">Disc.</label>
                                                <select className="w-full sm:w-20 px-2 sm:px-3 py-2 sm:py-2.5 rounded-lg sm:rounded-xl bg-white border border-gray-200 font-bold text-xs sm:text-sm outline-none focus:ring-2 focus:ring-primary/20 transition-all cursor-pointer appearance-none text-center shadow-sm">
                                                    <option>0%</option>
                                                    <option>2%</option>
                                                    <option>5%</option>
                                                </select>
                                            </div>

                                            <div className="w-px h-10 bg-gray-200 hidden sm:block"></div>

                                            {/* Quantity Selector */}
                                            <div className="flex flex-col gap-1 w-full sm:w-auto mt-2 sm:mt-0">
                                                <label className="text-[10px] font-black uppercase text-gray-400 ml-1 text-center">Qty</label>
                                                <div className="flex items-center justify-between gap-1 bg-white border border-gray-200 rounded-lg sm:rounded-xl p-1 shadow-sm w-full sm:w-auto">
                                                    <button className="p-1.5 sm:p-2 rounded-md hover:bg-red-50 hover:text-red-500 text-gray-400 transition-colors">
                                                        <Minus size={14} strokeWidth={3} />
                                                    </button>
                                                    <input 
                                                        type="number" 
                                                        placeholder="0" 
                                                        className="w-10 sm:w-12 text-center bg-transparent font-black text-base sm:text-lg focus:outline-none text-primary"
                                                    />
                                                    <button className="p-1.5 sm:p-2 rounded-md hover:bg-blue-50 hover:text-primary text-gray-400 transition-colors">
                                                        <Plus size={14} strokeWidth={3} />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* RIGHT COLUMN: RESPONSIVE CART SUMMARY */}
                        <div className="fixed bottom-0 left-0 w-full z-30 xl:static xl:w-[400px] xl:shrink-0 xl:sticky xl:top-24">
                            <div className="bg-white xl:rounded-[2rem] shadow-[0_-10px_40px_rgba(0,0,0,0.08)] xl:shadow-xl xl:border border-gray-100 overflow-hidden flex flex-col rounded-t-[1.5rem] xl:rounded-t-[2rem]">
                                
                                {/* Cart Header (Hidden on Mobile) */}
                                <div className="hidden xl:flex p-6 bg-primary text-white items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <ShoppingCart className="h-6 w-6" />
                                        <h2 className="text-xl font-black tracking-tight">Current Order</h2>
                                    </div>
                                    <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm">
                                        1 Item
                                    </span>
                                </div>

                                {/* Totals & Action Area */}
                                <div className="p-4 sm:p-6 bg-white space-y-3 xl:space-y-4 xl:border-t border-gray-100">
                                    
                                    {/* Detailed Breakdown (Hidden on Mobile) */}
                                    <div className="hidden xl:block space-y-3">
                                        <div className="flex items-center justify-between text-sm font-bold text-gray-500">
                                            <span>Subtotal</span>
                                            <span>₹31.80</span>
                                        </div>
                                        <hr className="border-gray-100 border-dashed my-2" />
                                    </div>
                                    
                                    {/* Responsive Total & Button Row */}
                                    <div className="flex flex-row xl:flex-col items-center xl:items-stretch justify-between gap-4">
                                        <div className="flex flex-col">
                                            <span className="text-xs font-bold text-gray-500 xl:hidden">Total (1 Item)</span>
                                            <span className="hidden xl:block text-lg font-black text-slate-900 mb-1">Total Amount</span>
                                            <span className="text-2xl sm:text-3xl font-black text-primary leading-none">₹31.80</span>
                                        </div>

                                        <button 
                                            onClick={() => setShowSummaryModal(true)}
                                            className="flex-1 xl:w-full py-3.5 sm:py-4 bg-slate-900 hover:bg-primary text-white rounded-xl sm:rounded-2xl font-black text-sm sm:text-base shadow-lg hover:shadow-primary/30 transition-all flex items-center justify-center gap-2 group"
                                        >
                                            <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 group-hover:scale-110 transition-transform" />
                                            Review Order
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </main>

            {/* ========================================= */}
            {/* MODAL: ORDER SUMMARY (Based on Screenshot) */}
            {/* ========================================= */}
            {showSummaryModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 overflow-y-auto">
                    <div className="bg-white rounded-2xl w-full max-w-3xl shadow-2xl relative my-auto animate-in fade-in zoom-in-95 duration-200">
                        
                        {/* Modal Header */}
                        <div className="p-6 border-b border-gray-100 flex items-center justify-center relative">
                            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">Order Summary</h2>
                            <button 
                                onClick={() => setShowSummaryModal(false)}
                                className="absolute right-6 p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-700 transition-colors"
                            >
                                <X size={20} strokeWidth={3} />
                            </button>
                        </div>

                        {/* Modal Body / Table */}
                        <div className="px-6 py-4 max-h-[50vh] overflow-y-auto">
                            <table className="w-full text-left">
                                <thead>
                                    <tr>
                                        <th className="py-4 font-black text-sm text-slate-900 w-3/5 border-b border-gray-100">Item Name</th>
                                        <th className="py-4 font-black text-sm text-slate-900 text-center w-1/5 border-b border-gray-100">Quantity</th>
                                        <th className="py-4 font-black text-sm text-slate-900 text-right w-1/5 border-b border-gray-100">Box Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="py-5 text-sm font-medium text-slate-700 pr-4">
                                            Nature Power Beauty Soap (Sandal) 40 Gms * 144 Pcs (G) MRP 10.00
                                        </td>
                                        <td className="py-5 text-sm font-medium text-slate-700 text-center">
                                            4Nos
                                        </td>
                                        <td className="py-5 text-sm font-medium text-slate-700 text-right">
                                            31.80
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Modal Footer */}
                        <div className="p-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-6 bg-gray-50/50 rounded-b-2xl">
                            <div className="text-xl sm:text-2xl font-black text-slate-900 w-full sm:w-auto text-center sm:text-left">
                                Total Amount - <span className="text-slate-900">31.80</span>
                            </div>
                            
                            <div className="flex items-center gap-4 w-full sm:w-auto justify-center sm:justify-end">
                                <button 
                                    onClick={() => setShowSummaryModal(false)}
                                    className="px-4 py-2.5 text-[#ff3333] font-bold hover:bg-red-50 rounded-xl transition-colors"
                                >
                                    Cancel
                                </button>
                                <button className="px-8 py-3 bg-[#1ca9e6] hover:bg-[#158bbd] text-white rounded-xl font-bold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all">
                                    Place order
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </div>
    );
}