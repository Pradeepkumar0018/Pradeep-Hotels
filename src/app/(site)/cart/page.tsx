import Footer from "@/app/components/layout/footer";
import Header from "@/app/components/layout/header";

export default function CartPage() {
    return (
        <>
            <Header />
           <section className="py-20 dark:bg-darkmode min-h-[70vh] flex items-center">
                <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
                    <div className="bg-white dark:bg-darklight rounded-2xl shadow-lg p-12 max-w-5xl mx-auto">

                    <h2 className="text-4xl font-bold text-midnight_text dark:text-white text-center mb-12">
                        Your Cart
                    </h2>

                    <div className="flex flex-col items-center justify-center text-center">

                        {/* Empty Cart Icon */}
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        className="w-36 h-36 text-gray-300 dark:text-gray-500 mb-6"
                        >
                        <circle cx="9" cy="20" r="1.5" />
                        <circle cx="18" cy="20" r="1.5" />
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 4H5L7.68 15.39C7.79 15.84 8.19 16.16 8.65 16.16H18.4C18.86 16.16 19.26 15.84 19.37 15.39L21 8H6"
                        />
                        </svg>

                        <h3 className="text-3xl font-bold text-midnight_text dark:text-white mb-3">
                        Your Cart is Empty
                        </h3>

                        <p className="text-lg text-gray-500 dark:text-gray-400 mb-8">
                        Looks like you haven't added any delicious food yet.
                        </p>

                        <a
                        href="/LFood/LFoodlist"
                        className="bg-primary text-white px-8 py-4 rounded-xl font-medium hover:bg-blue-700 transition-all"
                        >
                        Add Items To Cart
                        </a>

                    </div>

                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}