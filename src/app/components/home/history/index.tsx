import { getImgPath } from "@/utils/pathUtils";
import Image from "next/image";
import Link from "next/link";

export default function History() {
  return (
    <section className="history-bg">
      <div className="container lg:max-w-screen-xl md:max-w-screen-md dark:text-black mx-auto grid grid-cols-1 lg:grid-cols-12 py-40">
        
        <div
          className="col-span-1 lg:col-span-7 5xl:col-span-8 px-4"
          data-aos="fade-right"
        >
          <p className="text-4xl text-midnight_text dark:text-white mb-8 font-bold">
            Pradeep's Journey <br />
            From Passion to Chennai's Favorite Food Spot
          </p>

          <p className="mb-8 pb-2 text-gray">
            Founded by Pradeep, inspired by dedication, hard work, and the
            fighting spirit admired by every RCB fan, our bakery and restaurant
            started with a simple goal — serving delicious food with exceptional
            quality. From freshly baked cakes, pastries, and desserts to
            authentic South Indian and multi-cuisine specialties, we have built
            a reputation for taste, consistency, and customer satisfaction.
          </p>

          <p className="mb-8 pb-2 text-gray">
            Every recipe is crafted with care, every ingredient is selected for
            freshness, and every customer is treated like family. Our passion
            for food, combined with a commitment to excellence, has helped us
            become one of the most loved food destinations in Chennai.
          </p>

          <Link
            href="/LFood/LFoodlist"
            className="text-xl px-9 py-3 border border-primary text-primary hover:text-white hover:bg-primary rounded-lg"
          >
            Explore Menu
          </Link>
        </div>

        <div
          className="hidden lg:block 5xl:col-span-4 5xl:ml-11 col-span-1 lg:col-span-5"
          data-aos="fade-left"
        >
          <div className="bg-white dark:bg-darklight dark:text-white p-6 max-w-72 border-4 border-primary rounded-lg shadow-lg">
            
            <p className="mb-12 text-3xl text-midnight_text dark:text-white font-bold">
              CHENNAI'S FAVORITE BAKERY & RESTAURANT
            </p>

            <div className="flex justify-between items-center">
              <div>
                <p className="text-black text-opacity-60 dark:text-gray">
                  Happy Customers
                </p>

                <p className="text-[65px] leading-[1.2] -mt-1 text-midnight_text dark:text-white font-bold mb-2">
                  10K+
                </p>

                <p className="text-sm text-gray">
                  Served with Love
                </p>
              </div>

              <div>
                <Image
                  src={getImgPath("/images/history/logo-1.png")}
                  alt="Pradeep Bakery and Restaurant"
                  width={93}
                  height={130}
                />
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
              <p className="text-black text-opacity-60 dark:text-gray">
                Experience
              </p>

              <p className="text-4xl font-bold text-primary">
                10+ Years
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}