import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import api from "@/api"; // Import the api instance

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState(""); // State for success message
  const [errorMessage, setErrorMessage] = useState(""); // State for error message
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Reset error message
    setSuccessMessage(""); // Reset success message

    if (password.length < 8) {
      setErrorMessage("Password must be at least 8 characters long.");
      return;
    }

    try {
      await api.post("/register", {
        name,
        email,
        password,
      });
      setSuccessMessage("Registration successful!"); // Set success message
      setTimeout(() => {
        navigate("/signin"); // Navigate to /signin after 2 seconds
      }, 2000);
    } catch (error) {
      console.error("Error registering user:", error);
      if (error.response && error.response.status === 409) {
        setErrorMessage("Email is already registered."); // Set error message for duplicate email
      } else {
        setErrorMessage("Error registering user. Please try again."); // Set generic error message
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[85dvh] bg-background">
      <Card className="w-full max-w-md p-6 sm:p-8">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            Create an account
          </CardTitle>
          <CardDescription>
            Enter your details below to get started.
          </CardDescription>
          {errorMessage && (
            <div className="text-center text-sm text-red-600 mt-4">
              {errorMessage}
            </div>
          )}
          {successMessage && (
            <div className="text-center text-sm text-green-600 mt-4">
              {successMessage}
            </div>
          )}
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="John Doe"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="example@email.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                required
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full">
              Sign Up
            </Button>
          </CardFooter>
        </form>
        <div className="text-center text-sm text-muted-foreground">
          Have an account?{" "}
          <Link
            to="/signin"
            className="font-medium underline underline-offset-4"
            prefetch={false}
          >
            Sign In
          </Link>
        </div>
      </Card>
    </div>
  );
}