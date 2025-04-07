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
    imageSrc: Expert1,
    alt: "expert pict 1",
  },
  {
    name: "Cameron Williamson",
    role: "Senior Sustainability Consultant",
    imageSrc: Expert2,
    alt: "expert pict 2",
  },
  {
    name: "Courtney Henry",
    role: "Energy Analysts",
    imageSrc: Expert3,
    alt: "expert pict 3",
  },
  {
    name: "Dianne Russell",
    role: "Senior Renewable Energy Engineer",
    imageSrc: Expert4,
    alt: "expert pict 4",
  },
  {
    name: "Jenny Wilson",
    role: "Senior Sustainability Consultant",
    imageSrc: Expert1,
    alt: "expert pict 5",
  },
  {
    name: "Cameron Williamson",
    role: "Senior Sustainability Consultant",
    imageSrc: Expert2,
    alt: "expert pict 6",
  },
  {
    name: "Courtney Henry",
    role: "Energy Analysts",
    imageSrc: Expert3,
    alt: "expert pict 7",
  },
  {
    name: "Dianne Russell",
    role: "Senior Renewable Energy Engineer",
    imageSrc: Expert4,
    alt: "expert pict 8",
  },
];

const Card = ({ card }: any) => {
  return (
      <div
          key={card.id}
          className="container group relative h-[450px] w-[320px] overflow-hidden bg-neutral-200 rounded-3xl"
      >
          <div
              style={{
                  backgroundImage: `url(${card.imageSrc.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "top",
              }}
              className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
          ></div>
          <div className="p-4 absolute bottom-4 left-2/4 flex flex-col w-[calc(100%-2.25rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">

              <h6 className="font-semibold">{card.name}</h6>
              <p className="font-normal tracking-tight">{card.role}</p>
          </div>
      </div>
  );
};

export const ExpertCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
      target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["2%", "-60%"]);

  return (
    <section className=" md:overflow-x-clip pt-10 pb-16 sm:px-0 bg-black">
      <div className="container md:grid md:grid-cols-2 sm:flex sm:flex-col gap-10 md:w-full md:pt-16 px-12 items-start">

      </div>
      <div ref={targetRef} className="relative h-[300vh] ">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden container [mask-image:linear-gradient(90deg,transparent_0%,black_5%,black_95%,transparent_100%)]">
                <motion.div style={{ x }} className="flex gap-4">
                    {Expert.map((card) => {
                        return <Card card={card} key={card.alt} />;
                    })}
                </motion.div>
            </div>
        </div>
    </section>
  );
};
