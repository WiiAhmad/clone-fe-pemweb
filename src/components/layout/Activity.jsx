import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Link } from "react-router-dom";

export default function Activity() {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <section id="activity" className="w-full py-12">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Berita Terbaru
              </h2>
              <p className="max-w-3xl text-gray-600 text-lg leading-relaxed">
                Cek berita terbaru dan informasi terkini dari kami.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
            <Card>
              <CardHeader>
                <img
                  src="/placeholder.svg"
                  alt="Berita 1"
                  className="mx-auto rounded-t-xl object-cover object-center"
                />
              </CardHeader>
              <CardContent className="space-y-2">
                <CardTitle>Judul Berita 1</CardTitle>
                <CardDescription>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  vitae bibendum lacus. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Proin vitae bibendum lacus. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit. Proin vitae bibendum
                  lacus.
                </CardDescription>
                <div className="flex justify-end">
                  <p className="inline-flex items-center justify-center w-full h-10 rounded-md bg-primary text-sm text-white font-medium shadow">
                    January, 20, 2024 {/* Replace with your actual date */}
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <img
                  src="/placeholder.svg"
                  alt="Berita 2"
                  className="mx-auto rounded-t-xl object-cover object-center"
                />
              </CardHeader>
              <CardContent className="space-y-2">
                <CardTitle>Judul Berita 2</CardTitle>
                <CardDescription>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  vitae bibendum lacus. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Proin vitae bibendum lacus. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit. Proin vitae bibendum
                  lacus.
                </CardDescription>
                <div className="flex justify-end">
                  <p className="inline-flex items-center justify-center w-full h-10 rounded-md bg-primary text-sm text-white font-medium shadow">
                    January, 20, 2024 {/* Replace with your actual date */}
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <img
                  src="/placeholder.svg"
                  alt="Berita 3"
                  className="mx-auto rounded-t-xl object-cover object-center"
                />
              </CardHeader>
              <CardContent className="space-y-2">
                <CardTitle>Judul Berita 3</CardTitle>
                <CardDescription>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  vitae bibendum lacus. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Proin vitae bibendum lacus. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit. Proin vitae bibendum
                  lacus.
                </CardDescription>
                <div className="flex justify-end">
                  <p className="inline-flex items-center justify-center w-full h-10 rounded-md bg-primary text-sm text-white font-medium shadow">
                    January, 20, 2024 {/* Replace with your actual date */}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
