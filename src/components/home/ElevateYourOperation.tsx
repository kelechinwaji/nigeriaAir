import React from "react";

const services = [
  "24/7 Global Support",
  "Tailored Solutions For Every Flight ",
  "Commitment to Safety and Sustainability",
];

function ElevateYourOperation() {
  return (
    <section className="pt-10 pb-20 px-6 flex flex-col gap-y-2 [&>*]:text-white bg-elevate_ops bg-no-repeat bg-center bg-cover lg:pt-[4.3125rem] lg:pb-[6.625rem] lg:px-24 lg:items-center lg:gap-y-8 bg-blend-multiply">
      <h2 className="text-xl leading-10 lg:text-5xl font-bold">
        Ready To Elevate Your Flight Operation
      </h2>
      <div className="flex flex-col gap-y-1 lg:items-center lg:gap-y-7">
        <p className="leading-7 lg:text-center">
          "Join the airlines, cargo operators, and private aviation leaders who
          trust InterAir to deliver seamless, efficient, and reliable flight
          support services. From ground handling to fueling, we ensure your
          operations run smoothly, 24/7, across the globe.
        </p>
        <ul className="flex flex-col gap-y-2 pl-2.5 lg:items-center lg:gap-y-5">
          {services.map((service, index) => (
            <li key={index} className="flex items-center gap-x-3">
              <div className="size-4 bg-white" />
              <p>{service}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ElevateYourOperation;
