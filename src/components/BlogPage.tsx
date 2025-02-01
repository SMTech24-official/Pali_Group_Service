"use client"
import Image from "next/image";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import blog1 from "@/assets/images/blog111.png"
import blog2 from "@/assets/images/blog222.png"
import blog3 from "@/assets/images/blog333.png"
import blog4 from "@/assets/images/blog-4444.svg"
import blog5 from "@/assets/images/blog-l.svg"

const BlogPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className="max-w-[1440px] mx-auto pt-20 px-4 sm:px-8 lg:px-16"
      id="blog"
    >
      <Helmet>
        <title>Pali Group Service LLC - Blog</title>
        <meta
          name="description"
          content="Learn about Pali Group Service LLC, its expertise in regulatory compliance, safety, quality assurance, and healthcare construction inspections."
        />
        <meta
          name="keywords"
          content="Pali Group Service, OSHPD, HCAi, construction inspections, healthcare facilities, IOR, quality assurance, compliance"
        />
      </Helmet>
      {/* Blog Header */}
      <div>
        <h1 className="text-center text-default text-[24px] sm:text-[32px] lg:text-[40px] font-bold mb-8">
          Ensuring Regulatory Compliance
        </h1>
        <Image
          src={blog1}
          alt="OSHPD HCAi construction and inspections"
          className="w-full max-w-[1170px] mx-auto"
        />
        <div className="mt-5 mb-10 md:mb-20 lg:mt-10 max-w-[1170px] mx-auto">
          <p className="mt-6 sm:mt-8 text-gray text-[14px] sm:text-[16px] leading-relaxed">
            Healthcare facilities are subject to a wide range of regulations to
            safeguard patient well-being, staff safety, and overall public
            health. The California Building Standards Code (CBC), OSHPD
            regulations, and HCAi guidelines outline specific requirements for
            healthcare construction, covering areas such as fire and life
            safety, structural integrity, accessibility, electrical and plumbing
            systems, and specialized healthcare systems.
          </p>
          <p className="mt-4 text-gray text-[14px] sm:text-[16px] leading-relaxed">
            Regular inspections conducted throughout the construction process
            help ensure that these standards are consistently met. The Inspector
            of Record (IOR) monitors the implementation of these codes, verifies
            compliance at each phase, and facilitates any necessary corrections
            before they impact the project&apos;s completion.
          </p>
        </div>
      </div>

      {/* Additional Blogs */}
      {/* Blog 2 */}
      <div className="mt-16">
        <h1 className="text-center text-default text-[24px] sm:text-[32px] lg:text-[40px] font-bold mb-8">
          Promoting Safety and Quality
        </h1>
        <Image
          src={blog2}
          alt="OSHPD HCAi construction and inspections"
          className="w-full max-w-[1170px] mx-auto"
        />
        <div className="mt-5 mb-10 md:mb-20 lg:mt-10 max-w-[1170px] mx-auto">
          <p className="mt-6 sm:mt-8 text-gray text-[14px] sm:text-[16px] leading-relaxed">
            Healthcare facilities must be built to withstand rigorous demands,
            including the safety Of patients, staff, and visitors, especially in
            the case of natural disasters, emergencies, and health-related
            crises. This makes regular inspections a vital part Of ensuring that
            safety features—such as fire protection systems, emergency exits,
            structural reinforcements, and infection control systems—are
            effectively integrated into the design and construction.
          </p>
          <p className="mt-4 text-gray text-[14px] sm:text-[16px] leading-relaxed">
            By conducting periodic and continuous inspections, an Inspector of
            Record can identify potential safety hazards, design flaws, or
            non-compliant elements before they lead to costly delays or safety
            risks. These inspections help to confirm that the construction is
            progressing in alignment with approved designs, specifications, and
            regulatory requirements, while maintaining the highest standards of
            quality.
          </p>
        </div>
      </div>

      {/* Blog 3 */}
      <div className="mt-16">
        <h1 className="text-center text-default text-[24px] sm:text-[32px] lg:text-[40px] font-bold mb-8">
          Verifying Adherence to Approved Plans
        </h1>
        <Image
          src={blog3}
          alt="OSHPD HCAi construction and inspections"
          className="w-full max-w-[1170px] mx-auto"
        />
        <div className="mt-5 mb-10 md:mb-20 lg:mt-10 max-w-[1170px] mx-auto">
          <p className="mt-6 sm:mt-8 text-gray text-[14px] sm:text-[16px] leading-relaxed">
            In healthcare construction, minor changes or deviations from the
            approved plans can have significant consequences. Inspections ensure
            that the project is proceeding as designed and that any
            modifications are reviewed and approved in accordance with HCAi and
            OSHPD standards. This adherence to approved plans is critical to the
            overall success Of the project, ensuring that the facility is
            functional and safe for its intended use.
          </p>
          <p className="mt-4 text-gray text-[14px] sm:text-[16px] leading-relaxed">
            Furthermore, inspections provide a systematic process for
            documentation. Every inspection is recorded and tracked, creating a
            verifiable history of compliance and decisions made throughout the
            construction process. This documentation is essential for both
            project management and for future reference when maintaining or
            modifying the facility.
          </p>
        </div>
      </div>

      {/* Blog 4 */}
      <div className="mt-16">
        <h1 className="text-center text-default text-[24px] sm:text-[32px] lg:text-[40px] font-bold mb-8">
          Managing Timelines and Cost Efficiency
        </h1>
        <Image
          src={blog4}
          alt="OSHPD HCAi construction and inspections"
          className="w-full max-w-[1170px] mx-auto"
        />
        <div className="mt-5 mb-10 md:mb-20 lg:mt-10 max-w-[1170px] mx-auto">
          <p className="mt-6 sm:mt-8 text-gray text-[14px] sm:text-[16px] leading-relaxed">
            Timely inspections contribute directly to the success of a project
            by identifying issues early, reducing the likelihood of expensive
            delays and rework. When issues are caught in the early stages of
            construction, corrections are often easier and less costly to
            address.
          </p>
          <p className="mt-4 text-gray text-[14px] sm:text-[16px] leading-relaxed">
            By collaborating closely with the owner, designer, and contractors,
            an Inspector Of Record helps ensure that inspections are scheduled
            appropriately throughout the lifecycle of the project, minimizing
            disruptions and maintaining a steady construction pace. This
            proactive approach ensures that the project stays on track, on
            budget. and in line with the desired completion timeline.
          </p>
        </div>
      </div>

      {/* Blog 5 */}
      <div className="mt-16">
        <h1 className="text-center text-default text-[24px] sm:text-[32px] lg:text-[40px] font-bold mb-8">
          Facilitating HCAi/OSHPD Approval
        </h1>
        <Image
          src={blog5}
          alt="OSHPD HCAi construction and inspections"
          className="w-full max-w-[1170px] mx-auto"
        />
        <div className="mt-5 mb-10 md:mb-20 lg:mt-10 max-w-[1170px] mx-auto">
          <p className="mt-6 sm:mt-8 text-gray text-[14px] sm:text-[16px] leading-relaxed">
            HCAi and OSHPD regulations govern the construction of healthcare
            facilities in California. from new hospitals to outpatient centers
            and other medical facilities. Compliance with these regulations is
            crucial for obtaining the final Certificate of Occupancy and for
            passing inspections required for building licensure.
          </p>
          <p className="mt-4 text-gray text-[14px] sm:text-[16px] leading-relaxed">
            The Inspector of Record plays a key role in ensuring that all
            construction activities align with these state-specific regulatory
            requirements. facilitating the timely approval process and
            minimizing the risk of non-compliance. Inspections are designed to
            verify that all elements of the building—from the
            structuralframework to the HVAC systems—meet the high standards
            required for healthcare environments.
          </p>
        </div>
      </div>

      {/* conculsion */}
      <div className="mt-10 md:mt-20 max-w-[1170px] mx-auto pb-[60px] md:pb-[120px]">
        <h2 className="text-default font-bold text-[24px] mb-8">Conclusion</h2>
        <p className="mb-4 text-gray">
          In healthcare construction, inspections are not just a formality—they
          are an integral part of ensuring that projects are completed safely,
          efficiently, and in full compliance with all regulatory standards. By
          working closely with HCAi and OSHPD, the Inspector of Record (IOR)
          ensures that healthcare facilities are built to the highest standards
          of safety, quality, and functionality, providing a strong foundation
          for both the construction team and the end-users of the facility.
        </p>
        <p className="text-gray">
          Through diligent inspections, compliance with regulatory requirements,
          and rigorous attention to detail, healthcare infrastructure projects
          can move forward with confidence, knowing that they will meet the
          complex needs of both patients and healthcare providers.
        </p>
      </div>
    </div>
  );
};

export default BlogPage;
