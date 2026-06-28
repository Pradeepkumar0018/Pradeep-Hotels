import { Metadata } from "next";
import DiscoverLFood from './components/home/branches';
import Calculator from './components/home/calculator';
import Listing from './components/home/Food-list';
import Hero from './components/home/hero';
import History from './components/home/history';
import CompanyInfo from './components/home/info';
import Testimonials from './components/home/testimonial';
import BlogSmall from './components/shared/blog';
import Features from "./components/shared/features";

export const metadata: Metadata = {
  title: "Food",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <DiscoverLFood />
      <Listing />
      <Calculator />
      <Features />
      <History />
      <Testimonials />
      <CompanyInfo />
      <BlogSmall />
    </main>
  )
}
