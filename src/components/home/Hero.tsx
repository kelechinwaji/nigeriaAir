import Link from "next/link";
import React from "react";
import HeroTemplate from "../template/HeroTemplate";
import { mergeClassName } from "@/utils";

const content = {
  img: {
    src: "/inter-air-home-hero.jpeg",
    alt: "airplane windows",
  },
  headline: {
    main: "Excellence In Aviation",
    sub: "Service.",
  },
  subtext:
    "InterAir delivers trusted, seamless solutions with exceptional care and customer service. We prioritize reliability and precision to meet every client’s unique needs. With a commitment to excellence, we ensure outstanding experiences in all we do",
};

type Props = {
  title: string;
  text: string;
  classNames?: Partial<Record<string, string>>;
};
const More = ({ classNames, text, title }: Props) => {
  return (
    <div
      className={mergeClassName(
        "p-2.5 rounded-xl bg-white [&_p]:text-black w-24 h-20 shadow-hero flex flex-col gap-y-1 items-center absolute z-[1] lg:pt-5 lg:px-4 lg:pb-6 lg:rounded-3xl lg:gap-y-2 lg:w-44 lg:h-36",
        classNames?.container
      )}
    >
      <p
        className={mergeClassName(
          "font-semibold text-[0.5rem] text-center lg:text-sm",
          classNames?.title
        )}
      >
        {title}
      </p>
      <p
        className={mergeClassName(
          "text-[0.375rem] leading-[0.5rem] text-center lg:text-xs",
          classNames?.text
        )}
      >
        {text}
      </p>
    </div>
  );
};

function Hero() {
  return (
    <HeroTemplate
      {...content}
      imageInfo={
        <>
          <More
            title="Customer-Centric Excellence"
            text="Prioritizing the needs, comfort, and satisfaction of passengers at every touchpoint."
            classNames={{
              container: "top-5 -right-8 lg:top-48 lg:-right-24",
            }}
          />
          <More
            title="Innovation in Travel"
            text="Leveraging technology to redefine convenience and improve every aspect of air trave."
            classNames={{
              container: "top-20 -left-10 lg:top-14 lg:-left-24",
            }}
          />
          <More
            title="Customer-Centric Excellence"
            text="Prioritizing the needs, comfort, and satisfaction of passengers at every touchpoint."
            classNames={{
              container: "bottom-7 -left-10 lg:-bottom-9 lg:-left-24",
            }}
          />
        </>
      }
    >
      <Link
        href={"/contact"}
        className="block p-4 text-center lg:px-7 lg:py-4 bg-red-10 text-white rounded-3xl lg:rounded-3xl lg:font-bold self-start"
      >
        Contact Us
      </Link>
    </HeroTemplate>
  );
}

export default Hero;
