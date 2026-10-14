import Hero from "@/components/home/Hero";
import PopularDestinations from "@/components/home/PopularDestinations";
import TrendingPackages from "@/components/home/TrendingPackages";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <PopularDestinations />
      <TrendingPackages />
      <WhyChooseUs />
      <Testimonials />
    </>
  );
}
