const Faq = () => {
  // FAQ items in an array
  // const faqItems = [
  //   {
  //     id: 2,
  //     question: "How do I schedule an inspection?",
  //     answer:
  //       "To schedule a construction healthcare inspection, contact us via phone, email, or our website form. Provide project details, preferred date, and receive confirmation promptly.",
  //   },
  //   {
  //     id: 3,
  //     question: "How long does an inspection usually take?",
  //     answer:
  //       "The duration of an inspection varies based on the scope and type, but most inspections typically take between 1 to 3 hours. For larger or more complex properties, it may take longer.",
  //   },
  //   {
  //     id: 4,
  //     question: "What types of reports do you provide?",
  //     answer:
  //       "We provide detailed, easy-to-understand inspection reports that include an overview of findings, photographs, and recommendations. Depending on the inspection type, we may also include specialized reports, such as safety assessments or compliance evaluations.",
  //   },
  // ];

  return (
    <div className="bg-[#EBEBEB] py-10 md:py-20">
      <div
        className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-[97px]"
        id="faq"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[73px]">
          {/* Left Section */}
          <div className="lg:col-span-1">
            <p className="text-gray-700 border border-gray-300 rounded-[32px] mb-5 py-2 px-4 w-[62px]">
              FAQ
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-[40px] font-bold text-default leading-tight">
              Answers to Your Most Common Questions
            </h2>
            <p className="text-gray mt-4">
              Quick answers to help you start learning with confidence today
            </p>
          </div>

          {/* Right Section */}
          <div className="lg:col-span-2 space-y-8">
            {/* FAQ Item 1 */}
            <div>
              <h3 className="text-lg font-bold text-default">
                What is an IOR?
              </h3>
              <p className="text-gray my-6">
              An &quot;IOR&quot; in the context of HCAi stands for &quot;Inspector of
                Record,&quot; which refers to a certified inspector specifically
                approved by the California Department of Health Care Access and
                Information (HCAi) to continuously monitor and inspect all
                phases of a hospital construction project, ensuring it adheres
                to the approved plans and building codes throughout the process;
                essentially, they are the primary responsible party for
                overseeing the construction quality of a hospital building.
              </p>

              <div className="">
                <ul className="text-gray space-y-6 ml-[60px]">
                  <div>
                    <h3 className="text-default text-[18px] font-bold">
                      Key points about an IOR:
                    </h3>
                  </div>
                  <li className="mb-6">
                    <span className="font-bold text-default">
                      Certification required:
                    </span>{" "}
                    <br /> To be an IOR, an inspector must pass a specific
                    certification exam administered by HCAi.
                  </li>
                  <li className="mb-6">
                    <span className="font-bold text-default">
                      Continuous Inspection:
                    </span>{" "}
                    <br /> The IOR is responsible for actively monitoring all
                    aspects of construction on a hospital project, from
                    foundation laying to final finishes.
                  </li>
                  <li className="mb-6">
                    <span className="font-bold text-default">
                      Compliance with codes:
                    </span>{" "}
                    <br /> Their primary duty is to verify that all construction
                    work complies with the California Building Standards Code
                    and OSHPD regulations.
                  </li>
                  <li className="mb-6">
                    <span className="font-bold text-default">
                      Reporting responsibility:
                    </span>{" "}
                    <br /> The IOR must report any discrepancies or potential
                    issues to the architect or engineer in charge of the
                    project.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
