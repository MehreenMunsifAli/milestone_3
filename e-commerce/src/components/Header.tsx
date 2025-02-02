"use client";
import { SlHandbag } from "react-icons/sl";
import Link from "next/link";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet";
  import { Menu } from "lucide-react";
import { useCart } from "@/app/contexts/CartContext";

export default function Header() {
    const {cartCount} = useCart();
    console.log('useCart imported successfully', cartCount);
    return (
        <header className="container mx-auto max-w-screen-lg mt-2 bg-transparent lg:flex flex-col justify-center px-6">
            <div className="text-center h-[32px] ">
                <p className="text-[#FF9F0D] text-[24px] font-bold ">Your Shopping Solution</p>
            </div>
            <div className="flex justify-between items-center ">
                <nav className="flex items-center">
                    {/* Large screen nav */}
                    <ul className="hidden lg:flex justify-between items-center text-[16px] gap-x-6">
                        <li>
                            <Link href={"/"}>Home</Link>
                        </li>
                        <li><Link href={"/"}>Blog</Link></li>
                        <li><Link href={"/signup"}>Pages</Link></li>
                        <li><Link href={"/shop"}>Shop</Link></li>
                        <li><Link href={"/faq"}>Contact</Link></li>
                    </ul>
                    {/* Small Screen nav */}
                    <Sheet>
                        <SheetTrigger className="lg:hidden">
                            <Menu />
                        </SheetTrigger>
                        <SheetContent>
                            <ul className="flex flex-col gap-1 list-none ">
                            <li>
                                <Link href={"/"}>Home</Link>
                            </li>
                            <li><Link href={"/"}>Menu</Link></li>
                            <li><Link href={"/"}>Blog</Link></li>
                            <li><Link href={"/"}>Pages</Link></li>
                            <li className="relative group">
                                <button className=" rounded focus:outline-none">
                                    About
                                </button>
                                <ul className="absolute hidden group-hover:block bg-gray-800 text-white rounded mt-1 w-40">
                                    <li>
                                        <Link
                                            href="/#aboutus"
                                            className="block px-4 py-2 hover:bg-gray-700"
                                        >
                                            Vision
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/#aboutus"
                                            className="block px-4 py-2 hover:bg-gray-700"
                                        >
                                            About Us
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li><Link href={"/"}>Shop</Link></li>
                            <li><Link href={"/"}>Contact</Link></li>
                        </ul>
                        </SheetContent>
                    </Sheet>
                </nav>
                <div className="relative">
                    <Link href={"/shopping_cart"}>
                        <SlHandbag className="text-xl" />
                    </Link>
                    {cartCount > 0 && (
                        <span
                            className="absolute bottom-3 left-4 bg-red-500 text-white rounded-full text-[9px] px-1.5 hover:scale-110"    
                        >
                            {cartCount}
                        </span>
                    )}
                </div>
                
            </div>
        </header>
    );
}