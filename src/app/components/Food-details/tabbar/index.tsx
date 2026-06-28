"use client";
import { getImgPath } from '@/utils/pathUtils';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import { useState } from 'react';

type TabContent = {
    title: string;
    description: string;
    features: string[];
    image: string;
};

type TabLabel = 'Bakery Foods' | 'Restaurant Foods' | 'Fast Foods' | 'Branches';

const content: Record<TabLabel, TabContent> = {
    'Bakery Foods': {
        title: 'Premium Cakes & Bakery Collection',
        description:
        'Discover freshly baked cakes, pastries, muffins, donuts, and bakery specials prepared daily using high-quality ingredients and authentic recipes.',
        features: [
        'Chocolate Cakes',
        'Red Velvet Cakes',
        'Fresh Muffins',
        'Donuts',
        'Croissants',
        'Chicken Puffs'
        ],
        image: getImgPath('/images/foods/food-1.jpg')
    },

    'Restaurant Foods': {
        title: 'Restaurant Special Main Courses',
        description:
        'Enjoy delicious restaurant-style meals including biryanis, curries, breads, and chef-special dishes prepared with fresh ingredients.',
        features: [
        'Chicken Biryani',
        'Mutton Biryani',
        'Paneer Butter Masala',
        'Butter Naan',
        'Veg Fried Rice',
        'Chicken Fried Rice'
        ],
        image: getImgPath('/images/foods/food-9.jpg')
    },

    'Fast Foods': {
        title: 'Fast Food & Snacks Collection',
        description:
        'Taste our customer-favorite burgers, pizzas, snacks, and quick bites made fresh and served hot for every order.',
        features: [
        'Veg Burger',
        'Chicken Burger',
        'Margherita Pizza',
        'Pepperoni Pizza',
        'Fresh Snacks',
        'Quick Service'
        ],
        image: getImgPath('/images/foods/food-17.jpg')
    },

    'Branches': {
        title: 'Branches & Delivery Services',
        description:
        'Serving customers across multiple Chennai locations with quick preparation times, quality food, and reliable delivery service.',
        features: [
        'Anna Nagar',
        'T Nagar',
        'Velachery',
        'Tambaram',
        'Porur',
        'OMR'
        ],
        image: getImgPath('/images/foods/food-8.jpg')
    }
};

const tabs: { label: TabLabel; icon: string }[] = [
    {
        label: 'Bakery Foods',
        icon: 'mdi:cake-variant'
    },
    {
        label: 'Restaurant Foods',
        icon: 'mdi:silverware-fork-knife'
    },
    {
        label: 'Fast Foods',
        icon: 'mdi:hamburger'
    },
    {
        label: 'Branches',
        icon: 'mdi:store-marker'
    }
];

const chunkArray = <T,>(array: T[], chunkSize: number): T[][] => {
    const result: T[][] = [];
    for (let i = 0; i < array.length; i += chunkSize) {
        result.push(array.slice(i, i + chunkSize));
    }
    return result;
};

export default function Tabbar() {
    const [activeTab, setActiveTab] = useState<TabLabel>('Bakery Foods');

    const handleTabChange = (tab: TabLabel) => {
        setActiveTab(tab);
    };

    return (
        <section className='dark:bg-darkmode'>
            <div className='max-w-screen-xl mx-auto'>
                <div className="flex flex-wrap justify-center gap-1 bg-transparent" role="tablist">
                    {tabs.map((tab) => (
                        <button
                            key={tab.label}
                            className={`px-4 py-2 text-lg rounded-t-md focus:outline-none flex items-center justify-center
                            ${activeTab === tab.label ? 'text-primary border-b-2 border-primary' : 'text-gray transition duration-300 hover:text-primary'
                                }`}
                            onClick={() => handleTabChange(tab.label)}
                            role="tab"
                            aria-selected={activeTab === tab.label}
                            aria-controls={`content-${tab.label}`}
                        >
                            <span className="hidden sm:flex">{tab.label}</span>
                            <span className="sm:hidden">
                                <Icon icon={tab.icon} />
                            </span>
                        </button>
                    ))}
                </div>

                <div className="rounded-b-lg rounded-tr-lg">
                    {tabs.map((tab) => (
                        <div
                            key={tab.label}
                            id={`content-${tab.label}`}
                            role="tabpanel"
                            className={`max-w-screen-xl mt-11 mx-auto ${activeTab === tab.label ? 'block' : 'hidden'}`}
                        >
                            <div className="max-w-6xl mx-auto" data-aos='fade-up'>
                                <div className="flex flex-col lg:flex-row">
                                    <div className="lg:w-1/2 px-4 flex flex-col justify-center">
                                        <p className='md:text-4xl text-[28px] leading-[1.2] text-midnight_text dark:text-white font-bold'>
                                            {content[tab.label]?.title}
                                        </p>
                                        <p className='my-6 text-gray text-lg'>
                                            {content[tab.label]?.description}
                                        </p>
                                        <table className="w-full text-base text-gray">
                                            <tbody>
                                                {chunkArray(content[tab.label]?.features || [], 3).map((chunk, chunkIndex) => (
                                                    <tr key={chunkIndex}>
                                                        {chunk.map((feature, featureIndex) => (
                                                            <td key={featureIndex} className="pr-4 py-2">
                                                                <div className='flex items-center w-fit'>
                                                                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                                                    </svg>
                                                                    {feature}
                                                                </div>
                                                            </td>
                                                        ))}
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="lg:w-1/2 h-[450px] md:block hidden px-4">
                                        <Image
                                            src={content[tab.label]?.image || getImgPath('/images/blog/blog-1.jpg')}
                                            alt={`Image for ${tab.label}`}
                                            width={570}
                                            height={367}
                                            className='rounded-lg w-full h-full'
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
