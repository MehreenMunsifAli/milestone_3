"use client";
import { createContext, useContext, useState, ReactNode } from "react";

interface CartContextType {
  cartCount: number;
  addToCart: () => void;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartCount, setCartCount] = useState<number>(0);

  console.log('cart provider initializedwith cart count', cartCount);

  const addToCart = () => setCartCount((prev) => prev + 1);

  return (
    <CartContext.Provider value={{ cartCount, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  console.log("useCart called", context);

  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
