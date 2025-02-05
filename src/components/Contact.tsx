"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  // const [submitContactForm, { isLoading }] = useSubmitContactFormMutation();

  const [mailData, setMailData] = useState({
    fullName: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  // Handle input changes
  interface MailData {
    fullName: string;
    phone: string;
    email: string;
    subject: string;
    message: string;
  }

  interface ChangeEvent {
    target: {
      name: string;
      value: string;
    };
  }

  const handleChange = (e: ChangeEvent) => {
    const { name, value } = e.target;
    setMailData((prevMailData: MailData) => ({
      ...prevMailData,
      [name]: value,
    }));
  };

  // Handle form submission
  interface Payload {
    subject: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    message: string;
  }

  interface ApiResponse {
    success: boolean;
    status?: string;
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Split fullName into firstName and lastName
    const [firstName, ...lastNameParts] = mailData.fullName.split(" ");
    const lastName = lastNameParts.join(" ");

    const payload: Payload = {
      subject: mailData.subject,
      firstName: firstName || "",
      lastName: lastName || "",
      email: mailData.email,
      phoneNumber: mailData.phone,
      message: mailData.message,
    };

    console.log({ payload });

    fetch("http://localhost:3000/api/sendmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data: ApiResponse) => {
        console.log(data);
        if (data.status) {
          toast.success("Message submitted successfully!", {
            position: "top-center",
          });
          setMailData({
            fullName: "",
            phone: "",
            email: "",
            subject: "",
            message: "",
          });
        } else {
          toast.error("Failed to submit the message!", {
            position: "top-center",
          });
        }
      })
      .catch((error: Error) => {
        console.error("Error:", error);
      });
  };

  // Animation Variants
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
      className="bg-[#EBEBEB] py-20 px-4 md:px-8"
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Toastify Container */}
      <ToastContainer />

      {/* Header Section */}
      <motion.div
        className="flex flex-col justify-center items-center text-center pb-10"
        variants={itemVariants}
      >
        <p className="px-4 py-2 border border-gray-400 rounded-[32px] mb-3">
          Contact Us
        </p>
        <h2 className="text-[28px] md:text-[40px] font-bold leading-snug text-default">
          Let’s Build a Better <br /> Healthcare Future
        </h2>
        <p className="text-[#666782] text-[16px] md:text-[18px] mt-4">
          Contact Pali Group Services to secure an IOR <br /> or firestopping
          inspector for your project.
        </p>
      </motion.div>

      {/* Form and Contact Info Section */}
      <motion.div
        className="max-w-[915px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8"
        variants={containerVariants}
      >
        {/* Form Section */}
        <motion.div
          className="bg-white  p-8 rounded-[20px] shadow-md w-full max-w-[432px] mx-auto lg:mx-0"
          variants={itemVariants}
        >
          <h2 className="text-center text-[24px] font-bold mb-6 leading-[28px] text-default">
            Send a request for more information on how we can help with your
            project!
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 border border-gray rounded-md"
              name="fullName"
              value={mailData.fullName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              placeholder="Phone"
              className="w-full px-4 py-2 border border-gray rounded-md"
              name="phone"
              value={mailData.phone}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray rounded-md"
              name="email"
              value={mailData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-2 border border-gray rounded-md"
              name="subject"
              value={mailData.subject}
              onChange={handleChange}
              required
            />
            <textarea
              placeholder="Message"
              rows={5}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              name="message"
              value={mailData.message}
              onChange={handleChange}
            ></textarea>
            <div className="text-center">
              <button
                type="submit"
                className="bg-[#1a1a42] text-white py-2 px-4 rounded-md"
                // disabled={isLoading}
              >
                Submit Request
              </button>
            </div>
          </form>
        </motion.div>

        {/* Contact Information Section */}
        <motion.div
          className="flex flex-col justify-center items-center space-y-6 lg:space-y-4"
          variants={itemVariants}
        >
          <div>
            <h3 className="text-[24px] font-bold mb-4 text-center lg:text-left">
              Contact Us:
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center justify-start lg:justify-start">
                <FaLocationDot className="text-default mr-2 text-[22px]" /> 505
                Montgomery Street Suite 1100 San Francisco, CA 94111
              </li>
              <li className="flex items-center justify-start lg:justify-start">
                <FaPhoneAlt className="text-default mr-2" /> +1 415-297-3432
              </li>
              <li className="flex items-center justify-start lg:justify-start">
                <FaEnvelope className="text-default mr-2" />
                <a
                  href="mailto: admin@paligroupservices.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  admin@paligroupservices.org
                </a>
              </li>
              <li className="flex items-center justify-start lg:justify-start">
                <FaEnvelope className="text-default mr-2" />
                <a
                  href="mailto:firestopping@paligroupservices.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  firestopping@paligroupservices.org
                </a>
              </li>
              <li className="flex items-center justify-start lg:justify-start">
                <FaEnvelope className="text-default mr-2" />
                <a
                  href="mailto:support@paligroupservices.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  support@paligroupservices.org
                </a>
              </li>
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
