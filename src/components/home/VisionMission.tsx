import Image from "next/image";
import React from "react";

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
        <Image src={"/handHeldPlane.jpg"} alt="hand held plane" fill className="object-cover" />
      </div>
    </section>
  );
}

export default VisionMission;
