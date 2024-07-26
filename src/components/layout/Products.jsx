import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import CardProduct from "../elements/CardProduct";
import { getAllProducts } from "../../api"; // Import the getAllProducts function

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch product data from API
    getAllProducts()
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <section className="w-full py-12 md:py-24 lg:py-40">
      <div className="container grid gap-6 px-4 md:gap-8 md:px-6">
        <div className="space-y-3 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Produk Terbaru Kami
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Temukan produk terbaru kami yang akan membuat tanaman Anda menjadi
            lebih kuat.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
          {products.slice(0, 4).map((product) => (
            <CardProduct
              key={product.id}
              title={product.title}
              description={product.desc}
              image={product.image}
            />
          ))}
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
