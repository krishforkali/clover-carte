import Image from "next/image";
import Link from "next/link";

export default function M_home_Hero() {
    return (
        <section className="w-full flex justify-center">
            <div className="relative w-full h-[509px] overflow-hidden rounded-[12px] bg-white flex flex-col justify-between py-5 px-5">

                {/* Hero Image */}
                <Image
                    src="/m_images/m_home_hero.jpg"
                    alt="CloverCarte Smart Vending Machine"
                    width={768}
                    height={509}
                    priority
                    fetchPriority="high"
                    sizes="100vw"
                    className="absolute inset-0 h-full w-full object-cover object-center"
                />

                {/* Gradient Overlay */}
                <div
                    className="
                        pointer-events-none
                        absolute
                        inset-0
                        bg-[linear-gradient(180deg,#FFFFFF_0%,rgba(253,233,201,0.676764)_7.92%,rgba(247,174,50,0.160449)_25.67%,rgba(245,158,11,0)_98.46%)]
                    "
                />

                {/* Content */}
                <div className="relative z-10 flex w-full flex-col items-end pr-5">
                    <h1 className="text-center text-[24px] font-bold leading-[30px] tracking-[-0.8px] text-[#0F0F0F]">
                        Automatic Vending
                        <br />
                        Machine Manufacturer
                    </h1>

                    <span className="text-center text-[14px] font-medium text-black">
                        Innovative | Reliable | Customizable.
                        <br />
                        Designed for modern businesses.
                    </span>
                </div>

                {/* Buttons */}
                <div className="relative z-10 flex w-full flex-col gap-3">
                    <Link
                        href="/contact-us"
                        className="flex h-[52px] w-full items-center justify-center rounded-[8px] bg-[#018A06] px-8 py-4 text-center text-[16px] font-semibold leading-[20px] text-white transition-colors duration-200 hover:bg-[#017505]"
                    >
                        Request a Demo
                    </Link>

                    <Link
                        href="/products"
                        className="box-border flex h-[54px] w-full items-center justify-center rounded-[8px] border border-[#C1E2C2] bg-white px-8 py-4 text-center text-[16px] font-semibold leading-[20px] text-[#018A06] transition-colors duration-200 hover:bg-[#F1F9F1]"
                    >
                        Explore Machines
                    </Link>
                </div>
            </div>
        </section>
    );
}