import Image from "next/image";
import Link from "next/link";
import React from "react";

interface BlogCardProps {
    blog: {
        slug: string;
        title: string;
        date: string;
        coverImage: string;
        excerpt: string;
    };
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
    return (
        <Link
            href={`/blogs/${blog.slug}`}
            className="flex gap-4 group"
        >
            <div className="overflow-hidden rounded-lg flex-shrink-0 w-52 h-48">
                <Image
                    src={blog.coverImage}
                    alt={blog.title}
                    width={190}
                    height={163}
                    className="transition group-hover:scale-110 w-full h-full object-cover"
                />
            </div>

            <div className="ml-4 flex-1 flex flex-col justify-evenly">

                <div>
                    <span className="text-sm sm:text-base md:text-lg font-medium dark:text-white text-gray leading-loose">
                        {new Date(blog.date).toLocaleDateString()}
                    </span>

                    <h3 className="mt-2 text-xl sm:text-[22px] leading-[1.2] md:text-2xl font-medium text-midnight_text dark:text-white group-hover:text-primary">
                        {blog.title}
                    </h3>

                    <p className="text-sm text-gray mt-2">
                        {blog.excerpt}
                    </p>
                </div>

                <p className="block mt-4 text-primary text-base sm:text-lg">
                    Read More →
                </p>

            </div>
        </Link>
    );
};

export default BlogCard;