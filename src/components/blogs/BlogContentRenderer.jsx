import Link from "next/link";
import BlogSidebar from "./BlogSidebar";
export default function BlogContentRenderer({
  blocks = [],
  articleHeadings = [],
  theme,
  heroPara,
}) {
  const blogTheme = theme || {
    primary: "#018A06",
    secondary: "#E8F5E9",
    accent: "#B7DDB9",
  };
  return (
    <div className="mx-auto flex w-full max-w-[1248px]  flex-col gap-10 px-5 pb-10 sm:gap-12 sm:px-6 lg:flex-row lg:items-start lg:gap-10 lg:px-0">
      {" "}
      {/* ========================= ARTICLE ========================== */}{" "}
      <article className="min-w-0 w-full max-w-[900px]  pb-8  sm:pb-16 lg:flex-1">
        {" "}
        {/* Hero Paragraph 1 */}{" "}
        {heroPara?.p1 && (
          <div
            className="text-base leading-7 text-black  sm:leading-6 pt-3 text-justify"
            dangerouslySetInnerHTML={{ __html: heroPara.p1 }}
          />
        )}{" "}
        {/* Hero Paragraph 2 */}{" "}
        {heroPara?.p2 && (
          <div
            className="text-base leading-7 text-black  sm:leading-6 pt-3 text-justify mb-12"
            dangerouslySetInnerHTML={{ __html: heroPara.p2 }}
          />
        )}{" "}
        {/* ========================= IN THIS ARTICLE ========================== */}{" "}
        {articleHeadings.length > 0 && (
          <section
            className="w-full rounded-xl border p-4 sm:p-6"
            style={{
              borderColor: blogTheme.primary,
              backgroundColor: blogTheme.secondary || "#E8F5E9",
            }}
          >
            {" "}
            <h2 className="mb-5 text-2xl font-bold leading-tight text-[#0F0F0F] sm:mb-8 sm:text-3xl">
              {" "}
              In This Article{" "}
            </h2>{" "}
            <div className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2 sm:gap-y-4">
              {" "}
              {articleHeadings.map((heading) => {
                const title = heading.title?.trim() || "";
                const startsWithNumber = /^\d/.test(title);
                return (
                  <a
                    key={heading.id}
                    href={`#${heading.id}`}
                    className="break-words text-sm font-medium transition hover:text-black sm:text-base"
                    style={{ color: blogTheme.primary }}
                  >
                    {" "}
                    {!startsWithNumber && "• "} {heading.title}{" "}
                  </a>
                );
              })}{" "}
            </div>{" "}
          </section>
        )}{" "}
        {/* ========================= CONTENT BLOCKS ========================== */}{" "}
        {blocks.map((block) => {
          switch (block.type) {
            /* ========================= HEADING ========================== */ case "heading":
              return (
                <h2
                  key={block.id}
                  id={block.id}
                  className="scroll-mt-28 pt-12 text-[22px] font-semibold leading-tight text-[#0F0F0F] sm:text-[24px"
                >
                  {" "}
                  {block.data?.text}{" "}
                </h2>
              );
               case "paragraph":
              return (
                <div
                  key={block.id}
                  className="text-base leading-7 text-black  sm:leading-6 pt-3 text-left lg:text-justify"
                  dangerouslySetInnerHTML={{ __html: block.data?.text || "" }}
                />
              );
            /* ========================= LIST ========================== */ case "list":
              return (
                <ul
                  key={block.id}
                  className="list-disc pt-3 space-y-2 pl-5 text-sm leading-6 text-black sm:pl-6 sm:text-base"
                >
                  {" "}
                  {(block.data?.items || []).map((item, index) => (
                    <li key={index} className="break-words">
                      {" "}
                      {item}{" "}
                    </li>
                  ))}{" "}
                </ul>
              );
            /* ========================= QUOTE ========================== */ case "quote":
              return (
                <blockquote
                  key={block.id}
                  className="my-6 border-l-4 bg-gray-50 px-4 py-4 text-base italic leading-7 text-gray-700 sm:my-8 sm:px-6 sm:py-5 sm:text-lg sm:leading-8"
                  style={{ borderLeftColor: blogTheme.primary }}
                >
                  {" "}
                  {block.data?.text}{" "}
                  {block.data?.author && (
                    <footer className="mt-2 text-sm font-semibold not-italic">
                      {" "}
                      — {block.data.author}{" "}
                    </footer>
                  )}{" "}
                </blockquote>
              );
            /* ========================= CARDS ========================== */ case "cards":
              return (
                <section
                  key={block.id}
                  className="my-8 grid grid-cols-1 gap-4 sm:my-10 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3"
                >
                  {" "}
                  {(block.data?.items || []).map((item, index) => (
                    <div
                      key={item.id || index}
                      className="min-w-0 rounded-2xl border border-gray-200 bg-white p-4 text-center shadow-sm sm:p-5"
                    >
                      {" "}
                      <h3 className="break-words text-[15px] font-semibold leading-6 text-[#0F0F0F] sm:text-[16px]">
                        {" "}
                        {item.title}{" "}
                      </h3>{" "}
                      {item.description && (
                        <p className="mt-2 break-words text-[12px] font-normal leading-5 text-[#5F5F5F] sm:mt-3 sm:text-[13px] sm:leading-[18px]">
                          {" "}
                          {item.description}{" "}
                        </p>
                      )}{" "}
                    </div>
                  ))}{" "}
                </section>
              );
            /* ========================= PRODUCT GRID ========================== */ case "productGrid":
              return (
                <section key={block.id} className="my-8 sm:my-10">
                  {" "}
                  {block.data?.title && (
                    <h2 className="mb-5 text-2xl font-bold leading-tight text-[#0F0F0F] sm:mb-6 sm:text-3xl">
                      {" "}
                      {block.data.title}{" "}
                    </h2>
                  )}{" "}
                  <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
                    {" "}
                    {(block.data?.items || []).map((item, index) => (
                      <div
                        key={item.id || index}
                        className="min-w-0 rounded-xl border border-gray-200 bg-white p-3 text-center sm:p-4"
                      >
                        {" "}
                        {item.image?.url && (
                          <img
                            src={item.image.url}
                            alt={item.image.alt || item.title || ""}
                            className="mx-auto mb-3 h-24 w-full object-contain sm:h-32"
                          />
                        )}{" "}
                        <p className="break-words text-sm font-medium leading-5 text-gray-800 sm:text-base">
                          {" "}
                          {item.title || item.name}{" "}
                        </p>{" "}
                      </div>
                    ))}{" "}
                  </div>{" "}
                </section>
              );
            /* ========================= LOCATION GRID ========================== */ case "locationGrid":
              return (
                <section key={block.id} className="my-8 sm:my-10">
                  {" "}
                  {block.data?.title && (
                    <h2 className="mb-5 text-2xl font-bold leading-tight text-[#0F0F0F] sm:mb-6 sm:text-3xl">
                      {" "}
                      {block.data.title}{" "}
                    </h2>
                  )}{" "}
                  <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3 lg:grid-cols-4">
                    {" "}
                    {(block.data?.items || []).map((item, index) => (
                      <div
                        key={item.id || index}
                        className="min-w-0 rounded-lg border px-3 py-2.5 text-xs font-normal leading-5 text-black"
                        style={{
                          borderColor: "#FCCDDB",
                          backgroundColor: "#FFEFF4",
                        }}
                      >
                        {" "}
                        {typeof item === "string"
                          ? item
                          : item.title || item.name}{" "}
                      </div>
                    ))}{" "}
                  </div>{" "}
                </section>
              );
            /* ========================= CTA ========================== */ case "cta":
              return (
                <section
                  key={block.id}
                  className="my-8 rounded-2xl px-5 py-8 text-center text-white sm:my-12 sm:px-8 sm:py-10"
                  style={{ backgroundColor: blogTheme.primary }}
                >
                  {" "}
                  <h2 className="text-2xl font-bold leading-tight sm:text-3xl">
                    {" "}
                    {block.data?.title}{" "}
                  </h2>{" "}
                  {block.data?.description && (
                    <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-white/90 sm:mt-4 sm:text-base sm:leading-7">
                      {" "}
                      {block.data.description}{" "}
                    </p>
                  )}{" "}
                  {block.data?.buttonUrl && (
                    <Link
                      href={block.data.buttonUrl}
                      className="mt-5 inline-flex rounded-full bg-white px-5 py-2.5 text-sm font-semibold sm:mt-6 sm:px-6 sm:py-3 sm:text-base"
                      style={{ color: blogTheme.primary }}
                    >
                      {" "}
                      {block.data.buttonLabel || "Learn More"}{" "}
                    </Link>
                  )}{" "}
                </section>
              );
            default:
              return null;
          }
        })}{" "}
      </article>{" "}
      {/* ========================= SIDEBAR ========================== */}{" "}
    
    </div>
  );
}
