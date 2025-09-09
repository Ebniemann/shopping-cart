import React from "react";
import { useState, createContext } from "react";
import productsData from '../products.json'
import type { Product, CartItem } from "../Types/types";

interface CartContextType {
    products: Product[];
    cart: CartItem[];
    addToCart: (product: Product) => void;
    removeFromCart: (productId: number) => void;
    clearCart: () => void;
    getCartTotal: () => number;
    subTotal: (product: CartItem) => number;

}
export const cartContext = createContext<CartContextType | null>(null);

interface CartProviderProps {
    children: React.ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
    const [products] = useState<Product[]>(productsData);
    const [cart, setCart] = useState<CartItem[]>([]);


    const addToCart = (product: Product) => {

        setCart((prev) => {
            const isProductInCart = prev.find((item) => item.id === product.id);
            if (isProductInCart) {
                return prev.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [...prev, { ...product, quantity: 1 }];
            }
        })
    }

    const removeFromCart = (productId: number) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === productId
                    ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 0 }
                    : item
            ).filter(item => item.quantity > 0)
        );
    }

    const clearCart = () => {
        setCart([]);
    }

    const subTotal = (product: Product | CartItem) => {
        return product.price * ("quantity" in product ? product.quantity : 1);

    }

    const getCartTotal = () => {
        return cart.reduce((total, product) => total + subTotal(product), 0);
    }

    return (
        <cartContext.Provider value={{ products, cart, addToCart, removeFromCart, clearCart, getCartTotal, subTotal }}>
            {children}
        </cartContext.Provider>
    )

}

