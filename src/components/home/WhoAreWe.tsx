import Image from "next/image";
import React from "react";

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

function WhoAreWe() {
  return (
    <section className="text-black flex flex-col gap-y-10 py-5 px-5 bg-white lg:flex-row-reverse lg:items-center lg:px-24 lg:py-32 xl:gap-x-28 lg:gap-x-10 lg:justify-between ">
      <div className="flex flex-col gap-y-14 lg:max-w-[38.25rem]">
        {content.map((item) => (
          <div key={item.title} className="flex flex-col gap-y-3.5">
            <h3 className="text-5xl">{item.title}</h3>
            <p>{item.body}</p>
          </div>
        ))}
      </div>
      <div className="relative w-[22.625rem] h-[30rem] rounded-3xl overflow-hidden self-center lg:w-[26.1875rem] lg:h-[34.875rem]  ">
        <Image src={"/dream-liner.jpg"} alt="hand held plane" fill />
      </div>
    </section>
  );
}

export default WhoAreWe;
