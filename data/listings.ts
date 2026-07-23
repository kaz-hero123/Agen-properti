export interface Listing {
  id: string;
  name: string;
  slug: string;
  location: string;
  address: string;
  pricePerMonth: number;
  roomType: "Standar" | "Eksklusif";
  gender: "Putra" | "Putri" | "Campur";
  available: boolean;
  amenities: string[];
  description: string;
  images: string[];
  whatsappNumber: string;
  whatsappMessage: string;
  highlight?: string;
}

const defaultAgentNumber = "6281234567890"; // Dummy number

export const listings: Listing[] = [
  {
    id: "kos-melati",
    name: "Kos Melati",
    slug: "kos-melati",
    location: "Depok",
    address: "Jl. Margonda Raya No. 45, Depok",
    pricePerMonth: 1500000,
    roomType: "Eksklusif",
    gender: "Putri",
    available: true,
    amenities: ["WiFi", "AC", "Kamar Mandi Dalam", "Parkir Motor", "Dapur Bersama"],
    description: "Kamar eksklusif yang tenang dan nyaman, cocok untuk mahasiswi yang butuh fokus belajar. Lokasi sangat strategis dekat jalan utama dan stasiun.",
    images: ["/images/room_3.png", "/images/room_1.png", "/images/bathroom.png", "/images/common_area.png"],
    whatsappNumber: defaultAgentNumber,
    whatsappMessage: "Halo, saya tertarik dengan kamar tipe Eksklusif di Kos Melati, Jl. Margonda. Apakah masih tersedia?",
    highlight: "Baru Renovasi"
  },
  {
    id: "kos-anggrek",
    name: "Kos Anggrek",
    slug: "kos-anggrek",
    location: "Depok",
    address: "Jl. Akses UI No. 12, Depok",
    pricePerMonth: 950000,
    roomType: "Standar",
    gender: "Campur",
    available: true,
    amenities: ["WiFi", "Kipas Angin", "Kamar Mandi Luar", "Parkir Motor"],
    description: "Pilihan hemat dengan fasilitas memadai. Lingkungan aman dengan penjagaan 24 jam dan dekat minimarket.",
    images: ["/images/room_4.png", "/images/common_area.png", "/images/bathroom.png"],
    whatsappNumber: defaultAgentNumber,
    whatsappMessage: "Halo, saya ingin tanya soal Kos Anggrek tipe Standar di Depok. Bisa kirim info fasilitas lengkapnya?"
  },
  {
    id: "kos-dahlia",
    name: "Kos Dahlia",
    slug: "kos-dahlia",
    location: "Jakarta Selatan",
    address: "Jl. Kemang Selatan Raya No. 8, Jakarta Selatan",
    pricePerMonth: 2200000,
    roomType: "Eksklusif",
    gender: "Putri",
    available: true,
    amenities: ["WiFi", "AC", "Kamar Mandi Dalam", "Water Heater", "Parkir Mobil", "Security"],
    description: "Hunian premium di tengah kota dengan fasilitas setara apartemen. Desain modern minimalis dengan sirkulasi udara sangat baik.",
    images: ["/images/room_3.png", "/images/room_2.png", "/images/bathroom.png", "/images/common_area.png"],
    whatsappNumber: defaultAgentNumber,
    whatsappMessage: "Halo, saya tertarik dengan Kos Dahlia di Kemang. Apakah bisa dijadwalkan untuk survei lokasi besok?",
    highlight: "Paling Diminati"
  },
  {
    id: "kos-flamboyan",
    name: "Kos Flamboyan",
    slug: "kos-flamboyan",
    location: "Jakarta Selatan",
    address: "Jl. Tebet Timur Dalam No. 15, Jakarta Selatan",
    pricePerMonth: 1800000,
    roomType: "Eksklusif",
    gender: "Putra",
    available: true,
    amenities: ["WiFi", "AC", "Kamar Mandi Dalam", "TV", "Dapur Bersama"],
    description: "Kos eksklusif khusus karyawan pria di area Tebet. Akses kuliner 24 jam dan sangat dekat dengan stasiun KRL.",
    images: ["/images/room_2.png", "/images/room_4.png", "/images/common_area.png", "/images/bathroom.png"],
    whatsappNumber: defaultAgentNumber,
    whatsappMessage: "Halo, untuk Kos Flamboyan di Tebet, apakah parkir mobilnya masih tersedia slot kosong?"
  },
  {
    id: "kos-kenanga",
    name: "Kos Kenanga",
    slug: "kos-kenanga",
    location: "Bekasi",
    address: "Jl. Pekayon Raya No. 42, Bekasi",
    pricePerMonth: 850000,
    roomType: "Standar",
    gender: "Campur",
    available: true,
    amenities: ["WiFi", "Kipas Angin", "Kamar Mandi Luar", "Ruang Cuci"],
    description: "Kos bersih, asri, dan terjangkau di pusat Bekasi. Suasana seperti di rumah sendiri dengan tetangga yang ramah.",
    images: ["/images/room_1.png", "/images/common_area.png", "/images/bathroom.png"],
    whatsappNumber: defaultAgentNumber,
    whatsappMessage: "Halo, saya berminat dengan Kos Kenanga tipe Standar di Bekasi. Apakah harga sudah termasuk listrik?"
  },
  {
    id: "kos-mawar",
    name: "Kos Mawar",
    slug: "kos-mawar",
    location: "Bekasi",
    address: "Jl. Jatiwaringin Raya No. 19, Bekasi",
    pricePerMonth: 1200000,
    roomType: "Standar",
    gender: "Putra",
    available: true,
    amenities: ["WiFi", "AC", "Kamar Mandi Luar", "Parkir Motor"],
    description: "Kamar AC dengan harga bersahabat. Lokasi persis di pinggir jalan raya, mudah akses kendaraan umum 24 jam.",
    images: ["/images/room_4.png", "/images/room_1.png", "/images/bathroom.png"],
    whatsappNumber: defaultAgentNumber,
    whatsappMessage: "Halo, saya mau cek ketersediaan Kos Mawar di Jatiwaringin untuk bulan depan. Bisa diinfo detailnya?"
  },
  {
    id: "kos-sakura",
    name: "Kos Sakura",
    slug: "kos-sakura",
    location: "Tangerang",
    address: "Jl. Gading Serpong Boulevard, Tangerang",
    pricePerMonth: 1700000,
    roomType: "Eksklusif",
    gender: "Campur",
    available: true,
    amenities: ["WiFi", "AC", "Kamar Mandi Dalam", "Smart TV", "Dapur Bersama", "Security"],
    description: "Kos bergaya industrial di area elite Gading Serpong. Dekat dengan berbagai universitas dan pusat perbelanjaan.",
    images: ["/images/room_3.png", "/images/common_area.png", "/images/bathroom.png"],
    whatsappNumber: defaultAgentNumber,
    whatsappMessage: "Halo, saya lihat Kos Sakura di Gading Serpong. Boleh minta video tour kamarnya sebelum saya datang survei?",
    highlight: "Sisa 1 Unit"
  },
  {
    id: "kos-teratai",
    name: "Kos Teratai",
    slug: "kos-teratai",
    location: "Tangerang",
    address: "Jl. BSD Raya Utama, Tangerang",
    pricePerMonth: 1000000,
    roomType: "Standar",
    gender: "Putri",
    available: false, // Intentionally set one to false for testing UI
    amenities: ["WiFi", "Kipas Angin", "Kamar Mandi Dalam", "Parkir Motor"],
    description: "Lingkungan sangat tenang dan aman untuk mahasiswi maupun karyawati. Akses mudah ke stasiun Rawa Buntu.",
    images: ["/images/room_1.png", "/images/room_4.png", "/images/bathroom.png"],
    whatsappNumber: defaultAgentNumber,
    whatsappMessage: "Halo, saya lihat Kos Teratai di BSD sedang penuh. Apakah saya bisa masuk waiting list?"
  }
];
