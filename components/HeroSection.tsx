import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="pt-28 md:pt-36 pb-16 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        
        {/* Text Content */}
        <div className="flex-1 max-w-2xl lg:max-w-none text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-nearblack leading-tight mb-6">
            Tempat tinggal yang terasa seperti <span className="text-forest">pulang ke rumah.</span>
          </h1>
          <p className="text-lg md:text-xl text-warmgray mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
            Kami mengelola 8 unit kos eksklusif dan standar di Jabodetabek dengan standar kenyamanan, privasi, dan keamanan yang konsisten.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <Link 
              href="#kamar" 
              className="w-full sm:w-auto bg-forest hover:bg-sage text-white px-8 py-4 rounded-xl font-medium text-lg transition-colors shadow-sm flex items-center justify-center gap-2"
            >
              Lihat Kamar Tersedia
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex-1 w-full relative">
          <div className="relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5] max-h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl">
            <Image 
              src="/images/hero_room.png" 
              alt="Interior kamar kos modern dan nyaman" 
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Overlay Gradient for premium feel */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
          
          {/* Decorative element */}
          <div className="absolute -bottom-6 -left-6 md:-bottom-8 md:-left-8 w-48 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4">
            <div className="w-12 h-12 bg-cream rounded-full flex items-center justify-center text-amber shrink-0">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <p className="text-sm font-bold text-nearblack font-heading leading-tight">Keamanan 24 Jam</p>
              <p className="text-xs text-warmgray mt-1">Di semua lokasi</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
