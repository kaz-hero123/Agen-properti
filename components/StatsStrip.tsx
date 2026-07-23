export default function StatsStrip() {
  const stats = [
    { label: "Unit Dikelola", value: "8" },
    { label: "Lokasi Premium", value: "4" },
    { label: "Penghuni Aktif", value: "15+" },
    { label: "Tahun Beroperasi", value: "4+" },
  ];

  return (
    <section className="bg-forest text-cream py-10 md:py-14">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-sage/50 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center justify-center px-4">
              <span className="text-4xl md:text-5xl font-heading font-bold text-white mb-2">
                {stat.value}
              </span>
              <span className="text-sm md:text-base text-cream/80 font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
