const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
  // validasi nilaiAwal < nilaiAkhir
  if (nilaiAwal < nilaiAkhir) {
    // validasi dataArray harus array
    if (
      typeof nilaiAwal === "number" &&
      typeof nilaiAkhir === "number" &&
      Array.isArray(dataArray)
    ) {
      // validasi semua elemen dalam dataArray harus bertipe number
      if (dataArray.every((item) => typeof item === "number")) {
        // validasi panjang dataArray > 5
        if (dataArray.length > 5) {
          filterData(nilaiAwal, nilaiAkhir, dataArray);
        } else {
          console.log("Jumlah elemen dalam dataArray harus lebih dari 5");
        }
      } else {
        console.log("Semua elemen dalam dataArray harus bertipe number");
      }
    } else {
      console.log("Parameter pertama dan kedua harus bertipe number, lalu parameter ketiga harus bertipe array");
    }
  } else {
    console.log("Nilai akhir harus lebih besar dari nilai awal");
  }
};

const filterData = (nilaiAwal, nilaiAkhir, dataArray) => {
  const hasil = dataArray
    .filter((item) => {
      if (item >= nilaiAwal && item <= nilaiAkhir) {
        return item;
      }
    })
    .sort((a, b) => a - b);

  if (hasil.length > 0) {
    console.log(hasil);
  } else {
    console.log("Nilai tidak ditemukan");
  }
};

seleksiNilai(15, 3, [2, 25, 4, 14, 17, 30, 8]); //validasi 1
seleksiNilai(true, "8", undefined); // validasi 2
seleksiNilai(5, 17, [27, undefined, null]); // validasi 3
seleksiNilai(5, 17, [2, 25, 4]); // validasi 4
seleksiNilai(5, 17, [2, 25, 4, 1, 30, 18]); // nilai tidak ditemukan
seleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8]); // berhasil
