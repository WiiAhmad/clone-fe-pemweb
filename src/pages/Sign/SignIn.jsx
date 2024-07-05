
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function SignIn() {
  return (
    <div className="mx-auto flex max-w-[400px] flex-col items-center justify-center space-y-6 px-4 py-12 sm:px-6 lg:px-8">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Sign In</h1>
        <p className="text-muted-foreground">
          Enter your email and password to access your account.
        </p>
      </div>
      <div className="w-full space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" required />
        </div>
        <Button type="submit" className="w-full">
          Sign In
        </Button>
      </div>
      <div className="text-center text-sm text-muted-foreground">
        Don't have an account?{" "}
        <Link
          to="/signup"
          className="font-medium underline underline-offset-4"
          prefetch={false}
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
}
