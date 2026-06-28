"use client";

import { getDataPath } from "@/utils/pathUtils";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Availability() {
    const [foods, setFoods] = useState<any[]>([]);

    useEffect(() => {
        const loadFoods = async () => {
        try {
            const res = await fetch(
            getDataPath("/data/fooddata.json")
            );

            const data = await res.json();

            setFoods(data);
        } catch (error) {
            console.error(
            "Failed to load food data:",
            error
            );
        }
        };
        loadFoods();
    }, []);

    return (
        <div className="bg-[#F0F6FA] dark:bg-[#111929] lg:py-24 py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

            <p className="mb-[16px] text-[24px] sm:text-[36px] justify-center flex font-bold">
            Available Foods
            </p>

            <p className="mb-10 sm:mb-3.75 text-base sm:text-xl text-gray justify-center flex">
            Explore our delicious bakery and restaurant menu.
            </p>

            <div className="overflow-x-auto">
            <table className="w-full text-center text-sm sm:text-lg text-gray">

                <thead>
                <tr className="border-b border-border dark:border-dark_border">

                    <th className="py-2 sm:py-4 px-2 text-center">
                    Food Name
                    </th>

                    <th className="py-2 sm:py-4 px-2 text-center">
                    Category
                    </th>

                    <th className="py-2 sm:py-4 px-2 text-center">
                    Type
                    </th>

                    <th className="py-2 sm:py-4 px-2 text-center">
                    Price
                    </th>

                    <th className="py-2 sm:py-4 px-2 text-center">
                    Rating
                    </th>

                    <th className="py-2 sm:py-4 px-2 text-center">
                    Prep Time
                    </th>

                    <th className="py-2 sm:py-4 px-2 text-center">
                    Branch
                    </th>

                    <th className="py-2 sm:py-4 px-2 text-center">
                    Details
                    </th>

                </tr>
                </thead>

                <tbody>
                {foods.map((food) => (
                    <tr
                    key={food.id}
                    className="border-b border-border dark:border-dark_border"
                    >
                    <td className="py-2 sm:py-4 px-2">
                        {food.food_title}
                    </td>

                    <td className="py-2 sm:py-4 px-2">
                        {food.category}
                    </td>

                    <td className="py-2 sm:py-4 px-2">
                        {food.type}
                    </td>

                    <td className="py-2 sm:py-4 px-2">
                        {food.food_price}
                    </td>

                    <td className="py-2 sm:py-4 px-2">
                        <div className="flex items-center justify-center gap-2">
                            <img
                            src="/images/svgs/star.svg"
                            alt="star"
                            width="20"
                            height="20"
                            />
                            <span>{food.rating}</span>
                        </div>
                    </td>

                    <td className="py-2 sm:py-4 px-2">
                        {food.preparation_time}
                    </td>

                    <td className="py-2 sm:py-4 px-2">
                        {food.branch}
                    </td>

                    <td className="py-2 sm:py-4 px-2">
                        <Link
                        href={`/LFood/LFoodlist/${food.slug}`}
                        className="flex items-center justify-center hover:text-primary"
                        >
                        View More

                        <svg
                            className="w-4 h-4 ml-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5l7 7-7 7"
                            />
                        </svg>
                        </Link>
                    </td>
                    </tr>
                ))}
                </tbody>

            </table>
            </div>
        </div>
        </div>
    );
}