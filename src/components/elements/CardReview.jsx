import { Card } from "@/components/ui/card";
import { useState } from "react";

export default function CardReview() {
  const [reviews] = useState([
    {
      id: 1,
      productName: "Ergonomic Desk Chair",
      imageUrl: "/placeholder.svg",
      rating: 4.2,
      reviewText:
        "This ergonomic desk chair provides excellent lumbar support and adjustable features for all-day comfort. It's perfect for long hours of work.",
      reviewerName: "John Doe",
      reviewerAvatar: "/avatar1.jpg",
      date: "July 15, 2024",
    },
    {
      id: 2,
      productName: "Ergonomic Desk Chair",
      imageUrl: "/placeholder.svg",
      rating: 4.2,
      reviewText:
        "This ergonomic desk chair provides excellent lumbar support and adjustable features for all-day comfort. It's perfect for long hours of work.",
      reviewerName: "John Doe",
      reviewerAvatar: "/avatar1.jpg",
      date: "July 15, 2024",
    },
    // Add more reviews as needed
  ]);

  return (
    <div className="grid grid-cols-[1fr_2fr] gap-8 md:gap-12 mt-12 md:mt-16">
      {reviews.map((review) => (
        <Card key={review.id} className="max-w-md mb-8 mx-auto p-6 md:p-8">
          <div className="flex items-center space-x-3">
            <img
              src={review.imageUrl}
              alt={review.productName}
              width={150}
              height={150}
              className="rounded-md object-cover"
            />
            <div className="flex flex-col flex-1">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">{review.productName}</h3>
                <div className="flex items-center gap-1">
                  {Array.from(Array(Math.floor(review.rating)), (_, index) => (
                    <StarIcon key={index} className="w-6 h-6 fill-primary" />
                  ))}
                  {review.rating % 1 !== 0 && (
                    <StarHalfIcon className="w-6 h-6 fill-primary" />
                  )}
                  <span className="text-base text-muted-foreground">
                    ({review.rating})
                  </span>
                </div>
              </div>
              <p className="text-base text-muted-foreground mt-4 md:mt-6">
                {review.reviewText}
              </p>
              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center space-x-2">
                  <img
                    src={review.reviewerAvatar}
                    alt={review.reviewerName}
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="text-base text-gray-600">
                    {review.reviewerName}
                  </span>
                </div>
                <span className="text-base text-gray-600">{review.date}</span>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}

function StarIcon(props) {
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
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function StarHalfIcon(props) {
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
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      <line x1="12" y1="6" x2="12" y2="18" />
    </svg>
  );
}
