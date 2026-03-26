import { Minus, Plus, Sparkles, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { getProducts } from "@/APi/ProductAPi";
import { Product } from "@/data/products";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";


interface ProductCardProps {
  product: Product;
  quantity: number;
  onQuantityChange: (quantity: number) => void;
  index: number;
}

export function ProductCard({ product, quantity, onQuantityChange, index }: ProductCardProps) {



  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(quantity.toString());
  const inputRef = useRef<HTMLInputElement>(null);
 

  const isSelected = quantity > 0;

  const handleInputSubmit = () => {
    const newQty = parseInt(inputValue) || 0;
    onQuantityChange(Math.max(0, newQty));
    setIsEditing(false);
  };

  const handleQuantityClick = () => {
    setInputValue(quantity.toString());
    setIsEditing(true);
    setTimeout(() => inputRef.current?.select(), 50);
  };
  console.log("products", product);

  const quickAddAmounts = [1, 5, 10];



  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-xl bg-card transition-all duration-300",
        "border border-border/40 hover:border-primary/40",
        "shadow-sm hover:shadow-lg hover:-translate-y-0.5",
        isSelected && "ring-1 ring-primary/60 border-primary/60 bg-primary/[0.02]",
        "animate-slide-up"
      )}
      style={{ animationDelay: `${index * 30}ms` }}
    >
      {/* Image Container - Compact */}
      <Link to={`/product/${product._id}`} className="block relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-muted/30 to-muted/60 p-3 cursor-pointer">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
        />

        {/* Code Badge */}
        <span className="absolute left-1.5 top-1.5 rounded-md bg-card/90 px-1.5 py-0.5 text-[9px] font-semibold text-primary backdrop-blur-sm">
          {product.code}
        </span>

        {/* MFS Badge */}
        {product.mfs > 0 && (
          <span className="absolute right-1.5 top-1.5 flex items-center gap-0.5 rounded-md gradient-accent px-1.5 py-0.5 text-[9px] font-bold text-accent-foreground">
            <Sparkles className="h-2.5 w-2.5" />
            MFS {product.mfs}
          </span>
        )}

        {/* Offer Badge */}
        {product.isOffer && (
          <span className="absolute left-1.5 bottom-1.5 rounded-md bg-destructive/90 px-2 py-0.5 text-[10px] font-bold text-destructive-foreground shadow-sm animate-pulse">
            Special Offer
          </span>
        )}

        {/* Selected Quantity Badge */}
        {isSelected && (
          <div className="absolute bottom-1.5 right-1.5 flex h-6 w-6 items-center justify-center rounded-full gradient-primary text-[10px] font-bold text-primary-foreground shadow-md animate-scale-in">
            {quantity}
          </div>
        )}
      </Link>

      {/* Content - Compact */}
      <div className="p-2.5">
        <h3 className="mb-0.5 line-clamp-2 text-xs font-semibold text-foreground leading-tight min-h-[2rem]">
          {product.name}
        </h3>

        <p className="mb-2 text-[9px] text-muted-foreground line-clamp-1">
          {product.division}
        </p>

        {/* Price Row */}
        <div className="mb-2 flex items-center justify-between">
          <div className="flex items-baseline gap-1">
            <span className="text-sm font-bold text-foreground">₹{product.boxPrice}</span>
            <span className="text-[9px] text-muted-foreground">/box</span>
          </div>
          <div className="flex items-center gap-1 text-[9px] text-muted-foreground">
            <Package className="h-3 w-3" />
            {product.boxPieces}pcs
          </div>
        </div>

        {/* Quantity Controls */}
        <div className="space-y-1.5">
          {/* Main Quantity Row */}
          <div className={cn(
            "flex items-center justify-between rounded-lg p-0.5 transition-colors",
            isSelected ? "bg-primary/10" : "bg-muted/40"
          )}>
            <Button
              variant="ghost"
              size="icon"
              className="h-7 w-7 rounded-md hover:bg-background active:scale-95"
              onClick={() => onQuantityChange(Math.max(0, quantity - 1))}
              disabled={quantity === 0}
            >
              <Minus className="h-3 w-3" />
            </Button>

            {isEditing ? (
              <Input
                ref={inputRef}
                type="number"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onBlur={handleInputSubmit}
                onKeyDown={(e) => e.key === 'Enter' && handleInputSubmit()}
                className="h-7 w-14 text-center text-sm font-bold border-0 bg-background focus-visible:ring-1"
                min="0"
              />
            ) : (
              <button
                onClick={handleQuantityClick}
                className={cn(
                  "min-w-10 py-1 text-center font-bold text-sm rounded-md transition-all hover:bg-background/80",
                  isSelected ? "text-primary" : "text-muted-foreground"
                )}
              >
                {quantity}
              </button>
            )}

            <Button
              variant="ghost"
              size="icon"
              className="h-7 w-7 rounded-md hover:bg-background active:scale-95"
              onClick={() => onQuantityChange(quantity + 1)}
            >
              <Plus className="h-3 w-3" />
            </Button>
          </div>

          {/* Quick Add Buttons */}
          <div className="flex gap-1 ">
            {quickAddAmounts.map((amt) => (
              <Button
                key={amt}
                variant="outline"
                size="sm"
                className="h-6 flex-1 text-[10px]  font-medium px-0 hover:bg-primary hover:text-primary-foreground hover:border-primary"
                onClick={() => onQuantityChange(quantity + amt)}
              >
                +{amt}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
