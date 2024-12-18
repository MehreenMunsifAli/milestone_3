"use client";
import { FaMoon, FaSun } from "react-icons/fa";
import { useEffect, useState } from "react";
import Link from "next/link";
import {Great_Vibes} from "next/font/google";

const greatVibes = Great_Vibes({ subsets: ['latin'], weight: ["400","400"] });

export default function Header(){
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

    useEffect(() => {
        if(isDarkMode){
            document.documentElement.classList.add("dark");
            document.body.classList.add("bg-gray-800");
        } else {
            document.documentElement.classList.remove("dark");
            document.body.classList.remove("bg-gray-800");
        }
    }, [isDarkMode]);

    const handleDarkMode = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };

    return(
        <>
        <header className="container mx-auto flex justify-between px-10 py-4 shadow-md bg-orange-100 dark:bg-gray-900 dark:text-white">
            <div>
                <Link href={"/"}>
                    <h2 className={`${greatVibes.className} text-xl md:text-3xl italic text-[#2f6f81] font-bold`}>Daily Blogs</h2>
                </Link>
            </div>
            <div className="py-2 text-sm">
                <button type="button" onClick={handleDarkMode}>
                    {isDarkMode ? (
                    <>
                        <FaSun className="inline mr-1" size={16} />
                        Light Mode
                    </>
                    ) : (
                    <>
                        <FaMoon className="inline mr-1" size={16} />
                        Dark Mode
                    </>
                    )}
                      
                </button>
                
            </div>
        </header>
        </>
    );
}