export const AktivitasMobil = Array.from({ length: 50 }, (_, i) => ({
  kodeMobil: `JKT ${i}${i % 5}`,
  tanggal: `20/07/2025 22:24:05`,
  status: i % 2 === 0 ? "Active" : "Deactive",
}));