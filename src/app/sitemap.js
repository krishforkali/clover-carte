export const dynamic = "force-static";

import { products } from "@/data/product";

export default async function sitemap() {
  const productRoutes = products.map((product) => ({
    url: `https://clovercarte.com/products/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  let blogRoutes = [];

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}blog/get`, {
      next: {
         cache: "no-store",
      },
    });

    if (res.ok) {
      const data = await res.json();

      blogRoutes = data.blogs.map((blog) => ({
        url: `https://clovercarte.com/blog/${blog.slug}`,
        lastModified: blog.updatedAt || blog.createdAt,
        changeFrequency: "weekly",
        priority: 0.7,
      }));
    }
  } catch (error) {
    console.error("Failed to fetch blogs for sitemap", error);
  }

  return [
    {
      url: "https://clovercarte.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://clovercarte.com/about-us",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://clovercarte.com/products",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://clovercarte.com/solutions",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://clovercarte.com/contact-us",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: "https://clovercarte.com/blog",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    ...productRoutes,
    ...blogRoutes,
  ];
}
