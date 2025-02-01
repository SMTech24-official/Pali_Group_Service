"use client";

import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
import inspection from "@/assets/images/inspection.png"
const Inspection = () => {
  const router = useRouter(); 

  return (
    <div className="max-w-[1440px] mx-auto py-16 md:py-[120px] px-5 md:px-0">
      <motion.div
        className="flex flex-col-reverse lg:flex-row gap-5 items-center justify-between max-w-[1170px] mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Text Content */}
        <motion.div
          className="md:w-[525px] w-full"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h1 className="text-3xl md:text-4xl lg:text-[40px] leading-[48px] font-bold text-default">
            The Role of Inspections in Healthcare Construction: HCAi/OSHPD Compliance
          </h1>
          <p className="text-gray mt-3 mb-8 text-justify">
            In healthcare construction, ensuring the safety, functionality, and
            compliance of a facility is paramount. Inspections play a crucial
            role in this process, particularly for projects subject to oversight
            by HCAi (California Department of Health Care Access and
            Information), formerly OSHPD (Office of Statewide Health Planning
            and Development).
          </p>

          <motion.button
            onClick={() => router.push("/blog")} 
            className="flex items-center gap-1 border border-default px-4 py-2 rounded-[30px] font-bold w-fit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Read More <FaArrowRightLong />
          </motion.button>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Image src={inspection} alt="OSHPD HCAi construction and inspections" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Inspection;
