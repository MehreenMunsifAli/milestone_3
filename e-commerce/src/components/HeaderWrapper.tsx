"use client";
import React, { useState } from "react";
import Header from "@/components/Header";

export default function HeaderWrapper({ children }: { children: React.ReactNode }) {
  const [cartCount, setCartCount] = useState<number>(0);

  const addToCart = () => setCartCount((prev) => prev + 1);

  return (
    <>
      <Header cartCount={cartCount} />
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { addToCart });
        }
        return child;
      })}
    </>
  );
}
