import semuaLogo from "../assets/MenuShell/semuaLogo.png";
import berjalanLogo from "../assets/MenuShell/berjalanLogo.png";
import siapLogo from "../assets/MenuShell/siapLogo.png";
import selesaiLogo from "../assets/MenuShell/selesaiLogo.png";
import berhentiLogo from "../assets/MenuShell/berhentiLogo.png";
import infoLogo from "../assets/MenuShell/infoLogo.png";

export const MenuProps = [
  { logo: semuaLogo, alt: "Semua Mobil", text: "Semua", modalKey: "semua" },
  { logo: berjalanLogo, alt: "Semua Mobil Berjalan", text: "Berjalan", modalKey: "berjalan" },
  { logo: siapLogo, alt: "Semua Mobil Siap Pakai", text: "Siap", modalKey: "siap" },
  { logo: selesaiLogo, alt: "Semua Mobil Selesai Tugas", text: "Selesai", modalKey: "selesai" },
  { logo: berhentiLogo, alt: "Mobil Berhenti di luar DC", text: "Berhenti Luar DC", modalKey: "berhenti" },
  { logo: infoLogo, alt: "Info Lainnya", text: "Lainnya", modalKey: "lainnya" },
];

export const MenuDetails = [
  { title: "SEMUA MOBIL", content: "Semua", modalValue: "semua" },
  { title: "SEMUA MOBIL BERJALAN", content: "Berjalan", modalValue: "berjalan" },
  { title: "SEMUA MOBIL SIAP PAKAI", content: "Siap", modalValue: "siap" },
  { title: "SEMUA MOBIL SELESAI TUGAS", content: "Selesai", modalValue: "selesai" },
  { title: "MOBIL BERHENTI DI LUAR DC", content: "Berhenti Luar DC", modalValue: "berhenti" },
  { title: "INFO LAINNYA", content: "Lainnya", modalValue: "lainnya" },
];

export const ListKodeDC = ["G001 - JAKARTA", "G009 - MEDAN", "G026 - TANGERANG", "G001 - JAKARTA", "G001 - JAKARTA", "G001 - JAKARTA", "G001 - JAKARTA", "G001 - JAKARTA"];

export const ChartData = [
  { id: 1, label: "Aktif", value: 40, color: "#0088FE" },
  { id: 2, label: "Mati", value: 4, color: "#00C49F" },
];

export const MainTabelData = Array.from({ length: 50 }, (_, i) => ({
  kodeMobil: `JKT9${i % 5}`,
  noPolisi: `B 95${i} JZM`,
  supir: i % 2 === 0 ? "Muh Arlen" : "Ahmad Calvin",
}));

export const SemuaTableData = Array.from({ length: 50 }, (_, i) => ({
  kodeMobil: `JKT9${i % 5}`,
  noPolisi: `B 95${i} JZM`,
  supir: i % 2 === 0 ? "Muh Arlen" : "Ahmad Calvin",
  noSj: `111222${i % 5}`,
  updateTerakhir: `1${i % 5}/0${i % 5}/2025 1${i % 5}:4${i % 5}:1${i % 5}`,
  spd: `0${i % 5}/0${i % 5}/2025`,
  sin: "0",
  vol: `${i % 5}${i % 5}`,
  sat: "0",
  slp: `${i % 5}`,
}));
