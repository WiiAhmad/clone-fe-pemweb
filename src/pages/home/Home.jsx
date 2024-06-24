import Navbar from "@/components/global/Navbar"
import Banner from "@/components/global/Banner";
import Products from "@/components/layout/Products";
import About from "@/components/global/About";
import Review from "@/components/layout/Review";
import Activity from "@/components/layout/Activity";
import Footer from "@/components/global/Footer";
export default function Home(){
  return (
    <div>
      <Navbar />
      <Banner />
      <Products />
      <About />
      <Review />
      <Activity />
      <Footer />
    </div>
  );
}