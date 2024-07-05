import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function CardReview() {
  return (
    <Card className="w-full max-w-md">
      <div className="grid grid-cols-[1fr_2fr] p-3">
        <img
          src="/placeholder.svg"
          alt="Product Image"
          width={150}
          height={150}
          className="rounded-md object-cover"
        />
        <div className="grid gap-2">
          <div className="flex items-center">
            <h3 className="text-lg font-semibold">Ergonomic Desk Chair</h3>
          </div>
          <div className="flex items-center">
            <StarIcon className="w-5 h-5 fill-primary" />
            <StarIcon className="w-5 h-5 fill-primary" />
            <StarIcon className="w-5 h-5 fill-primary" />
            <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
            <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
            <span className="text-sm text-muted-foreground">(4.2)</span>
          </div>
          <p className="text-sm text-muted-foreground">
            This ergonomic desk chair provides excellent lumbar support and
            adjustable features for all-day comfort.
          </p>
          {/* <Button variant="link">
            <ArrowRightIcon className="w-4 h-4 mr-2" />
            Read full review
          </Button> */}
        </div>
      </div>
    </Card>
  );
}

function ArrowRightIcon(props) {
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
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
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
