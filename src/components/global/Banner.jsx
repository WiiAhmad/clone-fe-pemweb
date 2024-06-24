import { Link } from "react-router-dom";
import BgImage from "../../assets/img/bg.svg"

export default function Banner() {
  return (
    <section className="w-full">
      <div className="container grid md:grid-cols-2 gap-8 items-center py-12 md:py-24 lg:py-32">
        <div className="space-y-4 md:order-2">
          <img
            src={BgImage}
            width={1200}
            height={800}
            alt="Jumbotron"
            className="rounded-lg object-cover w-full h-full max-h-[600px] md:max-h-none"
          />
        </div>
        <div className="space-y-4 text-center md:text-left">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            Membangun Masa Depan Pertanian
          </h1>
          <p className="text-muted-foreground md:text-xl">
            Produk Unggulan untuk
            Pertumbuhan Vegetatif dan Generatif yang Optimal
          </p>
          <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center md:justify-start">
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}