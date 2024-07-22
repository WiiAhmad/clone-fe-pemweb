import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import CardProduct from "../elements/CardProduct";

export default function Products() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-40">
      <div className="container grid gap-6 px-4 md:gap-8 md:px-6">
        <div className="space-y-3 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Produk Terbaru Kami
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Discover our stunning collection of photos showcasing the beauty of
            the world.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
          <CardProduct title="Urban Skyline" description="A stunning view of a bustling city skyline." />
          <CardProduct title="Urban Skyline" description="A stunning view of a bustling city skyline." />
          <CardProduct title="Urban Skyline" description="A stunning view of a bustling city skyline." />
          <CardProduct title="Urban Skyline" description="A stunning view of a bustling city skyline." />
        </div>
        <div className="items-center justify-center text-center">
          <div className="space-y-2">
            <Button>Lihat Semua Produk</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
