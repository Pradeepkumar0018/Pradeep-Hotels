'use client';

import { FoodContext } from '@/context-api/FoodContext';
import { getDataPath, getImgPath } from '@/utils/pathUtils';
import Image from 'next/image';
import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';

interface Branch {
    category: string;
    category_img: string;
    count: number;
}

export default function OurBranches() {
    const { updateFilter } = useContext(FoodContext)!;

    const [branchesData, setBranchesData] = useState<Branch[]>([]);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const res = await fetch(
            getDataPath('/data/branchesdata.json')
            );

            if (!res.ok) {
            throw new Error('Failed to fetch branches data');
            }

            const data = await res.json();
            setBranchesData(data);
        } catch (error) {
            console.error('Error loading branches:', error);
        }
        };

        fetchData();
    }, []);

    return (
        <section className="dark:bg-darkmode">
        <div className="container lg:max-w-screen-xl md:max-w-screen-md mx-auto px-4">
            <h2
            className="text-4xl font-bold mb-12 text-midnight_text dark:text-white"
            data-aos="fade-left"
            >
            Our Branches
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-4">
            {branchesData.map((branch, index) => (
                <div
                key={index}
                className="image-item block"
                onClick={() =>
                    updateFilter('category', branch.category)
                }
                data-aos="fade-up"
                data-aos-delay={`${index * 100}`}
                >
                <Link
                    href="/LFood/LFoodlist"
                    className="group"
                >
                    <Image
                    src={getImgPath(branch.category_img)}
                    alt={branch.category}
                    width={85}
                    height={85}
                    className="p-4 border-2 rounded-lg border-border dark:border-dark_border mb-6 group-hover:-translate-y-1 group-hover:duration-500"
                    />

                    <p className="text-[22px] leading-[1.2] font-semibold mt-2 text-midnight_text text-opacity-80 group-hover:text-opacity-100 dark:text-white dark:text-opacity-70 dark:group-hover:text-opacity-100 mb-1 capitalize">
                    {branch.category}
                    </p>

                    <p className="text-base text-gray">
                    {branch.count} Branches
                    </p>
                </Link>
                </div>
            ))}
            </div>
        </div>
        </section>
    );
}