import React from "react";
import Link from "next/link";
import Image from "next/image";

import { useRef, useState } from "react";
import { Cursor } from "@/app/components/primitive/components/hover-cursor";
import { AnimatePresence, motion } from "framer-motion";
import { PlusIcon } from "lucide-react";

import { MoveRight } from "lucide-react";
import Blog1 from "@/app/assets/blog-1.png";
import Blog2 from "@/app/assets/blog-2.png";
import Blog3 from "@/app/assets/blog-3.png";
import Blog4 from "@/app/assets/blog-4.png";
import Expert1 from "@/app/assets/expert-1.png";
import Expert2 from "@/app/assets/expert-2.png";
import Expert3 from "@/app/assets/expert-3.png";
import Expert4 from "@/app/assets/expert-4.png";

const BlogList = [
  {
    title: "Wind Power: A Breath of Fresh Air for Clean Energy Enthusiasts",
    caption:
      "Solar energy is revolutionizing the way we power our world. In this blog post, we'll delve into the incredible potential of solar technology, its environmental benefits, and how you can tap into this sustainable energy source for a brighter future.",
    writer: "Wade Warren",
    duration: "7 min read",
    src: Blog2,
    alt: "blog pict",
    writerPict: Expert1,
  },
  {
    title: "From Trash to Treasure: The Promising World of Biomass Energy",
    caption:
      "Solar energy is revolutionizing the way we power our world. In this blog post, we'll delve into the incredible potential of solar technology, its environmental benefits, and how you can tap into this sustainable energy source for a brighter future.",
    writer: "Jenny Wilson",
    duration: "12 min read",
    src: Blog3,
    alt: "blog pict",
    writerPict: Expert3,
  },
  {
    title: "Hydrogen: Fueling the Green Energy Revolution",
    caption:
      "Solar energy is revolutionizing the way we power our world. In this blog post, we'll delve into the incredible potential of solar technology, its environmental benefits, and how you can tap into this sustainable energy source for a brighter future.",
    writer: "Leslie Alexander",
    duration: "6 min read",
    src: Blog4,
    alt: "blog pict",
    writerPict: Expert4,
  },
];

export const Blog = () => {
  const [isHovering, setIsHovering] = useState(false);
  const targetRef = useRef<HTMLDivElement>(null);

  const handlePositionChange = (x: number, y: number) => {
    if (targetRef.current) {
      const rect = targetRef.current.getBoundingClientRect();
      const isInside =
        x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
      setIsHovering(isInside);
    }
  };

  return (
    <section className="bg-white md:overflow-x-clip mt-6 pt-10 pb-16 sm:px-0">
      <div className="container md:grid md:grid-cols-2 sm:flex sm:flex-col gap-10 md:w-full md:pb-8 md:pt-16 px-12 items-start">
        <div className="mt-0">
          <h1 className="text-5xl mb-12 md:mb-0 md:text-6xl font-regular tracking-tight text-black/80">
            Blog
          </h1>
        </div>
        <div className="mt-2 md:flex md:justify-end sm:hidden">
          <button className="btn btn-text">
            See all <MoveRight className="h-4 ml-2" />
          </button>
        </div>
      </div>
      <div className="container flex md:flex-row flex-col gap-10 md:w-full md:pb-20 md:pt-16 md:px-12 items-start">
        <Cursor
          attachToParent
          variants={{
            initial: { scale: 0.3, opacity: 0 },
            animate: { scale: 1, opacity: 1 },
            exit: { scale: 0.3, opacity: 0 },
          }}
          springConfig={{
            bounce: 0.001,
          }}
          transition={{
            ease: "easeInOut",
            duration: 0.15,
          }}
          onPositionChange={handlePositionChange}
        >
          <motion.div
            animate={{
              width: isHovering ? 80 : 16,
              height: isHovering ? 32 : 16,
            }}
            className="flex items-center justify-center rounded-[24px] bg-gray-500/40 backdrop-blur-md dark:bg-gray-300/40"
          >
            <AnimatePresence>
              {isHovering ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.6 }}
                  className="inline-flex w-full items-center justify-center"
                >
                  <div className="inline-flex items-center text-sm text-white dark:text-black">
                    More <PlusIcon className="ml-1 h-4 w-4" />
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </motion.div>
        </Cursor>
        <div className="flex flex-col md:w-7/12" ref={targetRef}>
          <Image
            src={Blog1}
            alt="blog-1 pict"
            height={460}
            className="w-full rounded-2xl mb-2"
          />
          <div className="md:flex md:flex-row my-3 hidden ">
            <div className="text-sm font-medium border-2 border-[#222]/20 px-3 py-1 items-center rounded-full tracking-normal mr-2">
              Solar Power
            </div>
            <div className="text-sm font-medium border-2 border-[#222]/20 px-2 py-1 items-center rounded-full tracking-normal">
              Solutions
            </div>
          </div>
          <h4 className="text-3xl mx-1 md:mx-0 font-medium tracking-tight my-2">
            Harnessing the Power of the Sun: Exploring the World of Solar Energy
          </h4>
          <p className="md:text-base text-sm mx-1 md:mx-0 my-2">
            Solar energy is revolutionizing the way we power our world. In this
            blog post, we'll delve into the incredible potential of solar
            technology,
          </p>
          <div className="flex flex-row my-3 items-center">
            <Image
              src={Expert2}
              alt="writer pict"
              height={60}
              width={60}
              className="w-11 h-11 object-none object-top rounded-full mr-5"
            />
            <p className="mr-2 font-semibold ">Leslie Alexander </p>
            <p className="mr-2 text-xs">✨</p>
            <p className="mr-2">9 min read</p>
          </div>
        </div>
        <div className="flex flex-col md:w-5/12 md:ml-4" >
          {BlogList.map(({ title, writer, duration, src, alt, writerPict }) => (
            <div className="flex md:flex-row flex-col items-center md:mr-6 md:mb-5 mb-6">
              <Image
                src={src}
                alt={alt}
                height={460}
                className="w-full h-[14rem] md:w-[12rem] object-cover object-center rounded-2xl mr-5"
              />
              <div className="flex flex-col my-4 md:my-0">
                <h6 className="text-xl font-medium tracking-tight">{title}</h6>
                <div className="flex flex-row my-3 items-center">
                  <Image
                    src={writerPict}
                    alt="writer pict"
                    height={72}
                    width={72}
                    className="w-10 h-10 object-none object-top rounded-full mr-3"
                  />
                  <p className="mr-2 font-semibold text-sm">{writer}</p>
                  <p className="mr-2 text-xs">✨</p>
                  <p className="mr-1 text-sm">{duration}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
