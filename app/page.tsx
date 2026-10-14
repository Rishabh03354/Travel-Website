import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import PopularDestinations from "../components/home/PopularDestinations";
import TrendingPackages from "../components/home/TrendingPackages";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Testimonials from "../components/home/Testimonials";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <PopularDestinations />
      <TrendingPackages />
      <WhyChooseUs />
      <Testimonials />
      <Footer />
    </main>
  );
}