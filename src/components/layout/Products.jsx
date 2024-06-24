import { Link } from "react-router-dom";

export default function Products() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid gap-6 px-4 md:gap-8 md:px-6">
        <div className="space-y-3 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Produk Terbaru Kami
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Discover our stunning collection of photos showcasing the beauty of
            the world.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
          <div className="relative group grid [grid-template-areas:stack] overflow-hidden rounded-lg">
            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View</span>
            </Link>
            <img
              src="/placeholder.svg"
              alt="Photo"
              width={300}
              height={300}
              className="[grid-area:stack] object-cover w-full aspect-square group-hover:opacity-50 transition-opacity"
            />
            <div className="flex-1 [grid-area:stack] bg-black/70 group-hover:opacity-90 transition-opacity text-white p-6 justify-end flex flex-col gap-2">
              <h3 className="font-semibold text-lg tracking-tight">
                Serene Landscape
              </h3>
              <p className="text-sm leading-relaxed">
                A breathtaking view of a peaceful countryside.
              </p>
            </div>
          </div>
          <div className="relative group grid [grid-template-areas:stack] overflow-hidden rounded-lg">
            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View</span>
            </Link>
            <img
              src="/placeholder.svg"
              alt="Photo"
              width={300}
              height={300}
              className="[grid-area:stack] object-cover w-full aspect-square group-hover:opacity-50 transition-opacity"
            />
            <div className="flex-1 [grid-area:stack] bg-black/70 group-hover:opacity-90 transition-opacity text-white p-6 justify-end flex flex-col gap-2">
              <h3 className="font-semibold text-lg tracking-tight">
                Urban Skyline
              </h3>
              <p className="text-sm leading-relaxed">
                A stunning view of a bustling city skyline.
              </p>
            </div>
          </div>
          <div className="relative group grid [grid-template-areas:stack] overflow-hidden rounded-lg">
            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View</span>
            </Link>
            <img
              src="/placeholder.svg"
              alt="Photo"
              width={300}
              height={300}
              className="[grid-area:stack] object-cover w-full aspect-square group-hover:opacity-50 transition-opacity"
            />
            <div className="flex-1 [grid-area:stack] bg-black/70 group-hover:opacity-90 transition-opacity text-white p-6 justify-end flex flex-col gap-2">
              <h3 className="font-semibold text-lg tracking-tight">
                Coastal Retreat
              </h3>
              <p className="text-sm leading-relaxed">
                A peaceful escape by the serene ocean.
              </p>
            </div>
          </div>
          <div className="relative group grid [grid-template-areas:stack] overflow-hidden rounded-lg">
            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View</span>
            </Link>
            <img
              src="/placeholder.svg"
              alt="Photo"
              width={300}
              height={300}
              className="[grid-area:stack] object-cover w-full aspect-square group-hover:opacity-50 transition-opacity"
            />
            <div className="flex-1 [grid-area:stack] bg-black/70 group-hover:opacity-90 transition-opacity text-white p-6 justify-end flex flex-col gap-2">
              <h3 className="font-semibold text-lg tracking-tight">
                Mountain Retreat
              </h3>
              <p className="text-sm leading-relaxed">
                A breathtaking view of majestic mountains.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
