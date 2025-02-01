"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import bannerimage from "@/assets/images/bb.svg"; // ✅ Importing the image

const Banner = () => {
  return (
    <motion.div
      className="relative overflow-hidden md:pb-[365px] bg-cover bg-center bg-no-repeat"
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Background Image */}
      <Image
        src={bannerimage}
        alt="Banner background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0"
        priority // ✅ Optimized for fast loading
      />

      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative max-w-[850px] mx-auto px-6 pt-[120px] lg:px-8 py-16 lg:pt-[150px] ">
        {/* Left Content */}
        <motion.div
          className="flex flex-col lg:flex-row items-center"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="text-center mb-8 lg:mb-0 lg:w-[935px] mx-auto w-full">
            <motion.div
              className="text-sm text-black bg-white rounded-full py-2 lg:w-[435px] w-full mx-auto font-semibold mb-4"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5 }}
            >
              Your One-Stop Shop for Inspection & Reporting Services
            </motion.div>
            <motion.h1
              className="text-[28px] lg:text-[56px] font-bold  text-[#FFFFFF] leading-[28px] lg:leading-[62px] mb-4"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Comprehensive IOR Solutions
            </motion.h1>
            <motion.p
              className=" mb-8 mt-4 text-justify text-[#F7F9F2]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Pali Group Services LLC, established in 2008, is a certified
              Women-Owned Business Enterprise (WBE) specializing in Inspector of
              Record (IOR) services for the construction and healthcare sectors
              regulated by the Department of Healthcare Access and Information
              (HCAi). Leveraging decades of experience in regulatory oversight
              and project delivery, we provide expert support across a wide
              array of projects, including general construction, remodels, and
              skilled nursing facilities, ensuring high-quality outcomes and
              full adherence to industry standards.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Banner;
