"use client"
import { useMemo } from "react";
import { siteTermsAndServices } from "../../components/settings/data/termandconditions";

const TermsCondition = () => {
    const { title, date, content } = siteTermsAndServices;

    const menuItems = useMemo(
        () => content.map((item) => item.title),
        [content]
    );

    const scrollToSection = (id) => {
        document
            .getElementById(id)
            ?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-20">

                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold">
                        {title}
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Last update: {date}
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-10">

                    {/* Sidebar */}
                    <aside className="lg:w-1/4">
                        <div className="sticky top-24 border rounded-lg p-4 bg-white shadow-sm">

                            {menuItems.map((item) => (
                                <button
                                    key={item}
                                    onClick={() => scrollToSection(item)}
                                    className="block w-full text-left py-3 text-sm uppercase text-gray-600 hover:text-blue-600 transition"
                                >
                                    {item}
                                </button>
                            ))}

                        </div>
                    </aside>

                    {/* Content */}
                    <main className="flex-1">

                        {content.map((item) => (
                            <section
                                key={item.id}
                                id={item.title}
                                className="mb-10"
                            >
                                <h2 className="text-2xl font-semibold mb-4">
                                    {item.title}
                                </h2>

                                <div
                                    className="
                  prose
                  max-w-none
                  prose-p:text-gray-700
                  leading-8
                "
                                    dangerouslySetInnerHTML={{
                                        __html: item.description,
                                    }}
                                />
                            </section>
                        ))}

                    </main>
                </div>
            </div>
        </>
    );
};

export default TermsCondition;