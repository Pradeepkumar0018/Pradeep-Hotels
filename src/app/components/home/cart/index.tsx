"use client";

import Link from "next/link";
import { useState } from "react";

export default function Cart({ foodTitle, foodTime, foodDeliveryCharge }: { foodTitle: string; foodTime: string; foodDeliveryCharge: string }) {
    const [quantity, setQuantity] = useState(1);

    const itemPrice = Number(
        foodDeliveryCharge.replace("₹", "").replace(",", "")
    );

    const deliveryCharge = Number(
        foodDeliveryCharge.replace("₹", "").replace(",", "")
    );

    const totalPrice = itemPrice * quantity;
    return (
        <section className="py-16 dark:bg-darkmode"> <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
            <div className="bg-white dark:bg-darklight rounded-2xl shadow-lg p-8 max-w-5xl mx-auto">

            <h2 className="text-4xl font-bold text-midnight_text dark:text-white mb-8 text-center">
                Place Your Order
            </h2>

            <div className="grid md:grid-cols-2 gap-10">

                <div>
                <h3 className="text-2xl font-semibold mb-6 dark:text-white">
                    Delivery Information
                </h3>

                <div className="space-y-4">

                    <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full p-4 rounded-xl border border-gray-200 dark:border-dark_border dark:bg-darkmode"
                    />

                    <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full p-4 rounded-xl border border-gray-200 dark:border-dark_border dark:bg-darkmode"
                    />

                    <input
                    type="tel"
                    placeholder="Mobile Number"
                    className="w-full p-4 rounded-xl border border-gray-200 dark:border-dark_border dark:bg-darkmode"
                    />

                    <textarea
                    rows={4}
                    placeholder="Delivery Address"
                    className="w-full p-4 rounded-xl border border-gray-200 dark:border-dark_border dark:bg-darkmode"
                    />

                </div>
                </div>

                <div>

                <h3 className="text-2xl font-semibold mb-6 dark:text-white">
                    Order Summary
                </h3>

                <div className="bg-[#F8FAFC] dark:bg-darkmode rounded-xl p-6">

                    <div className="flex justify-between mb-4">
                    <span>Food Item</span>
                    {foodTitle}
                    </div>

                    <div className="flex justify-between mb-4">
                    <span>Quantity</span>
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() =>
                                setQuantity((prev) => Math.max(1, prev - 1))
                            }
                            className="w-8 h-8 rounded bg-gray-200"
                        >-</button>
                        <span>{quantity}</span>
                        <button
                            onClick={() => setQuantity((prev) => prev + 1)}
                            className="w-8 h-8 rounded bg-gray-200"
                        >+</button>
                    </div>
                    </div>

                    <div className="flex justify-between mb-4">
                    <span>Preparation Time</span>
                    {foodTime}
                    </div>

                    <div className="flex justify-between mb-4">
                    <span>Delivery Charge</span>
                    {foodDeliveryCharge}
                    </div>

                    <hr className="my-6" />

                    <div className="flex justify-between text-2xl font-bold">
                    <span>Total</span>
                    <span>₹{totalPrice}</span>
                    </div>

                    <button className="w-full mt-8 bg-primary text-white py-4 rounded-xl hover:bg-blue-700 transition-all">
                    Place Order
                    </button>

                </div>

                </div>

            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-4">

                <Link
                href="/LFood/LFoodlist"
                className="px-8 py-3 border border-primary text-primary rounded-xl hover:bg-primary hover:text-white transition-all"
                >
                Continue Shopping
                </Link>

                <button className="px-8 py-3 bg-primary text-white rounded-xl hover:bg-blue-700 transition-all">
                Add To Cart
                </button>

            </div>

        </div>

            </div>
        </section>

    );
}
