import { useScroll, useTransform, motion } from "framer-motion";
import React, { useRef } from "react";
import jellyfish from "@/app/assets/jellyfish.jpg";
import catfish from "@/app/assets/catfish-min.png";
import drum from "@/app/assets/drum.png";
import lantern from "@/app/assets/lantern.png";

export const ScrollReveal = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    // offset: ["start 0.9", "start 0"],
    offset: ["start end", "end end"],
  });

  const translatingYY = useTransform(scrollYProgress, [0.05, 0.75], [375, -420]);
  const translatingY = useTransform(scrollYProgress, [0.05, 0.75], [325, -350]);
  const translatingXX = useTransform(scrollYProgress, [0.4, 0.8], [-310, -20]);
  const translatingX = useTransform(scrollYProgress, [0.5, 0.9], [270, -60]);
  //  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const paragraph = "ubur - ubur ikan lele, selamat lebaran le 🙏";
  const words = paragraph.split(" ");
  return (
    <div className="relative w-full bg-black pb-36 overflow-x-clip">
      <motion.img
        src={jellyfish.src}
        alt="jelly"
        height={144}
        className="absolute top-[30rem] -right-8 md:right-40 h-24 md:h-40 w-auto z-50 rounded-2xl"
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
        src={catfish.src}
        alt="catfish"
        height={144}
        className="absolute top-[48rem] left-6 md:left-72 h-28 md:h-44 w-auto z-50 rounded-2xl"
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
            src={drum.src}
            alt="drum"
            height={144}
            className="absolute top-[30rem] -right-8 md:right-12 h-28 md:h-40 w-auto z-50 rounded-2xl"
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
            className="absolute top-[15rem] left-12 md:left-48 h-28 md:h-44 w-auto z-50 rounded-2xl"
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
            className="text-6xl md:text-[104px] md:px-10 py-16 px-12 max-w-5xl text-white/70 tracking-wider font-semibold flex flex-wrap leading-[1.15]"
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

        <div className="h-[128vh]" ref={targetRef}></div>
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
