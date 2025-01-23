"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import useAnimationObserver from "@/hooks/useAnimationObserver";

const content = [
  {
    title: "Vision",
    body: "Our vision is to become the global benchmark for flight support services, delivering innovative and reliable solutions that empower airlines and aviation partners to achieve seamless operations. We strive to set new standards in efficiency, safety, and sustainability, ensuring that every flight we support contributes to a more connected and eco-conscious world.",
  },
  {
    title: "Mission",
    body: "Our mission is to provide unparalleled flight support services that enable airlines and aviation partners to operate smoothly and efficiently. Through innovative technology, expert knowledge, and a commitment to sustainability, we ensure that every aspect of flight operations is handled with precision, reliability, and safety, contributing to the seamless movement of people and goods worldwide.",
  },
];

function VisionMission() {
  const { containerRef, controls } = useAnimationObserver({
    animationDefinition: { opacity: 1, x: 0, y: 0 },
    threshold: 0.2,
  });

  return (
    <section
      className="text-black flex flex-col gap-y-10 py-5 px-5 bg-white lg:flex-row-reverse lg:items-center lg:px-24 lg:py-32 xl:gap-x-28 lg:gap-x-10 lg:justify-between overflow-hidden"
      ref={containerRef}
    >
      <div className="flex flex-col gap-y-14 lg:max-w-[38.25rem]">
        {content.map((item, index) => (
          <div key={item.title} className="flex flex-col gap-y-3.5">
            <motion.h3
              className="text-5xl"
              initial={
                index === 0
                  ? { y: "-100%", opacity: 0 }
                  : { x: "100%", opacity: 0 }
              }
              animate={controls}
              transition={{ duration: 0.8 }}
            >
              {item.title}
            </motion.h3>
            <motion.p
              initial={{ x: "100%", opacity: 0 }}
              animate={controls}
              transition={{ duration: 0.8 }}
            >
              {item.body}
            </motion.p>
          </div>
        ))}
      </div>
      <motion.div
        className="relative w-[22.625rem] h-[30rem] rounded-3xl overflow-hidden self-center lg:w-[26.1875rem] lg:h-[34.875rem]"
        initial={{ x: "-100%", opacity: 0 }}
        animate={controls}
        transition={{ duration: 0.8 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <Image
          src={"/handHeldPlane.jpg"}
          alt="hand held plane"
          fill
          className="object-cover"
        />
      </motion.div>
    </section>
  );
}

export default VisionMission;
