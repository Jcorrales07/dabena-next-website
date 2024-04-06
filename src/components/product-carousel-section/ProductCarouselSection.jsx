import React from 'react';
import ProductCarousel from "@/components/product-carousel-section/ProductCarousel";

const OPTIONS = {dragFree: true}
const SLIDE_COUNT = 12
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const list = [
    {
        title: "Orange",
        img: "/assets/img1.jpg",
        price: "$5.50",
    },
    {
        title: "Tangerine",
        img: "/assets/img2.jpg",
        price: "$3.00",
    },
    {
        title: "Raspberry",
        img: "/assets/img3.jpg",
        price: "$10.00",
    },
    {
        title: "Lemon",
        img: "/assets/img4.jpg",
        price: "$5.30",
    },
    {
        title: "Avocado",
        img: "/assets/img5.jpg",
        price: "$15.70",
    },
    {
        title: "Lemon 2",
        img: "/assets/img1.jpg",
        price: "$8.00",
    },
    {
        title: "Banana",
        img: "/assets/img3.jpg",
        price: "$7.50",
    },
    {
        title: "Watermelon",
        img: "/assets/img2.jpg",
        price: "$12.20",
    },
];

const ProductCarouselSection = () => {
    return (
        <section className=" w-full flex min-h-screen flex-col items-center border-2 border-black">

            {/*Headline*/}
            {/*sub headline*/}
            {/*Personalizar las targetas de los productos*/}
            <ProductCarousel slides={list} options={OPTIONS}/>
        </section>
    );
};

export default ProductCarouselSection;
