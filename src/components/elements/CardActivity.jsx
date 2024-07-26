import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { Link } from "react-router-dom";

export default function CardActivity({ image, title, description, date }) {
  return (
    <Card>
      <CardHeader>
        <ActivityImage image={image} altText={title} />
      </CardHeader>
      <CardContent className="space-y-2">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <div className="flex">
          <p className="inline-flex justify-end w-full h-10 text-sm font-medium">
            {date}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

function ActivityImage({ image, altText }) {
  return (
    <img
      src={image}
      width="550"
      height="310"
      alt={altText}
      className="mx-auto aspect-video overflow-hidden rounded-t-xl object-cover object-center"
    />
  );
}
