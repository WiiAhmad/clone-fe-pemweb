import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { getAllProducts, createProduct, deleteProduct } from "@/api"; // Import the API functions

export default function CRUDproducts() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [message, setMessage] = useState(""); // Add this line
  const [isLoading, setIsLoading] = useState(false);
  const [newProduct, setNewProduct] = useState({
    title: "",
    desc: "",
    image: "",
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
    } catch (error) {
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
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewProduct({ ...newProduct, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCreateProduct = async (e) => {
    e.preventDefault();
    try {
      await createProduct(newProduct);
      setNewProduct({
        title: "",
        desc: "",
        image: "",
        rating: "",
        category: "",
        release_date: "",
      });
      setMessage("Product created successfully"); // Set success message
      fetchProducts();
    } catch (error) {
      setError("Failed to create product. Please try again.");
    }
  };

  return (
    <div className="flex min-h-screen w-full">
      <div className="flex flex-1 flex-col">
        <main className="flex-1 p-4 md:p-6">
          <Tabs defaultValue="list">
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
                                  <DropdownMenuItem>Edit</DropdownMenuItem>
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
                      <Input
                        id="category"
                        name="category"
                        value={newProduct.category}
                        onChange={handleInputChange}
                        placeholder="Enter product category"
                        required
                      />
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
                      <div key={product.id} className="relative overflow-hidden rounded-lg group">
                        <image
                          src={product.image || "/placeholder.svg"}
                          alt={product.title}
                          width={400}
                          height={300}
                          className="object-cover w-full h-48"
                        />
                        <div className="p-4 bg-background">
                          <h3 className="text-lg font-semibold">{product.title}</h3>
                          <p className="text-sm text-muted-foreground">{product.desc}</p>
                          <p className="text-sm text-muted-foreground">{product.release_date}</p>
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
                  <CardTitle>Create Post</CardTitle>
                  <CardDescription>
                    Fill out the form to create a new post.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="grid gap-4">
                    <div className="grid gap-1">
                      <Label htmlFor="title">Title</Label>
                      <Input id="title" placeholder="Enter post title" />
                    </div>
                    <div className="grid gap-1">
                      <Label htmlFor="content">Content</Label>
                      <Textarea
                        id="content"
                        placeholder="Enter post content"
                        rows={5}
                      />
                    </div>
                    <div className="grid gap-1">
                      <Label htmlFor="author">Author</Label>
                      <Input id="author" placeholder="Enter author name" />
                    </div>
                    <div className="grid gap-1">
                      <Label htmlFor="status">Status</Label>
                      <Select id="status">
                        <option value="draft">Draft</option>
                        <option value="published">Published</option>
                      </Select>
                    </div>
                  </form>
                </CardContent>
                <CardFooter>
                  <Button>Save Post</Button>
                </CardFooter>
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