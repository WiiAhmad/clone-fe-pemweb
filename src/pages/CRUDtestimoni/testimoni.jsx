import { useEffect, useState } from "react";
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
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { getAllTestimonies, createTestimoni, updateTestimoni, deleteTestimoni, getTestimoniById } from "@/api"; // Import the API functions

export default function CRUDtestimoni() {
  const [testimonies, setTestimonies] = useState([]);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [currentTab, setCurrentTab] = useState("list");
  const [editTestimoniId, setEditTestimoniId] = useState(null);
  const [newTestimoni, setNewTestimoni] = useState({
    rating: "",
    testimoni: "",
    image: null,
  });

  const fetchTestimonies = async () => {
    setIsLoading(true);
    try {
      const data = await getAllTestimonies();
      setTestimonies(data);
    } catch (error) {
      console.error("Error fetching testimonies:", error);
      setError("Failed to fetch testimonies. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTestimonies();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteTestimoni(id);
      fetchTestimonies();
      setMessage("Testimoni deleted successfully");
    } catch (error) {
      console.error("Error deleting testimoni:", error);
      setError("Failed to delete testimoni. Please try again.");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTestimoni({ ...newTestimoni, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewTestimoni({ ...newTestimoni, image: file });
    }
  };

  const handleCreateTestimoni = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(newTestimoni).forEach(key => {
      formData.append(key, newTestimoni[key]);
    });

    try {
      await createTestimoni(formData);
      setNewTestimoni({
        rating: "",
        testimoni: "",
        image: null,
      });
      setMessage("Testimoni created successfully");
      fetchTestimonies();
    } catch (error) {
      setError("Failed to create testimoni. Please try again.");
    }
  };

  const handleEditTestimoni = async (id) => {
    try {
      const testimoni = await getTestimoniById(id);
      setNewTestimoni({
        rating: testimoni.rating,
        testimoni: testimoni.testimoni,
        image: null,
      });
      setEditTestimoniId(id);
      setCurrentTab("edit");
    } catch (error) {
      setError("Failed to load testimoni. Please try again.");
    }
  };

  const handleUpdateTestimoni = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(newTestimoni).forEach((key) => {
      if (newTestimoni[key] !== "" && newTestimoni[key] !== null) {
        formData.append(key, newTestimoni[key]);
      }
    });
    formData.append("_method", "PATCH");

    try {
      await updateTestimoni(editTestimoniId, formData);
      setMessage("Testimoni updated successfully");
      fetchTestimonies();
      setCurrentTab("list");
    } catch (error) {
      setError("Failed to update testimoni. Please try again.");
    }
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
                  <CardTitle>Testimonies</CardTitle>
                  <CardDescription>Manage your testimonies here.</CardDescription>
                </CardHeader>
                <CardContent>
                  {isLoading ? (
                    <div>Loading...</div>
                  ) : (
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Rating</TableHead>
                          <TableHead>Testimoni</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {testimonies.map((testimoni) => (
                          <TableRow key={testimoni.id}>
                            <TableCell>{testimoni.rating}</TableCell>
                            <TableCell>{testimoni.testimoni}</TableCell>
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
                                      handleEditTestimoni(testimoni.id)
                                    }
                                  >
                                    Edit
                                  </DropdownMenuItem>
                                  <DropdownMenuItem
                                    onClick={() => handleDelete(testimoni.id)}
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
            <TabsContent value="grid">
              <Card>
                <CardHeader>
                  <CardTitle>Testimonies</CardTitle>
                  <CardDescription>Manage your testimonies here.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {testimonies.map((testimoni) => (
                      <Card key={testimoni.id}>
                        <CardContent>
                            <img src={testimoni.image} alt={testimoni.testimoni} className="w-32 h-32 object-cover" />
                          <p>{testimoni.testimoni}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="create">
              <Card>
                <CardHeader>
                  <CardTitle>Create Testimoni</CardTitle>
                  <CardDescription>
                    Fill out the form to create a new testimoni.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form
                    className="grid gap-4"
                    onSubmit={handleCreateTestimoni}
                    encType="multipart/form-data"
                  >
                    <div className="grid gap-1">
                      <Label htmlFor="rating">Rating</Label>
                      <Input
                        id="rating"
                        name="rating"
                        value={newTestimoni.rating}
                        onChange={handleInputChange}
                        placeholder="Enter testimoni rating"
                        required
                      />
                    </div>
                    <div className="grid gap-1">
                      <Label htmlFor="testimoni">Testimoni</Label>
                      <Textarea
                        id="testimoni"
                        name="testimoni"
                        value={newTestimoni.testimoni}
                        onChange={handleInputChange}
                        placeholder="Enter testimoni"
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
                    <Button type="submit">Save Testimoni</Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="edit">
              <Card>
                <CardHeader>
                  <CardTitle>Edit Testimoni</CardTitle>
                  <CardDescription>
                    Edit the form to update the testimoni.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form
                    className="grid gap-4"
                    onSubmit={handleUpdateTestimoni}
                    encType="multipart/form-data"
                  >
                    <div className="grid gap-1">
                      <Label htmlFor="rating">Rating</Label>
                      <Input
                        id="rating"
                        name="rating"
                        value={newTestimoni.rating}
                        onChange={handleInputChange}
                        placeholder="Enter testimoni rating"
                        required
                      />
                    </div>
                    <div className="grid gap-1">
                      <Label htmlFor="testimoni">Testimoni</Label>
                      <Textarea
                        id="testimoni"
                        name="testimoni"
                        value={newTestimoni.testimoni}
                        onChange={handleInputChange}
                        placeholder="Enter testimoni"
                        rows={5}
                        required
                      />
                    </div>
                    <div>
                      {newTestimoni.image && (
                        <div className="grid gap-1">
                          <Label>New Image</Label>
                          <img
                            src={URL.createObjectURL(newTestimoni.image)}
                            alt="New testimoni"
                            className="w-32 h-32 object-cover"
                          />
                        </div>
                      )}
                      {editTestimoniId && (
                        <div className="grid gap-1">
                          <Label>Current Image</Label>
                          <img
                            src={
                              testimonies.find(
                                (testimoni) => testimoni.id === editTestimoniId
                              )?.image
                            }
                            alt="Current testimoni"
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
                    <Button type="submit">Update Testimoni</Button>
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
