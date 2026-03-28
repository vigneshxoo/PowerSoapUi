
import { Header } from "@/components/layout/Header";
import { useCart } from "@/context/CartContext";
import { Product, } from "@/data/products";
import { cn } from "@/lib/utils";
import { Minus, Plus, Trash2, ArrowRight, Package, Truck, Sparkles, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ProductCard } from "@/components/products/ProductCard";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/APi/ProductAPi";
import { createOrder } from "@/APi/ProductAPi";
import { useMutation } from "@tanstack/react-query";
// import { useToast } from "@/hooks/use-toast";
// import { toast } from "@/hooks/use-toast";
import Popup from "@/components/layout/Pop_up";


type PopupState = {
    open: boolean;
    type: "loading" | "success" | "error";
    title: string;
    description: string;
};
export const AddToCart = () => {
   
    const { items, totalItems, totalBoxes, totalPrice, updateQuantity, setQuantity, removeFromCart, addToCart, clearCart } = useCart();
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState("");
    const [suggestedQuantities, setSuggestedQuantities] = useState<Record<string, number>>({});



    const [popup, setPopup] = useState<PopupState>({
        open: false,
        type: "loading",
        title: "",
        description: "",
    });



    const { data: products = [] } = useQuery<Product[]>({
        queryKey: ["products"],
        queryFn: getProducts,
        staleTime: 5 * 60 * 1000,
    });

    const getProductQty = (id: string) => items.find(i => i.product._id === id)?.quantity || 0;


    const suggestedProducts = products
        .filter((p) => !items.find((i) => i.product._id === p._id))
        .slice(0, 4);


    const orderMutation = useMutation({
        mutationFn: (payload: any) => createOrder(payload),

        onMutate: () => {

            <Popup
                popup={popup}
                onClose={() => {
                    setPopup({ ...popup, open: false });

                    if (popup.type === "success") {
                        navigate("/products");
                    }
                }} 
            />
            setPopup({
                open: true,
                type: "loading",
                title: "Placing Order...",
                description: "Please wait while we confirm your order",
            });
        },

        onSuccess: () => {
            clearCart();
            setPopup({
                open: true,
                type: "success",
                title: "Order Placed 🎉",
                description: "Your order was placed successfully",
            });
        },

        onError: () => {
            setPopup({
                open: true,
                type: "error",
                title: "Order Failed ❌",
                description: "Something went wrong. Please try again",
            });
        },
    });


    const handleCheckout = async () => {
        if (items.length === 0) return;

        const payload = {
            items: items.map((item) => ({
                productId: item.product._id,
                quantity: item.quantity,
                pricePerBox: item.product.boxPrice,
            })),
            totalBoxes,
            totalAmount: totalPrice,
        };

        orderMutation.mutate(payload);
    };



    return (
        <div className="min-h-screen bg-dots-pattern">
           

            <div className="p-4 sm:p-6 lg:p-10 max-w-[1600px] mx-auto">

                <Popup
                    popup={popup}
                    onClose={() => {
                        setPopup({ ...popup, open: false });

                        if (popup.type === "success") {
                            navigate("/products");
                        }
                    }}
                />
                <h1 className="text-3xl font-black text-gray-900 mb-8">Shopping Cart</h1>

                {items.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-20 bg-white/50 backdrop-blur-sm rounded-3xl border border-dashed border-gray-300">
                        <div className="h-20 w-20 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                            <Package className="h-10 w-10 text-gray-400" />
                        </div>
                        <h2 className="text-xl font-bold text-gray-700 mb-2">Your cart is empty</h2>
                        <p className="text-gray-500 mb-6">Looks like you haven't added anything yet.</p>
                        <Link to="/products" className="bg-primary text-white font-bold py-3 px-8 rounded-xl hover:opacity-90 transition">
                            Browse Products
                        </Link>
                    </div>
                ) : (
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Cart List */}
                        <div className="lg:col-span-2 space-y-4">
                            {items.map(({ product, quantity }) => (
                                <div key={product._id} className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100 flex flex-col sm:flex-row gap-6 items-center group transition-all hover:shadow-md hover:border-primary/20">
                                    {/* Image */}
                                    <Link to={`/product/${product._id}`} className="h-24 w-24 sm:h-32 sm:w-32 bg-gray-50 rounded-xl p-2 flex-shrink-0">
                                        <img src={product.image} alt={product.name} className="w-full h-full object-contain mix-blend-multiply" />
                                    </Link>

                                    {/* Details */}
                                    <div className="flex-1 text-center sm:text-left w-full">
                                        <div className="flex flex-col sm:flex-row justify-between items-start mb-2">
                                            <div>
                                                <h3 className="text-lg font-bold text-gray-900 line-clamp-1">{product.name}</h3>
                                                <p className="text-sm text-gray-500">{product.division}</p>
                                            </div>
                                            <div className="text-right hidden sm:block">
                                                <p className="text-lg font-bold text-primary">₹{product.boxPrice * quantity}</p>
                                                <p className="text-xs text-gray-400">₹{product.boxPrice} / box</p>
                                            </div>
                                        </div>

                                        {/* Metadata Tags */}
                                        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-4">
                                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 border border-blue-100 uppercase tracking-wide">
                                                {product.code}
                                            </span>
                                            {product.mfs > 0 && (
                                                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-50 text-purple-600 border border-purple-100 flex items-center gap-1">
                                                    <Sparkles className="h-3 w-3" /> MFS {product.mfs}
                                                </span>
                                            )}
                                            <span className="text-[10px] items-center gap-1 text-gray-500 hidden sm:flex">
                                                <Package className="h-3 w-3" /> {product.boxPieces} pcs/box
                                            </span>
                                        </div>

                                        {/* Controls mobile price */}
                                        <div className="flex sm:hidden justify-between items-center w-full mb-4">
                                            <p className="text-lg font-bold text-primary">₹{product.boxPrice * quantity}</p>
                                        </div>

                                        {/* Actions */}
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-1">
                                                <button
                                                    onClick={() => updateQuantity(product._id, quantity - 1)}
                                                    className="h-8 w-8 flex items-center justify-center rounded-md bg-white hover:bg-gray-100 text-gray-600 shadow-sm border border-gray-200 transition"
                                                >
                                                    <Minus className="h-4 w-4" />
                                                </button>
                                                <span className="font-bold text-gray-900 w-8 text-center">{quantity}</span>
                                                <button
                                                    onClick={() => updateQuantity(product._id, quantity + 1)}
                                                    className="h-8 w-8 flex items-center justify-center rounded-md bg-white hover:bg-gray-100 text-gray-600 shadow-sm border border-gray-200 transition"
                                                >
                                                    <Plus className="h-4 w-4" />
                                                </button>
                                            </div>
                                            <button
                                                onClick={() => removeFromCart(product._id)}
                                                className="bg-red-50 hover:bg-red-100 text-red-500 p-2 rounded-lg transition"
                                            >
                                                <Trash2 className="h-5 w-5" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Summary Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-card border border-gray-100 sticky top-24">
                                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                    Order Summary
                                </h3>

                                <div className="space-y-4 mb-8">
                                    <div className="flex justify-between items-center text-sm font-medium text-gray-600">
                                        <span>Distinct Items</span>
                                        <span className="text-gray-900 font-bold">{items.length}</span>
                                    </div>
                                    <div className="flex justify-between items-center text-sm font-medium text-gray-600">
                                        <span>Total Boxes</span>
                                        <span className="text-gray-900 font-bold">{totalBoxes}</span>
                                    </div>
                                    <div className="h-px bg-gray-100 my-4" />
                                    <div className="flex justify-between items-center text-lg font-bold text-gray-900">
                                        <span>Total Amount</span>
                                        <span className="text-primary text-2xl">₹{totalPrice.toLocaleString()}</span>
                                    </div>
                                </div>

                                <button
                                    onClick={handleCheckout}
                                    className="w-full bg-gradient-to-r from-primary to-[#0EA5E9] hover:opacity-90 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 text-base"
                                >
                                    Confirm Order <ArrowRight className="h-5 w-5" />
                                </button>
                                <button
                                    onClick={handleCheckout}
                                    disabled={orderMutation.isPending}
                                >
                                </button>

                                <div className="mt-6 flex items-start gap-3 bg-green-50 p-4 rounded-xl">
                                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <p className="text-xs font-bold text-green-800 mb-1">Secure Order</p>
                                        <p className="text-[10px] text-green-700 leading-relaxed">
                                            Your order will be processed immediately upon confirmation.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Suggested Section */}
                {suggestedProducts.length > 0 && (
                    <div className="mt-20 border-t border-gray-200 pt-10">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="h-10 w-1 rounded-full bg-primary" />
                            <h2 className="text-2xl font-bold text-gray-900">You Might Also Need</h2>
                        </div>

                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                            {suggestedProducts.map((p, idx) => (
                                <ProductCard
                                    key={p._id}
                                    product={p}
                                    quantity={getProductQty(p._id)} // Link to global cart
                                    onQuantityChange={(qty) => setQuantity(p, qty)} // Sync to global cart
                                    index={idx}
                                />
                            ))}
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
};
