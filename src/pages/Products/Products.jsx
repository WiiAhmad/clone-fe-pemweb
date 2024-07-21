import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Products() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("popularity");
  const products = [
    {
      id: 1,
      title: "Pupuk A",
      desc: "Pupuk kaya nitrogen untuk pertumbuhan cepat",
      image: "/placeholder.svg",
      rating: 4.5,
      category: "Pupuk",
      release_date: "2023-01-15",
    },
    {
      id: 2,
      title: "Pestisida B",
      desc: "Pestisida spektrum luas untuk perlindungan tanaman",
      image: "/placeholder.svg",
      rating: 4.8,
      category: "Pestisida",
      release_date: "2023-02-20",
    },
    {
      id: 3,
      title: "Varietas Benih C",
      desc: "Benih tahan kekeringan untuk hasil panen lebih baik",
      image: "/placeholder.svg",
      rating: 4.2,
      category: "Benih",
      release_date: "2023-03-10",
    },
    {
      id: 4,
      title: "Herbisida D",
      desc: "Herbisida selektif untuk pengendalian gulma",
      image: "/placeholder.svg",
      rating: 4.6,
      category: "Herbisida",
      release_date: "2023-04-05",
    },
    {
      id: 5,
      title: "Peralatan E",
      desc: "Peralatan pertanian canggih untuk efisiensi",
      image: "/placeholder.svg",
      rating: 4.7,
      category: "Peralatan",
      release_date: "2023-05-18",
    },
  ];

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

    if (sortBy === "popularity") {
      filtered = filtered.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "release-date") {
      filtered = filtered.sort(
        (a, b) => new Date(b.release_date) - new Date(a.release_date)
      );
    }

    return filtered;
  }, [searchTerm, selectedCategory, sortBy]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSortChange = (sort) => {
    setSortBy(sort);
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
                    checked={selectedCategory === "Peralatan"}
                    onCheckedChange={() => handleCategoryChange("Peralatan")}
                  >
                    Peralatan
                  </DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="mr-4">
                    Urutkan berdasarkan
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>Urutkan berdasarkan</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuRadioItem
                    value="popularity"
                    checked={sortBy === "popularity"}
                    onCheckedChange={() => handleSortChange("popularity")}
                  >
                    Popularitas
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem
                    value="release-date"
                    checked={sortBy === "release-date"}
                    onCheckedChange={() => handleSortChange("release-date")}
                  >
                    Tanggal Rilis
                  </DropdownMenuRadioItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Semua Produk</h2>
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
                    <h3 className="text-lg font-bold mb-2">{product.title}</h3>
                    <p className="text-gray-600 mb-2">{product.desc}</p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <StarIcon className="w-4 h-4 fill-primary" />
                        <span className="text-sm font-medium">
                          {product.rating.toFixed(1)}
                        </span>
                      </div>
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
