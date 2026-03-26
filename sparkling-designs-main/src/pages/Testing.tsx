// import { useEffect, useRef } from "react";
// import gsap from "gsap";

// const Testing = () => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const logoRef = useRef<HTMLImageElement>(null);
//   const titleRef = useRef<HTMLImageElement>(null);

//   useEffect(() => {
//     const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

//     // initial states
//     gsap.set(logoRef.current, {
//       rotation: -360,
//       scale: 0.4,
//       opacity: 0,
//     });

//     gsap.set(titleRef.current, {
//       y: 30,
//       opacity: 0,
//     });

//     tl
//       // 1️⃣ Logo rotate & appear
//       .to(logoRef.current, {
//         rotation: 0,
//         scale: 1,
//         opacity: 1,
//         duration: 1.2,
//       })

//       // 2️⃣ Title appear after logo
//       .to(titleRef.current, {
//         y: 0,
//         opacity: 1,
//         duration: 0.6,
//       });
//   }, []);

//   return (
//     <div className="flex items-center justify-center bg-red-400">
//       {/* RELATIVE CONTAINER */}
//       <div
//         ref={containerRef}
//         className="relative w-[320px] sm:w-[420px] md:w-[520px] h-[260px] "
//       >
//         {/* LOGO – BASE IMAGE */}
//         <img
//           ref={logoRef}
//           src="/logo.png"
//           alt="Logo"
//           className="
//             absolute
//             left-1/2 top-1/2
//             -translate-x-1/2 -translate-y-1/2
//             object-contain
//             w-[140px]
//             sm:w-[180px]
//             md:w-[220px]
//           "
//         />

//         {/* TITLE – ON TOP OF LOGO */}
//         <img
//           ref={titleRef}
//           src="/title.png"
//           alt="Title"
//           className="
//             absolute
//             top-44 left-1/2
//             -translate-x-1/2
//             object-contain
//             w-[180px]
//             sm:w-[220px]
//             md:w-[260px]
//           "
//         />
//       </div>
//     </div>
//   );
// };

// export default Testing;

import React from 'react';
import { Sidebar } from '@/components/layout/Sidebar';
import { Header } from '@/components/layout/Header';
import { 
    Package, 
    Users, 
    Receipt, 
    Store, 
    Calendar, 
    TrendingUp,
    BarChart3
} from "lucide-react";
import { 
    AreaChart, 
    Area, 
    XAxis, 
    YAxis, 
    CartesianGrid, 
    Tooltip, 
    ResponsiveContainer,
    BarChart,
    Bar,
    Cell
} from 'recharts';

// --- MOCK DATA FOR CHARTS ---
const salesData = [
    { name: 'Unit A', sales: 4000 },
    { name: 'Unit B', sales: 3000 },
    { name: 'Unit C', sales: 5000 },
    { name: 'Unit D', sales: 2780 },
    { name: 'Unit E', sales: 6890 },
    { name: 'Unit F', sales: 2390 },
    { name: 'Unit G', sales: 4490 },
];

const categoryData = [
    { name: 'Personal Care', value: 850 },
    { name: 'Home Care', value: 630 },
    { name: 'Groceries', value: 480 },
    { name: 'Beverages', value: 920 },
];

// Colors for the Bar Chart
const BAR_COLORS = ['#ff4b72', '#a259ff', '#ffb822', '#7cd036'];

const topShops = [
    { id: 1, name: "Ramani store", total: "₹45,200", trend: "+12%" },
    { id: 2, name: "Raja Store", total: "₹38,900", trend: "+8%" },
    { id: 3, name: "Abirami Store", total: "₹32,150", trend: "+5%" },
    { id: 4, name: "Kumara Store", total: "₹28,400", trend: "-2%" },
];

// --- STUNNING METRIC CARD (Matches your exact screenshot colors + geometric wave) ---
const MetricCard = ({ title, value, icon: Icon, gradientFrom, gradientTo, delay }: any) => (
    <div 
        className={`relative overflow-hidden rounded-2xl p-6 text-white shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl group cursor-pointer`}
        style={{ background: `linear-gradient(135deg, ${gradientFrom} 0%, ${gradientTo} 100%)` }}
        data-aos="fade-up"
        data-aos-delay={delay}
    >
        <div className="relative z-10 flex items-center justify-between">
            {/* Left side: Icon */}
            <div className="rounded-2xl bg-white/20 p-4 backdrop-blur-md border border-white/10 group-hover:scale-110 group-hover:bg-white/30 transition-all duration-300">
                <Icon size={28} className="text-white drop-shadow-md" strokeWidth={2.5} />
            </div>
            
            {/* Right side: Text aligned right like your screenshot */}
            <div className="text-right space-y-1">
                <p className="text-xs font-black uppercase tracking-widest text-white/90 drop-shadow-sm">{title}</p>
                <p className="text-4xl font-black tracking-tighter drop-shadow-md">{value}</p>
            </div>
        </div>

        {/* Geometric Polygon Wave (Matches the sharp angular wave in your image) */}
        <svg className="absolute bottom-0 left-0 w-full h-24 opacity-30 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500" preserveAspectRatio="none" viewBox="0 0 100 100">
            <polygon points="0,100 100,100 100,40 70,80 30,30 0,60" fill="currentColor" className="text-white" />
        </svg>
    </div>
);

// --- PREMIUM CHART TOOLTIP ---
const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-slate-900/90 backdrop-blur-md p-4 rounded-2xl border border-slate-700 shadow-2xl">
                <p className="font-black text-white text-xs uppercase tracking-widest mb-1">{label}</p>
                <p className="text-emerald-400 font-black text-xl">
                    ₹{payload[0].value.toLocaleString()}
                </p>
            </div>
        );
    }
    return null;
};

export const Testing = () => {

    return (
        <div className="min-h-screen bg-[#f4f7fb] text-slate-900">
            <Sidebar />

            <main className="lg:ml-64 min-h-screen flex flex-col overflow-x-hidden">
                <Header />
                
                {/* RESPONSIVE PADDING */}
                <div className="p-4 sm:p-6 lg:p-8 xl:p-10 max-w-[1800px] mx-auto w-full space-y-6 lg:space-y-8 flex flex-col flex-1">
                    
                    <div data-aos="fade-right" className="mb-2">
                        <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 flex items-center gap-3">
                            <BarChart3 className="text-primary h-8 w-8" />
                            Business <span className="text-primary">Dashboard</span>
                        </h1>
                    </div>

                    {/* METRIC CARDS ROW - EXACT COLORS FROM YOUR IMAGE */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
                        <MetricCard 
                            title="Total Order" 
                            value="124" 
                            icon={Package} 
                            gradientFrom="#ff4b72" 
                            gradientTo="#ff2a55" 
                            delay="0"
                        />
                        <MetricCard 
                            title="Employees" 
                            value="4" 
                            icon={Users} 
                            gradientFrom="#a259ff" 
                            gradientTo="#8b31ff" 
                            delay="100"
                        />
                        <MetricCard 
                            title="Total Outstanding" 
                            value="₹2.5L" 
                            icon={Receipt} 
                            gradientFrom="#ffb822" 
                            gradientTo="#f59e0b" 
                            delay="200"
                        />
                        <MetricCard 
                            title="Total Retailer" 
                            value="6" 
                            icon={Store} 
                            gradientFrom="#7cd036" 
                            gradientTo="#65a30d" 
                            delay="300"
                        />
                    </div>

                    {/* CHARTS ROW 1 */}
                    <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-8">
                        
                        {/* TOP SALE BY UNIT - AREA CHART (Spans 2 columns) */}
                        <div 
                            className="xl:col-span-2 bg-white p-6 lg:p-8 rounded-[2rem] border border-gray-100 shadow-xl shadow-gray-200/40 flex flex-col hover:border-primary/20 transition-colors"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            <div className="flex justify-between items-start mb-8">
                                <div>
                                    <h2 className="text-2xl font-black text-slate-900 tracking-tight">Top Sale by Unit</h2>
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">Monthly Revenue Analytics</p>
                                </div>
                                <div className="p-3 rounded-2xl bg-blue-50 text-primary shadow-inner">
                                    <TrendingUp size={24} strokeWidth={2.5} />
                                </div>
                            </div>
                            
                            <div className="h-[320px] w-full mt-auto">
                                <ResponsiveContainer width="100%" height="100%">
                                    <AreaChart data={salesData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                                        <defs>
                                            {/* Stunning glowing gradient for the chart */}
                                            <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="5%" stopColor="#1ca9e6" stopOpacity={0.4}/>
                                                <stop offset="95%" stopColor="#1ca9e6" stopOpacity={0}/>
                                            </linearGradient>
                                        </defs>
                                        <CartesianGrid strokeDasharray="4 4" vertical={false} stroke="#e2e8f0" />
                                        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12, fontWeight: 700}} dy={15} />
                                        <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12, fontWeight: 700}} />
                                        <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#cbd5e1', strokeWidth: 1, strokeDasharray: '4 4' }} />
                                        <Area 
                                            type="monotone" 
                                            dataKey="sales" 
                                            stroke="#1ca9e6" 
                                            strokeWidth={4} 
                                            fillOpacity={1} 
                                            fill="url(#colorSales)" 
                                            activeDot={{ r: 8, strokeWidth: 4, fill: '#fff', stroke: '#1ca9e6' }} 
                                        />
                                    </AreaChart>
                                </ResponsiveContainer>
                            </div>
                        </div>

                        {/* TOP SELLING SHOP - PREMIUM TABLE (Spans 1 column) */}
                        <div 
                            className="xl:col-span-1 bg-white p-6 lg:p-8 rounded-[2rem] border border-gray-100 shadow-xl shadow-gray-200/40 flex flex-col"
                            data-aos="fade-up"
                            data-aos-delay="300"
                        >
                            <div className="mb-6">
                                <h2 className="text-2xl font-black text-slate-900 tracking-tight">Top Selling Shop</h2>
                                <div className="flex flex-col sm:flex-row gap-2 mt-4">
                                    <div className="relative flex-1 group">
                                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 group-focus-within:text-primary transition-colors" />
                                        <input type="text" placeholder="From Date" className="w-full pl-9 pr-3 py-2.5 bg-gray-50 rounded-xl text-xs font-bold text-gray-700 outline-none focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-gray-400" />
                                    </div>
                                    <div className="relative flex-1 group">
                                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 group-focus-within:text-primary transition-colors" />
                                        <input type="text" placeholder="To Date" className="w-full pl-9 pr-3 py-2.5 bg-gray-50 rounded-xl text-xs font-bold text-gray-700 outline-none focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-gray-400" />
                                    </div>
                                </div>
                            </div>

                            {/* Beautifully styled list instead of a generic table */}
                            <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar space-y-3">
                                {topShops.map((shop, index) => (
                                    <div key={shop.id} className="flex items-center justify-between p-4 rounded-2xl border border-gray-100 hover:border-primary/30 hover:shadow-md bg-white transition-all group">
                                        <div className="flex items-center gap-4">
                                            <div className={`h-10 w-10 rounded-xl flex items-center justify-center font-black text-sm shadow-inner ${
                                                index === 0 ? 'bg-amber-100 text-amber-600' : 
                                                index === 1 ? 'bg-slate-100 text-slate-500' : 
                                                index === 2 ? 'bg-orange-100 text-orange-600' : 
                                                'bg-gray-50 text-gray-400'
                                            }`}>
                                                #{index + 1}
                                            </div>
                                            <div>
                                                <p className="font-bold text-slate-800 text-sm group-hover:text-primary transition-colors">{shop.name}</p>
                                                <p className={`text-[10px] font-black uppercase tracking-wider mt-0.5 ${shop.trend.includes('+') ? 'text-emerald-500' : 'text-rose-500'}`}>
                                                    {shop.trend} vs last month
                                                </p>
                                            </div>
                                        </div>
                                        <div className="font-black text-primary text-lg">
                                            {shop.total}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* CHARTS ROW 2 */}
                    <div className="grid grid-cols-1 gap-6 lg:gap-8">
                        
                        {/* SALE BY CATEGORY - MULTI-COLOR BAR CHART */}
                        <div 
                            className="bg-white p-6 lg:p-8 rounded-[2rem] border border-gray-100 shadow-xl shadow-gray-200/40 flex flex-col"
                            data-aos="fade-up"
                            data-aos-delay="400"
                        >
                            <div className="flex justify-between items-center mb-8">
                                <div>
                                    <h2 className="text-2xl font-black text-slate-900 tracking-tight">Sale by Category</h2>
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">Volume Distribution</p>
                                </div>
                            </div>
                            
                            <div className="h-[350px] w-full">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={categoryData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }} barSize={60}>
                                        <CartesianGrid strokeDasharray="4 4" vertical={false} stroke="#e2e8f0" />
                                        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 13, fontWeight: 700}} dy={15} />
                                        <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 13, fontWeight: 700}} />
                                        <Tooltip 
                                            content={<CustomTooltip />} 
                                            cursor={{fill: '#f1f5f9', radius: 8}} 
                                        />
                                        <Bar dataKey="value" radius={[12, 12, 0, 0]}>
                                            {categoryData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={BAR_COLORS[index % BAR_COLORS.length]} />
                                            ))}
                                        </Bar>
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </div>

                    </div>

                </div>
            </main>
        </div>
    );
}