import Image from "next/image";

export default function Hero() {
    return(    
    <div className="container mx-auto grid grid-cols-1">
        <div className="text-center py-12">
            <h5 className="tracking-wide ">A DAILY BLOG</h5>
            <h1 className="mt-4 font-bold font-serif text-3xl tracking-wider">Lovely Little Things</h1>
        </div>
        <div className="relative w-full h-[500px] lg:h-[800px]">
            <Image 
                className="object-cover"
                src={"/assets/images/annie-spratt-adV0u9D3NAM-unsplash.jpg"}
                alt="Nature Image"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 66vw"
            />
        </div>
    </div>
      
    )
}