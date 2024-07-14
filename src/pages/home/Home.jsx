import Banner from "@/components/global/Banner";
import Products from "@/components/layout/Products";
import About from "@/components/global/About";
import Review from "@/components/layout/Review";
import Activity from "@/components/layout/Activity";
import Contact from "@/components/layout/Contact";
export default function Home(){
  return (
    <div>
      <Banner />
      <About />
      <Products />
      <Review />
      <Activity />
      <Contact />
    </div>
  );
}