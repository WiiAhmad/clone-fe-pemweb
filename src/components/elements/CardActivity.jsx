import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Link } from "react-router-dom";

export default function CardActivity({ image, title, description }) {
  return (
    <Card>
      <CardHeader>
        <img
          src={image}
          width="550"
          height="310"
          alt="Project 1"
          className="mx-auto aspect-video overflow-hidden rounded-t-xl object-cover object-center"
        />
      </CardHeader>
      <CardContent className="space-y-2">
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          {description}
        </CardDescription>
        <div className="flex justify-end">
          <Link
            href="#"
            className="inline-flex h-8 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            View Project
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
