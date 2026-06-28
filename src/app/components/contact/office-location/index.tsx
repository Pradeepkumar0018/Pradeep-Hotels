import Link from "next/link";

const Location = () => {
    return (
        <section className="bg-primary lg:py-24 py-16 px-4">
        <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md">

            <div className="grid md:grid-cols-6 lg:grid-cols-9 grid-cols-1 gap-7 border-b border-solid border-white/30 pb-11">

            <div className="col-span-3">
                <h2 className="text-white text-4xl leading-[1.2] font-bold">
                Location
                </h2>
            </div>

            <div className="col-span-3">
                <p className="text-xl text-white/70 font-normal max-w-64">
                Ramapuram, Chennai,
                Tamil Nadu, India
                </p>
            </div>

            <div className="col-span-3">
                <Link
                href="mailto:kpradeepkumar3005@gmail.com"
                className="text-xl text-white font-medium underline block"
                >
                kpradeepkumar3005@gmail.com
                </Link>

                <Link
                href="tel:+918667630563"
                className="text-xl text-white/80 flex items-center gap-2 hover:text-white w-fit mt-2"
                >
                <span className="text-white/40">Call</span>
                +918667630563
                </Link>
            </div>

            </div>

            <div className="grid md:grid-cols-6 lg:grid-cols-9 grid-cols-1 gap-7 pt-12">

            <div className="col-span-3">
                <h2 className="text-white text-4xl leading-[1.2] font-bold">
                Available For
                </h2>
            </div>

            <div className="col-span-3">
                <p className="text-xl text-white/70 font-normal max-w-72">
                Full Stack Development,
                React.js, Next.js,
                Node.js, Java,
                AI & Web Development Projects
                </p>
            </div>

            <div className="col-span-3">
                <Link
                href="mailto:kpradeepkumar3005@gmail.com"
                className="text-xl text-white font-medium underline block"
                >
                Let's Connect
                </Link>

                <p className="text-xl text-white/80 mt-2">
                Open to internships, freelance work and full-time opportunities.
                </p>
            </div>

            </div>

        </div>
        </section>
    );
};

export default Location;