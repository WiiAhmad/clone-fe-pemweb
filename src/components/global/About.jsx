export default function About() {
  return (
    <div className="flex flex-col min-h-[50dvh] bg-muted">
      <main className="flex-1 ">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-8 px-4 md:px-6">
            <div className="space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                PT. PUTRA SINAR MAS
              </h1>
              <p className="mx-auto max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                PT. PUTRA SINAR MAS adalah perusahaan yang bergerak di sektor
                industri dan perdagangan pertanian. Kami hadir sebagai wujud
                komitmen untuk mendukung program peningkatan produktivitas
                pertanian, guna membangun masa depan pertanian yang sejahtera
                dengan menyediakan produk berkualitas tinggi dan optimal. Dengan
                pengalaman yang luas dan dedikasi yang kuat, kami berupaya untuk
                selalu inovatif dalam menciptakan solusi yang dapat meningkatkan
                efisiensi dan hasil pertanian. Selain itu, kami juga menjalin
                kerjasama yang erat dengan para petani dan mitra bisnis untuk
                memastikan keberlanjutan dan kesejahteraan bersama.
              </p>
            </div>
          </div>
        </section>
        
      </main>
    </div>
  );
}
