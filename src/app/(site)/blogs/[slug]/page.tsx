import { getImgPath } from "@/utils/pathUtils";
import { scrapeArticle } from "@/utils/scrapeBlog";
import { format } from "date-fns";
import { readFileSync } from "fs";
import Image from "next/image";
import Link from "next/link";
import { join } from "path";

type Props = {
    params: { slug: string };
};

export async function generateStaticParams() {
    const filePath = join(
        process.cwd(),
        "public/data/blogdata.json"
    );

    const fileContents = readFileSync(
        filePath,
        "utf8"
    );

    const blogs = JSON.parse(fileContents);

    return blogs.map((blog: any) => ({
        slug: blog.slug,
    }));
}

export async function generateMetadata({ params }: any) {
    const data = await params;
    const filePath = join(
        process.cwd(),
        "public/data/blogdata.json"
    );

    const blogs = JSON.parse(
        readFileSync(filePath, "utf8")
    );

    const post = blogs.find(
        (blog: any) => blog.slug === data.slug
    );

    const siteName = process.env.SITE_NAME || "Your Site Name";
    const authorName = process.env.AUTHOR_NAME || "Your Author Name";

    if (post) {
        const metadata = {
            title: `${post.title || "Single Post Page"} | ${siteName}`,
            author: authorName,
            robots: {
                index: true,
                follow: true,
                nocache: true,
                googleBot: {
                    index: true,
                    follow: false,
                    "max-video-preview": -1,
                    "max-image-preview": "large",
                    "max-snippet": -1,
                },
            },
        };

        return metadata;
    } else {
        return {
            title: "Not Found",
            description: "No blog article has been found",
            author: authorName,
            robots: {
                index: false,
                follow: false,
                nocache: false,
                googleBot: {
                    index: false,
                    follow: false,
                    "max-video-preview": -1,
                    "max-image-preview": "large",
                    "max-snippet": -1,
                },
            },
        };
    }
}

export default async function Post({ params }: any) {
    const data = await params;
    const filePath = join(
    process.cwd(),
        "public/data/blogdata.json"
    );

    const blogs = JSON.parse(
        readFileSync(filePath, "utf8")
    );

    const post = blogs.find(
        (blog: any) => blog.slug === data.slug
    );

    const article = await scrapeArticle(post.title);

    console.log("TITLE:", post.title);
    console.log("ARTICLES:", article);

    return (
        <>
            <section className=" relative pt-44 bg-gradient-to-b from-white from-10% dark:from-darkmode to-herobg to-90% dark:to-darklight">
                <div className="container lg:max-w-screen-xl md:max-w-screen-md mx-auto px-4">
                    <div className="grid md:grid-cols-12 grid-cols-1 items-center">
                        <div className="col-span-8">
                            <div className="flex flex-col sm:flex-row">
                                <span className="text-base text-midnight_text font-medium dark:text-white pr-7 border-r border-solid border-gray dark:border-white w-fit">
                                    {format(new Date(post.date), "dd MMM yyyy")}
                                </span>
                                <span className="text-base text-midnight_text font-medium dark:text-white sm:pl-7 pl-0 w-fit">13 Comments</span>
                            </div>
                            <h2 className="text-midnight_text dark:text-white pt-7">
                                {post.title}
                            </h2>
                        </div>
                        <div className="flex items-center md:justify-center justify-start gap-6 col-span-4 pt-4 md:pt-0">
                            <Image
                                src={getImgPath(post.authorImage)}
                                alt="image"
                                className="bg-no-repeat bg-contain inline-block rounded-full !w-20 !h-20"
                                width={40}
                                height={40}
                                layout="responsive"
                                quality={100}
                            />
                            <div className="">
                                <span className="text-[22px] leading-[1.2] font-bold text-midnight_text dark:text-white">Pradeep Kumar</span>
                                <p className="text-xl text-gray dark:text-white">Author</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pb-10 pt-20 dark:bg-darkmode lg:pb-20 lg:pt-32">
                <div className="container lg:max-w-screen-xl md:max-w-screen-md mx-auto">
                    <div className=" flex flex-wrap justify-center">
                        <div className="w-full px-4">
                            <div
                                className="z-20 mb-16 h-80 overflow-hidden rounded md:h-25 lg:h-31.25">
                                <Image
                                    src={getImgPath(post.coverImage)}
                                    alt="image"
                                    width={1170}
                                    height={766}
                                    quality={100}
                                    className="h-full w-full object-cover object-center rounded-3xl"
                                />
                            </div>
                            <div className="-mx-4 flex flex-wrap">
                                <div className="w-full px-4 lg:w-8/12">
                                    <div className="blog-details xl:pr-10">
                                        <div className="mt-10">
                                            <h3 className="text-2xl font-bold mb-4 dark:text-white text-black">
                                                Related Information From Web
                                            </h3>

                                            <ul>
                                                {article && (
                                                    <div className="border p-4 rounded mb-4">
                                                        <h3 className="text-xl font-bold mb-2 text-black">
                                                        {article.title}
                                                        </h3>

                                                        <p className="mb-4">
                                                        {article.description}
                                                        </p>

                                                        <a
                                                        href={article.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-blue-500 underline"
                                                        >
                                                        Read More
                                                        </a>
                                                    </div>
                                                )}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full px-4 lg:w-4/12">
                                    <div>
                                        <div className=" mb-8 flex flex-col">

                                            <div className="w-full py-12 px-11 bg-white dark:bg-semidark shadow-lg border-b-2 border-border dark:border-dark_border">
                                                <h2
                                                    className="wow fadeInUp relative mb-5 dark:text-white text-midnight_text font-medium text-2xl leading-[1.2]"
                                                    data-wow-delay=".1s"
                                                >
                                                    Share
                                                </h2>

                                                <div className="flex gap-4 flex-col">

                                                    {/* Instagram */}
                                                    <div className="bg-gradient-to-r from-pink-500 to-purple-600 py-4 px-6 text-xl rounded-lg text-white">
                                                        <Link href="#" className="flex items-center">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="28"
                                                                height="28"
                                                                fill="currentColor"
                                                                className="me-4 flex-shrink-0"
                                                                viewBox="0 0 16 16"
                                                                >
                                                                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.94 3.94 0 0 0-1.417.923A3.94 3.94 0 0 0 .42 2.76c-.198.509-.333 1.09-.372 1.943C.01 5.556 0 5.829 0 8s.01 2.444.048 3.297c.039.853.174 1.434.372 1.943.205.527.478.974.923 1.417.443.445.89.718 1.417.923.509.198 1.09.333 1.943.372C5.556 15.99 5.829 16 8 16s2.444-.01 3.297-.048c.853-.039 1.434-.174 1.943-.372a3.94 3.94 0 0 0 1.417-.923 3.94 3.94 0 0 0 .923-1.417c.198-.509.333-1.09.372-1.943C15.99 10.444 16 10.171 16 8s-.01-2.444-.048-3.297c-.039-.853-.174-1.434-.372-1.943a3.94 3.94 0 0 0-.923-1.417A3.94 3.94 0 0 0 13.24.42c-.509-.198-1.09-.333-1.943-.372C10.444.01 10.171 0 8 0zm0 1.441c2.136 0 2.389.008 3.232.046.78.036 1.203.166 1.485.276.374.145.64.319.92.599.28.28.454.546.599.92.11.282.24.705.276 1.485.038.843.046 1.096.046 3.232s-.008 2.389-.046 3.232c-.036.78-.166 1.203-.276 1.485a2.5 2.5 0 0 1-.599.92 2.5 2.5 0 0 1-.92.599c-.282.11-.705.24-1.485.276-.843.038-1.096.046-3.232.046s-2.389-.008-3.232-.046c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.599 2.5 2.5 0 0 1-.599-.92c-.11-.282-.24-.705-.276-1.485C1.449 10.389 1.441 10.136 1.441 8s.008-2.389.046-3.232c.036-.78.166-1.203.276-1.485.145-.374.319-.64.599-.92.28-.28.546-.454.92-.599.282-.11.705-.24 1.485-.276C5.611 1.449 5.864 1.441 8 1.441z"/>
                                                                <path d="M8 4.324A3.676 3.676 0 1 0 8 11.676 3.676 3.676 0 0 0 8 4.324zm0 6.039A2.363 2.363 0 1 1 8 5.637a2.363 2.363 0 0 1 0 4.726z"/>
                                                                <circle cx="11.5" cy="4.5" r="1"/>
                                                            </svg>
                                                            Instagram
                                                        </Link>
                                                    </div>

                                                    {/* X */}
                                                    <div className="bg-black py-4 px-6 text-xl rounded-lg text-white">
                                                        <Link href="#" className="flex items-center">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="22"
                                                                height="22"
                                                                fill="currentColor"
                                                                className="me-3"
                                                                viewBox="0 0 1200 1227"
                                                            >
                                                                <path d="M714.163 519.284L1160.89 0H1055.53L667.137 451.887L356.798 0H0L468.492 681.821L0 1226.37H105.368L515.239 749.218L843.202 1226.37H1200L714.137 519.284H714.163ZM568.644 688.638L521.41 621.093L145.224 82.973H307.669L611.303 517.221L658.537 584.766L1055.58 1152.91H893.135L568.644 688.664V688.638Z" />
                                                            </svg>
                                                            X
                                                        </Link>
                                                    </div>

                                                    {/* LinkedIn */}
                                                    <div className="bg-[#0077B5] py-4 px-6 text-xl rounded-lg text-white">
                                                        <Link href="#" className="flex items-center">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="22"
                                                                height="22"
                                                                fill="currentColor"
                                                                className="me-3"
                                                                viewBox="0 0 448 512"
                                                            >
                                                                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8A53.79 53.79 0 1 1 53.79 108.1zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.2 61.8 111.2 142.3V448z" />
                                                            </svg>
                                                            LinkedIn
                                                        </Link>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className="w-full py-12 px-11 bg-white dark:bg-semidark shadow-lg font-medium">
                                                <p className="text-midnight_text text-2xl font-medium mb-4">
                                                    Join our Newsletter
                                                </p>
                                                <input
                                                    placeholder="Email address "
                                                    className="p-3 dark:bg-semidark border border-border dark:border-dark_border rounded-lg mb-2 w-full focus:outline-0 focus:border-primary dark:focus:border-primary"
                                                />
                                                <button className="w-full py-4 px-9 text-lg font-medium bg-primary hover:bg-blue-700 rounded-lg text-white">
                                                    Subscribe
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="bg-SnowySky dark:bg-darklight">
                
            </div>
        </>
    );
}
