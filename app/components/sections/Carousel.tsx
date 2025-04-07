import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Expert1 from "@/app/assets/expert-1.png";
import Expert2 from "@/app/assets/expert-2.png";
import Expert3 from "@/app/assets/expert-3.png";
import Expert4 from "@/app/assets/expert-4.png";
import { url } from "inspector";

const Carousel = () => {
    return (
        <div className="bg-white">

            <HorizontalScrollCarousel />

        </div>
    );
};

const HorizontalScrollCarousel = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-55%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-white">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-4">
                    {cards.map((card) => {
                        return <Card card={card} key={card.id} />;
                    })}
                </motion.div>
            </div>
        </section>
    );
};

const Card = ({ card }: any) => {
    return (
        <div
            key={card.id}
            className="container group relative h-[450px] w-[320px] overflow-hidden bg-neutral-200 rounded-3xl"
        >
            <div
                style={{
                    backgroundImage: `url(${card.url})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
            ></div>
            <div className="p-4 absolute bottom-4 left-2/4 flex flex-col w-[calc(100%-2.25rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">

                <h6 className="font-semibold">{card.title}</h6>
                <p className="font-normal tracking-tight">{card.title}</p>
            </div>
        </div>
    );
};

export default Carousel;
const cards = [
    {

        url: '@/app/assets/expert-1.png',
        title: "Title Title 1",
        id: 1,
    },
    {
        src: '@/app/assets/expert-1.png',
        title: "Title 2",
        id: 2,
    },
    {
        src: '@/app/assets/expert-1.png',
        title: "Title 3",
        id: 3,
    },
    {
        src: '@/app/assets/expert-1.png',
        title: "Title 4",
        id: 4,
    },
    {
        src: '@/app/assets/expert-1.png',
        title: "Title 5",
        id: 5,
    },
    {
        src: '@/app/assets/expert-1.png',
        title: "Title 6",
        id: 6,
    },
    {
        src: '@/app/assets/expert-1.png',
        title: "Title 7",
        id: 7,
    },
];