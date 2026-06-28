import Availability from '@/app/components/Food-details/availability';
import Tabbar from '@/app/components/Food-details/tabbar';
import DiscoverLFood from '@/app/components/home/branches';
import Cart from '@/app/components/home/cart';
import CompanyInfo from '@/app/components/home/info';
import { getImgPath } from '@/utils/pathUtils';
import { readFileSync } from 'fs';
import Image from 'next/image';
import { join } from 'path';

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

// Required for output: export
export async function generateStaticParams() {
  const filePath = join(
    process.cwd(),
    'public/data/fooddata.json'
  );

  const fileContents = readFileSync(
    filePath,
    'utf8'
  );

  const foodData = JSON.parse(fileContents);

  return foodData.map((food: any) => ({
    slug: food.slug,
  }));
}

export default async function Details({
  params,
}: Props) {
  const { slug } = await params;

  const filePath = join(
    process.cwd(),
    'public/data/fooddata.json'
  );

  const fileContents = readFileSync(
    filePath,
    'utf8'
  );

  const foodData = JSON.parse(fileContents);

  const item = foodData.find(
    (food: any) => food.slug === slug
  );

  if (!item) {
    return (
      <div className="pt-40 text-center">
        <h1 className="text-3xl font-bold">
          Food Not Found
        </h1>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <section className="bg-cover pt-36 pb-20 relative bg-gradient-to-b from-white from-10% dark:from-darkmode to-herobg to-90% dark:to-darklight overflow-x-hidden">
        <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md">
          <h2 className="text-midnight_text text-4xl lg:text-[50px] leading-[1.2] text-center font-bold dark:text-white">
            {item.food_title}
          </h2>
        </div>
      </section>

      {/* Food Image */}
      <section>
        <div className="container mx-auto dark:bg-darkmode">
          <div className="h-[580px] max-w-5xl mx-auto w-full">
            {item.food_img && (
              <Image
                src={getImgPath(item.food_img)}
                alt={item.food_title}
                width={1000}
                height={600}
                className="h-full w-full object-cover rounded-lg"
              />
            )}
          </div>
        </div>
      </section>

      <section className="py-16 dark:bg-darkmode">
        <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
          <div className="bg-white dark:bg-darklight rounded-2xl shadow-lg p-8 max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start mb-8">
              <div>
                <h2 className="text-4xl font-bold text-midnight_text dark:text-white mb-3">
                  {item.food_title}
                </h2>
                <h3 className="text-5xl font-bold text-midnight_text dark:text-white">
                  {item.food_price}
                </h3>
              </div>
              <div className="mt-4 md:mt-0">
                <span className="bg-blue-100 text-midnight_text px-5 py-2 rounded-full font-semibold">
                  {item.branch}
                </span>
              </div>
            </div>
            <hr className="mb-8" />
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h4 className="text-4xl font-bold text-midnight_text dark:text-white">
                  <img src="/images/svgs/star.svg" alt="Star" className="w-8 h-8 inline mr-2" /> {item.rating}
                </h4>
                <p className="text-lg text-gray-500 mt-2">
                  Rating
                </p>
              </div>
              <div>
                <h4 className="text-4xl font-bold text-midnight_text dark:text-white">
                  <img src="/images/svgs/time.svg" alt="Clock" className="w-8 h-8 inline mr-2" /> {item.preparation_time}
                </h4>
                <p className="text-lg text-gray-500 mt-2">
                  Prep Time
                </p>
              </div>
              <div>
                <h4 className="text-4xl font-bold text-midnight_text dark:text-white">
                  <img src="/images/svgs/branch.svg" alt="Location" className="w-8 h-8 inline mr-2" /> {item.location}
                </h4>
                <p className="text-lg text-gray-500 mt-2">
                  Branch
                </p>
              </div>
            </div>
            <hr className="mb-8" />
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="mb-4 text-lg">
                  <strong>Category:</strong> {item.category}
                </p>
                <p className="mb-4 text-lg">
                  <strong>Type:</strong> {item.type}
                </p>
                <p className="mb-4 text-lg">
                  <strong>Status:</strong> {item.status}
                </p>
              </div>
              <div>
                <p className="mb-4 text-lg">
                  <strong>Location:</strong> {item.location}
                </p>
                <p className="mb-4 text-lg">
                  <strong>Branch:</strong> {item.branch}
                </p>
              </div>
            </div>
            {item.about && (
              <div className="mt-12">
                <h3 className="text-3xl font-bold text-midnight_text dark:text-white mb-4">
                  About This Food
                </h3>
                <p className="text-lg leading-8 text-gray-600 dark:text-gray-300">
                  {item.about}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
      <CompanyInfo />
      <Tabbar />
      <Availability />
      <Cart foodTitle={item.food_title} foodTime={item.preparation_time} foodDeliveryCharge={item.food_price} />
      <DiscoverLFood />
    </div>
  );
}