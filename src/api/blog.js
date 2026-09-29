const API_URL =  process.env.NEXT_PUBLIC_API_URL;

/**
 * Get all blogs
 * Server-side fetch with Next.js caching
 */
export async function getBlogs() {
    const response = await fetch(`${API_URL}blog/get`, {
        next: {
            cache: "no-store",
        },
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch blogs: ${response.status}`);
    }

    return response.json();
}

/**
 * Get single blog
 * Server-side fetch with Next.js caching
 */
export async function getBlogById(id) {
    const response = await fetch(`${API_URL}/blog/get/${id}`, {
        next: {
            cache: "no-store",
        },
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch blog: ${response.status}`);
    }

    return response.json();
}