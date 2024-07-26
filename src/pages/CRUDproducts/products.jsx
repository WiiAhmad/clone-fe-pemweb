import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Table, TableHeader, TableBody, TableRow, TableCell, TableHead } from "@/components/ui/table";
import { Pagination, PaginationContent, PaginationItem } from "@/components/ui/pagination";
import { getAllProducts, createProduct, updateProduct, deleteProduct, getProductById } from "@/api"; // Import the API functions

export default function CRUDproducts() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [message, setMessage] = useState(""); // Add this line
  const [isLoading, setIsLoading] = useState(false);
  const [currentTab, setCurrentTab] = useState("list"); // Add state for current tab
  const [editProductId, setEditProductId] = useState(null);
  const [newProduct, setNewProduct] = useState({
    title: "",
    desc: "",
    image: null, // Store file object
    rating: "",
    category: "",
    release_date: "",
  });

  const fetchProducts = async () => {
    setIsLoading(true);
    try {
      const data = await getAllProducts();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error); // Log the error for debugging
      setError("Failed to fetch products. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteProduct(id);
      fetchProducts(); // Refresh the list after deletion
      setMessage("Product deleted successfully"); // Add success message
    } catch (error) {
      console.error("Error deleting product:", error); // Log the error for debugging
      setError("Failed to delete product. Please try again.");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewProduct({ ...newProduct, image: file });
    }
  };

  const handleCreateProduct = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(newProduct).forEach(key => {
      formData.append(key, newProduct[key]);
    });

    // Log the form data
    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }

    try {
      await createProduct(formData); // Pass FormData object
      setNewProduct({
        title: "",
        desc: "",
        image: null, // Reset to null
        rating: "",
        category: "",
        release_date: "",
      });
      setMessage("Product created successfully");
      fetchProducts();
    } catch (error) {
      setError("Failed to create product. Please try again.");
    }
  };

  const handleEditProduct = async (id) => {
    try {
      const product = await getProductById(id);
      setNewProduct({
        title: product.title,
        desc: product.desc,
        image: null, // Reset to null, as we don't handle existing images in the form
        rating: product.rating,
        category: product.category,
        release_date: product.release_date,
      });
      setEditProductId(id);
      setCurrentTab("edit"); // Ensure this line is present to switch to the edit tab
    } catch (error) {
      setError("Failed to load product. Please try again.");
    }
  };

  const handleUpdateProduct = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    // Append only changed fields to the FormData object
    Object.keys(newProduct).forEach((key) => {
      if (newProduct[key] !== "" && newProduct[key] !== null) {
        formData.append(key, newProduct[key]);
      }
    });

    // Add spoofing method
    formData.append("_method", "PATCH");

    try {
      console.log("Sending formData:", formData); // Log before sending
      await updateProduct(editProductId, formData); // Pass FormData object
      console.log("FormData sent successfully"); // Log after sending

      setMessage("Product updated successfully");
      fetchProducts();
      setCurrentTab("list"); // Switch to list view after update
    } catch (error) {
      setError("Failed to update product. Please try again.");
    }
  };

  const handleCategoryChange = (category) => {
    setNewProduct({ ...newProduct, category });
  };

  return (
    <div className="flex min-h-screen w-full">
      <div className="flex flex-1 flex-col">
        <main className="flex-1 p-4 md:p-6">
          <Tabs
            defaultValue="list"
            value={currentTab}
            onValueChange={setCurrentTab}
          >
            <TabsList>
              <TabsTrigger value="list">List View</TabsTrigger>
              <TabsTrigger value="grid">Grid View</TabsTrigger>
              <TabsTrigger value="create">Create</TabsTrigger>
            </TabsList>
            {error && <div className="text-red-600">{error}</div>}
            {message && <div className="text-green-600">{message}</div>}
            <TabsContent value="list">
              <Card>
                <CardHeader>
                  <CardTitle>Products</CardTitle>
                  <CardDescription>Manage your products here.</CardDescription>
                </CardHeader>
                <CardContent>
                  {isLoading ? (
                    <div>Loading...</div>
                  ) : (
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Title</TableHead>
                          <TableHead>Desc</TableHead>
                          <TableHead>Rating</TableHead>
                          <TableHead>Category</TableHead>
                          <TableHead>Release Date</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {products.map((product) => (
                          <TableRow key={product.id}>
                            <TableCell>{product.title}</TableCell>
                            <TableCell>{product.desc}</TableCell>
                            <TableCell>{product.rating}</TableCell>
                            <TableCell>{product.category}</TableCell>
                            <TableCell>{product.release_date}</TableCell>
                            <TableCell>
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button variant="ghost" size="icon">
                                    <MoveHorizontalIcon className="h-4 w-4" />
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuItem
                                    onClick={() =>
                                      handleEditProduct(product.id)
                                    }
                                  >
                                    Edit
                                  </DropdownMenuItem>
                                  <DropdownMenuItem
                                    onClick={() => handleDelete(product.id)}
                                  >
                                    Delete
                                  </DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  )}
                </CardContent>
                <CardFooter>
                  <Pagination>
                    <PaginationContent>
                      <PaginationItem>
                        <Button variant="outline" size="icon">
                          <ChevronLeftIcon className="h-4 w-4" />
                        </Button>
                      </PaginationItem>
                      <PaginationItem>
                        <Button variant="outline" size="icon">
                          <ChevronRightIcon className="h-4 w-4" />
                        </Button>
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="create">
              <Card>
                <CardHeader>
                  <CardTitle>Create Product</CardTitle>
                  <CardDescription>
                    Fill out the form to create a new product.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form
                    className="grid gap-4"
                    onSubmit={handleCreateProduct}
                    encType="multipart/form-data" // Add this line
                  >
                    <div className="grid gap-1">
                      <Label htmlFor="title">Title</Label>
                      <Input
                        id="title"
                        name="title"
                        value={newProduct.title}
                        onChange={handleInputChange}
                        placeholder="Enter product title"
                        required
                      />
                    </div>
                    <div className="grid gap-1">
                      <Label htmlFor="desc">Description</Label>
                      <Textarea
                        id="desc"
                        name="desc"
                        value={newProduct.desc}
                        onChange={handleInputChange}
                        placeholder="Enter product description"
                        rows={5}
                        required
                      />
                    </div>
                    <div className="grid gap-1">
                      <Label htmlFor="image">Image</Label>
                      <Input
                        id="image"
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                      />
                    </div>
                    <div className="grid gap-1">
                      <Label htmlFor="rating">Rating</Label>
                      <Input
                        id="rating"
                        name="rating"
                        type="number"
                        value={newProduct.rating}
                        onChange={handleInputChange}
                        placeholder="Enter product rating"
                      />
                    </div>
                    <div className="grid gap-1">
                      <Label htmlFor="category">Category</Label>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline" className="w-full">
                            {newProduct.category || "Select Category"}
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuLabel>Kategori</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuCheckboxItem
                            checked={newProduct.category === "Pupuk"}
                            onCheckedChange={() => handleCategoryChange("Pupuk")}
                          >
                            Pupuk
                          </DropdownMenuCheckboxItem>
                          <DropdownMenuCheckboxItem
                            checked={newProduct.category === "Pestisida"}
                            onCheckedChange={() => handleCategoryChange("Pestisida")}
                          >
                            Pestisida
                          </DropdownMenuCheckboxItem>
                          <DropdownMenuCheckboxItem
                            checked={newProduct.category === "Insektisida"}
                            onCheckedChange={() => handleCategoryChange("Insektisida")}
                          >
                            Insektisida
                          </DropdownMenuCheckboxItem>
                          <DropdownMenuCheckboxItem
                            checked={newProduct.category === "Benih"}
                            onCheckedChange={() => handleCategoryChange("Benih")}
                          >
                            Benih
                          </DropdownMenuCheckboxItem>
                          <DropdownMenuCheckboxItem
                            checked={newProduct.category === "Herbisida"}
                            onCheckedChange={() => handleCategoryChange("Herbisida")}
                          >
                            Herbisida
                          </DropdownMenuCheckboxItem>
                          <DropdownMenuCheckboxItem
                            checked={newProduct.category === "Biopestisida"}
                            onCheckedChange={() => handleCategoryChange("Biopestisida")}
                          >
                            Biopestisida
                          </DropdownMenuCheckboxItem>
                          <DropdownMenuCheckboxItem
                            checked={newProduct.category === "Peralatan"}
                            onCheckedChange={() => handleCategoryChange("Peralatan")}
                          >
                            Peralatan
                          </DropdownMenuCheckboxItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                    <div className="grid gap-1">
                      <Label htmlFor="release_date">Release Date</Label>
                      <Input
                        id="release_date"
                        name="release_date"
                        type="date"
                        value={newProduct.release_date}
                        onChange={handleInputChange}
                        placeholder="Enter release date"
                      />
                    </div>
                    <Button type="submit">Save Product</Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="grid">
              <Card>
                <CardHeader>
                  <CardTitle>Products</CardTitle>
                  <CardDescription>Manage your products here.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {products.map((product) => (
                      <div
                        key={product.id}
                        className="relative overflow-hidden rounded-lg group"
                      >
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.title}
                          width={400}
                          height={300}
                          className="object-cover w-full h-48"
                        />
                        <div className="p-4 bg-background">
                          <h3 className="text-lg font-semibold">
                            {product.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {product.desc}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {product.release_date}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="edit">
              <Card>
                <CardHeader>
                  <CardTitle>Edit Product</CardTitle>
                  <CardDescription>
                    Edit the form to update the product.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form
                    className="grid gap-4"
                    onSubmit={handleUpdateProduct}
                    encType="multipart/form-data"
                  >
                    <div className="grid gap-1">
                      <Label htmlFor="title">Title</Label>
                      <Input
                        id="title"
                        name="title"
                        value={newProduct.title}
                        onChange={handleInputChange}
                        placeholder="Enter product title"
                        required
                      />
                    </div>
                    <div className="grid gap-1">
                      <Label htmlFor="desc">Description</Label>
                      <Textarea
                        id="desc"
                        name="desc"
                        value={newProduct.desc}
                        onChange={handleInputChange}
                        placeholder="Enter product description"
                        rows={5}
                        required
                      />
                    </div>
                    <div>
                      {newProduct.image && (
                        <div className="grid gap-1">
                          <Label>New Image</Label>
                          <img
                            src={URL.createObjectURL(newProduct.image)}
                            alt="New product"
                            className="w-32 h-32 object-cover"
                          />
                        </div>
                      )}
                      {editProductId && (
                        <div className="grid gap-1">
                          <Label>Current Image</Label>
                          <img
                            src={
                              products.find(
                                (product) => product.id === editProductId
                              )?.image
                            }
                            alt="Current product"
                            className="w-32 h-32 object-cover"
                          />
                        </div>
                      )}
                    </div>
                    <div className="grid gap-1">
                      <Label htmlFor="image">Image</Label>
                      <Input
                        id="image"
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                      />
                    </div>
                    <div className="grid gap-1">
                      <Label htmlFor="rating">Rating</Label>
                      <Input
                        id="rating"
                        name="rating"
                        type="number"
                        value={newProduct.rating}
                        onChange={handleInputChange}
                        placeholder="Enter product rating"
                      />
                    </div>
                    <div className="grid gap-1">
                      <Label htmlFor="category">Category</Label>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline" className="w-full">
                            {newProduct.category || "Select Category"}
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuLabel>Kategori</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuCheckboxItem
                            checked={newProduct.category === "Pupuk"}
                            onCheckedChange={() => handleCategoryChange("Pupuk")}
                          >
                            Pupuk
                          </DropdownMenuCheckboxItem>
                          <DropdownMenuCheckboxItem
                            checked={newProduct.category === "Pestisida"}
                            onCheckedChange={() => handleCategoryChange("Pestisida")}
                          >
                            Pestisida
                          </DropdownMenuCheckboxItem>
                          <DropdownMenuCheckboxItem
                            checked={newProduct.category === "Insektisida"}
                            onCheckedChange={() => handleCategoryChange("Insektisida")}
                          >
                            Insektisida
                          </DropdownMenuCheckboxItem>
                          <DropdownMenuCheckboxItem
                            checked={newProduct.category === "Benih"}
                            onCheckedChange={() => handleCategoryChange("Benih")}
                          >
                            Benih
                          </DropdownMenuCheckboxItem>
                          <DropdownMenuCheckboxItem
                            checked={newProduct.category === "Herbisida"}
                            onCheckedChange={() => handleCategoryChange("Herbisida")}
                          >
                            Herbisida
                          </DropdownMenuCheckboxItem>
                          <DropdownMenuCheckboxItem
                            checked={newProduct.category === "Biopestisida"}
                            onCheckedChange={() => handleCategoryChange("Biopestisida")}
                          >
                            Biopestisida
                          </DropdownMenuCheckboxItem>
                          <DropdownMenuCheckboxItem
                            checked={newProduct.category === "Peralatan"}
                            onCheckedChange={() => handleCategoryChange("Peralatan")}
                          >
                            Peralatan
                          </DropdownMenuCheckboxItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                    <div className="grid gap-1">
                      <Label htmlFor="release_date">Release Date</Label>
                      <Input
                        id="release_date"
                        name="release_date"
                        type="date"
                        value={newProduct.release_date}
                        onChange={handleInputChange}
                        placeholder="Enter release date"
                      />
                    </div>
                    <Button type="submit">Update Product</Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
}


function ChevronLeftIcon(props) {
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
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ChevronRightIcon(props) {
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
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function MoveHorizontalIcon(props) {
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
      <polyline points="18 8 22 12 18 16" />
      <polyline points="6 8 2 12 6 16" />
      <line x1="2" x2="22" y1="12" y2="12" />
    </svg>
  );
}
