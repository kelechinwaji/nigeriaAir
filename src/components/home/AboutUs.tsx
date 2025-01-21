import Image from "next/image";
import React from "react";

const content = [
  {
    title: "About Us",
    body: "InterAir is a premier flight support agency that provides a comprehensive range of services to airlines and aviation partners globally. Specializing in ground handling, aircraft maintenance, fueling, flight dispatch, and more, we ensure smooth and efficient operations for every flight",
  },
  {
    title: "",
    body: "Our experienced team leverages cutting-edge technology and industry expertise to deliver reliable and cost-effective solutions, with a strong commitment to sustainability. At InterAir, we’re dedicated to setting the standard for operational excellence, helping our clients achieve seamless and safe flight operations worldwide.",
  },
];

function AboutUs() {
  return (
    <div className="text-black flex flex-col gap-y-10 py-5 px-5 bg-white lg:flex-row lg:items-center lg:px-24 lg:py-32 xl:gap-x-28 lg:gap-x-10 lg:justify-between ">
      <div className="flex flex-col gap-y-7 lg:max-w-[38.25rem]">
        {content.map((item, index) => (
          <div key={index} className="flex flex-col gap-y-3.5">
            {item.title && <h3 className="text-5xl">{item.title}</h3>}
            <p>{item.body}</p>
          </div>
        ))}
      </div>
      <div className="relative w-[22.625rem] h-[30rem] rounded-3xl overflow-hidden self-center lg:w-[26.1875rem] lg:h-[34.875rem]  ">
        <Image
          src={"/aircraft-airplane-aviation-transportation-travel-trip.png"}
          alt="aircraft-airplane-aviation-transportation-travel-trip"
          fill
        />
      </div>
    </div>
  );
}

export default AboutUs;
