import Banner from "@/components/global/Banner";
import Products from "@/components/layout/Products";
import About from "@/components/global/About";
import Review from "@/components/layout/Review";
import Activity from "@/components/layout/Activity";
export default function Home(){
  return (
    <div>
      <Banner />
      <Products />
      <About />
      <Review />
      <Activity />
    </div>
  );
}