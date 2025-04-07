import React, { useState } from "react";
import Link from "next/link";
import { TextEffect } from "@/app/components/primitive/components/text-effects";

import Image from "next/image";
// import MoveRight from "@/app/assets/arrow-right.svg";
import { MoveRight } from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { useRef } from "react";
import Logo from "@/app/assets/Icon.svg";
import HeroImage from "@/app/assets/hero_pic.png";
import HeroImage2 from "@/app/assets/hero_pic2.png";
import HeroImage3 from "@/app/assets/hero_pic3.png";
import HeroImage4 from "@/app/assets/hero_pic4.png";
import HeroImage5 from "@/app/assets/hero_pic5.png";
import HeroCard from "@/app/assets/hero_card.png";

export const HeroDuo = () => {

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [100, -950]);
  const translateYY = useTransform(scrollYProgress, [0, 1], [100, -1700]);

  const translateX = useTransform(scrollYProgress, [0, 1], [-120, 1350]);
  const translateXX = useTransform(scrollYProgress, [0, 1], [100, -1250]);

  const rotateRight = useTransform(scrollYProgress, [0, 1], [-12.5, 195]);
  const rotateLeft = useTransform(scrollYProgress, [0, 1], [12.5, -195]);

  return (

    <section className=" h-[667px] border-b border-gray-200 md:overflow-x-clip overflow-hidden [mask-image:linear-gradient(180deg,black_5%,black_78%,transparent_100%)]">

      <div className="container justify-center text-center md:max-w-screen-md md:w-full pb-20 pt-20 mx-auto ">
        {/* <div className="inline-flex items-center">
          <div className="rounded-md bg-black/80 h-4 w-4 mr-3 flex items-center justify-center">
            <div className="rounded-full bg-[#BEF264] h-[8px] w-[8px]"></div>
          </div>
          <p className="font-medium ">Powering Tomorrow</p>
        </div> */}
        <h1 className="md:text-5xl sm:text-5xl font-semibold tracking-tight text-black/70 mt-5">
          <TextEffect
            per="word"
            delay={3.25}
            variants={{
              container: {
                hidden: {
                  opacity: 0,
                },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.05,
                  },
                },
              },
              item: {
                hidden: {
                  opacity: 0,
                  rotateX: 90,
                  y: 10,
                },
                visible: {
                  opacity: 1,
                  rotateX: 0,
                  y: 0,
                  transition: {
                    duration: 0.2,
                  },
                },
              },
            }}
          >
            Solusi UMKM
          </TextEffect>
          <TextEffect per="char" delay={3.75} className="text-[#fcb900]">
            Go-Digital
          </TextEffect>
        </h1>
        {/* <TextEffect
          per="word"
          delay={1}
          as="h4"
          preset="blur"
          className="tracking-tight font-medium md:text-xl text-base text-black/70 md:mt-6 mt-8 mx-4 md:mx-0"
        >
          Our commitment to green energy is paving the way for a cleaner,
          healthier planet. Join us on a journey towards a future where clean,
          renewable energy sources transform the way we power our lives.
        </TextEffect> */}

        <TextEffect
          per="line"
          delay={4.15}
          as="h5"
          className="tracking-tight leading-7 font-medium md:text-xl text-base text-black/70 md:mt-6 mt-12 mx-4 md:mx-0"
          segmentWrapperClassName="overflow-hidden block"
          variants={{
            container: {
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2 },
              },
            },
            item: {
              hidden: {
                opacity: 0,
                y: 40,
              },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.6,
                },
              },
            },
          }}
        >
          {`Our commitment to green energy is paving the way for a cleaner,
healthier planet. Join us on a journey towards a future where clean,
renewable energy sources transform the way we power our lives.`}
        </TextEffect>

        <div className="mt-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="btn btn-secondary mr-3"
          >
            Layanan Kami
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="btn btn-primary"
          >
            Hubungi Kami
            <MoveRight className="w-4 h-4 ml-2 items-center" />
          </motion.button>
        </div>
        <div className="mt-20 md:mt-10 md:h-[648px] md:w-full md:flex-1 relative -z-50">
          <motion.img
            src={HeroImage2.src}
            alt="hero image"
            width={270}
            className="md:w-[250px] w-[120px] h-auto absolute md:-top-[28rem] md:-right-[35rem] sm:-top-[11rem] sm:-right-24"
            style={{
              translateY: translateY,
              translateX: translateX,
              rotateZ: rotateRight,
            }}
          />
          <motion.img
            src={HeroImage3.src}
            alt="hero image"
            width={220}
            className="md:w-[220px] w-[120px] h-auto absolute md:-top-[22rem] md:-left-[36rem] sm:-left-[6rem] sm:-top-[4rem]"
            style={{
              translateY: translateYY,
              translateX: translateXX,
              rotateZ: rotateLeft,
            }}
          />
          <motion.img
            src={HeroImage4.src}
            alt="hero image"
            width={500}
            className="md:w-[260px] w-[180px] h-auto absolute md:top-[4.75rem] md:-right-[24rem] sm:-right-[6rem] sm:-bottom-[22rem]"
            style={{
              translateY: translateYY,
              translateX: translateX,
              rotateZ: rotateRight,
            }}
          />
          <motion.img
            src={HeroImage5.src}
            alt="hero image"
            width={512}
            className="md:w-[512px] w-[320px] h-auto absolute md:top-[5.25rem] md:-left-[20rem] sm:-left-[8rem] sm:-bottom-[16rem]"
            style={{
              translateY: translateY,
              translateX: translateXX,
              rotateZ: rotateLeft,
            }}
          />
        </div>
      </div>
    </section>
  );
};

