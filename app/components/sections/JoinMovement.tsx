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
import JoinImage from "@/app/assets/join-image.png";


export const JoinMovement = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateX = useTransform(scrollYProgress, [0, 1], [-750, 750]);
  return (
    <section className="bg-[#022C22] md:overflow-x-clip mt-2 md:h-[452px] pb-16 sm:px-0">
      <div className="relative md:w-w/6">
        <Image src={JoinImage} alt="join movement" width={600} className="absolute md:h-[452px] ml-6 md:ml-0 md:mt-0 mt-14 md:-top-0 md:right-0 w-auto" />
      </div>
      <div className="container flex sm:flex-col md:w-full gap-10 pt-[28rem] md:pb-20 md:pt-32 items-start justify-start">
        <div>
          <h1 className="md:text-6xl text-5xl font-normal tracking-tight text-white/90">
            Join the green <br /> movement
          </h1>
          <h5 className="font-normal text-white/80 text-lg md:my-4 my-4">
            Our commitment to green energy is paving the way for a cleaner,
            healthier planet.
          </h5>
        </div>
        <div className="mt-2 md:flex md:justify-end">
          <button className="btn btn-primary">
            Get in touch <MoveRight className="h-4 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};
