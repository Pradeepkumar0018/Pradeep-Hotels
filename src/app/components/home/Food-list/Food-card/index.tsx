import { FoodData } from "@/app/types/Food/fooddata";
import { getImgPath } from "@/utils/pathUtils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface FoodCardProps {
  Food: FoodData;
  viewMode?: string;
}

const FoodCard: React.FC<FoodCardProps> = ({
  Food,
  viewMode,
}) => {
  return (
    <div
      key={Food.id}
      className="bg-white shadow-Food dark:bg-darklight rounded-lg overflow-hidden"
      data-aos="fade-up"
    >
      <Link
        href={`/LFood/LFoodlist/${Food.slug}`}
        className={`group ${viewMode === "list" ? "flex" : ""}`}
      >
        <div className={`relative ${viewMode === "list" ? "w-[30%]" : ""}`}>
          <div
            className={`imageContainer h-[250px] w-full ${
              viewMode === "list" ? "h-full md:h-52" : ""
            }`}
          >
            <Image
              src={getImgPath(Food.food_img)}
              alt={`Image of ${Food.food_title}`}
              width={400}
              height={250}
              className="w-full h-full object-cover group-hover:scale-125 duration-500"
            />
          </div>

          <p className="absolute top-[10px] left-[10px] py-1 px-4 bg-white rounded-md text-primary items-center">
            {Food.tag}
          </p>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-[10px] right-[10px] bg-white p-2 rounded-lg"
            viewBox="0 0 24 24"
            width="38"
            height="38"
            fill="#2F73F2"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>

        <div
          className={`p-5 sm:p-8 dark:text-white text-opacity-50 ${
            viewMode === "list"
              ? "w-[70%] flex flex-col justify-center"
              : ""
          }`}
        >
          <div className="flex flex-col gap-1 border-b border-border dark:border-dark_border mb-6">
            <div>
              <p className="text-base text-gray">
                {Food.food_title}
              </p>
            </div>

            <div className="flex justify-between items-center pb-4">
              <div className="font-bold text-2xl group-hover:text-primary text-midnight_text dark:text-white">
                {Food.food_price}
              </div>

              <div className="text-xs bg-[#DAE7FF] dark:bg-white text-midnight_text dark:text-primary py-1 px-2 rounded-lg font-bold">
                {Food.location}
              </div>
            </div>
          </div>

          {/* Food Details */}
          <div className="space-y-3">

            {/* Rating + Time */}
            <div className="flex items-center justify-between">

              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <Image
                    src={getImgPath("/images/svgs/star.svg")}
                    alt="Rating Icon"
                    height={24}
                    width={24}
                  />
                  <span className="font-bold text-lg">
                    {Food.rating}
                  </span>
                </div>

                <p className="text-xs md:text-sm text-gray">
                  Rating
                </p>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <Image
                    src={getImgPath("/images/svgs/time.svg")}
                    alt="Preparation Time Icon"
                    height={24}
                    width={24}
                  />
                  <span className="font-bold text-lg whitespace-nowrap">
                    {Food.preparation_time}
                  </span>
                </div>

                <p className="text-xs md:text-sm text-gray">
                  Prep Time
                </p>
              </div>

            </div>

            {/* Branch */}
            <div className="flex items-center gap-2 border-t border-border dark:border-dark_border pt-3">
              <Image
                src={getImgPath("/images/svgs/branch.svg")}
                alt="Branch Icon"
                height={24}
                width={24}
              />

              <div>
                <p className="font-bold text-lg">
                  {Food.branch}
                </p>

                <p className="text-xs md:text-sm text-gray">
                  Branch
                </p>
              </div>
            </div>

          </div>
        </div>
      </Link>
    </div>
  );
};

export default FoodCard;