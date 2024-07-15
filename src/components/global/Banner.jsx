import BgImage from "../../assets/img/bg.svg"
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-36">
      <div className="container grid grid-cols-1 md:grid-cols-2 items-center gap-6 px-4 md:px-6 lg:gap-10">
        <div className="space-y-4 order-last lg:order-1 md:order-1">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Membangun Masa Depan Pertanian
          </h1>
          <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Produk Unggulan untuk Pertumbuhan Vegetatif dan Generatif yang
            Optimal
          </p>
          <Button asChild>
            <Link to="/contact">Hubungi Kami</Link>
          </Button>
        </div>

        <img
          src={BgImage}
          width="800"
          height="600"
          alt="Fashion Model"
          className="mx-auto aspect-[4/3] overflow-hidden rounded-xl object-cover object-center sm:w-full md:order-2 order-first lg:order-2"
        />
      </div>
    </section>
  );
}