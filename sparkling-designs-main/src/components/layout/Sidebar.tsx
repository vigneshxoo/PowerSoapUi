import { ShoppingCart, History, Package, Tags, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";
interface NavItem {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  active?: boolean;
  badge?: number;
  link: any
}

// const navItems: NavItem[] = [
//   { icon: ShoppingCart, label: "Order Product", link: "/products" },
//   { icon: History, label: "Order History", link: "/orders" },
//   { icon: Package, label: "Stock In Hand", link: "/stock" },
//   { icon: Tags, label: "Scheme", badge: 3, link: "/schema" },
// ];

export function Sidebar({ navItems }: any) {
  const location = useLocation();

  return (
    <aside className="fixed left-0 top-0 z-40 hidden h-screen w-64 border-r border-sidebar-border bg-sidebar transition-all duration-300 lg:block">
      {/* Logo */}
      <Link to={"/"} className="flex w-full h-16 items-center gap-3 border-b border-sidebar-border px-6 relative right-10 ">
        <div className="flex  items-center ">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-[70px] relative left-4 top-1"
          />
        </div>
        <div className="">
          <h1 className="text-lg  font-bold text-foreground text-[#D11C78]">Power Soaps</h1>
          <p className="text-xs text-muted-foreground"></p>
        </div>

      </Link>

      {/* Navigation */}
      <div className="px-3 py-6">
        <p className="mb-3 px-3 text-[14px] font-semibold uppercase tracking-wider text-muted-foreground">
          {navItems?.map((val:any)=>val.module)}
        </p>
        <nav className="space-y-1">
          {navItems?.map((item) => {
            const isActive = location.pathname === item.link;
            return (
              <Link
                key={item.label}
                to={item.link || "#"}
                className={cn(
                  "group flex w-full items-center justify-between rounded-xl px-3 py-3 text-sm font-medium transition-all duration-200",
                  isActive
                    ? "bg-sidebar-accent text-sidebar-accent-foreground shadow-sm"
                    : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
                )}
              >
                <div className="flex items-center gap-3">
                  <item.icon className={cn(
                    "h-5 w-5 transition-colors",
                    isActive ? "text-primary" : "text-muted-foreground group-hover:text-primary"
                  )} />
                  <span>{item.label}</span>
                </div>
                <div className="flex items-center gap-2">
                  {item.badge && (
                    <span className="flex h-6 min-w-6 items-center justify-center rounded-full gradient-accent px-2 text-xs font-bold text-accent-foreground">
                      {item.badge}
                    </span>
                  )}
                  {isActive && (
                    <ChevronRight className="h-4 w-4 text-primary" />
                  )}
                </div>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-sidebar-border p-4">
        <div className="flex items-center gap-3 rounded-xl bg-sidebar-accent/50 p-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#D11C78] text-sm font-bold text-primary-foreground shadow-md">
            TD
          </div>
          <div className="flex-1 min-w-0">
            <p className="truncate text-sm font-medium text-foreground">Test Distributor</p>
            <p className="truncate text-xs text-muted-foreground">Karaikkal</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
