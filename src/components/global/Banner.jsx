import BgImage from "../../assets/img/bg.svg"
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    // <section className="w-full">
    //   <div className="container grid md:grid-cols-2 gap-8 items-center py-12 md:py-24 lg:py-32">
    //     <div className="space-y-4 md:order-2">

    //       <img
    //         src={BgImage}
    //         width={1200}
    //         height={900}
    //         alt="Jumbotron"
    //         className="rounded-lg object-cover w-full h-full max-h-[800px] md:max-h-none"
    //       />

    //     </div>
    //     <div className="space-y-4 text-center md:text-left">
    //       <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
    //         Membangun Masa Depan Pertanian
    //       </h1>
    //       <p className="text-muted-foreground md:text-xl">
    //         Produk Unggulan untuk
    //         Pertumbuhan Vegetatif dan Generatif yang Optimal
    //       </p>
    //       <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center md:justify-start">
    //         <Link
    //           href="#"
    //           className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
    //           prefetch={false}
    //         >
    //           Hubungi Kami
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </section>

    // <section className="w-full py-12 md:py-24 lg:py-32">
    //   <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">

    //     <img
    //       src={BgImage}
    //       width="800"
    //       height="600"
    //       alt="Fashion Model"
    //       className="mx-auto aspect-[4/3] overflow-hidden rounded-xl object-cover object-center sm:w-full"
    //     />

    //     <div className="space-y-4">
    //       <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
    //         Elevate Your Style
    //       </h1>
    //       <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
    //         Discover the latest fashion trends and curate your wardrobe with our
    //         carefully selected collection.
    //       </p>
    //       <Link
    //         href="#"
    //         className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
    //         prefetch={false}
    //       >
    //         Shop the Collection
    //       </Link>
    //     </div>
    //   </div>
    // </section>
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