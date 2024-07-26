import { useEffect, useState } from "react";
import CardActivity from "../elements/CardActivity";
import { getAllActivities } from "../../api"; // Import the getAllActivities function

export default function Activity() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    // Fetch activities from API
    getAllActivities()
      .then((data) => setActivities(data))
      .catch((error) => console.error("Error fetching activities:", error));
  }, []);

  return (
    <div className="bg-muted">
      <div className="container flex">
        <section id="projects" className="w-full py-12 md:py-24 lg:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Aktivitas Terbaru Kami
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Berikut adalah beberapa aktivitas terbaru yang telah kami
                  selesaikan
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
              {activities.map((activity) => (
                <CardActivity
                  key={activity.id}
                  image={activity.image}
                  title={activity.title}
                  description={activity.desc}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
