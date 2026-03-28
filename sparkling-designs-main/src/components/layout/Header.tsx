import { Bell, Search, ChevronDown, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MobileSidebar } from "./MobileSidebar";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";

interface HeaderProps {
  searchValue?: string;
  onSearchChange?: (value: string) => void;
  count?: number;
  navItems?: any[]

}

export function Header({ searchValue, onSearchChange, count, navItems }: HeaderProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);


  // console.log(C)

  return (
    <header className="sticky top-0 z-30 border-b border-border bg-card/80 backdrop-blur-md">
      <div className="flex h-16 items-center justify-between px-4 lg:px-6">
        {/* Left Side - Mobile Menu + Title */}
        <div className="flex items-center gap-3">
          <MobileSidebar open={sidebarOpen} onOpenChange={setSidebarOpen} navItems={navItems} />

          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3">
            <Link to={"/"} className="text-lg font-bold text-foreground sm:text-xl">Order Products</Link>
            <span className="hidden sm:inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              {count}
            </span>
          </div>
        </div>

        {/* Right Side - Search & Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Search - Hidden on mobile, shown on tablet+ */}
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search products..."
              value={searchValue}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-48 lg:w-64 pl-9 bg-background border-border rounded-xl focus-visible:ring-primary"
            />
          </div>

          {/* Division Filter - Hidden on small mobile */}
          <Button variant="outline" className="hidden sm:flex gap-2 border-border bg-background rounded-xl">
            <Filter className="h-4 w-4" />
            <span className="hidden lg:inline">All Divisions</span>
            <ChevronDown className="h-4 w-4" />
          </Button>

          {/* Notifications */}
          <Button variant="ghost" size="icon" className="relative rounded-xl">
            <Bell className="h-5 w-5 text-muted-foreground" />
            <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-accent animate-pulse" />

          </Button>


          {/* User Avatar */}
          <div className="flex items-center gap-2 cursor-pointer rounded-xl px-2 py-1.5 transition-colors hover:bg-muted">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#D11C78] text-sm font-bold text-primary-foreground shadow-md">
              TD
            </div>
            <ChevronDown className="hidden sm:block h-4 w-4 text-muted-foreground" />
          </div>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="border-t border-border px-4 py-3 md:hidden">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search products..."
            value={searchValue}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-9 bg-background border-border rounded-xl"
          />
        </div>
      </div>
    </header>
  );
}


// import { Bell, ChevronDown, Calendar, Sparkles } from "lucide-react";
// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { MobileSidebar } from "./MobileSidebar";

// interface HeaderProps {
//   navItems?: any[];
// }

// export function Header({ navItems }: HeaderProps) {
//   const [currentDate, setCurrentDate] = useState("");
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   useEffect(() => {
//     const today = new Date();
//     const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'short', year: 'numeric' };
//     setCurrentDate(today.toLocaleDateString('en-GB', options));
//   }, []);

//   return (
//     <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/60">
//       <div className="flex h-20 items-center justify-between px-4 sm:px-6 lg:px-12 max-w-[1800px] mx-auto w-full">
//            <MobileSidebar open={sidebarOpen} onOpenChange={setSidebarOpen} navItems={navItems} />

//         {/* LEFT SIDE: Brand Identity */}
//         <div className="flex items-center shrink-0">
//           <Link to="/" className="flex items-center group cursor-pointer">
          
//             {/* Logo: No borders/shadows, 100px width, 360 spin on hover */}
//             <div className="flex items-center justify-center transition-all duration-500">
//               <img
//                 src="/logo.png"
//                 alt="Logo"
//                 className="w-[80px] sm:w-[100px] sm:mt-1 sm:relative left-6 h-auto duration-100  hove group-hover:scale-150 "
//               />
//             </div>

//             <div className="flex flex-col ml-2 sm:ml-4">
//               <span className="text-lg sm:text-xl font-black tracking-tighter text-[#D11C78] leading-none uppercase transition-colors duration-300">
//                 Power Soaps
//               </span>
//               <div className="flex items-center gap-1 sm:gap-2 mt-1">
//                 <span className="text-[8px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-[0.1em] sm:tracking-[0.2em] whitespace-nowrap">
//                   Business Portal
//                 </span>
//                 <span className="h-1 w-1 rounded-full bg-slate-300 hidden xs:block"></span>
//                 <span className="text-[8px] sm:text-[9px] font-black text-[#D11C78]/70 uppercase tracking-widest hidden xs:block">v3.0</span>
//               </div>
//             </div>
//           </Link>
//         </div>

//         {/* CENTER: Intelligence Hub (Hidden on Mobile/Tablet) */}
//         <div className="hidden xl:flex items-center justify-center flex-1 max-w-md mx-8">
//           <div className="flex items-center w-full bg-slate-50/50 border border-slate-200/50 rounded-2xl p-1 shadow-sm">
//             <div className="flex items-center gap-2.5 px-4 py-2 bg-white rounded-xl shadow-sm border border-slate-100">
//               <span className="relative flex h-2 w-2">
//                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
//                 <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
//               </span>
//               <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest">
//                 Nodes Online
//               </span>
//             </div>
//             <div className="w-px h-6 bg-slate-200 mx-2"></div>
//             <div className="flex items-center gap-2 px-3 py-2 text-slate-500">
//               <Calendar size={13} className="text-slate-400" />
//               <span className="text-[10px] font-bold uppercase tracking-widest whitespace-nowrap">
//                 {currentDate}
//               </span>
//             </div>
//           </div>
//         </div>

//         {/* RIGHT SIDE: Global Actions */}
//         <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          
//           {/* Quick Stats (Hidden on Mobile) */}
//           <button className="hidden md:flex items-center gap-2 px-3 lg:px-4 py-2 text-slate-500 hover:text-primary hover:bg-white border border-transparent hover:border-slate-100 rounded-xl transition-all duration-300">
//             <Sparkles size={16} className="text-amber-500" />
//             <span className="text-[11px] font-black uppercase tracking-tighter">Insights</span>
//           </button>

//           {/* Notifications */}
//           <button className="relative h-10 w-10 sm:h-11 sm:w-11 flex items-center justify-center text-slate-500 hover:text-primary hover:bg-white border border-transparent hover:border-slate-100 rounded-2xl transition-all group">
//             <Bell size={20} strokeWidth={2.5} />
//             <span className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 h-2 w-2 rounded-full bg-[#D11C78] ring-2 sm:ring-4 ring-white shadow-sm" />
//           </button>

//           <div className="h-8 w-px bg-slate-200 mx-1 sm:mx-2 hidden xs:block"></div>

//           {/* User Command Center */}
//           <div className="flex items-center gap-2 sm:gap-3 cursor-pointer group p-1 pr-2 sm:pr-3 rounded-[1.2rem] hover:bg-white border border-transparent hover:border-slate-100 hover:shadow-sm transition-all duration-300">
//             <div className="h-9 w-9 sm:h-11 sm:w-11 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#D11C78] to-purple-700 flex items-center justify-center text-white text-xs font-black shadow-lg shadow-[#D11C78]/20 group-hover:scale-105 transition-transform duration-500">
//               TD
//             </div>

//             <div className="hidden sm:flex flex-col">
//               <span className="text-[12px] lg:text-[13px] font-black text-slate-800 tracking-tight leading-tight whitespace-nowrap">T. Dhanush</span>
//               <span className="text-[9px] font-black text-emerald-500 uppercase tracking-[0.1em] mt-0.5">Admin</span>
//             </div>

//             <ChevronDown size={14} className="text-slate-300 group-hover:text-primary transition-colors hidden md:block" />
//           </div>

//         </div>
//       </div>
//     </header>
//   );
// }