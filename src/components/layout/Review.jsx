import { useEffect, useState } from "react";
import CardReview from "../elements/CardReview";
import { getAllTestimonies } from "../../api"; // Import the getAllTestimonies function

export default function Review() {
  const [testimonies, setTestimonies] = useState([]);

  useEffect(() => {
    // Fetch testimonies from API
    getAllTestimonies()
      .then((data) => setTestimonies(data))
      .catch((error) => console.error("Error fetching testimonies:", error));
  }, []);

  return (
    <div className="container px-4 md:px-6 py-6 md:py-12 lg:py-12">
      <div className="flex flex-col items-center justify-center text-center ">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Testimoni Produk kami
          </h2>
        </div>
      </div>
      <div className="mx-auto grid grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
        {testimonies.map((testimoni) => (
          <CardReview
            key={testimoni.id}
            image={testimoni.image}
            title={testimoni.rating}
            description={testimoni.testimoni}
          />
        ))}
      </div>
    </div>
  );
}
