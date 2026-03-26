import { useState, useMemo } from "react";
import { ProductCard } from "./ProductCard";
import { OrderSummary } from "./OrderSummary";
import { getProducts } from "@/APi/ProductAPi";
import { useQuery } from "@tanstack/react-query";
import { Product } from "@/data/products";


interface ProductGridProps {
  searchQuery: string;

}

import { useCart } from "@/context/CartContext";

export function ProductGrid({ searchQuery }: ProductGridProps) {
  const { items, setQuantity, totalPrice, totalBoxes } = useCart();

  const {
    data: products = [],   // 👈 API products
    isLoading,
    isError,
    error,
  } = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: getProducts,
    staleTime: 5 * 60 * 1000,
  });
  console.log("productgrid", products)

  const getProductQty = (id: string) => items.find(i => i.product._id === id)?.quantity || 0;

  const filteredProducts = useMemo(() => {
    if (!searchQuery) return products;
    const query = searchQuery.toLowerCase();
    return products.filter(
      (p) =>
        p.name.toLowerCase().includes(query) ||
        p.code.toLowerCase().includes(query) ||
        p.division.toLowerCase().includes(query)
    );

  }, [searchQuery, products]);



  if (isLoading) {
    return <p className="p-6">Loading products...</p>;
  }

  if (isError) {
    return <p className="p-6 text-red-500">{(error as Error).message}</p>;
  }



  return (
    <>

      <div className="grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 pb-24">
        {filteredProducts.map((product, index) => (
          <ProductCard
            key={product._id}
            product={product}
            quantity={getProductQty(product._id)}
            onQuantityChange={(qty) => setQuantity(product, qty)}
            index={index}
          />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="flex flex-col items-center justify-center py-12 sm:py-16 text-center">
          <div className="mb-4 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-muted">
            <svg className="h-7 w-7 sm:h-8 sm:w-8 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <h3 className="mb-1 text-base sm:text-lg font-semibold text-foreground">No products found</h3>
          <p className="text-xs sm:text-sm text-muted-foreground">Try adjusting your search query</p>
        </div>
      )}

      <OrderSummary totalItems={totalBoxes} totalAmount={totalPrice} />
    </>
  );
}
