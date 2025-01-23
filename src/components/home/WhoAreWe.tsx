"use client";
import { mergeClassName } from "@/utils";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import useAnimationObserver from "@/hooks/useAnimationObserver";

const content = [
  {
    title: "Who Are We",
    body: "InterAir is a global leader in flight support services, dedicated to helping airlines, cargo operators, and private aviation partners achieve seamless operations. With years of expertise in the aviation industry, we provide comprehensive solutions tailored to meet the unique demands of each client",
  },
  {
    title: "What We Do",
    body: "From ground handling and aircraft maintenance to fueling and flight dispatch, we handle every aspect of flight support with precision and care. Our services are designed to reduce operational complexities, enhance efficiency, and ensure safety at every step.",
  },
];

type Props = {
  classNames?: Partial<Record<"container", string>>;
};

function WhoAreWe({ classNames }: Props) {
  const { containerRef, controls } = useAnimationObserver({
    animationDefinition: { opacity: 1, x: 0, y: 0 },
    threshold: 0.8,
  });
  return (
    <section
      className={mergeClassName(
        "text-black flex flex-col gap-y-10 py-5 px-5 bg-white lg:flex-row-reverse lg:items-center lg:px-24 lg:py-32 xl:gap-x-28 lg:gap-x-10 lg:justify-between",
        classNames?.container
      )}
      ref={containerRef}
    >
      <div
        className={mergeClassName("flex flex-col gap-y-14 lg:max-w-[38.25rem]")}
      >
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
        className={mergeClassName(
          "relative w-[22.625rem] h-[30rem] rounded-3xl overflow-hidden self-center lg:w-[26.1875rem] lg:h-[34.875rem]"
        )}
        initial={{ x: "-100%", opacity: 0 }}
        animate={controls}
        transition={{ duration: 0.8 }}
      >
        <Image
          src={"/dream-liner.jpg"}
          alt="hand held plane"
          fill
          className="object-cover"
        />
      </motion.div>
    </section>
  );
}

export default WhoAreWe;
