"use client"
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import a1 from "@/assets/images/a1.svg"
import a2 from "@/assets/images/award3.png"
import a3 from "@/assets/images/award-33.svg"
import a4 from "@/assets/images/award-4.svg"
import a5 from "@/assets/images/award-5.svg"
import a6 from "@/assets/images/award-6.svg"
import a7 from "@/assets/images/award-7.svg"

const Awards = () => {
  // Animation Variants
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8, 
      },
    },
  };

  return (
    <div className="max-w-[1440px] mx-auto pb-[60px] md:pb-[120px] px-4">
      {/* Header Section */}
      <motion.div
        className="text-center"
        initial="hidden"
        whileInView="visible" 
        viewport={{ once: false, amount: 0.2 }} 
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
        }}
      >
        <h1 className="text-[28px] sm:text-[36px] lg:text-[40px] font-bold text-default text-center mb-10">
        Certifications & Affiliations
        </h1>
      </motion.div>

      {/* Awards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-items-center">
        {/* Award 1 */}
        <motion.div
          className="w-full max-w-[250px] text-center flex md:flex-col flex-col-reverse"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <Image
            src={a1}
            alt="Hospital construction in San Francisco Bay Area"
            className="mx-auto mb-4"
          />
          <h2 className="text-[18px] sm:text-[20px] font-bold">
          Medical Gas Inspector, NITC 6020
          </h2>
       
        </motion.div>

        {/* Award 2 */}
        <motion.div
          className="w-full max-w-[250px] text-center flex md:flex-col flex-col-reverse"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <Image
            src={a2}
            alt="Hospital construction in San Francisco Bay Area"
            className="mx-auto mb-4"
          />
          <h2 className="text-[18px] sm:text-[20px] font-bold">
          International Firestop Council Premier <br /> Special Inspector Certification
          </h2>
         
        </motion.div>

        {/* Award 3 */}
        <motion.div
          className="w-full max-w-[250px] text-center flex md:flex-col flex-col-reverse"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <Image
            src={a3}
            alt="Hospital construction in San Francisco Bay Area"
            className="mx-auto mb-4"
          />
          <h2 className="text-[18px] sm:text-[20px] font-bold">
          OSHPD/HCAi Inspector of Record A License
          </h2>
        
        </motion.div>
        {/* Award 4 */}
        <motion.div
          className="w-full max-w-[250px] text-center flex md:flex-col flex-col-reverse"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <Image
            src={a4}
            alt="Hospital construction in San Francisco Bay Area"
            className="mx-auto mb-4"
          />
          <h2 className="text-[18px] sm:text-[20px] font-bold">
            International Federation of Professional and Technical Engineers
          </h2>
        </motion.div>
        {/* Award 5*/}
        <motion.div
          className="w-full max-w-[250px] text-center flex md:flex-col flex-col-reverse"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <Image
            src={a5}
            alt="Hospital construction in San Francisco Bay Area"
            className="mx-auto mb-4"
          />
          <h2 className="text-[18px] sm:text-[20px] font-bold">
            Soil Science Society of America
          </h2>
         
        </motion.div>
        {/* Award 6*/}
        <motion.div
          className="w-full max-w-[250px] text-center flex md:flex-col flex-col-reverse"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <Image
            src={a6}
            alt="Hospital construction in San Francisco Bay Area"
            className="mx-auto mb-4"
          />
          <h2 className="text-[18px] sm:text-[20px] font-bold ">
            International Code Council
          </h2>
        
        </motion.div>
        {/* Award 7*/}
        <motion.div
          className="w-full col-span-full max-w-[250px] text-center flex md:flex-col flex-col-reverse md:justify-center md:items-center"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <Image
            src={a7}
            alt="Hospital construction in San Francisco Bay Area"
            className="mx-auto mb-4"
          />
          <h2 className="text-[18px] sm:text-[20px] font-bold">NFPA</h2>
        
        </motion.div>
      </div>
    </div>
  );
};

export default Awards;
