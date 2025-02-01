"use client";

import { motion } from "framer-motion";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "@/assets/images/logo-w.svg"; // ✅ Optimized for Next.js

const Footer = () => {
  const pathname = usePathname();

  // Smooth scroll to sections only on the homepage
  const scrollToSection = (sectionId: string) => {
    if (pathname === "/") {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="bg-primary md:px-5">
      <motion.footer
        className="py-12 px-6 md:px-12 lg:px-0 pt-[60px] md:pt-[120px] max-w-[1440px] mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 1 } },
        }}
      >
        <div className="max-w-[1170px] mx-auto">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 border-b border-[#E6E8EC]"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}
          >
            {/* Left Section - Logo and Description */}
            <motion.div
              className="flex flex-col items-start text-left lg:border-r-2 border-[#E6E8EC] pr-[64px]"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
              }}
            >
              <Image
                src={logo}
                width={160}
                height={50}
                alt="Hospital construction in San Francisco Bay Area"
                className="mb-4"
              />
              <p className="text-[#FFFFFF] text-lg leading-relaxed">
                Simplify Healthcare Construction Inspections and Build a Safer,
                Happier Future.
              </p>
            </motion.div>

            {/* Center Section - Navigation Links */}
            <motion.div
              className="flex flex-col lg:border-r-2 border-[#E6E8EC]"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
              }}
            >
              <ul className="text-[#FFFFFF] font-semibold space-y-8">
                <li>
                  <Link
                    href="/#home"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("home");
                    }}
                    className="cursor-pointer"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#services"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("services");
                    }}
                    className="cursor-pointer"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/aboutUs" className="cursor-pointer">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#why-us"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("why-us");
                    }}
                    className="cursor-pointer"
                  >
                    Why Choose Us
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="cursor-pointer">
                    Blog
                  </Link>
                </li>
                <li className="pb-6">
                  <Link
                    href="/#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("contact");
                    }}
                    className="cursor-pointer"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </motion.div>

            {/* Right Section - Social Media */}
            <motion.div
              className="flex flex-col"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
              }}
            >
              <p className="text-[#FFFFFF] font-medium mb-8 text-start">
                Follow us on
              </p>
              <div className="flex space-x-4 pb-7 lg:pb-0">
                <a
                  href="https://www.facebook.com/people/Pali-Group-Services-LLC/61571270249881/?mibextid=wwXIfr"
                  target="_blank"
                  className="w-8 h-8 rounded-[8px] bg-primary flex justify-center items-center border border-[#FFFFFF80]"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF className="text-white w-4 h-4" />
                </a>
                <a
                  href="https://www.instagram.com/paligroupservicesllc/?igsh=NTc4MTIwNjQ2YQ%3D%3D#"
                  target="_blank"
                  className="w-8 h-8 border-primary rounded-[8px] flex items-center justify-center border border-[#FFFFFF80]"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="w-5 h-5 text-white" />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Bottom Section - Copyright */}
          <motion.div
            className="text-center mt-10 text-[#FFFFFF]"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}
          >
            © 2008 Pali Group Services, LLC. All rights reserved.
          </motion.div>
        </div>
      </motion.footer>
    </div>
  );
};

export default Footer;
