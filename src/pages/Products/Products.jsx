import { useState, useEffect, useMemo } from "react";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { getAllProducts } from "../../api"; // Import the getAllProducts function

export default function Products() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from API
    getAllProducts()
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const filteredProducts = useMemo(() => {
    let filtered = products;

    if (searchTerm) {
      filtered = filtered.filter(
        (product) =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.desc.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory
      );
    }

    return filtered;
  }, [searchTerm, selectedCategory, products]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Produk Pertanian</h1>
        <div className="flex items-center mb-4">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="order-first lg:order-1 md:order-1 mb-4 mr-4">
              <Input
                type="text"
                placeholder="Cari produk..."
                value={searchTerm}
                onChange={handleSearch}
                className="flex-1"
              />
            </div>
            <div className="md:order-2 order-last lg:order-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="mr-4">
                    Filter Kategori
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>Kategori</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuCheckboxItem
                    checked={selectedCategory === "all"}
                    onCheckedChange={() => handleCategoryChange("all")}
                  >
                    Semua
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={selectedCategory === "Pupuk"}
                    onCheckedChange={() => handleCategoryChange("Pupuk")}
                  >
                    Pupuk
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={selectedCategory === "Pestisida"}
                    onCheckedChange={() => handleCategoryChange("Pestisida")}
                  >
                    Pestisida
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={selectedCategory === "Insektisida"}
                    onCheckedChange={() => handleCategoryChange("Insektisida")}
                  >
                    Insektisida
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={selectedCategory === "Benih"}
                    onCheckedChange={() => handleCategoryChange("Benih")}
                  >
                    Benih
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={selectedCategory === "Herbisida"}
                    onCheckedChange={() => handleCategoryChange("Herbisida")}
                  >
                    Herbisida
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={selectedCategory === "Biopestisida"}
                    onCheckedChange={() => handleCategoryChange("Biopestisida")}
                  >
                    Biopestisida
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={selectedCategory === "Peralatan"}
                    onCheckedChange={() => handleCategoryChange("Peralatan")}
                  >
                    Peralatan
                  </DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section className="mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <Link to="#" className="block">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-lg font-bold mb-2">
                          {product.title}
                        </h3>
                      </div>
                      <div className="flex items-center gap-2">
                        <StarIcon className="w-4 h-4 fill-primary" />
                        <p>{product.rating}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-2">
                      Kategori: {product.category}
                    </p>
                    <p className="text-gray-600 mb-2">{product.desc}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-bold">
                        {new Date(product.release_date).toLocaleDateString(
                          "id-ID",
                          {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          }
                        )}
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
