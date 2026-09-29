
import Image from "next/image";

export default function M_FeaturedBlogCard({
    blog,
    priority
}) {
    return (
        <article className="box-border w-full p-3 flex flex-col items-start gap-4 border border-[#C1E2C2] rounded-xl bg-white">
            {/* Blog Image */}
            <div className="w-full h-[332px] overflow-hidden rounded-t-xl">
                <Image src={blog.image?.url?.trim()||blog?.featuredImage?.url?.trim()} alt={blog?.title} priority={priority}
                        width={335} height={332} className="w-full h-full object-contain" />
            </div>

            {/* Blog Content */}
            <div className="w-full h-[268.25px] flex flex-col items-start gap-2">
                {/* Category + Date */}
                <div className="w-[182.25px] h-[28.25px] flex flex-row items-center gap-3">
                    <div className="box-border w-[92.25px] h-[28.25px] px-[9px] py-1 flex flex-col justify-center items-start bg-[#F1F9F1] border-[1.125px] border-[#C1E2C2] rounded">
                        <span className="w-[72px] h-[18px] text-[12px] leading-[18px] font-bold tracking-[1px] uppercase text-[#018A06] flex items-center">
                            {blog.category}
                        </span>
                    </div>

                    <span className="w-[78px] h-[23px] text-[12px] leading-[22px] font-normal text-[#5F5F5F] flex items-center">
                        {new Date(blog.createdAt).toLocaleDateString()}
                    </span>
                </div>

                {/* Title + Description + Read More */}
                <div className="w-full h-[232px] flex flex-col items-start gap-4">
                    <div className="w-full h-[196px] flex flex-col items-start gap-1">
                        <h3 className="w-full h-12 text-[16px] leading-6 font-bold text-[#0F0F0F] flex items-center">
                            {blog.title}
                        </h3>

                        <p className="w-full h-36 text-[16px] leading-6 font-normal text-[#5F5F5F] flex items-center">
                            {blog.shortDescription}
                        </p>
                    </div>

                    {/* Read More */}
                    <a href={`/blog/${blog.slug}`} className="w-[103px] h-5 flex flex-row justify-center items-center gap-2">
                        <span className="w-[83px] h-5 text-[16px] leading-5 font-medium text-[#018A06] flex items-center">
                            Read more
                        </span>

                        <span className="w-3 h-[10px] text-[#018A06] flex items-center justify-center">
                            →
                        </span>
                    </a>
                </div>
            </div>
        </article>
    );
}