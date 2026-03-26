
import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { Product } from "@/data/products";

export interface CartItem {
    product: Product;
    quantity: number;
}

interface CartContextType {
    items: CartItem[];
    addToCart: (product: Product, quantity?: number) => void;
    removeFromCart: (productId: string) => void;
    updateQuantity: (productId: string, quantity: number) => void;
    setQuantity: (product: Product, quantity: number) => void;
    clearCart: () => void;
    totalItems: number;
    totalBoxes: number;
    totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [items, setItems] = useState<CartItem[]>([]);

    // Load cart from local storage on init (optional persistence)
    useEffect(() => {
        const savedCart = localStorage.getItem("cart");
        if (savedCart) {
            try {
                setItems(JSON.parse(savedCart));
            } catch (e) {
                console.error("Failed to parse cart", e);
            }
        }
    }, []);

    // Save cart -- simpler to just do it on every change
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(items));
    }, [items]);


    const addToCart = (product: Product, quantity = 1) => {
        setItems((prev) => {
            const existing = prev.find((item) => item.product._id === product._id);
            if (existing) {
                return prev.map((item) =>
                    item.product._id === product._id
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            }
            return [...prev, { product, quantity }];
        });
    };

    const removeFromCart = (productId: string) => {
        setItems((prev) => prev.filter((item) => item.product._id !== productId));
    };

    const updateQuantity = (productId: string, quantity: number) => {
        if (quantity <= 0) {
            removeFromCart(productId);
            return;
        }
        setItems((prev) =>
            prev.map((item) =>
                item.product._id === productId ? { ...item, quantity } : item
            )
        );
    };

    const setQuantity = (product: Product, quantity: number) => {
        if (quantity <= 0) {
            removeFromCart(product._id);
            return;
        }
        setItems((prev) => {
            const existing = prev.find((item) => item.product._id === product._id);
            if (existing) {
                return prev.map((item) =>
                    item.product._id === product._id ? { ...item, quantity } : item
                );
            }
            return [...prev, { product, quantity }];
        });
    };

    const clearCart = () => setItems([]);

    const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

    // Assuming "quantity" refers to number of boxes (since Product Details says "per box")
    // Or if quantity is pieces, we divide. 
    // Based on ProductCard logic: "quantity" seems to be user inputs. 
    // Product details: "price per box" and "pcs per box".
    // Let's assume user is Buying BOXES.

    const totalBoxes = totalItems;
    const totalPrice = items.reduce(
        (acc, item) => acc + (Number(item.product.boxPrice) * item.quantity),
        0
    );
    

    return (
        <CartContext.Provider
            value={{
                items,
                addToCart,
                removeFromCart,
                updateQuantity,
                setQuantity,
                clearCart,
                totalItems,
                totalBoxes,
                totalPrice,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
};
