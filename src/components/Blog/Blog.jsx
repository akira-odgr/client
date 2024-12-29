import { BlogCard } from "./BlogCard";

export const Blog = () => {
    return (
        <div className="dark:bg-gray-900 dark:text-white">
            <div className="container py-8">
                <h1 className="mb-8 border-l-8 pl-2 text-center text-3xl font-bold">
                    Our Latest Blogs
                </h1>
                {/* BlogCard */}
                <BlogCard />
            </div>
        </div>
    );
};
