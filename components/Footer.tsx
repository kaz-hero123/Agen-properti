import Link from "next/link";
import { getWhatsAppLink } from "@/lib/whatsapp";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const waLink = getWhatsAppLink("6281234567890", "Halo, saya ingin bertanya tentang ketersediaan kos.");

  return (
    <footer className="bg-nearblack text-sand pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 mb-12">
          
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-full bg-forest text-cream flex items-center justify-center font-heading font-bold text-lg">
                K
              </div>
              <span className="font-heading font-bold text-xl text-white tracking-tight">KawanKos</span>
            </Link>
            <p className="text-warmgray max-w-sm mb-6 leading-relaxed">
              Solusi hunian nyaman, aman, dan terjangkau di Jabodetabek. Kami memastikan setiap unit dikelola secara profesional layaknya rumah sendiri.
            </p>
          </div>

          <div>
            <h3 className="font-heading font-bold text-white text-lg mb-6">Tautan</h3>
            <ul className="space-y-4">
              <li><Link href="#kamar" className="text-warmgray hover:text-white transition-colors">Lihat Kamar</Link></li>
              <li><Link href="#testimoni" className="text-warmgray hover:text-white transition-colors">Testimoni Penghuni</Link></li>
              <li><Link href="#tentang" className="text-warmgray hover:text-white transition-colors">Tentang Kami</Link></li>
              <li><Link href="#kontak" className="text-warmgray hover:text-white transition-colors">Hubungi Kami</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold text-white text-lg mb-6">Kontak</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-forest mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-warmgray text-sm leading-relaxed">
                  Jl. Kemang Raya No. 42<br />Jakarta Selatan, 12730
                </span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-forest shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href={waLink} target="_blank" rel="noopener noreferrer" className="text-warmgray hover:text-white transition-colors text-sm">
                  +62 812-3456-7890
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-warmgray/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-warmgray text-sm text-center md:text-left">
            &copy; {currentYear} KawanKos. Hak cipta dilindungi.
          </p>
          <div className="text-warmgray text-sm text-center md:text-right">
            Dibuat untuk portofolio developer.
          </div>
        </div>
      </div>
    </footer>
  );
}
