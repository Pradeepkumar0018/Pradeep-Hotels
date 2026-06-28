"use client";
import { getDataPath, getImgPath } from '@/utils/pathUtils';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function SmallFood() {
const [data, setData] = useState<any[]>([]);
    useEffect(() => {
            const fetchData = async () => {
                try {
                    const res = await fetch(getDataPath('/data/pagedata.json'))
                    if (!res.ok) throw new Error('Failed to fetch')
    
                    const data = await res.json()
                    setData(data?.data || [])
                } catch (error) {
                    console.error('Error loading data:', error)
                }
            }
    
            fetchData()
        }, [])

    return (
        <section className='py-[120px] bg-[#2F73F2]'>
            <div className="max-w-[1200px] mx-auto px-4">
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {data.map((Food, index) => (
                        <div key={index} className="image-item px-[15px]" data-aos="fade-up">
                            <Image src={getImgPath(Food.src1)} alt={Food.alt} height={85} width={85} />
                            <p className="text-[22px] text-white font-semibold mt-2">{Food.name}</p>
                            <p className="text-[16px] text-white text-gray-600">{Food.count} LFood</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
