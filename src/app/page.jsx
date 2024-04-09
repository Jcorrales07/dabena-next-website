"use client"

import ImageCarousel from "@/components/landing-page/ImageCarousel";
import ProductCarouselSection from "@/components/landing-page/product-carousel-section/ProductCarouselSection";
import ContactUsSection from "@/components/landing-page/ContactUsSection";
import CertificationSection from "@/components/landing-page/CertificationSection";
import TestimonialSection from "@/components/landing-page/TestimonialSection";

export default function Home() {
    return (
        <main className="w-full flex flex-col items-center">
            <ImageCarousel/>
            <ProductCarouselSection />
            <TestimonialSection />
            <CertificationSection />
            <ContactUsSection />
        </main>
    );
}
