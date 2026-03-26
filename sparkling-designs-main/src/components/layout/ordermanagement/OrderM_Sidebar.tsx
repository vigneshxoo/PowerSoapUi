// import { ShoppingCart, History, Package, Tags, ChevronRight } from "lucide-react";
// import { cn } from "@/lib/utils";
// import { Link, useLocation } from "react-router-dom";
// interface NavItem {
//     icon: React.ComponentType<{ className?: string }>;
//     label: string;
//     active?: boolean;
//     badge?: number;
//     link: any
// }

// const navItems: NavItem[] = [
//     { icon: ShoppingCart, label: "Sales Order", link: "/salesOrder" },
//     { icon: History, label: "Van Order", link: "" },
//     { icon: Package, label: "Ratiler Order", link: "" },
// ];

// export function OrderManagementSidebar() {
//     const location = useLocation();

//     return (
//         <aside className="fixed left-0 top-0 z-40 hidden h-screen w-64 border-r border-sidebar-border bg-sidebar transition-all duration-300 lg:block">
//             {/* Logo */}
//             <Link to={"/"} className="flex h-16 items-center gap-3 border-b border-sidebar-border px-6">
//                 <div className="flex h-10 w-10 items-center justify-center rounded-xl gradient-primary shadow-lg">
//                     <svg viewBox="0 0 24 24" className="h-6 w-6 text-primary-foreground" fill="currentColor">
//                         <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
//                     </svg>
//                 </div>
//                 <div>
//                     <h1 className="text-lg font-bold text-foreground">Power Soaps</h1>
//                     <p className="text-xs text-muted-foreground">Inventory System</p>
//                 </div>
//             </Link>

//             {/* Navigation */}
//             <div className="px-3 py-6">
//                 <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
//                     Order Management
//                 </p>
//                 <nav className="space-y-1">
//                     {navItems.map((item) => {
//                         const isActive = location.pathname === item.link;
//                         return (
//                             <Link
//                                 key={item.label}
//                                 to={item.link || "#"}
//                                 className={cn(
//                                     "group flex w-full items-center justify-between rounded-xl px-3 py-3 text-sm font-medium transition-all duration-200",
//                                     isActive
//                                         ? "bg-sidebar-accent text-sidebar-accent-foreground shadow-sm"
//                                         : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
//                                 )}
//                             >
//                                 <div className="flex items-center gap-3">
//                                     <item.icon className={cn(
//                                         "h-5 w-5 transition-colors",
//                                         isActive ? "text-primary" : "text-muted-foreground group-hover:text-primary"
//                                     )} />
//                                     <span>{item.label}</span>
//                                 </div>
//                                 <div className="flex items-center gap-2">
//                                     {item.badge && (
//                                         <span className="flex h-6 min-w-6 items-center justify-center rounded-full gradient-accent px-2 text-xs font-bold text-accent-foreground">
//                                             {item.badge}
//                                         </span>
//                                     )}
//                                     {isActive && (
//                                         <ChevronRight className="h-4 w-4 text-primary" />
//                                     )}
//                                 </div>
//                             </Link>
//                         );
//                     })}
//                 </nav>
//             </div>

//             {/* Footer */}
//             <div className="absolute bottom-0 left-0 right-0 border-t border-sidebar-border p-4">
//                 <div className="flex items-center gap-3 rounded-xl bg-sidebar-accent/50 p-3">
//                     <div className="flex h-10 w-10 items-center justify-center rounded-full gradient-primary text-sm font-bold text-primary-foreground shadow-md">
//                         TD
//                     </div>
//                     <div className="flex-1 min-w-0">
//                         <p className="truncate text-sm font-medium text-foreground">Test Distributor</p>
//                         <p className="truncate text-xs text-muted-foreground">Karaikkal</p>
//                     </div>
//                 </div>
//             </div>
//         </aside>
//     );
// }
