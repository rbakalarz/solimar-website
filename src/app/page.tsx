import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import BrandPillars from "@/components/BrandPillars";
import Collections from "@/components/Collections";
import Products from "@/components/Products";
import BrandStory from "@/components/BrandStory";
import BuyOnline from "@/components/BuyOnline";
import Distributors from "@/components/Distributors";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <BrandPillars />
        <Collections />
        <Products />
        <BrandStory />
        <BuyOnline />
        <Distributors />
      </main>
      <Footer />
    </>
  );
}
