import { Card } from "@/components/ui/card";
import { useState } from "react";

export default function CardReview({ title, description, image }) {
  return (
    <Card className="w-full max-w-md">
      <div className="flex flex-col items-center p-3">
        <img
          src={image}
          alt={title} // Use title as alt text for better accessibility
          width={400}
          height={220}
          className="rounded-md object-cover mb-2"
        />
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground">
            {description}
          </p>
        </div>
      </div>
    </Card>
  );
}