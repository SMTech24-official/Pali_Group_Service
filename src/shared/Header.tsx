"use client";

import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import logo from "@/assets/images/logo-w.svg"
import logo1 from "@/assets/images/logo-mobile.svg"

const Header: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const router = useRouter();
  const pathname = usePathname();

  // Toggle the drawer
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  // Function to handle navigation or scrolling
  const scrollToSection = (id: string) => {
    if (id === "home") {
      if (pathname !== "/") {
        router.push("/");
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
          setActiveSection("home");
        }, 100);
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setActiveSection("home");
      }
    } else if (id === "about") {
      router.push("/aboutUs");
      setActiveSection("about");
    } else if (id === "blog") {
      router.push("/blog");
      setActiveSection("blog");
    } else if (["why-us", "services", "faq", "contact"].includes(id)) {
      if (pathname !== "/") {
        router.push("/");
        setTimeout(() => {
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setActiveSection(id);
          }
        }, 100);
      } else {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          setActiveSection(id);
        }
      }
    }
    setIsDrawerOpen(false);
  };

  // Detect scrolling and active section
  useEffect(() => {
    if (pathname === "/") {
      setActiveSection("home");
    } else if (pathname === "/aboutUs") {
      setActiveSection("about");
    } else if (pathname === "/blog") {
      setActiveSection("blog");
    }

    const handleScroll = () => {
      if (pathname === "/") {
        const sections = ["home", "why-us", "services", "faq", "contact"];
        sections.forEach((section) => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
              setActiveSection(section);
            }
          }
        });
      }
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "shadow-md bg-[#131232]" : "bg-[#131232]"
        }`}
      >
        <nav className="max-w-[1440px] mx-auto py-6 px-5 md:px-5 lg:px-5">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link
              href="/"
              className="flex-shrink-0"
              onClick={() => {
                if (pathname !== "/") {
                  router.push("/");
                  setTimeout(() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }, 100);
                } else {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
                setActiveSection("home");
              }}
              aria-label="Go to Home Page"
              title="Go to Home Page"
            >
              <Image
                className="md:w-[160px] w-auto"
                src={logo}
                alt="Pali Group Services Logo"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {[
                { id: "home", label: "Home" },
                { id: "services", label: "Services" },
                { id: "aboutUs", label: "About Us" },
                { id: "why-us", label: "Why Choose Us" },
                { id: "blog", label: "Blog" },
                { id: "contact", label: "Contact" },
              ].map((item) => (
                <Link
                  key={item.id}
                  href={item.id === "home" ? "/" : `/${item.id}`}
                  onClick={(e) => {
                    if (["services", "why-us", "contact"].includes(item.id)) {
                      e.preventDefault();
                      scrollToSection(item.id);
                    }
                  }}
                  className={`${
                    activeSection === item.id
                      ? "text-blue-500 font-bold"
                      : "text-[#FFFFFF] font-semibold hover:text-gray-300"
                  }`}
                  aria-label={`Navigate to ${item.label}`}
                  title={`Navigate to ${item.label}`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleDrawer}
                type="button"
                className="text-[#FFFFFF] focus:outline-none"
                aria-label="Toggle Navigation Menu"
                title="Toggle Navigation Menu"
              >
                {isDrawerOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </nav>

        {/* Drawer Menu */}
        <div
          className={`fixed inset-y-0 left-0 w-[80%] bg-primary transform ${
            isDrawerOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out z-50`}
          role="navigation"
          aria-hidden={!isDrawerOpen}
        >
          <div className="flex flex-col h-full text-white">
            <div className="pt-4 flex items-center justify-between">
              <Image
                className="w-[180px]"
                src={logo1}
                alt="Pali Group Services Logo"
              />
              <button
                onClick={toggleDrawer}
                className="mr-4"
                aria-label="Close Navigation Menu"
                title="Close Navigation Menu"
              >
                <FaTimes className="h-6 w-6" />
              </button>
            </div>
            <div className="flex-grow pl-7 space-y-4 mt-7">
              {[
                { id: "home", label: "Home" },
                { id: "services", label: "Services" },
                { id: "about", label: "About Us" },
                { id: "why-us", label: "Why Choose Us" },
                { id: "blog", label: "Blog" },
                { id: "contact", label: "Contact" },
              ].map((item) => (
                <Link
                  key={item.id}
                  href={item.id === "home" ? "/" : `/${item.id}`}
                  onClick={(e) => {
                    if (["services", "why-us", "contact"].includes(item.id)) {
                      e.preventDefault();
                      scrollToSection(item.id);
                    }
                  }}
                  className={`block font-medium ${
                    activeSection === item.id ? "text-[#4F95DF]" : "hover:text-gray-300"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Spacer for Fixed Header */}
      <div className="h-[80px]"></div>
    </>
  );
};

export default Header;
