import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card"
import {Link} from "react-router-dom";

export default function Activity() {
  return (
    <div className="container flex">
      <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Projects</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Check out some of the web applications I've built.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardHeader>
                  <img
                    src="/placeholder.svg"
                    width="550"
                    height="310"
                    alt="Project 1"
                    className="mx-auto aspect-video overflow-hidden rounded-t-xl object-cover object-center"
                  />
                </CardHeader>
                <CardContent className="space-y-2">
                  <CardTitle>Project 1</CardTitle>
                  <CardDescription>A web application that helps users manage their tasks and projects.</CardDescription>
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
              <Card>
                <CardHeader>
                  <img
                    src="/placeholder.svg"
                    width="550"
                    height="310"
                    alt="Project 2"
                    className="mx-auto aspect-video overflow-hidden rounded-t-xl object-cover object-center"
                  />
                </CardHeader>
                <CardContent className="space-y-2">
                  <CardTitle>Project 2</CardTitle>
                  <CardDescription>
                    A web application that helps users track their fitness goals and progress.
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
              <Card>
                <CardHeader>
                  <img
                    src="/placeholder.svg"
                    width="550"
                    height="310"
                    alt="Project 3"
                    className="mx-auto aspect-video overflow-hidden rounded-t-xl object-cover object-center"
                  />
                </CardHeader>
                <CardContent className="space-y-2">
                  <CardTitle>Project 3</CardTitle>
                  <CardDescription>A web application that helps users manage their personal finances.</CardDescription>
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
            </div>
          </div>
        </section>
    </div>
  );
}