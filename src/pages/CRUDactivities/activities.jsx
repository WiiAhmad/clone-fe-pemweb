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
import { getAllActivities, createActivity, updateActivity, deleteActivity, getActivityById } from "@/api"; // Import the API functions

export default function CRUDactivities() {
  const [activities, setActivities] = useState([]);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [currentTab, setCurrentTab] = useState("list");
  const [editActivityId, setEditActivityId] = useState(null);
  const [newActivity, setNewActivity] = useState({
    title: "",
    desc: "",
    image: null,
    date: "",
  });

  const fetchActivities = async () => {
    setIsLoading(true);
    try {
      const data = await getAllActivities();
      setActivities(data);
    } catch (error) {
      console.error("Error fetching activities:", error);
      setError("Failed to fetch activities. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchActivities();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteActivity(id);
      fetchActivities();
      setMessage("Activity deleted successfully");
    } catch (error) {
      console.error("Error deleting activity:", error);
      setError("Failed to delete activity. Please try again.");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewActivity({ ...newActivity, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewActivity({ ...newActivity, image: file });
    }
  };

  const handleCreateActivity = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(newActivity).forEach(key => {
      formData.append(key, newActivity[key]);
    });

    try {
      await createActivity(formData);
      setNewActivity({
        title: "",
        desc: "",
        image: null,
        date: "",
      });
      setMessage("Activity created successfully");
      fetchActivities();
    } catch (error) {
      setError("Failed to create activity. Please try again.");
    }
  };

  const handleEditActivity = async (id) => {
    try {
      const activity = await getActivityById(id);
      setNewActivity({
        title: activity.title,
        desc: activity.desc,
        image: null,
        date: activity.date,
      });
      setEditActivityId(id);
      setCurrentTab("edit");
    } catch (error) {
      setError("Failed to load activity. Please try again.");
    }
  };

  const handleUpdateActivity = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(newActivity).forEach((key) => {
      if (newActivity[key] !== "" && newActivity[key] !== null) {
        formData.append(key, newActivity[key]);
      }
    });

    formData.append("_method", "PATCH");

    try {
      await updateActivity(editActivityId, formData);
      setMessage("Activity updated successfully");
      fetchActivities();
      setCurrentTab("list");
    } catch (error) {
      setError("Failed to update activity. Please try again.");
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
                  <CardTitle>Activities</CardTitle>
                  <CardDescription>Manage your activities here.</CardDescription>
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
                          <TableHead>Date</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {activities.map((activity) => (
                          <TableRow key={activity.id}>
                            <TableCell>{activity.title}</TableCell>
                            <TableCell>{activity.desc}</TableCell>
                            <TableCell>{activity.date}</TableCell>
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
                                      handleEditActivity(activity.id)
                                    }
                                  >
                                    Edit
                                  </DropdownMenuItem>
                                  <DropdownMenuItem
                                    onClick={() => handleDelete(activity.id)}
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
                  <CardTitle>Create Activity</CardTitle>
                  <CardDescription>
                    Fill out the form to create a new activity.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form
                    className="grid gap-4"
                    onSubmit={handleCreateActivity}
                    encType="multipart/form-data"
                  >
                    <div className="grid gap-1">
                      <Label htmlFor="title">Title</Label>
                      <Input
                        id="title"
                        name="title"
                        value={newActivity.title}
                        onChange={handleInputChange}
                        placeholder="Enter activity title"
                        required
                      />
                    </div>
                    <div className="grid gap-1">
                      <Label htmlFor="desc">Description</Label>
                      <Textarea
                        id="desc"
                        name="desc"
                        value={newActivity.desc}
                        onChange={handleInputChange}
                        placeholder="Enter activity description"
                        rows={5}
                        required
                      />
                    </div>
                    <div className="grid gap-1">
                      <Label htmlFor="date">Date</Label>
                      <Input
                        id="date"
                        name="date"
                        type="datetime-local"
                        value={newActivity.date}
                        onChange={handleInputChange}
                        placeholder="Enter activity date"
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
                    <Button type="submit">Create Activity</Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="grid">
              <Card>
                <CardHeader>
                  <CardTitle>Activities</CardTitle>
                  <CardDescription>Manage your activities here.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {activities.map((activity) => (
                      <div
                        key={activity.id}
                        className="relative overflow-hidden rounded-lg group"
                      >
                        <img
                          src={activity.image || "/placeholder.svg"}
                          alt={activity.title}
                          width={400}
                          height={300}
                          className="object-cover w-full h-48"
                        />
                        <div className="p-4 bg-background">
                          <h3 className="text-lg font-semibold">
                            {activity.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {activity.desc}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {activity.date}
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
                  <CardTitle>Edit Activity</CardTitle>
                  <CardDescription>
                    Edit the form to update the activity.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form
                    className="grid gap-4"
                    onSubmit={handleUpdateActivity}
                    encType="multipart/form-data"
                  >
                    <div className="grid gap-1">
                      <Label htmlFor="title">Title</Label>
                      <Input
                        id="title"
                        name="title"
                        value={newActivity.title}
                        onChange={handleInputChange}
                        placeholder="Enter activity title"
                        required
                      />
                    </div>
                    <div className="grid gap-1">
                      <Label htmlFor="desc">Description</Label>
                      <Textarea
                        id="desc"
                        name="desc"
                        value={newActivity.desc}
                        onChange={handleInputChange}
                        placeholder="Enter activity description"
                        rows={5}
                        required
                      />
                    </div>
                    <div>
                      {newActivity.image && (
                        <div className="grid gap-1">
                          <Label>New Image</Label>
                          <img
                            src={URL.createObjectURL(newActivity.image)}
                            alt="New activity"
                            className="w-32 h-32 object-cover"
                          />
                        </div>
                      )}
                      {editActivityId && (
                        <div className="grid gap-1">
                          <Label>Current Image</Label>
                          <img
                            src={
                              activities.find(
                                (activity) => activity.id === editActivityId
                              )?.image
                            }
                            alt="Current activity"
                            className="w-32 h-32 object-cover"
                          />
                        </div>
                      )}
                    </div>
                    <div className="grid gap-1">
                      <Label htmlFor="date">Date</Label>
                      <Input
                        id="date"
                        name="date"
                        type="datetime-local"
                        value={newActivity.date}
                        onChange={handleInputChange}
                        placeholder="Enter activity date"
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
                    <Button type="submit">Update Activity</Button>
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
