import { ShoppingCart, ArrowRight, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

interface OrderSummaryProps {
  totalItems: number;
  totalAmount: number;
}

export function OrderSummary({ totalItems, totalAmount }: OrderSummaryProps) {
  const navigate = useNavigate();
  if (totalItems === 0) return null;

  return (
    <div className={cn(
      "order-summary-fixed animate-slide-up"
    )}>
      <div className="flex items-center gap-3 rounded-full bg-card/95 backdrop-blur-xl border border-border/50 shadow-xl px-4 py-2.5">
        {/* Cart Icon */}
        <div className="relative">
          <div className="flex h-9 w-9 items-center justify-center rounded-full gradient-primary">
            <ShoppingCart className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-accent-foreground">
            {totalItems}
          </span>
        </div>

        {/* Info */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Package className="h-3.5 w-3.5" />
            <span className="font-medium">{totalItems} boxes</span>
          </div>
          <div className="h-4 w-px bg-border" />
          <span className="text-sm font-bold text-foreground">₹{totalAmount.toLocaleString()}</span>
        </div>

        {/* CTA */}
        {/* CTA */}
        <Button
          size="sm"
          className="rounded-full h-8 px-4 text-xs font-semibold gradient-primary hover:opacity-90"
          onClick={() => navigate("/cart")}
        >
          View Cart
          <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
        </Button>
      </div>
    </div>
  );
}
