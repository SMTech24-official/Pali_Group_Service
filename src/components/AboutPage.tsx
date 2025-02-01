"use client"
import { useEffect } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { Helmet } from "react-helmet";
import Image from "next/image";
import aboutiamge from "@/assets/images/aboutpic.png"
import aboutiamge1 from "@/assets/images/pageabout2.png"
import aboutiamg2 from "@/assets/images/pageabout.png"

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-20">
      <Helmet>
        <title>Pali Group Service LLC - About Us  </title>
        <meta
          name="description"
          content="Learn more about Pali Group Services, our mission, and the leadership team behind our success in construction management and inspections."
        />
        <meta
          name="keywords"
          content="Pali Group Services, About Us, construction management, inspections, IOR services, OSHPD HCAi"
        />
      </Helmet>
      {/* Hero Section */}
      <div className="grid md:grid-cols-2 gap-[30px] md:gap-[60px]  items-start mb-[60px] md:mb-[120px]">
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-[40px] font-bold mb-4">
            Dedicated to Excellence In the Inspection Process
          </h1>
          <div className="">
            <p className="text-gray">
              Pali Group Services offers comprehensive Inspector of Record (IOR)
              services for HCAi projects, overseeing every phase from inception
              to completion. We collaborate closely with owners, designers &
              contractors throughout all stages of construction, ensuring that
              inspections are conducted thoroughly and that the project
              progresses on schedule, meeting all required standards for timely
              and successful completion.
            </p>
            <div className="mt-9">
              <h2 className="text-xl md:text-[24px] font-semibold mb-2 text-default">
                Our Mission:
              </h2>
              <p className="text-gray">
                We are committed to providing high-quality inspection and
                documentation services for any size construction and renovation
                project. We take pride in helping you ensure that your project
                is compliant and on track.
              </p>
            </div>
          </div>
        </div>
        <div className="order-first md:order-last">
          <Image
            src={aboutiamge}
            alt="OSHPD HCAi construction and inspections"
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Founder Section */}
      <div className="grid md:grid-cols-2  items-start mb-10 md:mb-20">
        <div>
          <Image
            src={aboutiamge1}
            alt="OSHPD HCAi construction and inspections"
            className="md:w-[80%] w-full"
          />
        </div>
        <div className="">
          <h2 className="text-2xl font-bold mt-6 md:mt-0 text-default">
            Christina Pali, IOR
          </h2>
          <p className="flex items-center gap-2 mt-1  mb-6">
            <MdOutlineEmail className="text-gray" />{" "}
            <span className="text-base text-[#262626]">
              <a
                href="mailto:christina.pali@paligroupservices.org"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                christina.pali@paligroupservices.org
              </a>
            </span>
          </p>
          <div className="space-y-6 text-gray">
            <p className="text-gray">
              Christina Pali brings over 25 years of experience in construction
              management to her role as founder of Pali Group Services,
              established in 2008. She holds a Bachelor of Science with an
              emphasis in Biogeochemistry from the University of California,
              Davis, and completed advanced Master&apos;s studies in Civil
              Engineering at California State University, Sacramento. As a Women
              Business Enterprise (WBE), Christina is committed to promoting
              diversity in the industry.
            </p>
            <p className="text-gray">
              Christina&apos;s professional qualifications include certifications as
              an A License OSHPD/HCAi Inspector of Record, IFC Premier
              Firestopping Special Inspector, NITC 6020 Medical Gas Inspector,
              and Asbestos Hazard Emergency Response Act (AHERA) Certificate.
              She is also OSHA 40-hour HAZWOPER trained and has a background as
              a DHS Lead Inspector/Assessor.
            </p>
            <p className="text-gray">
              An active member of multiple professional organizations, Christina
              is affiliated with the International Federation of Professional
              and Technical Engineers and the Soil Science Society of America,
              further demonstrating her commitment to ongoing professional
              development and industry leadership. Outside of her professional
              life, Christina is a dedicated mother who enjoys sailing, hiking,
              and exploring various outdoor activities. Passionate about healthy
              cooking, she values quality time spent with family and friends.
            </p>
          </div>
        </div>
      </div>

      {/* Quality Assurance Section */}
      <div className="grid md:grid-cols-2  items-start pb-[60px] md:pb-[120px]">
        <div className="">
          <Image
            src={aboutiamg2}
            alt="OSHPD HCAi construction and inspections"
            className="md:w-[80%] w-full"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold mt-4 md:mt-4 text-default">
            Miceal Moran, Document Control QA/QC
          </h2>
          <p className="flex items-center gap-2 mt-1  mb-6">
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
          <div className="space-y-6 text-gray">
            <p className="text-gray">
              Miceal Moran brings decades of experience in construction and
              design to the team. A graduate of California Polytechnic State
              University, San Luis Obispo with a background in architecture and
              drafting, Miceal is a seasoned professional with deep industry
              knowledge. As a Quality Assurance and Control Specialist, he
              ensures that projects are executed efficiently, in full compliance
              with regulations, and to the highest standards of quality.
            </p>
            <p className="text-gray">
              Beyond his professional accomplishments, Miceal is a dedicated
              father of four. He is passionate about coaching and mentoring
              youth in sports, and enjoys drawing, painting, and creating
              stylized portrait art. An avid snow skier and musician, Miceal has
              a broad range of personal interests that reflect his commitment to
              both creativity and an active lifestyle.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
