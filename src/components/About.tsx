"use client"
import Image from "next/image";
import Link from "next/link";
import { MdOutlineEmail } from "react-icons/md";
import paliimage from "@/assets/images/aboutimage2.png"
import moranimage from "@/assets/images/aboutimage1.png"
// import { Link } from "react-router-dom";

const About = () => {
  return (
    <div
      className="max-w-[1170px] mx-auto mb-[60px] md:mb-[120px] px-5 md:px-0"
      id="about"
    >
      <h2 className="text-center text-[32px] font-bold text-gray-800 mb-10">
        About Us
      </h2>
      <div className="flex gap-8 lg:flex-row flex-col justify-center items-center">
        {/* Card 1 */}
        <div className="border border-[#ADADAD] rounded-[20px] md:w-[570px] w-full p-10">
          <div className="flex items-center gap-6">
            <Image
              className="w-[100px] h-[100px] object-cover rounded-full"
              src={paliimage}
              alt="Hospital construction in San Francisco Bay Area"
            />
          </div>
          <h2 className="text-default font-bold text-[24px] mt-6">
            Christina Pali, IOR
          </h2>
          <p className="flex items-center gap-2 mt-1  mb-5">
            <MdOutlineEmail className="text-gray" />{" "}
            <span className="text-base text-[#262626]">
              <a
                href="mailto:christina.pali@paligroupservices.org"
                target="_blank"
                // rel="noopener noreferrer"
                className="hover:underline"
              >
                christina.pali@paligroupservices.org
              </a>
            </span>
          </p>
          <p className="text-gray leading-relaxed">
            Christina Pali brings over 25 years of experience in construction
            management to her role as founder of Pali Group Services,
            established in 2008. She holds a Bachelor of Science with an
            emphasis in Biogeochemistry from the California University...
            <Link
              href="/aboutUs"
              aria-label="Learn more about Christina Pali and Pali Group Services"
              title="Learn more about Christina Pali and Pali Group Services"
              className="text-blue-600 font-bold underline ml-1"
            >
              Learn more about Christina Pali
            </Link>
          </p>
        </div>

        {/* Card 2 */}
        <div className="border border-[#ADADAD] rounded-[20px] md:w-[570px] w-full p-10">
          <div className="flex items-center gap-6">
            <Image
              className="w-[100px] h-[100px] object-cover rounded-full"
              src={moranimage}
              alt="Hospital construction in San Francisco Bay Area"
            />
          </div>
          <h2 className="text-default font-bold text-[24px] mt-6">
            Miceal Moran, Document Control QA/QC
          </h2>
          <p className="flex items-center gap-2 mt-1  mb-5">
            <MdOutlineEmail className="text-gray" />{" "}
            <span className="text-base text-[#262626]">
              <a
                href="mailto:miceal.moran@paligroupservices.org"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                miceal.moran@paligroupservices.org
              </a>
            </span>
          </p>
          <p className="text-gray leading-relaxed">
            Miceal Moran brings decades of experience in construction and design
            to the team. A graduate of California Polytechnic State University,
            San Luis Obispo with a background in architecture and drafting,
            Miceal is a seasoned professional with deep industry...
            <Link
              href="/aboutUs"
              aria-label="Learn more about Miceal Moran and his role at Pali Group Services"
              title="Learn more about Miceal Moran and his role at Pali Group Services"
              className="text-blue-600 font-bold underline ml-1"
            >
              Learn more about Miceal Moran
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
