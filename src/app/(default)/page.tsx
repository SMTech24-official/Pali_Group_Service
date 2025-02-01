import About from "@/components/About";
import Awards from "@/components/Awards";
import Banner from "@/components/Banner";
import Choose from "@/components/Choose";
import Contact from "@/components/Contact";
import Dedicate from "@/components/Dedicate";
import Faq from "@/components/Faq";
import Inspection from "@/components/Inspection";
import Service from "@/components/Service";

export default function Home() {
  return <div className="">
     <Banner />
      <Dedicate/>
      <Service />
      <About />
      <Choose />
      <Awards />
      <Faq />
      <Inspection />
      <Contact />
  </div>;
}
