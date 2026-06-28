"use client";
import Link from "next/link";
import { useState } from "react";

export default function Calculator() {
  const [activeTab, setActiveTab] = useState("Bakery");
  const [price, setPrice] = useState(10000);

  const handleTabChange = (tab: any) => {
    setActiveTab(tab);
  };

  const handlePriceChange = (event: any) => {
    setPrice(event.target.value);
  };

  return (
    <section className="dark:bg-darkmode">
      <div
        className="container px-4 lg:max-w-screen-xl md:max-w-screen-md mx-auto flex flex-col lg:flex-row gap-16 justify-between items-center"
        data-aos="fade-left"
      >
        <div className="max-w-37.5 px-0 mb-8 md:mb-0" data-aos="fade-right">
          <h2
            className="text-4xl mb-4 font-bold text-midnight_text dark:text-white"
            data-aos="fade-left"
          >
          Get Your Discounts
          </h2>
          <p className="text-xl text-gray mb-12" data-aos="fade-left">
            We have many discounts available for our customers. You can save up to 8% on your purchase. Use the calculator below to see how much you can save based on your purchase amount.
          </p>
          <div className="relative-container">
            <div className="main-div mb-16 pt-8">
              <div className="child-container flex w-full justify-between">
                <div
                  className="money-dot relative"
                  data-aos="fade-left"
                  data-aos-delay="100"
                >
                  <p className="text-3xl text-midnight_text dark:text-white">
                    3% Save
                  </p>
                  <p className="text-gray text-base">Above ₹300-₹500</p>
                </div>
                <div
                  className="money-dot relative"
                  data-aos="fade-left"
                  data-aos-delay="200"
                >
                  <p className="text-3xl text-midnight_text dark:text-white">
                    5% Save
                  </p>
                  <p className="text-gray text-base">Above ₹800-₹1000</p>
                </div>
                <div
                  className="money-dot relative"
                  data-aos="fade-left"
                  data-aos-delay="300"
                >
                  <p className="text-3xl text-midnight_text dark:text-white">
                    8% Save
                  </p>
                  <p className="text-gray text-base">Above ₹1500-₹2000</p>
                </div>
              </div>
            </div>
          </div>
          <div data-aos="fade-up">
            <Link
              href="/LFood/LFoodlist"
              className="text-xl bg-primary py-3 px-8 text-white rounded-lg me-3 mb-2 border border-primary hover:bg-blue-700"
            >
              Bakery
            </Link>
            <Link
              href="/LFood/LFoodlist"
              className="text-xl hover:bg-primary hover:text-white py-3 px-8 text-primary border border-primary rounded-lg me-3 mb-2"
            >
              Restaurant
            </Link>
          </div>
        </div>
        <div className="lg:w-auto w-full" data-aos="fade-right">
          <div className="bg-primary rounded-t-lg p-16 w-full">
            <p className="text-4xl text-white mb-6 font-bold flex items-center justify-center">
              Discount Calculator
            </p>
            <div className="flex justify-center">
              <div className="flex p-3 border-4 rounded-full bg-transparent border-cyan items-center justify-center">
                <button
                  className={`px-6 py-2 text-base focus:outline-none ${
                    activeTab === "Bakery"
                      ? "text-white bg-cyan rounded-full"
                      : "text-white transition duration-300 rounded-full"
                  }`}
                  onClick={() => handleTabChange("Bakery")}
                >
                  Bakery
                </button>
                <button
                  className={`px-6 py-2 text-base focus:outline-none ${
                    activeTab === "Restaurant"
                      ? "text-white bg-cyan rounded-full"
                      : "text-white transition duration-300 rounded-full"
                  }`}
                  onClick={() => handleTabChange("Restaurant")}
                >
                  Restaurant
                </button>
              </div>
            </div>
            <div className="items-center justify-center mt-12">
              <p className="text-white flex items-center justify-center font-bold">
                Coupon Code: <span className="text-cyan ml-2">SAVE10</span>
              </p>
              <p className="mb-6 text-white flex items-center justify-center font-bold text-[50px] leading-[1.2]">
                ₹{price}
              </p>
              <input
                type="range"
                min="300"
                max="4000"
                step="1"
                value={price}
                onChange={handlePriceChange}
                className="w-full h-2 bg-blue-800 rounded-lg appearance-none cursor-pointer "
              />
            </div>
            <div className="flex justify-between text-sm text-white mt-2 font-bold">
              <p>₹300</p>
              <p>₹4000</p>
            </div>
          </div>
          <div className="p-4 bg-blue-700 text-white text-xl rounded-b-lg">
            <p className="text-center mb-1 opacity-70">Have Questions?</p>
            <Link
              href={"tel:+91 86676 30563"}
              className="text-center font-bold inline-block w-full"
            >
              <span className="opacity-70 !font-normal">Call us : </span>+91 86676 30563
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
