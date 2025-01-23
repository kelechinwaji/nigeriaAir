import { mergeClassName } from "@/utils";
import Image from "next/image";
import React from "react";

const content = [
  {
    title: "Email",
    icon: "/contact/emails.svg",
    info: [
      "ops@interairnigeria.com",
      "interairops@gmail.com",
      "interairops@yahoo.co.uk",
    ],
    ref: "mailto:",
  },
  {
    title: "Phone",
    icon: "/contact/phone-line.svg",
    info: ["+2349030105550", "+2348037865676", "+2348037483384"],
    ref: "tel:",
  },
  {
    title: "Location",
    icon: "/contact/location.svg",
    info: [
      "SAHCO Complex Cargo Terminal, Murtala Mohammed International Airport, Ikeja Lagos, Nigeria Sita LOSASXH.",
    ],
    ref: "#",
  },
];

function ContactInfo() {
  return (
    <div className="px-5 py-5 lg:px-24 lg:py-20 bg-white flex flex-col gap-y-7 lg:flex-row lg:justify-around">
      {content.map((item, index) => (
        <div key={index} className="flex flex-col gap-y-2 items-center lg:gap-y-3.5">
          <div className="flex flex-col gap-y-1 lg:gap-y-3.5">
            <div className="relative size-8 mx-auto lg:size-16">
              <Image src={item.icon} alt={item.title} fill className="object-cover" />
            </div>
            <h4 className="text-[2rem] leading-10 text-black lg:text-5xl">
              {item.title}
            </h4>
          </div>
          <div className="flex flex-col">
            {item.info.map((info, id, arr) => (
              <a
                key={id}
                href={item.ref + info}
                target="_blank"
                className={mergeClassName(
                  "leading-7 block text-center text-[#616161]",
                  item.ref === "#" && "max-w-72"
                )}
              >
                {info}
                {arr.length - 1 !== id ? "," : ""}
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ContactInfo;
