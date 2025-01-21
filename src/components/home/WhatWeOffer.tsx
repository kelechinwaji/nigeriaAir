import React from "react";

type Props = {};

const services = [
  {
    title: "Overflight & Landing Permit",
    copy: "At InterAir, our close partnerships with Civil Aviation Authorities, authorized agencies, and regional offices worldwide enable us to secure over-flight and landing permits with unmatched efficiency. Our dedicated operations team is equipped to process requests within minutes, ensuring our clients can take to the skies with minimal delay, even on short notice.",
    theme: "bg-[#CDCCF5]",
  },
  {
    title: "Weather & Flight Planning",
    copy: "At InterAir, our close partnerships with Civil Aviation Authorities, authorized agencies, and regional offices worldwide enable us to secure over-flight and landing permits with unmatched efficiency. Our dedicated operations team is equipped to process requests within minutes, ensuring our clients can take to the skies with minimal delay, even on short notice.",
    theme: "bg-[#FFE5E5]",
  },
  {
    title: "Crew Transportation",
    copy: "At InterAir, our close partnerships with Civil Aviation Authorities, authorized agencies, and regional offices worldwide enable us to secure over-flight and landing permits with unmatched efficiency. Our dedicated operations team is equipped to process requests within minutes, ensuring our clients can take to the skies with minimal delay, even on short notice.",
    theme: "bg-[#F2C3B2]",
  },
  {
    title: "Passenger & Aircraft Security",
    copy: "At InterAir, our close partnerships with Civil Aviation Authorities, authorized agencies, and regional offices worldwide enable us to secure over-flight and landing permits with unmatched efficiency. Our dedicated operations team is equipped to process requests within minutes, ensuring our clients can take to the skies with minimal delay, even on short notice.",
    theme: "bg-[#FF698D]",
  },
  {
    title: "Hotel Accommodation",
    copy: "At InterAir, our close partnerships with Civil Aviation Authorities, authorized agencies, and regional offices worldwide enable us to secure over-flight and landing permits with unmatched efficiency. Our dedicated operations team is equipped to process requests within minutes, ensuring our clients can take to the skies with minimal delay, even on short notice.",
    theme: "bg-[#FFE5E5]",
  },
  {
    title: "Aircraft Fuel Uplift",
    copy: "At InterAir, our close partnerships with Civil Aviation Authorities, authorized agencies, and regional offices worldwide enable us to secure over-flight and landing permits with unmatched efficiency. Our dedicated operations team is equipped to process requests within minutes, ensuring our clients can take to the skies with minimal delay, even on short notice.",
    theme: "bg-[#A697E0]",
  },
];

function WhatWeOffer({}: Props) {
  return (
    <section className="px-5 flex flex-col gap-y-10 [&>*]:text-black lg:px-24 bg-white py-10">
      <h2 className="text-[2rem] leading-10 lg:self-center lg:text-5xl">
        What We Offer
      </h2>
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(22.625rem,_1fr))] gap-10">
        {services.map((item, index) => (
          <div
            key={item.title}
            className="pt-12 pb-[7.75rem] px-3.5 flex flex-col gap-y-1 rounded-2xl shadow-services items-center lg:items-start lg:pt-11 lg:pb-20 lg:px-6 lg:rounded-3xl"
          >
            <div
              className={`w-11 h-9 rounded text-white bg-black flex items-center justify-center ${item.theme}`}
            >
              0{index + 1}
            </div>
            <h3 className="text-xl leading-10">{item.title}</h3>
            <p className="text-sm leading-6 text-center lg:text-start">
              {item.copy}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhatWeOffer;
