"use client";
import { getDataPath } from '@/utils/pathUtils';
import { useEffect, useState } from 'react';
import FoodCard from './Food-card';

const Listing = () => {
    const [LFood, setLFood] = useState<any[]>([])
    useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(getDataPath('/data/fooddata.json'))
        if (!res.ok) throw new Error('Failed to fetch')

        const data = await res.json()
        setLFood(data || [])
      } catch (error) {
        console.error('Error loading LFood:', error)
      }
    }

    fetchData()
  }, [])
    return (
        <section className="bg-light dark:bg-semidark flex justify-center items-center">
            <div className="lg:max-w-screen-xl md:max-w-screen-md mx-auto container px-4">
                <h1 className="text-4xl font-bold mb-12 text-midnight_text dark:text-white" data-aos="fade-up">Foods That Are Available</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {LFood.slice(0, 6).map((Food, index) => (
                        <div key={Food.id} data-aos="fade-up" data-aos-delay={`${index * 100}`}>
                            <FoodCard Food={Food} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Listing;