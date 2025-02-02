"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface ProductType {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
  category: string;
}

export default function Home() {
  const [products, setProducts] = useState<ProductType[]>([]);
  // const apiKey = process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY;

  useEffect(() => {
    const fetchData = async () => {
      // const burgerUrl = `https://fakestoreapi.com/products`;
      // const pizzaUrl = `https://api.spoonacular.com/food/menuItems/search?query=pizza&number=5&apiKey=${apiKey}`;
      

      try {
        await fetch('https://fakestoreapi.com/products').then((res) => res.json()).then((data) => setProducts(data));        
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
    
  }, [])


  return (
    <div className="container mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4">Products</h1>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                {products.map((product) => (
                    <Link key={product.id} href={`/product/${product.id}`} className="border p-4 rounded hover:shadow space-y-4">
                            <Image src={product.image} alt={product.title} width={100} height={100} className="w-full h-40 object-contain" />
                            <h2 className="text-lg font-bold">{product.title}</h2>
                            {/* <p>${product.description}</p> */}
                            <p>${product.price}</p>
                    </Link>
                ))}
            </div>
        </div>
  );
}
