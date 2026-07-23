import Image from "next/image";

export default function TestimonialSection() {
  return (
    <section id="testimoni" className="py-20 md:py-28 bg-sand">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-nearblack mb-4">
            Pengalaman Penghuni
          </h2>
          <p className="text-warmgray text-lg">
            Kepercayaan penghuni adalah bukti terbaik dari kualitas layanan kami.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 max-w-5xl mx-auto">
          
          {/* Hero Testimonial (Large Card) - 8 columns wide on desktop */}
          <div className="md:col-span-8 bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-warmborder relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-8 right-8 text-forest/10">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
              </svg>
            </div>
            
            <p className="text-xl md:text-2xl text-nearblack font-heading leading-relaxed mb-8 relative z-10 font-medium">
              "Awalnya saya cuma cari kos yang dekat kampus, tapi akhirnya betah sampai 3 tahun karena ibu kosnya responsif dan fasilitasnya terawat. Kalau AC rusak, besoknya sudah langsung diperbaiki."
            </p>
            
            <div className="flex items-center gap-4 mt-auto">
              <div className="relative w-14 h-14 rounded-full overflow-hidden bg-cream shrink-0">
                <Image 
                  src="/images/hero_testimonial.png" 
                  alt="Rina Safitri" 
                  fill
                  className="object-cover"
                  sizes="56px"
                />
              </div>
              <div>
                <h4 className="font-bold text-nearblack font-heading">Rina Safitri</h4>
                <p className="text-sm text-warmgray">Penghuni Kos Melati sejak 2022</p>
              </div>
            </div>
          </div>

          <div className="md:col-span-4 flex flex-col gap-6 lg:gap-8">
            
            {/* Small Card */}
            <div className="bg-forest text-cream rounded-3xl p-8 shadow-sm flex-1 flex flex-col justify-between">
              <p className="text-lg leading-relaxed mb-6 font-medium">
                "Parkir motor sangat aman, dan WiFi kencang buat WFH. Itu dua hal yang bikin saya nggak mau pindah ke tempat lain."
              </p>
              <div>
                <h4 className="font-bold font-heading text-white">Dimas Prasetyo</h4>
                <p className="text-sm text-cream/70 mt-1">Kos Flamboyan, Karyawan</p>
              </div>
            </div>

            {/* Inline Quote / Accent Box */}
            <div className="bg-transparent border-2 border-forest/20 border-dashed rounded-3xl p-8 flex-1 flex flex-col justify-center text-center">
              <p className="italic text-nearblack mb-4 font-heading font-medium">
                "Lokasinya cuma 5 menit jalan kaki dari stasiun. Pengelolanya juga super ramah."
              </p>
              <p className="text-sm font-bold text-forest uppercase tracking-wider">— Ayu Lestari, Kos Sakura</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
