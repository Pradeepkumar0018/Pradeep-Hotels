import { getPostBySlug } from "@/utils/markdown";
import Image from "next/image";

type Props = {
    params: {
        slug: string;
    };
};

export async function generateMetadata({ params }: Props) {
    const post = getPostBySlug(params.slug);

    const siteName = process.env.SITE_NAME || "Food Pro";

    if (!post) {
        return {
            title: "Not Found",
            description: "No blog article has been found",
        };
    }

    return {
        title: `${post.title} | ${siteName}`,
        description: post.excerpt,
    };
}

export default async function BlogHead({ params }: Props) {
    const post = getPostBySlug(params.slug);

    if (!post) {
        return (
            <section className="pt-44 pb-20">
                <div className="container mx-auto max-w-screen-xl text-center">
                    <h1 className="text-4xl font-bold">
                        Blog Not Found
                    </h1>
                </div>
            </section>
        );
    }

    return (
        <>
            <section className="pt-44 pb-16">
                <div className="container mx-auto max-w-screen-xl">

                    <div className="grid md:grid-cols-12 grid-cols-1 gap-10 items-center">

                        <div className="md:col-span-7">

                            <div className="flex items-center gap-6 mb-6">
                                <span className="text-base text-gray-500">
                                    {new Date(post.date).toLocaleDateString(
                                        "en-GB",
                                        {
                                            day: "2-digit",
                                            month: "short",
                                            year: "numeric",
                                        }
                                    )}
                                </span>

                                <span className="text-base text-primary">
                                    Food Blog
                                </span>
                            </div>

                            <h1 className="text-midnight_text dark:text-white text-[40px] lg:text-[52px] leading-[1.2] font-bold mb-6">
                                {post.title}
                            </h1>

                            <p className="text-lg text-gray leading-8">
                                {post.excerpt}
                            </p>
                        </div>

                        <div className="md:col-span-5">
                            <Image
                                src={post.coverImage}
                                alt={post.title}
                                width={600}
                                height={400}
                                className="rounded-2xl w-full h-auto object-cover shadow-lg"
                                priority
                            />
                        </div>

                    </div>

                    <div className="mt-16">
                        <div className="bg-white dark:bg-darklight rounded-2xl shadow-lg p-8">

                            <h2 className="text-3xl font-bold mb-6 dark:text-white">
                                Article Content
                            </h2>

                            <p className="text-lg leading-9 text-gray-600 dark:text-gray-300">
                                {post.content}
                            </p>

                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}