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

export default function SignIn() {
  return (
    <div className="flex items-center justify-center min-h-[85dvh] bg-background">
      <Card className="w-full max-w-md p-6 sm:p-8">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Sign In</CardTitle>
          <CardDescription>
            Enter your email and password to access your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="example@email.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              required
              placeholder="********"
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full">
            Sign In
          </Button>
        </CardFooter>
        <div className="text-center text-sm text-muted-foreground">
          Have an account?{" "}
          <Link
            to="/signup"
            className="font-medium underline underline-offset-4"
            prefetch={false}
          >
            Sign Up
          </Link>
        </div>
      </Card>
    </div>
  );
}
