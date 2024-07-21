import { Link } from "react-router-dom";

export default function Activities() {
  // Sample data for activities
  const activities = [
    {
      title: "Hiking Trail",
      description: "Explore the beautiful mountain trails.",
      image: "/images/hiking-trail.jpg",
      link: "/activities/hiking",
      date: "July 25, 2024", // Example date
    },
    {
      title: "Kayaking Tour",
      description: "Paddle through the serene lake.",
      image: "/images/kayaking-tour.jpg",
      link: "/activities/kayaking",
      date: "August 2, 2024", // Example date
    },
    {
      title: "Cooking Class",
      description: "Learn to prepare local cuisine.",
      image: "/images/cooking-class.jpg",
      link: "/activities/cooking",
      date: "September 10, 2024", // Example date
    },
    {
      title: "Wine Tasting",
      description: "Savor the local wines and flavors.",
      image: "/images/wine-tasting.jpg",
      link: "/activities/wine-tasting",
      date: "October 5, 2024", // Example date
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">
          Aktivitas Terbaru Kami
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="flex flex-col rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 ease-in-out"
            >
              <Link to={activity.link} className="overflow-hidden rounded-t-lg">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="object-cover w-full h-64"
                />
              </Link>
              <div className="flex flex-col justify-between bg-white rounded-b-lg p-4">
                <div>
                  <h3 className="text-xl font-bold mb-2">{activity.title}</h3>
                  <p className="text-sm text-gray-600">
                    {activity.description}
                  </p>
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
