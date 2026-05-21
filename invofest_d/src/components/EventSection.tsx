interface EventSectionProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

export default function EventSection({
  title,
  subtitle,
  description,
  image,
}: EventSectionProps) {
  return (
    <section className="grid md:grid-cols-2 items-center gap-10 min-h-[80vh]">
      
      
      <div>
        <h1 className="text-6xl font-bold text-[#852e4e] mb-4">
          {title}
        </h1>

        <h2 className="text-3xl font-semibold text-slate-700 mb-6">
          {subtitle}
        </h2>

        <p className="text-slate-600 leading-9 text-xl">
          {description}
        </p>

        <div className="flex gap-4 mt-8">
          <button className="bg-[#852e4e] text-white px-6 py-3 rounded-xl">
            Daftar Sekarang
          </button>

          <button className="border border-[#852e4e] text-[#852e4e] px-6 py-3 rounded-xl">
            Hubungi Panitia
          </button>
        </div>
      </div>

      
      
      <div className="flex justify-center">
        <img
          src={image}
          alt={title}
          className="w-[500px]"
        />
      </div>
    </section>
  );
}