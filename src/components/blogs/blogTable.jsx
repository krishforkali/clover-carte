import { FiEdit, FiTrash2, FiEye, FiSearch } from "react-icons/fi";
import { deleteBlog } from "../../api/blog";
import toast from "react-hot-toast";

export default function BlogTable({
    blogs,
    loading,
    refresh,
}) {
    const handleDelete = async (id) => {

        if (!window.confirm("Delete this blog?", id)) return;

        try {
            console.log(id)
            await deleteBlog(id);

            toast.success("Blog deleted.");

            refresh();

        } catch (err) {

            toast.error(err.response?.data?.message);
            console.log(err)

        }

    };
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">

            <div className="p-6 border-b">

                <div className="relative">

                    <FiSearch className="absolute left-4 top-3.5 text-gray-400" />

                    <input
                        placeholder="Search blogs..."
                        className="w-full pl-11 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                    />

                </div>

            </div>

            <div className="overflow-x-auto">

                <table className="w-full">

                    <thead className="bg-gray-100">

                        <tr className="text-left text-gray-600 text-sm">

                            <th className="px-6 py-4">Image</th>

                            <th className="px-6 py-4">Title</th>

                            <th className="px-6 py-4">Category </th>

                            <th className="px-6 py-4">Featured</th>

                            <th className="px-6 py-4">Published</th>

                            <th className="px-6 py-4 text-center">
                                Actions
                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {blogs.map((blog) => (


                            <tr
                                key={blog.id}
                                className="border-t hover:bg-gray-50 transition"
                            >

                                <td className="px-6 py-5">

                                    <img
                                        src={blog.image.url}
                                        alt={blog.image.url}
                                        className="w-24 h-16 rounded-lg bg-contain object-cover"

                                    />

                                </td>

                                <td className="px-6 py-5 font-semibold text-gray-800">
                                    {blog.title}
                                </td>

                                <td className="px-6 py-5">

                                    <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm">

                                        {blog.category}

                                    </span>

                                </td>

                                <td className="px-6 py-5">

                                    {blog.featured ? (
                                        <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm">
                                            Featured
                                        </span>
                                    ) : (
                                        <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-500 text-sm">
                                            No
                                        </span>
                                    )}

                                </td>

                                <td className="px-6 py-5 text-gray-500">
                                    {blog.date}
                                </td>

                                <td className="px-6 py-5">

                                    <div className="flex justify-center gap-3">

                                        {/* <button className="p-2 rounded-lg hover:bg-gray-200">
                                            <FiEye size={18} />
                                        </button>

                                        <button className="p-2 rounded-lg hover:bg-blue-100 text-blue-600">
                                            <FiEdit size={18} />
                                        </button> */}

                                        <button onClick={() => handleDelete(blog._id)} className="p-2 rounded-lg hover:bg-red-100 text-red-600">
                                            <FiTrash2 size={18} />
                                        </button>

                                    </div>

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </div>
    );
}