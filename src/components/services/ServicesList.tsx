import Image from "next/image";
import React from "react";

const content = [
  {
    title: "Overflight & landing Permits",
    sub: "At InterAir, we leverage our strong partnerships with Civil Aviation Authorities, Authorized Agencies, and offices worldwide to secure the most efficient overflight and landing permits. Our dedicated operations team processes requests in minutes, ensuring that clients can take to the skies with minimal notice. Whether you're planning a spontaneous flight or need expedited approval, our network and expertise guarantee a seamless, timely experience for every journey.",
    img: "/services/wings.jpg",
  },
  {
    title: "Weather & Flight Planing",
    sub: "Let our dedicated staff expertly plan your next flight with precision and care. Using the latest tools and real-time weather data, our team will craft an optimized flight plan tailored to your needs. We take into account critical factors such as weather patterns, air traffic, and updated airport regulations to ensure a safe, efficient, and cost-effective journey. Trust us to navigate the complexities of flight planning, so you can focus on what matters most.",
    img: "/services/headphones-maps.png",
  },
  {
    title: "FBO & Ground Handling",
    sub: "At InterAir, we leverage our strong partnerships with Civil Aviation Authorities, Authorized Agencies, and offices worldwide to secure the most efficient overflight and landing permits. Our dedicated operations team processes requests in minutes, ensuring that clients can take to the skies with minimal notice. Whether you're planning a spontaneous flight or need expedited approval, our network and expertise guarantee a seamless, timely experience for every journey.",
    img: "/services/ground-handling.png",
  },
  {
    title: "Crew Transportation",
    sub: "InterAir ensures seamless crew transportation with a modern fleet of luxury and specialized vehicles. Whether it's premium cars, limousines, or armored vehicles, we cater to every need with precision and discretion. Our professional drivers are experts in navigation and committed to respecting privacy and specific requests, making the ground journey as smooth and enjoyable as the flight.",
    img: "/services/private-plane.png",
  },
  {
    title: "Passenger & Aircraft Security",
    sub: "InterAir offers comprehensive passenger and aircraft security services, including physical protection to prevent tampering or sabotage, discreet VIP and crew safeguarding, and secure ground transportation with low-profile vehicles driven by security-trained professionals familiar with local traffic patterns. Our commitment to safety ensures peace of mind for passengers, crew, and cargo at every stage of the journey.",
    img: "/services/security.jpg",
  },
  {
    title: "Hotel Accommodation",
    sub: "We understand that cargo flight operations demand extra attention, and we’re fully equipped to handle it. Our dedicated operations team ensures reliable, on-time service for cargo flights traveling to and from any destination worldwide. We are committed to maintaining the highest standards in cargo flight ground handling, tailoring our services to meet the specific needs of each client and ensuring the right level of support at every stage of the journey.",
    img: "/services/couch.jpg",
  },
  {
    title: "cargo Airline",
    sub: "At InterAir, we leverage our strong partnerships with Civil Aviation Authorities, Authorized Agencies, and offices worldwide to secure the most efficient overflight and landing permits. Our dedicated operations team processes requests in minutes, ensuring that clients can take to the skies with minimal notice. Whether you're planning a spontaneous flight or need expedited approval, our network and expertise guarantee a seamless, timely experience for every journey.",
    img: "/services/couch.jpg",
  },
  {
    title: "Air Ambulance",
    sub: "Our team of experienced professionals, along with our global network of handling agents, works around the clock to meet the urgent and specialized needs of Air Ambulance clients. We take pride in our ability to provide fast, tailored services that ensure swift and efficient responses, no matter where in the world the client is located. Our goal is to deliver seamless, high-quality care with a focus on quick turnaround times for every Air Ambulance operation..",
    img: "/services/inside-private.png",
  },
  {
    title: "Aircraft Fuel Uplift",
    sub: "At InterAir, we offer reliable fuel uplift solutions for airlines, charter operators, and private aircraft. With a global network of trusted suppliers, we provide competitive prices for 'Jet A1, TS1, and Avgas/100LL.' Our experienced team ensures timely and accurate fueling, adhering to the highest safety standards. Whether for commercial flights or private jets, we ensure efficient operations and optimal performance with every uplift.",
    img: "/services/fueling-plane.png",
  },
];

function ServicesList() {
  return (
    <section className="px-5 py-10 lg:px-24 lg:py-20 bg-white">
      <ul className="grid grid-cols-[repeat(auto-fit,_minmax(22.625rem,_1fr))] lg:grid-cols-[repeat(auto-fit,_minmax(38.25rem,_1fr))] gap-y-10 gap-x-6">
        {content.map((item, idx) => (
          <li key={idx} className="h-full self-stretch">
            <div className="rounded-t-3xl pb-12 overflow-hidden shadow-servicesList h-full">
              <div className="h-52 w-full lg:h-[22.5rem] relative">
                <Image src={item.img} alt={item.title} fill objectFit="cover" />
              </div>
              <div className="flex flex-col gap-y-2 p-3 lg:px-6 lg:gap-y-3">
                <p className="text-[2rem] leading-10 text-black lg:text-xl lg:leading-10">
                  {item.title}
                </p>
                <p className="leading-7 text-[#616161]">{item.sub}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ServicesList;
