"use client"

import ImageCarousel from "@/components/landing-page/ImageCarousel";
import ProductCarouselSection from "@/components/landing-page/product-carousel-section/ProductCarouselSection";

export default function Home() {
    return (
        <main className="w-full flex flex-col items-center">
            <ImageCarousel/>
            <ProductCarouselSection />
        </main>
    );
}
