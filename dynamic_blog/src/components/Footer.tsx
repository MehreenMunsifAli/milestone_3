"use client";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedin } from "react-icons/fa";
import SocialIcon from "./Socialcon";


export default function Footer() {

    return (
        <>
            <footer className="container mx-auto grid grid-cols-1 gap-2 lg:grid-cols-7 grid-rows-2-[100px] py-6 bg-orange-100 dark:bg-gray-900 dark:text-white" style={{boxShadow: "0 -3px 6px rgba(0, 0, 0, 0.1)" }}>
                <div className="place-items-center lg:place-items-stretch lg:col-span-3 lg:col-start-3">
                    <p className="text-center">JOIN MY MAILING LIST</p>
                    <div className="flex gap-2 my-4">
                        <Input 
                            className="border-gray-500 dark:border-gray-300"
                            type="email"
                            placeholder="Enter your email"
                        />
                        <Button type="button">Join</Button>
                    </div>
                    
                </div>
                <div className="lg:col-span-7 flex flex-col gap-4 lg:gap-0 lg:flex-row items-center justify-between px-8 mt-4">
                    <p className=" text-[#2f6f81] text-sm">&copy; Copyright | All Rights reserved</p>
                    <div className="flex gap-4">
                        <SocialIcon Icon={FaFacebookF} IconUrl="www.facebook.com" />
                        <SocialIcon Icon={FaYoutube} IconUrl="www.youtube.com" />
                        <SocialIcon Icon={FaLinkedin} IconUrl="www.linkedin.com" />
                        <SocialIcon Icon={FaTwitter} IconUrl="www.twitter.com" />
                    </div>
                </div>
            </footer>
        </>
    );
}