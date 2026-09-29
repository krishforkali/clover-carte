import FAQAccordion from "@/components/common/FAQAccordion";
import { LucideClock5, LucideTruck } from "lucide-react";
import { FaRegCheckCircle, FaRegUser } from "react-icons/fa";
import { FiMapPin, FiPhone, FiMail, FiTruck } from "react-icons/fi";
import contatct_img from "../../assets/images/cnct_1.webp"
import Image from "next/image";
import { MdOutlineSettings } from "react-icons/md";
import { BsShieldCheck } from "react-icons/bs";
import RequestQuoteButton from "@/components/common/RequestQuoteButton";
import ContactForm from "./ContactForm";
import AutoMarquee from "@/components/common/AutoMarquee";

export default function M_Contact() {

    const TrustedBusinessIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="14" cy="16" r="4" stroke="#008A00" strokeWidth="2" />
    <circle cx="26" cy="16" r="4" stroke="#008A00" strokeWidth="2" />

    <path
      d="M7 29C7 25.6863 9.68629 23 13 23H15C18.3137 23 21 25.6863 21 29"
      stroke="#008A00"
      strokeWidth="2"
    />

    <path
      d="M19 29C19 25.6863 21.6863 23 25 23H27C30.3137 23 33 25.6863 33 29"
      stroke="#008A00"
      strokeWidth="2"
    />
  </svg>
);

    const features = [
  {
    id: 1,
    title: "Custom Built",
    width: "w-[105px]",
    icon: MdOutlineSettings,
  },
  {
    id: 2,
    title: "PAN India Service",
    width: "w-[169px]",
    icon: FiTruck,
  },
  {
    id: 3,
    title: "Quality Assured",
    width: "w-[169px]",
    icon: BsShieldCheck,
  },
  {
    id: 4,
    title: "After Sales Support",
    width: "w-[169px]",
    icon: FaRegUser,
  },
  {
    id: 5,
    title: "Trusted by Businesses",
    width: "w-[175px]",
    icon: TrustedBusinessIcon,
  },
];
    const faqs = [
        {
            question: "Do You Provide Customized Vending Machine Manufacturing?",
            answer: "Yes, Clover Carte provides customized vending machine manufacturing solutions based on your business requirements. We can customize machine design, size, capacity, product configuration, branding, payment options, and smart features to meet your specific needs."
        },
        {
            question: "Do You Provide After-Sales Support for Vending Machines?",
            answer: "Yes, Clover Carte provides after-sales support to ensure smooth and reliable vending machine operations. Our support includes technical assistance, troubleshooting, maintenance guidance, and assistance with machine-related issues."
        },
        {
            question: "Can I Request a Product Demonstration?",
            answer: "Yes, you can request a product demonstration to understand the machine’s features, functionality, and operation. Contact our team with your requirements, and we will guide you through the available demonstration options."
        },
        {
            question: "How Can I Choose the Right Vending Machine for My Business?",
            answer: "Choosing the right vending machine depends on your product type, location, customer requirements, capacity, and expected usage. Our team can understand your requirements and recommend a suitable smart vending solution for your business."
        },
        {
            question: "Do You Provide OEM/ODM Vending Machine Manufacturing?",
            answer: "Yes, Clover Carte offers OEM and ODM vending machine manufacturing solutions for businesses and brands. We work with clients to develop customized vending machines according to their product, design, branding, and technical requirements."
        },
        {
            question: "How Can I Get a Quotation for a Vending Machine?",
            answer: "You can contact Clover Carte with details about your required vending machine, quantity, customization needs, and intended application. Our team will review your requirements and provide a suitable quotation based on your project specifications"
        },

    ]



    return (
        <>
        <main className="w-full px-4 space-y-12">
            <section className="">
                <div className="w-full  mx-auto flex flex-col items-start gap-4">

                    {/* Heading + Description */}
                    <div className="w-full flex flex-col items-start gap-3">
                        <h1 className="w-full text-[36px] leading-[44px] font-bold tracking-[-0.72px] text-[#0F0F0F]">
                            Let's build your <span className="text-green">Smart Vending</span>  Solution Together!!
                        </h1>

                        <p className="w-full text-[16px] leading-6 font-normal text-[#0F0F0F]">
                            Get expert consultation, customized vending machines, and PAN India
                            installation support for your B2B operational scaling.
                        </p>
                    </div>

                    {/* Actions */}
                    <div className="w-full flex flex-col items-start gap-3">

                        {/* Buttons */}
                        <div className="w-full flex flex-col items-start gap-3">

                            <button
                                type="button"
                                className="w-full h-[52px] flex items-center justify-center px-8 py-4 rounded-lg bg-[#018A06] text-white text-[16px] leading-5 font-semibold"
                            >
                                View Details
                            </button>
                            <RequestQuoteButton
                                label="Request a Quote →"
                                labelClass={`text-[16px]`}
                                className={`w-full h-[54px] flex items-center justify-center gap-2 px-8 py-4 rounded-lg border border-[#C1E2C2] bg-white text-[#006E03] text-[14px] leading-5 font-semibold tracking-[0.14px]`}
                            />

                        </div>

                        {/* PAN India Support */}
                        <div className="flex items-center gap-[10px] h-5">
                            <div className="w-5 h-5 flex items-center justify-center text-[#006E03]">
                                <LucideClock5
                                    size={15}
                                    className="text-green"
                                    strokeWidth={3}
                                />
                            </div>

                            <span className="text-[16px] leading-4 font-medium tracking-[0.6px] text-[#3F4A3A]">
                                We respond within 24 hours!
                            </span>
                        </div>

                    </div>
                </div>
            </section>
            <section className="">
                <div className="w-full max-w-[1280px] mx-auto flex flex-col items-start gap-3">

                    {/* Factory Address */}
                    <div className="box-border w-full min-h-[166px] flex flex-col items-start p-6 gap-1 bg-white border border-[#C1E2C2] rounded-xl">
                        <div className="w-full flex items-center gap-2 pb-2">
                            <div className="w-8 h-8 shrink-0 flex items-center justify-center rounded-full bg-[#F1F9F1]">
                                <FiMapPin className="w-4 h-5 text-[#018A06]" />
                            </div>

                            <h3 className="text-[18px] leading-6 font-bold text-[#018A06]">
                                Factory Address
                            </h3>
                        </div>

                        <p className="w-full text-[16px] leading-6 font-normal text-[#0F0F0F]">
                            Shree Padmavati Techsolution Pvt. Ltd., A-27 MIDC, Bhagi Mahari,
                            Savner, Nagpur - 441107
                        </p>
                    </div>

                    {/* Call Us */}
                    <div className="box-border w-full min-h-[142px] flex flex-col items-start p-6 gap-1 bg-white border border-[#C1E2C2] rounded-xl">
                        <div className="w-full flex items-center gap-2 pb-2">
                            <div className="w-8 h-8 shrink-0 flex items-center justify-center rounded-full bg-[#F1F9F1]">
                                <FiPhone className="w-[18px] h-[18px] text-[#018A06]" />
                            </div>

                            <h3 className="text-[18px] leading-6 font-bold text-[#018A06]">
                                Call Us
                            </h3>
                        </div>

                        <div className="w-full flex flex-col">
                            <a
                                href="tel:+918839153737"
                                className="text-[16px] leading-6 font-normal text-[#0F0F0F]"
                            >
                                +91-8839153737
                            </a>

                            <a
                                href="tel:+917499645927"
                                className="text-[16px] leading-6 font-normal text-[#0F0F0F]"
                            >
                                +91-7499645927
                            </a>
                        </div>
                    </div>

                    {/* Email */}
                    <div className="box-border w-full min-h-[118px] flex flex-col items-start p-6 gap-1 bg-white border border-[#C1E2C2] rounded-xl">
                        <div className="w-full flex items-center gap-2 pb-2">
                            <div className="w-8 h-8 shrink-0 flex items-center justify-center rounded-full bg-[#F1F9F1]">
                                <FiMail className="w-5 h-4 text-[#018A06]" />
                            </div>

                            <h3 className="text-[18px] leading-6 font-bold text-[#018A06]">
                                Email
                            </h3>
                        </div>

                        <a
                            href="mailto:contact@clovercarte.com"
                            className="w-full text-[16px] leading-6 font-normal text-[#0F0F0F]"
                        >
                            contact@clovercarte.com
                        </a>
                    </div>

                </div>
            </section>
            <section id="book-demo"  className="">
                <div className="w-full max-w-[1280px] mx-auto bg-white border border-[#C1E2C2] rounded-xl overflow-hidden flex flex-col gap-5">

                    {/* Left Side: Solutions & Image */}
                    <div className="w-full bg-[#F1F9F1] p-3 flex flex-col items-start gap-3">

                        <h2 className="w-full text-[24px] leading-8 font-semibold text-[#018A06]">
                            Smart Vending Solutions
                        </h2>

                        <div className="w-full flex flex-col gap-3">

                            <div className="w-full flex items-center gap-2">
                                <div className="w-5 h-5 shrink-0 flex items-center justify-center text-[#018A06]">
                                    <FaRegCheckCircle className="text-green" />

                                </div>
                                <p className="text-[16px] leading-6 font-normal text-[#0F0F0F]">
                                    Custom Vending Machines
                                </p>
                            </div>

                            <div className="w-full flex items-center gap-2">
                                <div className="w-5 h-5 shrink-0 flex items-center justify-center text-[#018A06]">
                                    <FaRegCheckCircle className="text-green" />

                                </div>
                                <p className="text-[16px] leading-6 font-normal text-[#0F0F0F]">
                                    Cashless Payment Integration
                                </p>
                            </div>

                            <div className="w-full flex items-center gap-2">
                                <div className="w-5 h-5 shrink-0 flex items-center justify-center text-[#018A06]">
                                    <FaRegCheckCircle className="text-green" />

                                </div>
                                <p className="text-[16px] leading-6 font-normal text-[#0F0F0F]">
                                    IoT Monitoring & Analytics
                                </p>
                            </div>

                            <div className="w-full flex items-center gap-2">
                                <div className="w-5 h-5 shrink-0 flex items-center justify-center text-[#018A06]">
                                    <FaRegCheckCircle className="text-green" />

                                </div>
                                <p className="text-[16px] leading-6 font-normal text-[#0F0F0F]">
                                    PAN India Installation & Support
                                </p>
                            </div>

                        </div>

                        <div className="w-full h-[250px] rounded-xl border border-[#C1E2C2] overflow-hidden">
                            <Image src="https://res.cloudinary.com/ds4hqamlq/image/upload/v1789387903/d79e7644eaf586a2abe5041ec0d336caf0ebc285_ltj8oa.jpg" alt="Clover Carte Team" width={335} height={250} className="w-full h-full object-containt" />
                        </div>

                    </div>

                    {/* Right Side: Form */}
                    <div className="w-full p-3 flex flex-col items-start gap-3">

                        <h2 className="w-full text-[24px] leading-8 font-semibold text-[#0F0F0F]">
                            We're here for you
                        </h2>
                        <ContactForm/>

                    </div>

                </div>
            </section>
            <section className="box-border w-full h-[110px] px-4 flex items-center bg-[#F1F9F1] border-y border-[#C1E2C2] overflow-hidden">
                <div className="w-full h-[76px] flex items-center gap-3 overflow-x-auto scrollbar-none">
<AutoMarquee speed={30} gap={12}>
  <div className="flex items-center gap-3">
    {features.map((feature) => {
      const Icon = feature.icon;

      return (
        <div
          key={feature.id}
          className={`shrink-0 ${feature.width} h-[76px] flex flex-col items-center gap-1`}
        >
          <div className="w-12 h-12 flex items-center justify-center">
            <Icon className="text-green w-7 h-7" />
          </div>

          <span className="w-full text-[16px] leading-6 font-semibold text-[#0F0F0F] text-center whitespace-nowrap">
            {feature.title}
          </span>
        </div>
      );
    })}
  </div>
</AutoMarquee>

                </div>
            </section>
            <FAQAccordion faqs={faqs} />
            
        </main>
       
                        </>
    )
}
