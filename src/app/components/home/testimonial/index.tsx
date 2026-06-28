import { getImgPath } from "@/utils/pathUtils";
import Image from "next/image";

export default function Testimonials() {
return (
    <section className="px-4 md:px-0 dark:bg-darkmode">
        <div className="container lg:max-w-screen-xl md:max-w-screen-md px-8 mx-auto py-12 flex flex-col-reverse md:flex-row items-center justify-between">
            <div className="flex justify-between">

            <div
                className="flex-1 lg:block hidden"
                data-aos="fade-right"
            >
                <Image
                src={getImgPath("/images/testimonial/poster.png")}
                alt="Customer Testimonial"
                width={451}
                height={470}
                quality={100}
                style={{ width: "auto", height: "auto" }}
                />
            </div>

            <div
                className="flex-1"
                data-aos="fade-left"
            >
                <Image
                src={getImgPath("/images/testimonial/quote.svg")}
                alt="Quote"
                className="mb-4 md:mb-6"
                height={135}
                width={135}
                />

                <p className="text-lg md:text-2xl text-gray mb-6 md:mb-12">
                "Pradeep's Bakery & Restaurant has become my family's favorite
                place for both snacks and meals. The food is always fresh,
                the service is excellent, and the taste never disappoints.
                From delicious pastries to authentic South Indian dishes,
                every visit feels special. Highly recommended for anyone
                looking for quality food and a welcoming atmosphere."
                </p>

                <p className="text-lg md:text-2xl font-semibold">
                    Bala Mama
                </p>

                <p className="text-gray text-lg md:text-xl">
                Regular Customer
                </p>
            </div>

            </div>
        </div>
    </section>
);
}