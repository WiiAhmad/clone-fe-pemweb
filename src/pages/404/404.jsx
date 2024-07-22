import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md text-center">
        <h1 className="text-9xl font-bold tracking-tighter text-primary">
          404
        </h1>
        <p className="mt-4 text-xl text-muted-foreground">
          Oops, the page you're looking for could not be found.
        </p>
        <div className="mt-6">
          <Button asChild>
            <Link to="/home">Go to HomePage</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
