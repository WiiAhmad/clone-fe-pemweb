import { Link } from "react-router-dom";

export default function Activities() {
  // Sample data for activities
  const activities = [
    {
      id: 1,
      title: "Hiking Trail",
      desc: "Explore the beautiful mountain trails.",
      category: "Hiking",
      image: "/images/hiking-trail.jpg",
      date: "July 25, 2024", // Example date
    },
    {
      id: 2,
      title: "Camping",
      desc: "Get out and enjoy the campgrounds.",
      category: "Camping",
      image: "/images/camping.jpg",
      date: "August 15, 2024", // Example date
    },
    {
      id: 3,
      title: "Fishing",
      desc: "Catch some amazing fish.",
      category: "Fishing",
      image: "/images/fishing.jpg",
      date: "September 5, 2024", // Example date
    },
    {
      id: 4,
      title: "Hiking Trail",
      desc: "Explore the beautiful mountain trails.",
      category: "Hiking",
      image: "/images/hiking-trail.jpg",
      date: "July 25, 2024", // Example date
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">
          Aktivitas Terbaru Kami
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {activities.map((activity, id) => (
            <div
              key={id}
              className="flex flex-col rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 ease-in-out"
            >
              <img
                src={activity.image}
                alt={activity.title}
                className="object-cover w-full h-64"
              />
              <div className="flex flex-col justify-between bg-white rounded-b-lg p-4">
                <div>
                  <h3 className="text-xl font-bold mb-2">{activity.title}</h3>
                  <p className="text-sm text-gray-600">{activity.category}</p>
                  <br></br>
                  <p className="text-sm text-gray-600">{activity.desc}</p>
                </div>
                <div className="mt-4 text-sm text-gray-500 text-right">
                  <p>{activity.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
