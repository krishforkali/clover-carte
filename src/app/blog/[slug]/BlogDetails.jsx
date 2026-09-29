import Link from "next/link";
import { Heart, ShieldCheck, Users } from "lucide-react";
import BlogContentRenderer from "@/components/blogs/BlogContentRenderer";
import FAQAccordion from "@/components/common/FAQAccordion";
import BlogSidebar from "@/components/blogs/BlogSidebar";

export default function BlogDetails({ blog }) {
    if (!blog) {
        return (
            <div className="mx-auto max-w-6xl px-5 py-20 text-center">
                Blog not found.
            </div>
        );
    }

    const blogTheme = blog?.theme || {
        primary: "#018A06",
        secondary: "#E8F5E9",
        accent: "#B7DDB9",
    };

    const getBenefitIcon = (icon) => {
        switch (icon) {
            case "shield":
                return <ShieldCheck size={22} />;
            case "heart":
                return <Heart size={22} />;
            case "female":
                return <Users size={22} />;
            default:
                return <ShieldCheck size={22} />;
        }
    };

    const getArticleHeadings = (blocks = []) => {
        return blocks
            .filter(
                (block) =>
                    block.type === "heading" &&
                    block.data?.text?.trim()
            )
            .map((block) => ({
                id: block.id,
                title: block.data.text,
            }));
    };

    const articleHeadings = getArticleHeadings(blog.content);

    const heroPara = {
        p1: blog?.hero?.p1 || "",
        p2: blog?.hero?.p2 || "",
    };

    const faqBlock = blog?.content?.find(
        (section) => section.type === "faq"
    );

    const faqs = faqBlock?.data?.items || [];
 
    return (
        <>
            {/* =========================
                BLOG HEADER
            ========================== */}
            <section className="mx-auto w-full max-w-[1248px] px-5 pt-6 sm:pt-8 lg:px-0 lg:pt-5">
                <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                    Blog
                </h2>

                <p className="mt-3 max-w-4xl text-sm leading-6 text-[#0F0F0F] sm:mt-4 sm:text-base">
                    India's First Made-In-India Smart Vending Machine Manufacturer.
                </p>
            </section>

            {/* =========================
                HERO
            ========================== */}
            <div className="flex lg:gap-8 lg:px-10">
            <div className="w-full lg:w-[70%]">
            {blog.hero?.enabled && (
                <section className="mx-auto w-full max-w-[1248px] px-5 py-5 sm:py-10 lg:px-0 ">
                    {/* Category */}
                            {/* {blog?.category && (
                                <p
                                    className="mb-3 text-xs font-semibold uppercase tracking-[0.1em] sm:mb-4 sm:text-sm"
                                    style={{
                                        color: blogTheme.primary,
                                    }}
                                >
                                    {blog.category}
                                </p>
                            )} */}
                    <div className="flex flex-col  gap-4">
                           {/* =========================
                            HERO IMAGE
                        ========================== */}
                        {blog.hero.image?.url && (
                            <div className="flex w-full h-[250px] lg:h-[400px] items-center justify-center overflow-hidden ">
                                <img
                                    src={blog.hero.image.url}
                                    alt={
                                        blog.hero.image.alt ||
                                        blog.title
                                    }
                                    className="h-full w-full  object-containt"
                                />
                            </div>
                        )}

                        {/* =========================
                            LEFT CONTENT
                        ========================== */}
                        <div className="w-full ">

                            

                            {/* Title */}
                            <h1 className="text-[32px] font-extrabold text-center lg:text-start leading-[1.15] text-[#0F0F0F] sm:text-[40px] lg:text-[44px]">
                                {blog.hero.title}{" "}
                                <span
                                    className="text-[30px] sm:text-[36px] lg:text-4xl"
                                    style={{
                                        color: blogTheme.primary,
                                    }}
                                >
                                    {blog.hero.highlightedTitle}
                                </span>
                            </h1>

                            {/* Excerpt */}
                            {blog.excerpt && (
                                <p className="mt-5 text-base leading-7 text-gray-600 sm:mt-6 sm:text-lg sm:leading-8">
                                    {blog.excerpt}
                                </p>
                            )}

                            {/* =========================
                                BENEFITS
                            ========================== */}
                            {blog.hero.benefits?.length > 0 && (
                                <div className="mt-7 grid grid-cols-1 gap-6 sm:mt-8 sm:grid-cols-2 lg:grid-cols-3">

                                    {blog.hero.benefits.map(
                                        (benefit, index) => (
                                            <div
                                                key={
                                                    benefit._id || index
                                                }
                                                className="flex min-w-0 flex-col text-center lg:text-start items-center lg:items-start gap-3"
                                            >
                                                {/* Icon */}
                                                <div
                                                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
                                                    style={{
                                                        backgroundColor: `${blogTheme.primary}15`,
                                                        color: blogTheme.primary,
                                                    }}
                                                >
                                                    {getBenefitIcon(
                                                        benefit.icon
                                                    )}
                                                </div>

                                                {/* Content */}
                                                <div className="min-w-0">
                                                    <h3 className="text-sm font-semibold  leading-5 text-[#0F0F0F] sm:text-base">
                                                        {benefit.title}
                                                    </h3>

                                                    {benefit.description && (
                                                        <p className="mt-1 text-xs leading-5 text-gray-600 sm:text-sm sm:leading-6">
                                                            {
                                                                benefit.description
                                                            }
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                        )
                                    )}
                                </div>
                            )}

                            {/* =========================
                                BUTTONS
                            ========================== */}
                            {blog.hero.buttons?.length > 0 && (
                                <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4">

                                    {blog.hero.buttons.map(
                                        (button, index) => {
                                            const isSecondary =
                                                button.type ===
                                                "secondary";

                                            return (
                                                <Link
                                                    key={
                                                        button._id ||
                                                        index
                                                    }
                                                    href={
                                                        button.href ||
                                                        "#"
                                                    }
                                                    className="inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition sm:w-auto sm:text-base"
                                                    style={
                                                        isSecondary
                                                            ? {
                                                                  border: `1px solid ${blogTheme.primary}`,
                                                                  color: blogTheme.primary,
                                                              }
                                                            : {
                                                                  backgroundColor:
                                                                      blogTheme.primary,
                                                                  color: "#fff",
                                                              }
                                                    }
                                                >
                                                    {button.label}
                                                </Link>
                                            );
                                        }
                                    )}
                                </div>
                            )}
                        </div>

                     
                    </div>
                </section>
            )}

            {/* =========================
                BLOG CONTENT
            ========================== */}
            <BlogContentRenderer
                blocks={blog.content}
                articleHeadings={articleHeadings}
                theme={blogTheme}
                heroPara={heroPara}
            />
            </div>
              <div className="w-full lg:w-[320px] lg:shrink-0 xl:w-[374px] py-10 lg:block hidden">
        {" "}
        <BlogSidebar theme={blogTheme} />{" "}
      </div>{" "}
            </div>

            {/* =========================
                FAQ
            ========================== */}
            <FAQAccordion className="px-4 lg:px-0" faqs={faqs} />
        </>
    );
}