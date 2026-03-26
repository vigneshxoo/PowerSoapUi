import { useState } from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { ProductGrid } from "@/components/products/ProductGrid";
import { Package, CheckCircle, Clock, TrendingUp } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { Product } from "@/data/products";
import { getProducts } from "@/APi/ProductAPi";
import { useCart } from "@/context/CartContext";


const Index = () => {
  const { data: products = [] } = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: getProducts,
    staleTime: 5 * 60 * 1000,
  });

  const { totalPrice,totalBoxes } = useCart()

  const count = products.length;
  const [searchQuery, setSearchQuery] = useState("");

  const stats = [
    { icon: Package, label: "Total Products", value: count.toString(), color: "bg-primary/10", iconColor: "text-primary" },
    { icon: Clock, label: "Pending Orders", value: "12", color: "bg-amber-500/10", iconColor: "text-amber-500" },
    { icon: CheckCircle, label: "Total Boxes", value: totalBoxes.toString(), color: "bg-emerald-500/10", iconColor: "text-emerald-500" },
    { icon: TrendingUp, label: "Total Value", value: totalPrice.toString(), color: "bg-accent/10", iconColor: "text-accent" },
  ];




  return (
    <div className="min-h-screen bg-background">
      {/* <Sidebar /> */}

      <main className="lg:ml-64">
        {/* <Header count={count}
          searchValue={searchQuery}
          onSearchChange={setSearchQuery}
        /> */}

        <div className="p-4 sm:p-6">
          {/* Stats Cards */}
          <div className="mb-6 sm:mb-8 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="group rounded-2xl bg-card p-4 sm:p-5 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-0.5 animate-slide-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className={`flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl ${stat.color} transition-transform group-hover:scale-110`}>
                    <stat.icon className={`h-5 w-5 sm:h-6 sm:w-6 ${stat.iconColor}`} />
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-sm text-muted-foreground">{stat.label}</p>
                    <p className="text-xl sm:text-2xl font-bold text-foreground">{stat.value}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Product Grid */}
          <ProductGrid searchQuery={searchQuery} />
        </div>
      </main>
    </div>
  );
};

export default Index;
