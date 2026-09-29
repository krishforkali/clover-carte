import FeaturedBlogCard from "../../components/section/FeaturedBlogCard";
import M_FeaturedBlogCard from "@/components/section/M_FeaturedBlogCard";
import { getBlogs } from "../../api/blog";
import BlogSidebar from "@/components/blogs/BlogSidebar";

async function Blogs() {
    let blogs = [];

    try {
        const res = await getBlogs();

        blogs = [...(res?.blogs || [])];
    } catch (error) {
        console.error("Failed to fetch blogs:", error);
    }

    return (
        <>
            <div className="hidden lg:block">
                <section className="max-w-[1248px] mx-auto px-5 lg:px-0 py-5">
                    <h1 className="text-5xl font-bold">
                        Blog
                    </h1>

                    <p className="text-[#0F0F0F] mt-4 max-w-4xl">
                        India's First Made-In-India Smart Vending Machine Manufacturer.
                    </p>
                </section>
     <div className="flex flex-col lg:flex-row gap-8 px-5 lg:px-10 w-full">
  {/* Blogs - 70% */}
  <div className="w-full lg:w-[70%]">
    {blogs.map((blog, index) => (
      <div
        key={blog?._id || index}
        className="w-full pb-12"
      >
        <FeaturedBlogCard
          blog={blog}
          reverse={index % 2 !== 0}
        />
      </div>
    ))}
  </div>

  {/* Sidebar - 30% */}
  <div className="w-full lg:w-[30%]">
    <BlogSidebar />
  </div>
</div>
</div>

            <div className="block lg:hidden space-y-12">
                {blogs.map((blog, index) => (
                    <div
                        key={blog?._id || index}
                        className="w-full px-3"
                    >
                        <M_FeaturedBlogCard blog={blog} />
                    </div>
                ))}
            </div>
        </>
    );
}

export default Blogs;