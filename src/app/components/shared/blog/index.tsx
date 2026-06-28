"use client";

import { useEffect, useState } from "react";
import BlogCard from "./blogCard";

export default function BlogSmall() {
    const [posts, setPosts] = useState<any[]>([]);

    useEffect(() => {
        const fetchNews = async () => {
        try {
            const API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY;

            const res = await fetch(
                `https://newsapi.org/v2/everything?q=Virat Kohli&sortBy=publishedAt&pageSize=6&language=en&apiKey=${API_KEY}`
            );

            const data = await res.json();

            setPosts(data.articles || []);
        } catch (error) {
            console.error("News fetch error:", error);
        }
        };

        fetchNews();
    }, []);

    return (
        <section className="flex flex-col dark:bg-darkmode px-4 md:px-4">
        <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-0">
            <div className="items-center sm:mb-11 mb-7 flex justify-center">
            <h2 className="text-2xl sm:text-4xl text-midnight_text dark:text-white text-center font-bold">
                Latest RCB News
            </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {posts.map((blog, i) => (
                <div
                key={i}
                className="w-full"
                data-aos="fade-up"
                data-aos-delay={`${i * 200}`}
                >
                <BlogCard blog={blog} />
                </div>
            ))}
            </div>
        </div>
        </section>
    );
}