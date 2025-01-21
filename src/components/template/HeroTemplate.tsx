import { mergeClassName } from "@/utils";
import Image from "next/image";
import React, { ReactNode } from "react";

type ClassNames =
  | "container"
  | "imageContainer"
  | "image"
  | "infoContainer"
  | "headline"
  | "subtext";

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
};

function HeroTemplate({ img, headline, subtext, classNames, children }: Props) {
  return (
    <section
      className={mergeClassName(
        "flex flex-col gap-y-10 items-center px-5 py-5 sm:flex-row-reverse sm:items-center sm:gap-x-10 sm:justify-between lg:px-24 lg:py-20",
        classNames?.container
      )}
    >
      <div
        className={mergeClassName(
          "relative w-72 h-96 rounded-3xl overflow-hidden md:ml-28 sm:mr-10 lg:w-96 lg:h-[33rem]",
          classNames?.imageContainer
        )}
      >
        <Image
          src={img.src}
          alt={img.alt}
          fill
          objectFit="cover"
          className={classNames?.image}
        />
      </div>
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
        <p
          className={mergeClassName(
            "lg:max-w-sm lg:leading-7",
            classNames?.subtext
          )}
        >
          {subtext}
        </p>

        {children}
      </section>
    </section>
  );
}

export default HeroTemplate;
