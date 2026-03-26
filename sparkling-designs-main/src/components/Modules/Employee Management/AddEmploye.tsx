import React from 'react';
import { Sidebar } from '@/components/layout/Sidebar';
import { Header } from '@/components/layout/Header';
import { 
    ArrowLeft, 
    Camera, 
    User, 
    MapPin, 
    Paperclip,
    Plus,
    Calendar,
    Mail,
    Phone
} from "lucide-react";
import { Link } from 'react-router-dom';

export const AddEmployee = () => {
    return (
        <div className="min-h-screen bg-white">

            <main className="lg:ml-64 min-h-screen flex flex-col">
            
                
                {/* RESPONSIVE PADDING: Standardized to match the rest of the application */}
                <div className="p-4 sm:p-6 lg:p-10 xl:p-12 max-w-[1200px] mx-auto w-full space-y-6 lg:space-y-8">
                    
                    {/* TOP NAVIGATION */}
                    <div className="flex items-center gap-4 sm:gap-6">
                        <Link to="/employees">
                            <button className="p-2.5 sm:p-3 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 shadow-sm transition-all active:scale-95">
                                <ArrowLeft className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700" />
                            </button>
                        </Link>
                        <div>
                            {/* Adjusted Font Sizes: Scales smoothly */}
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-tight">
                                Add New <span className="text-primary">Employee</span>
                            </h1>
                            <p className="text-gray-400 font-bold text-xs sm:text-sm uppercase tracking-widest mt-1">Personnel Onboarding</p>
                        </div>
                    </div>

                    {/* MAIN FORM CARD */}
                    {/* Changed rounded-[2.5rem] to rounded-2xl and scaled down padding */}
                    <div className="bg-white rounded-2xl border border-gray-100 shadow-xl shadow-gray-200/40 p-6 sm:p-8 lg:p-10">
                        <form className="space-y-10">
                            
                            {/* SECTION 1: PERSONAL DETAILS */}
                            <div className="grid grid-cols-1 xl:grid-cols-12 gap-10">
                                
                                {/* Profile Image Upload */}
                                <div className="xl:col-span-3 flex flex-col items-center space-y-4">
                                    <div className="relative group cursor-pointer">
                                        <div className="h-32 w-32 sm:h-40 sm:w-40 rounded-3xl bg-gray-50 border-2 border-dashed border-gray-200 flex flex-col items-center justify-center transition-all group-hover:bg-blue-50 group-hover:border-primary/30">
                                            <Camera className="h-8 w-8 sm:h-10 sm:w-10 text-gray-300 group-hover:text-primary transition-colors" />
                                            <span className="text-[10px] font-black uppercase text-gray-400 mt-2">Profile Image</span>
                                        </div>
                                        <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 p-2.5 sm:p-3 bg-primary rounded-xl text-white shadow-lg transition-transform group-hover:scale-110">
                                            <Plus className="h-4 w-4 sm:h-5 sm:w-5" />
                                        </div>
                                    </div>
                                    <p className="text-[10px] font-bold text-gray-400 uppercase text-center tracking-wide">Allowed: JPG, PNG (Max 2MB)</p>
                                </div>

                                {/* Form Fields */}
                                <div className="xl:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-black uppercase text-gray-500 ml-1">Employee Name *</label>
                                        <div className="relative">
                                            <User className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                            <input type="text" placeholder="Please Enter Name" className="w-full pl-11 pr-4 py-3 rounded-xl bg-gray-50/50 border border-gray-100 focus:bg-white focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm font-semibold text-gray-900 placeholder:text-gray-400" />
                                        </div>
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-black uppercase text-gray-500 ml-1">Mobile Number *</label>
                                        <div className="relative">
                                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                            <input type="text" placeholder="Please Enter Mobile Number" className="w-full pl-11 pr-4 py-3 rounded-xl bg-gray-50/50 border border-gray-100 focus:bg-white focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm font-semibold text-gray-900 placeholder:text-gray-400" />
                                        </div>
                                    </div>
                                    
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-4">
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-black uppercase text-gray-500 ml-1">Joining Date</label>
                                            <div className="relative group">
                                                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 group-focus-within:text-primary transition-colors" />
                                                <input type="text" placeholder="DD/MM/YYYY" className="w-full pl-11 pr-4 py-3 rounded-xl bg-gray-50/50 border border-gray-100 focus:bg-white focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm font-semibold text-gray-900 placeholder:text-gray-400" />
                                            </div>
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-black uppercase text-gray-500 ml-1">Date of Birth</label>
                                            <div className="relative group">
                                                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 group-focus-within:text-primary transition-colors" />
                                                <input type="text" placeholder="DD/MM/YYYY" className="w-full pl-11 pr-4 py-3 rounded-xl bg-gray-50/50 border border-gray-100 focus:bg-white focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm font-semibold text-gray-900 placeholder:text-gray-400" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-1.5">
                                        <label className="text-xs font-black uppercase text-gray-500 ml-1">Gender</label>
                                        <div className="flex flex-wrap gap-4 pt-2">
                                            {['Male', 'Female', 'Other'].map((g) => (
                                                <label key={g} className="flex items-center gap-2 cursor-pointer group">
                                                    <input type="radio" name="gender" className="w-4 h-4 accent-primary cursor-pointer" />
                                                    <span className="text-sm font-bold text-gray-600 group-hover:text-primary transition-colors">{g}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-1.5">
                                        <label className="text-xs font-black uppercase text-gray-500 ml-1">Department *</label>
                                        <select className="w-full px-4 py-3 rounded-xl bg-gray-50/50 border border-gray-100 focus:bg-white focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm font-semibold text-gray-900 appearance-none cursor-pointer">
                                            <option value="" disabled selected className="text-gray-400">Select Department</option>
                                            <option value="sales">Sales</option>
                                            <option value="delivery">Delivery</option>
                                        </select>
                                    </div>

                                    <div className="space-y-1.5">
                                        <label className="text-xs font-black uppercase text-gray-500 ml-1">Email Address</label>
                                        <div className="relative">
                                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                            <input type="email" placeholder="Enter email address" className="w-full pl-11 pr-4 py-3 rounded-xl bg-gray-50/50 border border-gray-100 focus:bg-white focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm font-semibold text-gray-900 placeholder:text-gray-400" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <hr className="border-gray-100" />

                            {/* SECTION 2: ADDRESS */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-2.5">
                                    <div className="p-2 rounded-lg bg-blue-50 text-primary">
                                        <MapPin className="h-5 w-5" />
                                    </div>
                                    <h2 className="text-lg font-black text-slate-900 uppercase tracking-tight">Address Details</h2>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
                                    {['Address', 'Street', 'City', 'Pincode'].map((placeholder) => (
                                        <input 
                                            key={placeholder} 
                                            type="text" 
                                            placeholder={placeholder} 
                                            className="w-full px-4 py-3 rounded-xl bg-gray-50/50 border border-gray-100 focus:bg-white focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm font-semibold text-gray-900 placeholder:text-gray-400" 
                                        />
                                    ))}
                                </div>
                            </div>

                            <hr className="border-gray-100" />

                            {/* SECTION 3: ATTACHMENTS */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-2.5">
                                    <div className="p-2 rounded-lg bg-blue-50 text-primary">
                                        <Paperclip className="h-5 w-5" />
                                    </div>
                                    <h2 className="text-lg font-black text-slate-900 uppercase tracking-tight">Other Attachments</h2>
                                </div>
                                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
                                    {['Address Proof', 'Proof 1', 'Proof 2', 'Proof 3', 'Proof 4'].map((label) => (
                                        <div key={label} className="group cursor-pointer">
                                            <div className="h-28 sm:h-32 w-full rounded-xl bg-gray-50 border-2 border-dashed border-gray-200 flex flex-col items-center justify-center group-hover:bg-blue-50 group-hover:border-primary/30 transition-all">
                                                <Plus className="h-5 w-5 sm:h-6 sm:w-6 text-gray-300 group-hover:text-primary transition-colors" />
                                                <span className="text-[10px] font-black uppercase text-gray-500 mt-2 text-center px-2 leading-tight">{label}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* SUBMIT BUTTON */}
                            <div className="pt-6 sm:pt-8 flex justify-end">
                                <button type="submit" className="w-full sm:w-auto px-10 py-3.5 bg-primary text-white rounded-xl font-bold text-sm shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all active:scale-95">
                                    Add New Employee
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
}