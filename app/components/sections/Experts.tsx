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
import Expert1 from "@/app/assets/expert-1.png";
import Expert2 from "@/app/assets/expert-2.png";
import Expert3 from "@/app/assets/expert-3.png";
import Expert4 from "@/app/assets/expert-4.png";

const Expert = [
  {
    name: "Jenny Wilson",
    role: "Senior Sustainability Consultant",
    src: Expert1,
    alt: "about us pict",
  },
  {
    name: "Cameron Williamson",
    role: "Senior Sustainability Consultant",
    src: Expert2,
    alt: "about us pict",
  },
  {
    name: "Courtney Henry",
    role: "Energy Analysts",
    src: Expert3,
    alt: "about us pict",
  },
  {
    name: "Dianne Russell",
    role: "Senior Renewable Energy Engineer",
    src: Expert4,
    alt: "about us pict",
  },
];

export const Experts = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateX = useTransform(scrollYProgress, [0, 1], [-1500, 1500]);
  return (
    <section className="bg-white  md:overflow-x-clip mt-6 pt-10 pb-16 sm:px-0">
      <div className="container md:grid md:grid-cols-2 sm:flex sm:flex-col gap-10 md:w-full md:pb-20 md:pt-16 px-12 items-start">
        <div>
          <h1 className="md:text-6xl text-5xl font-regular tracking-tight text-black/80">
            Meet our experts
          </h1>
          <h5 className="font-normal text-base md:my-4 my-4">
            Our team boasts top green energy experts, driving innovation in
            sustainability.
          </h5>
        </div>
        <div className="mt-2 md:flex md:justify-end sm:hidden">
          <button className="btn btn-text">
            Read more <MoveRight className="h-4 ml-2" />
          </button>
        </div>
      </div>
      <div className="overflow-hidden py-6 [mask-image:linear-gradient(90deg,transparent_10%,black_30%,black_70%,transparent_90%)]">
        <motion.div
          className="flex gap-5 justify-center pr-5"
          style={{
            translateX,
          }}
        >
          {Expert.map(({ name, role, src, alt }) => (
            <div className="relative md:flex md:flex-none sm:my-4">
              <Image
                key={alt}
                src={src}
                alt={alt}
                width={240}
                className="flex-none w-[300px] h-auto rounded-xl"
              />
              <div className="p-4 absolute bottom-4 left-2/4 flex flex-col w-[calc(100%-2.25rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
                <h6 className="font-semibold">{name}</h6>
                <p className="font-normal tracking-tight">{role}</p>
              </div>
            </div>
          ))}
          {Expert.map(({ name, role, src, alt }) => (
            <div className="relative md:flex md:flex-none sm:my-4">
              <Image
                key={alt}
                src={src}
                alt={alt}
                width={240}
                className="flex-none w-[300px] h-auto rounded-xl"
              />
              <div className="p-4 absolute bottom-4 left-2/4 flex flex-col w-[calc(100%-2.25rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
                <h6 className="font-semibold">{name}</h6>
                <p className="font-normal tracking-tight">{role}</p>
              </div>
            </div>
          ))}

        </motion.div>
      </div>
      {/* <div className="md:pl-[14rem] hide-scrollbar md:flex md:flex-row sm:flex sm:flex-col sm:justify-center items-center h-[480x] w-full md:items-start md:justify-start overflow-x-auto lg:h-[480px] xl:h-[640px]">
        {Expert.map(({ name, role, src, alt }) => (
          <div className="relative mx-3 w-[300px] sm:my-4">
            <Image
              src={src}
              alt={alt}
              width={340}
              className="h-[400px] rounded-2xl object-cover object-center"
            />
            <div className="p-4 absolute bottom-4 left-2/4 flex flex-col w-[calc(100%-2.25rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
              <h6 className="font-semibold">{name}</h6>
              <p className="font-normal tracking-tight">{role}</p>
            </div>
          </div>
        ))}
      </div> */}
    </section>
  );
};
