"use client";

import { useState } from "react";
import { listings } from "@/data/listings";

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Note: Using a public access key for Web3Forms (standard demo approach)
  // In a real app, this might come from env vars
  const WEB3FORMS_KEY = "YOUR_ACCESS_KEY_HERE"; // Placeholder

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call for the portfolio project since we don't have a real key
    // Normally you'd fetch to https://api.web3forms.com/submit
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      (e.target as HTMLFormElement).reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="kontak" className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -mr-48 -mt-48 w-[600px] h-[600px] bg-sand rounded-full opacity-50 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-nearblack mb-6 leading-tight">
              Punya pertanyaan atau ingin jadwalkan survei?
            </h2>
            <p className="text-warmgray text-lg mb-8 leading-relaxed">
              Tinggalkan pesan Anda melalui formulir ini. Tim kami akan menghubungi Anda kembali melalui WhatsApp dalam waktu kurang dari 30 menit pada jam kerja.
            </p>
            
            <div className="bg-sand p-6 rounded-2xl flex items-start gap-4 mb-8">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-forest">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold font-heading text-nearblack mb-1">Jam Operasional Survei</h4>
                <p className="text-warmgray text-sm">Setiap Hari: 09:00 - 17:00 WIB<br/>(Mohon buat janji H-1 sebelum survei)</p>
              </div>
            </div>
          </div>

          <div className="bg-cream p-8 md:p-10 rounded-3xl shadow-sm border border-warmborder">
            <h3 className="text-2xl font-heading font-bold text-nearblack mb-6">Kirim Pesan</h3>
            
            {isSuccess ? (
              <div className="bg-sage/20 border border-sage text-forest p-6 rounded-xl text-center">
                <svg className="w-12 h-12 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h4 className="font-bold text-lg mb-2">Pesan Terkirim!</h4>
                <p>Terima kasih. Tim kami akan segera menghubungi Anda melalui WhatsApp.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <input type="hidden" name="access_key" value={WEB3FORMS_KEY} />
                <input type="hidden" name="subject" value="Pertanyaan Kos Baru dari Landing Page" />
                <input type="hidden" name="from_name" value="KawanKos Website" />
                
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-nearblack mb-2">Nama Lengkap</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    className="w-full px-4 py-3 rounded-xl border border-warmborder bg-white focus:outline-none focus:ring-2 focus:ring-forest/50 focus:border-forest transition-colors"
                    placeholder="Budi Santoso"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-nearblack mb-2">Nomor WhatsApp</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    required 
                    className="w-full px-4 py-3 rounded-xl border border-warmborder bg-white focus:outline-none focus:ring-2 focus:ring-forest/50 focus:border-forest transition-colors"
                    placeholder="0812xxxxxxx"
                  />
                </div>
                
                <div>
                  <label htmlFor="interest" className="block text-sm font-bold text-nearblack mb-2">Kos yang Diminati (Opsional)</label>
                  <select 
                    id="interest" 
                    name="interest" 
                    className="w-full px-4 py-3 rounded-xl border border-warmborder bg-white focus:outline-none focus:ring-2 focus:ring-forest/50 focus:border-forest transition-colors appearance-none"
                  >
                    <option value="">Belum menentukan / Ingin tanya-tanya</option>
                    {listings.map(l => (
                      <option key={l.id} value={l.name}>{l.name} - {l.location}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-nearblack mb-2">Pesan Anda</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={4} 
                    required 
                    className="w-full px-4 py-3 rounded-xl border border-warmborder bg-white focus:outline-none focus:ring-2 focus:ring-forest/50 focus:border-forest transition-colors resize-none"
                    placeholder="Saya ingin bertanya tentang..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl font-bold text-base bg-forest text-white hover:bg-sage transition-colors shadow-sm disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Mengirim...
                    </>
                  ) : (
                    "Kirim Pesan"
                  )}
                </button>
              </form>
            )}
          </div>
          
        </div>
      </div>
    </section>
  );
}
