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

export function MobileSidebar({ open, onOpenChange,navItems }: MobileSidebarProps) {
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
        <Link to={"/"} className="flex h-16 items-center gap-3 border-b border-sidebar-border px-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl gradient-primary">
            <svg viewBox="0 0 24 24" className="h-6 w-6 text-primary-foreground" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
            </svg>
          </div>
          <div>
            <h1 className="text-lg font-bold text-foreground">Power Soaps</h1>
            <p className="text-xs text-muted-foreground">Inventory System</p>
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
