import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";

export default function CardActivity({ image, title, description, date }) {
  return (
    <Card>
      <CardHeader>
        <ActivityImage image={image} altText={title} />
      </CardHeader>
      <CardContent className="space-y-2">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <CardDescription>{date}</CardDescription>
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
