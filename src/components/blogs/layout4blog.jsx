import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, Clock3, Settings } from "lucide-react";
import {
    Zap,
    Coffee,
    ShieldCheck,
    CreditCard,
    Boxes,
} from "lucide-react";
const beverageSteps = [
  {
    icon: Coffee,
    label: "Prepare",
  },
  {
    icon: CreditCard,
    label: "Dispense",
  },
  {
    icon: Settings,
    label: "Monitor",
  },
];


const benefits = [
    {
        label: "Faster Service",
        icon: Zap,
    },
    {
        label: "Better Convenience",
        icon: Coffee,
    },
    {
        label: "Consistent Quality",
        icon: ShieldCheck,
    },
    {
        label: "Cashless Payments",
        icon: CreditCard,
    },
    {
        label: "Smart Inventory",
        icon: Boxes,
    },
    {
        label: "24/7 Accessibility",
        icon: null,
    },
];
const businessReasons = [
  {
    number: "1",
    title: "Faster Service",
    paragraphs: [
      "Time is valuable in every business. Employees and customers do not always want to wait in long queues or leave the premises to purchase a drink.",
     <>An <a href="/products" className="font-bold"> automatic beverage vending machine</a> allows users to select their preferred beverage and receive it quickly. This can be especially useful during busy office hours, breaks, meetings, shifts, and high-footfall periods. For businesses, faster service means fewer interruptions and a smoother overall experience. </> ,
    ],
  },
  {
    number: "2",
    title: "Better Employee Convenience",
    paragraphs: [
      "Employee experience has become an important part of modern workplace management. Small facilities, such as easy access to tea, coffee, or cold beverages, can make the workplace more comfortable.",
      <>Instead of employees going outside the office for refreshments, a <a href="/products" className="font-bold">beverage vending machine in India</a> can provide convenient access within the workplace. This can help reduce unnecessary trips away from the work area and make beverage breaks more efficient.</>,
      "Workplace vending has also been associated with convenience, productivity, and improved employee experience.",
    ],
  },
  {
    number: "3",
    title: "Consistent Beverage Quality",
    paragraphs: [
      "One challenge with manual beverage preparation is consistency. Taste, quantity, temperature, and preparation methods can vary depending on who prepares the beverage.",
      "Automated systems are designed to follow programmed processes, helping businesses provide a more consistent experience. This is particularly useful for offices, hotels, hospitals, factories, and other locations where beverages may need to be served regularly throughout the day.",
      "Consistency can also help businesses build a more professional refreshment experience for employees and visitors.",
    ],
  },
  {
    number: "4",
    title: "Reduced Manual Work",
    paragraphs: [
      "Traditional beverage service may require employees or support staff to prepare drinks, manage supplies, clean equipment, and handle repeated orders.",
      "Automated beverage solutions can reduce some of these routine responsibilities. Depending on the machine and setup, automation can simplify dispensing, payment collection, inventory management, and operational monitoring.",
      "This allows staff to focus on their primary responsibilities instead of spending excessive time managing beverage service.",
    ],
  },
  {
    number: "5",
    title: "Digital and Cashless Payments",
    paragraphs: [
      "The way people pay has changed significantly. In India, digital payment options have become an important part of everyday purchasing.",
      <>Modern <a href="/products" className="font-bold">smart beverage vending machines</a> can support options such as UPI, QR-based payments, cards, RFID, and other cashless methods, depending on the configuration.</>,
      "For users, this makes purchasing simple and convenient. For businesses, digital transactions can make payment tracking and reporting easier.",
    ],
  },
  {
    number: "6",
    title: "Smart Inventory Management",
    paragraphs: [
      "Inventory management is another area where automation can make a difference.",
      "Advanced vending systems may provide real-time information about product availability, sales, and stock levels. Some smart vending solutions can also send alerts when products need to be refilled.",
      "This helps operators make better decisions about replenishment and reduces the chances of popular beverages remaining unavailable for long periods.",
    ],
  },
  {
    number: "7",
    title: "24/7 Accessibility",
    paragraphs: [
      "Many businesses operate beyond traditional working hours. Factories may run multiple shifts, hospitals operate around the clock, and hotels and commercial spaces may have customers at different times of the day.",
      <>A <a href="/products" className="font-bold">commercial beverage vending machine</a>  can provide access to refreshments without requiring a dedicated beverage counter to remain open continuously.</>,
      "This makes automated beverage solutions particularly useful for locations where convenience is required throughout the day.",
    ],
  },
  {
    number: "8",
    title: "Suitable for Different Business Environments",
    paragraphs: [
      "One of the biggest advantages of automated beverage solutions is flexibility. Businesses can choose machines based on their location, expected usage, beverage requirements, and available space.",
      "They can be installed in:",
      "Corporate offices\nFactories and manufacturing facilities\nHospitals\nHotels\nColleges and universities\nShopping malls\nAirports\nRailway stations\nCo-working spaces\nCafés and commercial buildings",
      "Modern vending technology is increasingly being used across workplaces and high-footfall environments because it combines convenience with automated operation.",
    ],
  },
];

const closingSections = [
  {
    title: "Why Choose Clover Carte for Automated Beverage Solutions?",
    content:[
        <>Businesses looking for reliable and customizable vending technology can consider <a href="/" className="font-bold">Clover Carte</a> for their beverage vending requirements. Clover Carte focuses on smart vending solutions designed for different business environments and operational needs.</>,
        "Whether the requirement is for an office, factory, hotel, hospital, educational institution, or commercial location, the right automated beverage solution can help provide convenient access to refreshments while reducing dependence on traditional manual service.",
        <>As businesses continue to adopt automation,<a href="/products" className="font-bold">automated beverage solutions for businesses</a> are becoming a practical way to improve convenience, efficiency, and customer experience.</>
    ],
 },
  {
    title: "Conclusion",
    content:[
        <> Businesses are choosing automated beverage solutions because they offer a combination of <a href="/" className="font-bold"> speed, convenience, consistency, digital payments, reduced manual effort, and smarter management.</a> A modern beverage vending machine can help organizations create a better refreshment experience while supporting efficient day-to-day operations. </>,
       <>As smart technology continues to develop,<a href="/products" className="font-bold">beverage vending machines in India</a>  are likely to become an increasingly common part of offices, factories, hospitals, hotels, educational institutions, and commercial spaces.</> ,
        "For businesses that want to upgrade their beverage service, automation is no longer simply a trend—it is becoming a practical and scalable solution for modern operations."
    ],
},
];

export default function Layout4blog({ blog }) {
    const title = blog?.title || "Why Businesses Are Choosing AutomatedBeverage Solutions?";
    const category = blog?.category || blog?.tag || "WORKPLACE SOLUTIONS";
    const readTime = blog?.readTime || "8 MIN READ";

    const date = blog?.date ? new Date(blog.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", }) : "August 17, 2026";

    const articleSections = [
        {
            number: "01",
            title: "Introduction",
            id: "introduction",
        },
        {
            number: "02",
            title: "What Are Automated Beverage Solutions?",
            id: "what-are-automated-beverage-solutions",
        },
        {
            number: "03",
            title: "Why Are Businesses Moving Toward Automated Beverage Solutions?",
            id: "why-are-businesses-moving-toward-automated-beverage-solutions",
        },
        {
            number: "04",
            title: "Automated Beverage Solutions and the Future of Business",
            id: "automated-beverage-solutions-and-the-future-of-business",
        },
        {
            number: "05",
            title: "Why Choose Clover Carte",
            id: "why-choose-clover-carte",
        },
        {
            number: "06",
            title: "Conclusion",
            id: "conclusion",
        },
    ];

    return (
        <main className="w-full px-6 md:px-10 lg:px-12 space-y-12 mt-12">
            <section className="w-full ">
                <div className="relative mx-auto flex min-h-[473px] w-full max-w-[1248px] items-center overflow-hidden">
                    {/* Background image */}
                    <div className="absolute inset-y-0 right-0 hidden w-[62.2%] lg:block">
                        <div className="relative h-full w-full">
                            <Image
                                src={blog?.image?.url?.trim()}
                                alt={title}
                                fill
                                className="object-cover object-center"
                                sizes="776px"
                                priority
                            />

                            {/* Figma gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 via-[10%] to-transparent" />
                        </div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 flex w-full max-w-[636px] flex-col gap-8">
                        {/* Category + title */}
                        <div className="flex w-full max-w-[530px] flex-col gap-4">
                            <div className="flex w-fit items-center rounded-[4px] border-[1.125px] border-[#C1E2C2] bg-[#F1F9F1] px-[9px] py-1">
                                <span className="text-[12px] font-bold leading-[18px] tracking-[1px] text-[#018A06]">
                                    {category}
                                </span>
                            </div>

                            <h1 className="text-[38px] font-bold leading-[48px] tracking-[-0.5px] text-[#0F0F0F] sm:text-[42px] sm:leading-[52px] lg:text-[48px] lg:leading-[60px]">
                                {title}
                            </h1>
                        </div>

                        {/* Benefits */}
                        <div className="flex w-full max-w-[530px] flex-wrap items-start gap-x-5 gap-y-6 sm:gap-x-6">
                            {benefits.map((benefit) => {
                                const Icon = benefit.icon;

                                return (
                                    <div
                                        key={benefit.label}
                                        className="flex w-[60px] flex-col items-center gap-2 sm:w-[64px]"
                                    >
                                        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#C1E2C2]">
                                            {Icon ? (
                                                <Icon
                                                    size={20}
                                                    strokeWidth={2}
                                                    className="text-[#018A06]"
                                                />
                                            ) : (
                                                <span className="text-[16px] font-semibold leading-5 text-[#018A06]">
                                                    24/7
                                                </span>
                                            )}
                                        </div>

                                        <span className="text-center text-[12px] font-medium leading-4 text-[#5F5F5F]">
                                            {benefit.label}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Meta */}
                        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                            <div className="flex items-center gap-2">
                                <Clock3
                                    size={24}
                                    strokeWidth={1.67}
                                    className="text-[#5F5F5F]"
                                />

                                <span className="text-[14px] font-normal leading-5 text-[#5F5F5F]">
                                    {readTime}
                                </span>
                            </div>

                            <div className="flex items-center gap-2">
                                <CalendarDays
                                    size={24}
                                    strokeWidth={1.67}
                                    className="text-[#5F5F5F]"
                                />

                                <span className="text-[14px] font-normal leading-5 text-[#5F5F5F]">
                                    {date}
                                </span>
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="flex w-full flex-col gap-4 sm:flex-row sm:gap-8">
                            <Link
                                href="#book-demo"
                                className="flex h-[60px] w-full items-center justify-center gap-3 rounded-[9.778px] bg-[#018A06] px-6 text-center text-[18px] font-semibold leading-7 text-white transition-opacity hover:opacity-90 sm:h-[68px] sm:w-[343px] sm:px-8 sm:text-[20px]"
                            >
                                <span>Request a Demo</span>
                                <ArrowRight size={22} strokeWidth={1.83} />
                            </Link>

                            <Link
                                href="/blogs"
                                className="flex h-[60px] w-full items-center justify-center rounded-[9.778px] border border-[#018A06] px-6 text-center text-[18px] font-semibold leading-7 text-[#018A06] transition-colors hover:bg-[#F1F9F1] sm:h-[68px] sm:w-[261px] sm:px-8 sm:text-[20px]"
                            >
                                <span>View All Blogs</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full">
                <div className="mx-auto flex w-full max-w-[1248px] flex-col items-start gap-8 px-4 sm:px-6 lg:flex-row lg:gap-[68px] lg:px-0">
                    {/* MOBILE ARTICLE NAVIGATION */}
                    <div className="w-full lg:hidden">
                        <aside className="box-border w-full overflow-hidden rounded-xl border border-[#C1E2C2] bg-[#F1F9F1] p-4">
                            <h2 className="mb-3 w-full text-[20px] font-bold leading-7 text-[#0F0F0F]">
                                In This Article
                            </h2>

                            <nav aria-label="In This Article" className="flex w-full gap-2 overflow-x-auto pb-1">
                                {articleSections.map((item) => (
                                    <a key={item.id} href={`#${item.id}`} className="flex shrink-0 items-center gap-2 rounded-lg border border-[#C1E2C2] bg-white px-3 py-2 transition-opacity hover:opacity-70">
                                        <span className="text-[13px] font-semibold leading-5 tracking-[0.5px] text-[#018A06]">
                                            {item.number}
                                        </span>
                                        <span className="whitespace-nowrap text-[14px] font-medium leading-5 text-[#5F5F5F]">
                                            {item.title}
                                        </span>
                                    </a>
                                ))}
                            </nav>
                        </aside>
                    </div>

                     {/* DESKTOP ARTICLE NAVIGATION */}
                    <aside className="sticky top-28 hidden h-fit w-[356px] shrink-0 flex-col items-start gap-4 rounded-xl border border-[#C1E2C2] bg-[#F1F9F1] p-6 lg:flex">
                        <h2 className="w-full text-[22px] font-bold leading-8 text-[#0F0F0F] md:text-[24px]">
                            In This Article
                        </h2>

                        <nav aria-label="In This Article" className="flex w-full flex-col gap-4">
                            {articleSections.map((item) => (
                                <a key={item.id} href={`#${item.id}`} className="flex w-full items-start text-left transition-opacity hover:opacity-70">
                                    <span className="flex w-6 shrink-0 items-center text-[16px] font-semibold leading-5 tracking-[0.7px] text-[#018A06]">
                                        {item.number}
                                    </span>

                                    <span className="text-[16px] font-normal leading-6 text-[#5F5F5F]">
                                        {item.title}
                                    </span>
                                </a>
                            ))}
                        </nav>
                    </aside>

                    <article className="flex w-full flex-col items-start gap-12 lg:w-[824px] lg:shrink-0">

                        <section id="introduction" className="box-border flex w-full scroll-mt-28 flex-col items-start gap-4 rounded-xl bg-white ">
                            <h2 className="w-full text-[22px] font-semibold leading-8 text-[#0F0F0F] md:text-[24px]">
                                Why Automated Beverage Service?
                            </h2>

                            <p className="w-full text-[16px] font-normal leading-6 text-justify text-[#0F0F0F]">
                                Automated beverage solutions are technology-enabled systems designed to prepare, dispense, or sell beverages with minimal manual involvement. Depending on the machine, businesses can offer tea, coffee, cold beverages, juices, water, and other refreshments.<br/>
                                A modern <a href="/" className="font-bold">automated beverage vending machine</a> can combine beverage dispensing with features such as touchscreen selection, digital payments, temperature control, inventory management, and remote monitoring. These features make beverage service more convenient for both businesses and users.<br/>
                                For Indian workplaces in particular, tea and coffee remain an important part of everyday work culture. Automated machines can make these beverages available quickly without requiring employees to wait for manual preparation.
                            </p>

                        </section>
                        <section id="what-are-automated-beverage-solutions" className="w-full scroll-mt-28 ">
                            <div className=" w-full ">
                                <div className="flex flex-col gap-4">
                                    {/* Heading + Intro */}
                                    <div className="flex flex-col gap-5">
                                        <h2 className="text-[28px] font-semibold leading-[36px] text-[#0F0F0F] sm:text-[32px]">
                                            What Are Automated Beverage Solutions?
                                        </h2>

                                        <p className="text-justify text-[15px] font-normal leading-[22px] text-[#0F0F0F] sm:text-[16px]">
                                            Automated beverage solutions are technology-enabled systems
                                            designed to prepare, dispense, or sell beverages with minimal
                                            manual involvement. Depending on the machine, businesses can
                                            offer tea, coffee, cold beverages, juices, water, and other
                                            refreshments.
                                        </p>
                                    </div>

                                    {/* Flow Visual */}
                                    <div className="relative box-border w-full rounded-xl border border-[#C1E2C2] bg-[#F1F9F1] p-5 sm:h-[154px] sm:p-6">
                                        <div className="relative flex h-full w-full flex-col items-center justify-center gap-6 sm:flex-row sm:justify-between sm:gap-0">
                                            {beverageSteps.map((step, index) => {
                                                const Icon = step.icon;

                                                return (
                                                    <div
                                                        key={step.label}
                                                        className="relative z-10 flex w-[129px] flex-col items-center gap-3"
                                                    >
                                                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#018A06]">
                                                            <Icon
                                                                size={25}
                                                                strokeWidth={2}
                                                                className="text-white"
                                                            />
                                                        </div>

                                                        <span className="text-center text-[20px] font-semibold leading-7 text-[#0F0F0F]">
                                                            {step.label}
                                                        </span>
                                                    </div>
                                                );
                                            })}

                                            {/* Desktop dashed connectors */}
                                            <div className="absolute left-[18.7%] right-[18.7%] top-[32px] hidden h-0 border-t-2 border-dashed border-[#C1E2C2] sm:block" />

                                            <div className="absolute left-1/2 top-[32px] hidden h-0 w-[18.7%] -translate-x-1/2 border-t-2 border-dashed border-[#C1E2C2] sm:block" />
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-justify text-[15px] font-normal leading-[22px] text-[#0F0F0F] sm:text-[16px]">
                                        A modern automated beverage vending machine can combine beverage
                                        dispensing with features such as touchscreen selection, digital
                                        payments, temperature control, inventory management, and remote
                                        monitoring. These features make beverage service more convenient
                                        for both businesses and users. For Indian workplaces in particular,
                                        tea and coffee remain an important part of everyday work culture.
                                        Automated machines can make these beverages available quickly
                                        without requiring employees to wait for manual preparation.
                                    </p>
                                </div>
                            </div>
                        </section>
                        
                        <section id="why-are-businesses-moving-toward-automated-beverage-solutions" className="w-full scroll-mt-28 ">
      <div className=" w-full ">
        <div className="flex flex-col gap-5">
          {/* Section Heading */}
          <h2 className="w-full text-[28px] font-semibold leading-[36px] text-[#0F0F0F] sm:text-[32px]">
            Why Are Businesses Moving Toward Automated Beverage Solutions?
          </h2>

          {/* Reasons */}
          <div className="flex flex-col gap-7 sm:gap-8">
            {businessReasons.map((reason) => (
              <div
                key={reason.number}
                className="flex w-full flex-col gap-3"
              >
                {/* Number + Title */}
                <div className="flex items-start gap-5">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F1F9F1]">
                    <span className="text-center text-[20px] font-semibold leading-7 text-[#018A06]">
                      {reason.number}
                    </span>
                  </div>

                  <h3 className="pt-0 text-[18px] font-semibold leading-7 text-[#018A06] sm:text-[20px]">
                    {reason.title}
                  </h3>
                </div>

                {/* Paragraphs */}
                <div className="flex flex-col gap-1">
                  {reason.paragraphs.map((paragraph, index) => {
                    const isList = reason.number === "8" && index === 2;

                    if (isList) {
                      return (
                        <ul
                          key={index}
                          className="ml-5 list-disc whitespace-pre-line pl-1 text-justify text-[15px] font-normal leading-[22px] text-[#0F0F0F] sm:text-[16px]"
                        >
                          {paragraph.split("\n").map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      );
                    }

                    return (
                      <p
                        key={index}
                        className="text-justify text-[15px] font-normal leading-[22px] text-[#0F0F0F] sm:text-[16px]"
                      >
                        {paragraph}
                      </p>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    <section id="automated-beverage-solutions-and-the-future-of-business" className="w-full scroll-mt-28 ">
                            <div className=" w-full ">
                                <div className="flex flex-col gap-4">
                                    {/* Heading + Intro */}
                                    <div className="flex flex-col gap-5">
                                        <h2 className="text-[28px] font-semibold leading-[36px] text-[#0F0F0F] sm:text-[32px]">
                                          Automated Beverage Solutions and the Future of Business
                                        </h2>

                                        <p className="text-justify text-[15px] font-normal leading-[22px] text-[#0F0F0F] sm:text-[16px]">
                                          The future of beverage service is moving toward convenience, automation, digital payments, and data-driven management. Businesses are no longer looking only for a machine that dispenses a drink. They want a complete solution that can improve the user experience while making operations easier.
                                        </p>
                                    </div>

                                    <p className="text-justify text-[15px] font-normal leading-[22px] text-[#0F0F0F] sm:text-[16px]">
                                     A smart beverage vending machine can become more than a refreshment point. With features such as cashless payments, inventory monitoring, analytics, and remote management, it can become part of a business's wider smart infrastructure.
                                    </p>
                                    <p className="text-justify text-[15px] font-normal leading-[22px] text-[#0F0F0F] sm:text-[16px]">
                                    For companies planning to modernize their workplace or customer facilities, choosing the right technology and a reliable beverage vending machine manufacturer in India can be an important step.
                                    </p>
                                </div>
                            </div>
                        </section>

                    </article>
           

                   
                </div>

            </section>
                      <div className="w-full ">
      <div className="mx-auto flex w-full max-w-[1245px] flex-col gap-16 lg:gap-[69px]">
        {closingSections.map((section,index) => (
          <section
            key={section.title}
            id={index===0?"why-choose-clover-carte":"conclusion"}
            className="flex w-full flex-col items-center gap-6 scroll-mt-28"
          >
            <div className="flex w-full gap-3.5">
              <h2 className=" text-[30px] font-bold leading-10 text-[#333333] sm:text-[34px] lg:text-[36px] lg:leading-10">
                {section.title}
              </h2>
            </div>
            <div className="">
            {section.content?.map((content,index)=>

            <p key={index} className="w-full text-justify text-[15px] font-normal leading-[25px] text-[#0F0F0F] sm:text-[16px]">
              {content}
            </p>
            )}
            </div>
          </section>
        ))}
      </div>
    </div>
        </main>
    );
}
