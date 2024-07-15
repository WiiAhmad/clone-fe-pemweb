import { Link } from "react-router-dom";

export default function Activities() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid gap-8 px-4 md:px-6 lg:grid-cols-2 xl:max-w-6xl">
        <div className="grid gap-4 md:gap-6">
          <div className="grid gap-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Explore Our Activities
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Discover a wide range of activities to enjoy during your stay.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
            <div className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 ease-in-out">
              <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                <span className="sr-only">View Activity</span>
              </Link>
              <img
                src="/placeholder.svg"
                alt="Activity Image"
                width={600}
                height={400}
                className="object-cover w-full h-64"
              />
              <div className="p-4 bg-background">
                <h3 className="text-xl font-bold">Hiking Trail</h3>
                <p className="text-sm text-muted-foreground">
                  Explore the beautiful mountain trails.
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 ease-in-out">
              <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                <span className="sr-only">View Activity</span>
              </Link>
              <img
                src="/placeholder.svg"
                alt="Activity Image"
                width={600}
                height={400}
                className="object-cover w-full h-64"
              />
              <div className="p-4 bg-background">
                <h3 className="text-xl font-bold">Kayaking Tour</h3>
                <p className="text-sm text-muted-foreground">
                  Paddle through the serene lake.
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 ease-in-out">
              <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                <span className="sr-only">View Activity</span>
              </Link>
              <img
                src="/placeholder.svg"
                alt="Activity Image"
                width={600}
                height={400}
                className="object-cover w-full h-64"
              />
              <div className="p-4 bg-background">
                <h3 className="text-xl font-bold">Cooking Class</h3>
                <p className="text-sm text-muted-foreground">
                  Learn to prepare local cuisine.
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 ease-in-out">
              <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                <span className="sr-only">View Activity</span>
              </Link>
              <img
                src="/placeholder.svg"
                alt="Activity Image"
                width={600}
                height={400}
                className="object-cover w-full h-64"
              />
              <div className="p-4 bg-background">
                <h3 className="text-xl font-bold">Wine Tasting</h3>
                <p className="text-sm text-muted-foreground">
                  Savor the local wines and flavors.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-4 md:gap-6">
          <div className="grid gap-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Upcoming Events
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Check out our upcoming events and plan your visit.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
            <div className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 ease-in-out">
              <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                <span className="sr-only">View Event</span>
              </Link>
              <img
                src="/placeholder.svg"
                alt="Event Image"
                width={600}
                height={400}
                className="object-cover w-full h-64"
              />
              <div className="p-4 bg-background">
                <h3 className="text-xl font-bold">Summer Music Festival</h3>
                <p className="text-sm text-muted-foreground">
                  Enjoy live music and local food.
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 ease-in-out">
              <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                <span className="sr-only">View Event</span>
              </Link>
              <img
                src="/placeholder.svg"
                alt="Event Image"
                width={600}
                height={400}
                className="object-cover w-full h-64"
              />
              <div className="p-4 bg-background">
                <h3 className="text-xl font-bold">Artisan Market</h3>
                <p className="text-sm text-muted-foreground">
                  Browse handcrafted goods and local art.
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 ease-in-out">
              <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                <span className="sr-only">View Event</span>
              </Link>
              <img
                src="/placeholder.svg"
                alt="Event Image"
                width={600}
                height={400}
                className="object-cover w-full h-64"
              />
              <div className="p-4 bg-background">
                <h3 className="text-xl font-bold">Outdoor Movie Night</h3>
                <p className="text-sm text-muted-foreground">
                  Enjoy a movie under the stars.
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 ease-in-out">
              <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                <span className="sr-only">View Event</span>
              </Link>
              <img
                src="/placeholder.svg"
                alt="Event Image"
                width={600}
                height={400}
                className="object-cover w-full h-64"
              />
              <div className="p-4 bg-background">
                <h3 className="text-xl font-bold">Wellness Retreat</h3>
                <p className="text-sm text-muted-foreground">
                  Rejuvenate your mind and body.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
