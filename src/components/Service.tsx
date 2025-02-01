"use client"
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import service1 from "@/assets/images/service1.png"
import service2 from "@/assets/images/service2.png"
import service3 from "@/assets/images/service3.png"

const Service = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      className="bg-gray-50 md:pb-[120px] pb-[60px] px-4 md:px-8 max-w-[1440px] mx-auto"
      id="services"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Header Section */}
      <motion.div
        className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-0"
        variants={itemVariants}
      >
        
      </motion.div>

      {/* Services Section */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 justify-center"
        variants={containerVariants}
      >
        {/* Service 1 */}
        <motion.div
          className="bg-white rounded-lg shadow-md overflow-hidden w-full max-w-[370px] p-[30px] mx-auto lg:mx-0"
          variants={itemVariants}
        >
          <Image
            src={service1}
            alt="OSHPD HCAi construction and inspections"
            className="w-full h-48 object-cover rounded-[10px] mb-8"
          />
          <div>
            <h3 className="text-xl font-bold mb-4 text-default">
              Constructability Review
            </h3>
            <p className="text-gray text-sm md:text-base mb-3 text-justify">
              Constructability review ensures that healthcare facility
              construction or renovation adheres to all relevant standards and
              regulations, including the California Building Code (CBC), the
              OSHPD/HCAi-approved Test, Inspection, and Observation (TIO)
              program, and applicable local codes.
            </p>
            <p className="text-gray text-sm md:text-base text-justify">
              Our thorough review process helps ensure project drawings capture
              all essential, often overlooked requirements, eliminating gaps and
              eventual delays.
            </p>
          </div>
        </motion.div>

        {/* Service 2 */}
        <motion.div
          className="bg-white rounded-lg shadow-md overflow-hidden w-full max-w-[370px] p-[30px] mx-auto lg:mx-0"
          variants={itemVariants}
        >
          <Image
            src={service2}
            alt="OSHPD HCAi construction and inspections"
            className="w-full h-48 object-cover rounded-[10px] mb-8"
          />
          <div>
            <h3 className="text-xl font-bold mb-4">Inspections</h3>
            <p className="text-gray text-sm md:text-base text-justify">
              In accordance with Chapter 7 of the California Administrative
              Code, we perform all required periodic and ongoing inspections for
              both off-site fabrication and on-site construction activities.
              These inspections ensure that work conforms to approved
              construction drawings, specifications, and regulatory
              requirements. We pride ourselves on fully understanding each phase
              of the construction process, ensuring quality and consistency
              throughout.
            </p>
          </div>
        </motion.div>

        {/* Service 3 */}
        <motion.div
          className="bg-white rounded-lg shadow-md overflow-hidden w-full max-w-[370px] p-[30px] mx-auto lg:mx-0"
          variants={itemVariants}
        >
          <Image
            src={service3}
            alt="OSHPD HCAi construction and inspections"
            className="w-full h-48 object-cover rounded-[10px] mb-8"
          />
          <div>
            <h3 className="text-xl font-bold mb-4">Documentation</h3>
            <p className="text-gray text-sm md:text-base text-justify">
              We are recognized for our commitment to maintaining comprehensive
              records of inspections, testing results, deviations from approved
              plans, and any corrective actions taken. Thorough documentation is
              essential for ensuring compliance with approved OSHPD/HCAi plans.
              To guarantee accuracy, our team employs a robust system of checks
              and balances to ensure proper documentation at every step.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Service;
