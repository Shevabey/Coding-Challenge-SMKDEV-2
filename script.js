function timeToEat(waktuSaatIni) {
  // Parse waktu saat ini dalam format jam:menit
  const waktuSaatIniArr = waktuSaatIni.split(":");
  const jamSaatIni = parseInt(waktuSaatIniArr[0]);
  const menitSaatIni = parseInt(waktuSaatIniArr[1]);

  // Waktu makan Jake
  const waktuSarapan = [7, 0]; // Sarapan pada pukul 07:00
  const waktuSiang = [12, 0]; // Makan siang pada pukul 12:00
  const waktuMalam = [19, 0]; // Makan malam pada pukul 19:00

  // Fungsi untuk menghitung durasi waktu
  function hitungDurasi(waktuMakanan) {
    const jamMakanan = waktuMakanan[0];
    const menitMakanan = waktuMakanan[1];

    let jamDurasi = jamMakanan - jamSaatIni;
    let menitDurasi = menitMakanan - menitSaatIni;

    if (menitDurasi < 0) {
      jamDurasi -= 1;
      menitDurasi += 60;
    }

    if (jamDurasi < 0) {
      jamDurasi += 24;
    }

    return [jamDurasi, menitDurasi];
  }

  // Tentukan waktu makan berikutnya dan hitung durasinya
  let waktuMakanBerikutnya;
  let jenisMakanan;
  if (
    jamSaatIni < waktuSarapan[0] ||
    (jamSaatIni === waktuSarapan[0] && menitSaatIni < waktuSarapan[1])
  ) {
    waktuMakanBerikutnya = waktuSarapan;
    jenisMakanan = "sarapan";
  } else if (
    jamSaatIni < waktuSiang[0] ||
    (jamSaatIni === waktuSiang[0] && menitSaatIni < waktuSiang[1])
  ) {
    waktuMakanBerikutnya = waktuSiang;
    jenisMakanan = "makan siang";
  } else {
    waktuMakanBerikutnya = waktuMalam;
    jenisMakanan = "makan malam";
  }

  const durasi = hitungDurasi(waktuMakanBerikutnya);

  return [durasi, jenisMakanan];
}

// Contoh penggunaan
const hasil1 = timeToEat("5:23");
const hasil2 = timeToEat("9:47 am");
const hasil3 = timeToEat("18:22 am");

console.log(
  `Waktu hingga ${hasil1[1]}: ${hasil1[0][0]} jam ${hasil1[0][1]} menit`
);
console.log(
  `Waktu hingga ${hasil2[1]} berikutnya: ${hasil2[0][0]} jam ${hasil2[0][1]} menit`
);
console.log(
  `Waktu hingga ${hasil3[1]} berikutnya: ${hasil3[0][0]} jam ${hasil3[0][1]} menit`
);
