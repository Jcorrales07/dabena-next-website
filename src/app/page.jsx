"use client"

import ImageCarousel from "@/components/ImageCarousel";
import ProductCarouselSection from "@/components/product-carousel-section/ProductCarouselSection";

export default function Home() {
    return (
        <main className="w-full flex min-h-screen flex-col items-center">
            <ImageCarousel/>
            <ProductCarouselSection />
        </main>
    );
}
