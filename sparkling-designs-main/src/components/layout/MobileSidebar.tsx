import { Menu, X, ShoppingCart, History, Package, Tags } from "lucide-react";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

interface NavItem {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  link?: string;
  badge?: number;
  module:string
}

// const navItems: NavItem[] = [
//   { icon: ShoppingCart, label: "Order Product", link: "/products" },
//   { icon: History, label: "Order History", link: "/orders" },
//   { icon: Package, label: "Stock In Hand", link: "/stock" },
//   { icon: Tags, label: "Scheme", badge: 3, link: "/schema" },
// ];

interface MobileSidebarProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  navItems: NavItem[];
}

export function MobileSidebar({ open, onOpenChange, navItems }: MobileSidebarProps) {
  const location = useLocation();
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-72 p-0 bg-sidebar border-sidebar-border">
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
            <p className="text-xs text-muted-foreground">{navItems.map((val)=>val.module)}</p>
          </div>

        </Link>

        {/* Navigation */}
        <div className="px-3 py-6">
          <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Inventory Management
          </p>
          <nav className="space-y-1">
            {navItems?.map((item) => {
              const isActive = location.pathname === item.link;
              return (
                <Link
                  key={item.label}
                  to={item.link || "#"}
                  onClick={() => onOpenChange(false)}
                  className={cn(
                    "group flex w-full items-center justify-between rounded-xl px-3 py-3 text-sm font-medium transition-all duration-200",
                    isActive
                      ? "bg-sidebar-accent text-sidebar-accent-foreground"
                      : "text-sidebar-foreground hover:bg-sidebar-accent/50"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <item.icon className={cn(
                      "h-5 w-5 transition-colors",
                      isActive ? "text-primary" : "text-muted-foreground"
                    )} />
                    <span>{item.label}</span>
                  </div>
                  {item.badge && (
                    <span className="flex h-6 min-w-6 items-center justify-center rounded-full gradient-accent px-2 text-xs font-semibold text-accent-foreground">
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* User Info */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-sidebar-border p-4">
          <div className="flex items-center gap-3 rounded-xl bg-sidebar-accent/50 p-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full gradient-primary text-sm font-bold text-primary-foreground">
              TD
            </div>
            <div className="flex-1 min-w-0">
              <p className="truncate text-sm font-medium text-foreground">Test Distributor</p>
              <p className="truncate text-xs text-muted-foreground">Karaikkal</p>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
