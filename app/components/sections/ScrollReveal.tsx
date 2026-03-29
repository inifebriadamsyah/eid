import { useScroll, useTransform, motion } from "framer-motion";
import React, { useRef } from "react";
import hand from "@/app/assets/hand.png";
import hand2 from "@/app/assets/hand2.png";
import ketupat from "@/app/assets/ketupat.png";
import lantern from "@/app/assets/lantern.png";

export const ScrollReveal = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    // offset: ["start 0.9", "start 0"],
    offset: ["start end", "end end"],
  });

  const translatingYY = useTransform(scrollYProgress, [0.45, 0.8], [150, -50]);
  const translatingY = useTransform(scrollYProgress, [0.05, 0.8], [150, -50]);
  const translatingXX = useTransform(scrollYProgress, [0.2, 0.6], [-310, -40]);
  const translatingX = useTransform(scrollYProgress, [0.4, 0.8], [270, -30]);
  //  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const paragraph = "Taqabbalallahu minna wa minkum taqabbal yaa kariim, wa ja'alanallahu wa iyyakum minal 'aidin wal faizin. Assalamu 'alaikum wr wb. Mbak Aini";
  const words = paragraph.split(" ");
  return (
    <div className="relative w-full bg-black pb-36 overflow-x-clip">
      <motion.img
        src={hand.src}
        alt="hand"
        height={144}
        className="absolute top-[30rem] right-10 md:right-40 h-28 md:h-40 w-auto z-50 rounded-2xl"
        animate={{
          rotate: ["-10deg", "5deg"],
          scale: 1.2,
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        }}
        style={{
          translateY: translatingY,
        }}
      />
      <motion.img
        src={hand2.src}
        alt="hand2"
        height={144}
        className="absolute top-[82rem] left-6 md:left-72 h-32 md:h-44 w-auto z-50 rounded-2xl"
        animate={{
          rotate: ["14deg", "-14deg"],
          scale: 1.1,
        }}
        transition={{
          duration: 2.4,
          delay: 1,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          translateY: translatingYY,
        }}
      />

      <div className="">
        <div className="sticky top-16 md:top-16 lg:top-40 bg-black/70 overflow-hidden flex justify-center">
          <motion.img
            src={hand2.src}
            alt="hand2"
            height={144}
            className="absolute top-[10rem] -right-4 md:right-12 h-24 md:h-40 w-auto z-50 rounded-2xl"
            animate={{
              rotate: ["-10deg", "10deg"],
              translateY: [-25, 25],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "mirror",
            }}
            style={{
              translateX: translatingX,
            }}
          />
          <motion.img
            src={lantern.src}
            alt="lantern"
            height={144}
            className="absolute top-[24rem] -left-2 md:left-48 h-28 md:h-44 w-auto z-50 rounded-2xl"
            animate={{
              rotate: ["-20deg", "10deg"],
              translateY: [-35, 15],
            }}
            transition={{
              duration: 3.7,
              delay: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              translateX: translatingXX,
            }}
          />
          <p
            // ref={targetRef}
            className="text-[2rem] md:text-[54px] word-spacing-wide md:px-10 py-16 px-12 max-w-5xl text-white/70 tracking-normal flex flex-wrap leading-[1.05] font-normal"
          >
            {words.map((word, i) => {
              const start = i / words.length;
              const end = start + 1 / words.length;
              return (
                <Word key={i} progress={scrollYProgress} range={[start, end]}>
                  {word}
                </Word>
              );
            })}
          </p>
        </div>

        <div className="h-[488vh]" ref={targetRef}></div>
      </div>
    </div>
  );
};

const Word = ({ children, progress, range }: any) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="relative mr-3 mt-3">
      <span className="absolute opacity-20">{children}</span>
      <motion.span style={{ opacity: opacity }}>{children}</motion.span>
    </span>
  );
};
