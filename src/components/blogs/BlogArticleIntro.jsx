import Link from "next/link";
import { BsFillBuildingsFill, BsShopWindow } from "react-icons/bs";
import { FaGraduationCap, FaPencilRuler } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { IoCashOutline } from "react-icons/io5";
import { MdFullscreen, MdGroup, MdOutlineFactory, MdOutlineHotel, MdOutlineLocalHospital, MdPersonOff, MdSpeed, MdTouchApp } from "react-icons/md";
import { PiSealCheckFill } from "react-icons/pi";

const articleSections = [
    {
        number: "01",
        title: "Smart Coffee Vending",
        id: "smart-coffee-vending",
    },
    {
        number: "02",
        title: "What Is Caftina?",
        id: "what-is-caftina",
    },
    {
        number: "03",
        title: "Why Choose Automatic?",
        id: "why-choose-automatic",
    },
    {
        number: "04",
        title: "Tea Coffee Vending",
        id: "tea-coffee-vending",
    },
    {
        number: "05",
        title: "Best Machine for Office",
        id: "best-machine-for-office",
    },
    {
        number: "06",
        title: "Installation Locations",
        id: "installation-locations",
    },
    {
        number: "07",
        title: "Customized Solutions",
        id: "customized-solutions",
    },
    {
        number: "08",
        title: "Future of Beverage Service",
        id: "future-of-beverage-service",
    },
];

export default function BlogArticleIntro() {
    return (
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

                <article className="flex w-full flex-col items-start gap-12 lg:w-[824px] lg:shrink-0">
                    {/* Introduction */}
                    <div className="flex w-full flex-col items-start gap-6">
                        <div className="flex w-full flex-col items-start gap-2">
                            <p className="w-full text-[16px] font-normal leading-6 text-justify text-[#0F0F0F]">
                                In today’s fast-paced workplaces, convenience
                                and efficiency are more important than ever.
                                Employees, customers, and visitors often look
                                for quick access to a fresh cup of tea or
                                coffee without waiting in long queues. This is
                                where the <a href="/products/caftina" className="font-bold">Caftina Coffee Vending Machine by
                                    Clover Carte</a>  offers a smart and convenient
                                solution.
                            </p>

                            <p className="w-full text-[16px] font-normal leading-6 text-justify text-[#0F0F0F]">
                                Designed for modern offices, commercial spaces,
                                institutions, hospitals, factories, and other
                                high-footfall locations, Caftina combines
                                automated beverage preparation with an
                                easy-to-use vending experience. It helps
                                businesses provide tea and coffee conveniently
                                while reducing the need for dedicated
                                beverage-serving staff.
                            </p>
                        </div>
                    </div>

                    {/* What Is Caftina */}
                    <section id="what-is-caftina" className="box-border flex w-full scroll-mt-28 flex-col items-start gap-4 rounded-xl border border-l-4 border-l-[#018A06]  border-[#E2F0E2] bg-white px-4 py-6">
                        <h2 className="w-full text-[22px] font-semibold leading-8 text-[#0F0F0F] md:text-[24px]">
                            What Is Caftina coffee vending machine?
                        </h2>

                        <p className="w-full text-[16px] font-normal leading-6 text-justify text-[#0F0F0F]">
                            Caftina is a smart coffee vending solution
                            designed to make beverage preparation quick,
                            convenient, and accessible. Users can select their
                            preferred beverage, make a payment through the
                            available digital payment options, and receive
                            their drink with minimal waiting time.
                        </p>

                        <p className="w-full text-[16px] font-normal leading-6 text-justify text-[#0F0F0F]">
                            As businesses increasingly adopt automated
                            solutions, the demand for an <a href="/" className="font-bold"> Automatic Coffee
                                Vending Machine </a> in India is growing. Machines like
                            Caftina can help workplaces create a convenient
                            beverage station without requiring a traditional
                            cafeteria or full-time beverage counter.
                        </p>

                        <p className="w-full text-[16px] font-normal italic leading-6 text-[#5F5F5F]">
                            Note: The machine is particularly suitable for
                            locations where people need quick refreshments
                            throughout the day.
                        </p>

                        <Link href="/product" className="group flex items-center gap-1 text-[12px] font-semibold leading-5 tracking-[0.7px] text-[#018A06]">
                            <span>View Product</span>
                            <FiArrowRight className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-1" strokeWidth={2} />
                        </Link>
                    </section>

                    {/* Why Choose Automatic */}
                    <section id="why-choose-automatic" className="flex w-full scroll-mt-28 flex-col items-start gap-6">
                        <h2 className="w-full text-[28px] font-semibold leading-[36px] text-[#0F0F0F] md:text-[32px] md:leading-[40px]">
                            Why Choose an Automatic Coffee Vending Machine in India?
                        </h2>

                        <p className="w-full text-[16px] font-normal leading-5 text-[#0F0F0F]">
                            Traditional tea and coffee preparation can require staff, kitchen space, ingredients, and regular supervision. An automated vending machine can simplify this process by bringing beverage service directly to the workplace or commercial environment.
                        </p>

                        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
                            <div className="box-border flex min-h-[190px] w-full flex-col items-start gap-2 rounded-xl border border-[#C1E2C2] bg-white p-6">
                                <div className="flex h-6 items-center text-[#018A06]">
                                    <MdSpeed className="text-[28px] leading-6" />
                                </div>
                                <h3 className="w-full text-[16px] font-bold leading-7 text-[#0F0F0F]">
                                    Quick preparation
                                </h3>
                                <p className="w-full text-[16px] font-normal leading-6 text-[#5F5F5F]">
                                    Dispenses beverages rapidly, drastically reducing wait times during busy office hours.
                                </p>
                            </div>

                            <div className="box-border flex min-h-[190px] w-full flex-col items-start gap-2 rounded-xl border border-[#C1E2C2] bg-white p-6">
                                <div className="flex h-6 items-center text-[#018A06]">
                                    <MdTouchApp className="text-[28px] leading-6" />
                                </div>
                                <h3 className="w-full text-[16px] font-bold leading-7 text-[#0F0F0F]">
                                    Easy self-service
                                </h3>
                                <p className="w-full text-[16px] font-normal leading-6 text-[#5F5F5F]">
                                    Intuitive touchscreen interface allows users to easily select and customize their drinks with zero staff training.
                                </p>
                            </div>

                            <div className="box-border flex min-h-[190px] w-full flex-col items-start gap-2 rounded-xl border border-[#C1E2C2] bg-white p-6">
                                <div className="flex h-6 items-center text-[#018A06]">
                                    <MdGroup className="text-[28px] leading-6" />
                                </div>
                                <h3 className="w-full text-[16px] font-bold leading-7 text-[#0F0F0F]">
                                    High-footfall ready
                                </h3>
                                <p className="w-full text-[16px] font-normal leading-6 text-[#5F5F5F]">
                                    Built to handle continuous usage in demanding environments without performance degradation.
                                </p>
                            </div>

                            <div className="box-border flex min-h-[190px] w-full flex-col items-start gap-2 rounded-xl border border-[#C1E2C2] bg-white p-6">
                                <div className="flex h-6 items-center text-[#018A06]">
                                    <MdPersonOff className="text-[28px] leading-6" />
                                </div>
                                <h3 className="w-full text-[16px] font-bold leading-7 text-[#0F0F0F]">
                                    Reduced dependency
                                </h3>
                                <p className="w-full text-[16px] font-normal leading-6 text-[#5F5F5F]">
                                    Minimizes reliance on pantry staff, ensuring 24/7 availability of hot beverages.
                                </p>
                            </div>

                            <div className="box-border flex min-h-[166px] w-full flex-col items-start gap-2 rounded-xl border border-[#C1E2C2] bg-white p-6">
                                <div className="flex h-6 items-center text-[#018A06]">
                                    <IoCashOutline className="text-[28px] leading-6" />
                                </div>
                                <h3 className="w-full text-[16px] font-bold leading-7 text-[#0F0F0F]">
                                    Digital payments
                                </h3>
                                <p className="w-full text-[16px] font-normal leading-6 text-[#5F5F5F]">
                                    Seamlessly integrates with modern cashless payment systems and RFID card readers.
                                </p>
                            </div>

                            <div className="box-border flex min-h-[166px] w-full flex-col items-start gap-2 rounded-xl border border-[#C1E2C2] bg-white p-6">
                                <div className="flex h-6 items-center text-[#018A06]">
                                    <PiSealCheckFill className="text-[28px] leading-6" />
                                </div>
                                <h3 className="w-full text-[16px] font-bold leading-7 text-[#0F0F0F]">
                                    Consistent service
                                </h3>
                                <p className="w-full text-[16px] font-normal leading-6 text-[#5F5F5F]">
                                    Delivers uniform taste and quality in every single cup, eliminating human error.
                                </p>
                            </div>

                            <div className="box-border flex min-h-[169px] w-full flex-col items-start gap-2 rounded-xl border border-[#C1E2C2] bg-white p-6">
                                <div className="flex h-6 items-center text-[#018A06]">
                                    <PiSealCheckFill className="text-[28px] leading-6" />
                                </div>
                                <h3 className="w-full text-[16px] font-bold leading-7 text-[#0F0F0F]">
                                    Modern appearance
                                </h3>
                                <p className="w-full text-[16px] font-normal leading-6 text-[#5F5F5F]">
                                    Sleek aesthetics that complement premium office interiors and breakrooms.
                                </p>
                            </div>

                            <div className="box-border flex min-h-[169px] w-full flex-col items-start gap-2 rounded-xl border border-[#C1E2C2] bg-white p-6">
                                <div className="flex h-6 items-center text-[#018A06]">
                                    <MdFullscreen className="text-[28px] leading-6" />
                                </div>
                                <h3 className="w-full text-[16px] font-bold leading-7 text-[#0F0F0F]">
                                    Efficient space use
                                </h3>
                                <p className="w-full text-[16px] font-normal leading-6 text-[#5F5F5F]">
                                    Compact footprint maximizes utility in both large cafeterias and small pantry areas.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Tea Coffee Vending */}
                    <section id="tea-coffee-vending" className="flex w-full scroll-mt-28 flex-col gap-6">
                        <h2 className="w-full text-[32px] font-semibold leading-[40px] tracking-[-0.32px] text-[#0F0F0F] max-md:text-[26px] max-md:leading-[34px]">
                            Tea Coffee Vending Machine for Indian Workplaces
                        </h2>

                        <div className="flex w-full flex-col gap-2">
                            <p className="w-full text-[16px] font-normal leading-[24px] text-justify text-[#0F0F0F]">
                                The demand for a <a href="/" className="font-bold">Tea Coffee Vending Machine</a> in India is increasing as offices and commercial establishments look for convenient refreshment solutions. Tea and coffee remain popular beverages across Indian workplaces, making automated beverage machines a useful facility for employees and visitors.
                            </p>

                            <p className="w-full text-[16px] font-normal leading-[24px] text-justify text-[#0F0F0F]">
                                Caftina can be positioned in office cafeterias, reception areas, employee lounges, factories, educational institutions, hospitals, shopping spaces, and other locations where people need quick access to beverages.
                            </p>

                            <p className="w-full text-[16px] font-normal leading-[24px] text-justify text-[#0F0F0F]">
                                Instead of maintaining a separate beverage counter, organizations can create a dedicated self-service beverage area around the machine. This can make the refreshment experience faster while also supporting a more organized workplace environment.
                            </p>
                        </div>
                    </section>

                    {/* Best Machine */}
                    <section id="best-machine-for-office" className="flex w-full scroll-mt-28 flex-col gap-4">
                        <h2 className="w-full text-[32px] font-semibold leading-[40px] tracking-[-0.32px] text-[#0F0F0F] max-md:text-[26px] max-md:leading-[34px]">
                            Best Tea Coffee Machine for Office
                        </h2>

                        <div className="flex w-full flex-col gap-2">
                            <p className="w-full text-[16px] font-normal leading-[24px] text-justify text-[#0F0F0F]">
                                Choosing the <a href="/products/caftina" className="font-bold">Best Tea Coffee Machine for Office in India</a> depends on several factors, including workplace size, expected usage, available space, beverage requirements, and payment preferences.
                            </p>

                            <p className="w-full text-[16px] font-normal leading-[24px] text-justify text-[#0F0F0F]">
                                For offices with employees and visitors throughout the day, a vending machine should be easy to operate and convenient enough for regular use. Caftina is designed around the idea of making beverage access simple and efficient.
                            </p>

                            <p className="w-full text-[16px] font-normal leading-[24px] text-justify text-[#0F0F0F]">
                                For offices with employees and visitors throughout the day, a vending machine should be easy to operate and convenient enough for regular use. Caftina is designed around the idea of making beverage access simple and efficient.
                            </p>

                            <p className="w-full text-[16px] font-normal leading-[24px] text-justify text-[#0F0F0F]">
                                For offices with employees and visitors throughout the day, a vending machine should be easy to operate and convenient enough for regular use. Caftina is designed around the idea of making beverage access simple and efficient.
                            </p>
                        </div>
                    </section>

                    {/* Installation Locations */}
                    <section id="installation-locations" className="flex w-full scroll-mt-28 flex-col gap-6">
                        <h2 className="w-full text-[32px] font-semibold leading-[40px] tracking-[-0.32px] text-[#0F0F0F] max-md:text-[26px] max-md:leading-[34px]">
                            Where Can Caftina Be Installed?
                        </h2>

                        <div className="flex w-full flex-col gap-6">
                            {[
                                [BsFillBuildingsFill, "Offices", "Corporate pantries, breakrooms, and executive lounges requiring reliable, premium beverage service."],
                                [MdOutlineFactory, "Factories", "Robust environments where durability and quick dispensing for large workforces are essential."],
                                [MdOutlineLocalHospital, "Hospitals", "Waiting areas and staff breakrooms needing 24/7 access to hygienic and comforting hot drinks."],
                                [FaGraduationCap, "Educational Institutions", "Staff rooms, libraries, and student commons for quick energy boosts during busy academic schedules."],
                                [MdOutlineHotel, "Hotels & Commercial Spaces", "Lobbies, conference centers, and co-working spaces demanding a touch of hospitality and convenience."],
                                [BsShopWindow, "Retail & Public Areas", "High-traffic zones providing on-the-go refreshments for customers and visitors."],
                            ].map(([Icon, title, description]) => (
                                <div key={title} className="flex w-full items-start gap-4">
                                    <div className="w-5 shrink-0 pt-1 text-[20px] font-bold leading-[20px] text-[#018A06]">
                                        <Icon />
                                    </div>
                                    <div className="flex flex-1 flex-col">
                                        <h3 className="text-[20px] font-semibold leading-7 text-[#0F0F0F]">
                                            {title}
                                        </h3>
                                        <p className="text-[16px] font-normal leading-6 text-[#0F0F0F]">
                                            {description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Customized Solutions */}
                    <section id="customized-solutions" className="flex w-full scroll-mt-28 flex-col gap-4">
                        <h2 className="w-full text-[32px] font-semibold leading-[40px] tracking-[-0.32px] text-[#0F0F0F] max-md:text-[26px] max-md:leading-[34px]">
                            Customized Vending Machine by Clover Carte
                        </h2>

                        <div className="flex w-full flex-col gap-3">
                            <p className="w-full text-[16px] font-normal leading-[24px] text-justify text-[#0F0F0F]">
                                Every facility has unique requirements, which is why flexibility is at the core of Clover Carte's design philosophy. From specialized beverage menus to tailored physical dimensions, our machines adapt to your specific operational requirements.
                            </p>

                            <p className="w-full text-[16px] font-normal leading-[24px] text-justify text-[#0F0F0F]">
                                Our approach ensures that the vending solution "fits naturally" into your existing space and culture, rather than forcing you to adapt to rigid hardware constraints. This customization extends to branding, payment gateways, and even the software interface, providing a truly bespoke experience.
                            </p>
                        </div>
                    </section>

                    {/* Future */}
                    <section id="future-of-beverage-service" className="box-border flex w-full scroll-mt-28 flex-col gap-4 rounded-xl border border-[#C1E2C2] bg-[#F1F9F1] p-3">
                        <h2 className="w-full text-[24px] font-semibold leading-[40px] tracking-[-0.32px] text-[#0F0F0F] max-md:text-[22px] max-md:leading-8">
                            The Future of Automated Beverage Service
                        </h2>

                        <p className="w-full text-[16px] font-normal leading-[24px] text-justify text-[#5F5F5F]">
                            As businesses continue to embrace automation, smart vending machines are becoming an increasingly practical solution for everyday refreshments. The <a className="font-bold" href="/products/caftina">Caftina Coffee Vending Machine by Clover Carte</a> brings together convenience, automation, and modern self-service functionality for workplaces and commercial environments.<br /> Whether you are searching for an <a className="font-bold" href="/"> Automatic Coffee Vending Machine  in India</a>, a Tea Coffee Vending Machine in India, or the Best Tea Coffee Machine for Office in India, Caftina can be considered as a modern beverage vending solution.<br /> With customizable vending solutions and a focus on automated retail, <a href="/" className="font-bold">Clover Carte</a>  is helping businesses create smarter, more convenient refreshment experiences for employees, customers, and visitors.
                        </p>

                        <button type="button" className="flex h-11 w-[175px] items-center justify-center rounded-lg bg-[#018A06] px-6 py-3 text-[16px] font-semibold leading-5 text-white max-md:w-full">
                            Request a Demo
                        </button>
                    </section>
                </article>

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
            </div>

        </section>
    );
}