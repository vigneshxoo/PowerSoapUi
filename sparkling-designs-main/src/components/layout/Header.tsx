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
            <div className="flex h-9 w-9 items-center justify-center rounded-full gradient-primary text-sm font-bold text-primary-foreground shadow-md">
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
