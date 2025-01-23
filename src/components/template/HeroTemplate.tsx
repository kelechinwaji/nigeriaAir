"use client";
import { mergeClassName } from "@/utils";
import Image from "next/image";
import React, { ReactNode, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

type ClassNames =
  | "container"
  | "imageContainer"
  | "image"
  | "infoContainer"
  | "headline"
  | "subtext";

type AnimationPostionX = "text" | "image";

type Props = {
  img: {
    alt: string;
    src: string;
  };
  headline: {
    main: string;
    sub: string;
  };
  subtext: string;
  classNames?: Partial<Record<ClassNames, string>>;
  children?: ReactNode;
  animation?: Partial<Record<AnimationPostionX, string>>;
};

function HeroTemplate({
  img,
  headline,
  subtext,
  classNames,
  children,
  animation = { image: "100%", text: "-100%" },
}: Props) {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ x: 0, opacity: 1 });
  }, []);

  return (
    <section
      className={mergeClassName(
        "flex flex-col gap-y-10 items-center px-5 py-5 sm:flex-row-reverse sm:items-center sm:gap-x-10 sm:justify-between lg:px-24 lg:py-20 bg-layout_hero bg-no-repeat bg-cover",
        classNames?.container
      )}
    >
      <motion.div
        className={mergeClassName(
          "relative w-72 h-96 rounded-3xl overflow-hidden md:ml-28 sm:mr-10 lg:w-96 lg:h-[33rem]",
          classNames?.imageContainer
        )}
        initial={{ x: animation?.image, opacity: 0 }}
        animate={controls}
        transition={{ duration: 0.8 }}
      >
        <Image
          src={img.src}
          alt={img.alt}
          fill
          className={mergeClassName("object-cover", classNames?.image)}
        />
      </motion.div>
      <section
        className={mergeClassName(
          "text-black flex flex-col gap-y-1 sm:max-w-72 md:max-w-md lg:max-w-xl lg:gap-y-7",
          classNames?.infoContainer
        )}
      >
        <h2
          className={mergeClassName(
            "text-[2rem] leading-10 lg:text-6xl",
            classNames?.headline
          )}
        >
          {headline?.main} <span className="text-red-10">{headline?.sub}</span>
        </h2>
        <motion.div
          className="flex flex-col gap-y-1 lg:gap-y-7"
          initial={{ x: animation?.text, opacity: 0 }}
          animate={controls}
          transition={{ duration: 0.8 }}
        >
          <p
            className={mergeClassName(
              "lg:max-w-sm lg:leading-7",
              classNames?.subtext
            )}
          >
            {subtext}
          </p>

          {children}
        </motion.div>
      </section>
    </section>
  );
}

export default HeroTemplate;
