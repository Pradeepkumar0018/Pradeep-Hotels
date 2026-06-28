"use client";
import { getDataPath, getImgPath } from "@/utils/pathUtils";
import Image from "next/image";
import { useEffect, useState } from "react";
export default function Features() {
  const [pageData, setPageData] = useState<any[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resPage = await fetch(
          getDataPath("/data/pagedata.json")
        );
        if (!resPage.ok) {
          throw new Error("Failed to load page data");
        }
        const page = await resPage.json();
        setPageData(page.features || []);
      } catch (error) {
        console.error("Error loading data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <section className="dark:bg-darkmode">
      <div className="container px-4 lg:max-w-screen-xl md:max-w-screen-md mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex lg:flex-row flex-col lg:gap-0 gap-8 justify-between">
          <div className="mb-8 md:mb-0 flex-1">
            <div className="relative overflow-hidden rounded-lg">
                <Image
                  src={getImgPath("/images/features/poster.png")}
                  alt="Food"
                  width={640}
                  height={615}
                  className="w-full h-auto object-cover"
                />
                {/*<div className="absolute top-0 bottom-0 left-1/3 w-2 bg-white">
                </div>*/}
                {/*<div className="absolute top-0 bottom-0 left-2/3 w-2 bg-white">
                </div>*/}
            </div>
          </div>
          <div className="flex-1">
            <div className="lg:pl-20 flex flex-col justify-center h-full">
              <p className="mb-8 md:mb-3.75 text-4xl font-bold text-midnight_text dark:text-white">
                Why People Choose Food
              </p>
              {pageData.map((feature) => (
                <div
                  key={feature.id}
                  className="flex mb-8 md:mb-3.75 items-center gap-8"
                >
                  <div className="bg-primary/20 p-4 rounded-full flex justify-center items-start">
                    <Image
                      src={getImgPath(feature.imgSrc)}
                      alt={feature.title}
                      height={78}
                      width={78}
                    />
                  </div>
                  <div className="flex-col">
                    <p className="text-2xl mb-2">
                      {feature.title}
                    </p>
                    <p className="text-gray text-base">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}