import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { useRef } from "react";
import { MoveRight } from "lucide-react";
import Logo from "@/app/assets/Icon.svg";
import HeroImage from "@/app/assets/hero_pic.png";
import HeroCard from "@/app/assets/hero_card.png";

export const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });

  const translateX = useTransform(scrollYProgress, [0, 1], [-150, 250]);
  const translateXX = useTransform(scrollYProgress, [0, 1], [100, -1250]);
  const translateXXX = useTransform(scrollYProgress, [0, 1], [250, -1250]);

  return (
    <section className="bg-white md:h-[578px] h-[898px] mb-2 md:mb-0 border-b border-gray-200 overflow-x-clip">
      <div className="flex flex-wrap">
        <div className="container md:max-w-screen-md md:w-7/12 md:pb-20 md:pt-28 pt-24 md:pl-[188px] md:pr-10">
          <div className="inline-flex">
            <div className="rounded-md bg-black/80 h-5 w-5 mr-3 flex items-center justify-center">
              <div className="rounded-full bg-[#BEF264] h-3 w-3"></div>
            </div>
            <p className="font-medium ">Powering Tomorrow</p>
          </div>
          <h1 className="md:text-6xl sm:text-5xl font-semibold tracking-tighter text-black/80 mt-5">
            The Future of <br />
            Green Energy
          </h1>
          <p className="tracking-tight font-medium md:text-xl text-base text-black/70 mt-6 md:pr-10 pr-6 ">
            Our commitment to green energy is paving the way for a cleaner,
            healthier planet. Join us on a journey towards a future where clean,
            renewable energy sources transform the way we power our lives.
          </p>
          <div className="md:mt-8 mt-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="btn btn-primary mr-3">See our solutions
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="btn btn-secondary">
              Get in Touch
              <MoveRight className="w-4 h-4 ml-2 items-center" />
            </motion.button>
          </div>
        </div>
        <div className="md:relative md:w-5/12 md:h-full mt-12 md:mt-0 ">
          <div className="md:absolute top-0 md:-right-12 md:px-3 md:w-full md:h-[578px] flex flex-col justify-end items-center">
            <motion.div className="bg-[#BEF264] md:w-full md:h-full md:absolute md:left-[10.25rem] flex flex-1 "
              style={{
                translateX: translateXX,
              }}>
            </motion.div>
            <motion.img
              src={HeroImage.src}
              alt="hero image"
              width={512}
              height={512}
              className="md:w-auto md:h-auto rounded-full md:absolute md:top-[0.05rem] md:-left-[2rem] sm:left-2 hidden md:inline"
              style={{
                translateX,
              }}
            />
            <motion.img
              src={HeroImage.src}
              alt="hero image"
              width={512}
              height={512}
              className="md:w-auto md:h-auto rounded-full md:absolute md:top-[0.05rem] md:-left-[2rem] sm:left-2 inline md:hidden"
              style={{
                translateX: translateXXX,
              }}
            />
            <motion.img
              src={HeroCard.src}
              alt="hero image"
              width={409}
              height={233}
              className="w-[360px] md:h-auto absolute md:bottom-[2.5rem] md:-left-[64px]"
              animate={{
                translateY: [-35, 35],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 3,
                ease: "easeInOut",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
