const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
  // validasi nilaiAwal < nilaiAkhir
  if (nilaiAwal < nilaiAkhir) {
    // validasi dataArray harus array
    if (Array.isArray(dataArray)) {
      // validasi panjang dataArray > 5
      if (dataArray.length > 5) {
        return filterData(nilaiAwal, nilaiAkhir, dataArray);
      } else {
        return "Jumlah angka dalam dataArray harus lebih dari 5";
      }
    } else {
      return "Parameter ketiga harus bertipe array";
    }
  } else {
    return "Nilai akhir harus lebih besar dari nilai awal";
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

  if (hasil.length) {
    return hasil;
  } else {
    return "Nilai tidak ditemukan";
  }
};

// console.log(seleksiNilai(15, 3, [2, 25, 4, 14, 17, 30, 8]));
// console.log(seleksiNilai(7, 8, undefined));
// console.log(seleksiNilai(5, 17, [2, 25, 4]));
// console.log(seleksiNilai(5, 17, [2, 25, 4, 1, 30, 18]));
console.log(seleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8]));
