import CardReview from "../elements/CardReview";

export default function Review() {
  return (
    <div className="container px-4 md:px-6 py-6 md:py-12 lg:py-12">
      <div className="flex flex-col items-center justify-center text-center ">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Testimoni Produk kami
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Lihat apa yang mereka katakan.
          </p>
        </div>
      </div>
      <div className="mx-auto grid grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
        <CardReview
          image="/images/produk-1.jpg"
          title="Produk 1"
          description="Deskripsi Produk 1"
        />
      </div>
    </div>
  );
}
