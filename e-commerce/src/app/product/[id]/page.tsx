"use client";
import { useCart } from "@/app/contexts/CartContext";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { SlHandbag } from "react-icons/sl";

interface ProductType {
    id: number;
    title: string;
    image: string;
    price: number;
    description: string;
    category: string;
  }

export default function ProductDetails() {
    const { id } = useParams();
    // const { id } = router.;
    const [product, setProduct] = useState<ProductType | null>(null);
    const [count, setCount] = useState<number>(0);
    const { addToCart } = useCart();

    useEffect(() => {
        const fetchData = async () => {
            if (id) {
                await fetch(`https://fakestoreapi.com/products/${id}`)
                    .then((res) => res.json())
                    .then((data) => {
                        setProduct(data);
                    });
            }
        }

        fetchData();
        
    }, [id]);

    if (!product) return <div>Loading...</div>;

    const handleCountIncrease = () => {
        setCount((prev) => prev + 1)
    }

    const handleCountDecrease = () => {
        setCount((prev) => prev - 1)
    }

    return (
        <div className="">
            <div className="container mx-auto bg-gray-200 p-6 grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-[100px_150px_100px]">
                <h1 className="text-2xl font-bold lg:col-start-2 lg:col-span-2 lg:row-start-1 px-4 lg:px-16">{product.title}</h1>
                <Image src={product.image} alt={product.title} width={100} height={100} className="w-full h-full lg:col-start-1 lg:row-start-1 lg:row-span-3 object-contain" />
                <p className=" px-4 lg:px-16 text-center lg:text-left lg:col-start-2 lg:col-span-2 lg:row-start-2"><span className="font-bold">Description: </span>{product.description}</p>
                <div className="px-4 lg:px-16 text-lg font-bold lg:col-start-2 lg:col-span-2 lg:row-start-3">
                    <p className=""><span className="font-bold">Price: </span>${product.price}</p>
                    <div className="mt-4 flex items-center gap-4 border-b-2 pb-6">
                            <div className="flex items-center">
                                <button className="border-black border-[1px] px-4 py-1 bg-transparent text-black" onClick={handleCountDecrease} disabled={count <= 0}>-</button>
                                <p className="font-bold px-4 py-1 border-[1px] border-black border-r-0 border-l-0">{count}</p>
                                <button className="border-black border-[1px] px-4 py-1" onClick={handleCountIncrease}>+</button>
                            </div>
                            <div className="relative">
                                <SlHandbag 
                                    className="absolute top-[30%] text-white left-3 text-xs" 
                                />
                                <Button
                                    type="button" 
                                    className="bg-[#FF9F0D] hover:bg-[#FF9F6D] rounded-none py-[18px] px-8"
                                    onClick={addToCart}
                                >
                                    Add to Cart
                                </Button>
                            </div>
                        </div>
                </div>
                
            </div>
        </div>
    );
}
