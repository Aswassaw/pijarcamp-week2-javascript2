// push (array)
// Method push digunakan untuk menambahkan satu atau lebih elemen ke dalam array.
const buah = ["Apel", "Jambu", "Melon"];
console.log(buah);
buah.push("Durian", "Semangka");
console.log(buah);
console.log("");

// slice (array)
// Method slice digunakan untuk memotong sebuah array berdasarkan parameter yang dimasukkan, yaitu parameter pertama untuk index awal pemotongan dan parameter kedua untuk index akhir pemotongan.
const hp = ["Apple", "Xiaomi", "Samsung", "Asus", "Nokia", "Infinix"];
console.log(hp);
console.log(hp.slice(1, 4));
console.log("");

// includes (array)
// Method includes digunakan untuk mengecek apakah sebuah array memiliki elemen berdasarkan parameter yang diberikan. Bersifat case-sensitive.
const hewan = ["Hiu", "Kucing", "Elang", "Semut", "Gajah"];
console.log(hewan.includes("Kucing", 0));
console.log(hewan.includes("Rafflesia", 0));
console.log("");

// replace (string)
// Method replace digunakan untuk mencari suatu nilai pada sebuah string berdasarkan parameter pertama yang dimasukkan, lalu jika ditemukan maka string tersebut akan diubah berdasarkan parameter kedua yang dimasukkan. Bersifat case-sensitive.
const kalimat1 =
  "Kucing oranye yang meminum ramuan sihir itu sekarang berubah menjadi raksasa oranye setinggi 20 Meter.";
console.log(kalimat1);
console.log(kalimat1.replace("oranye", "hitam"));
console.log("");

// trim (string)
// Method trim digunakan untuk menghapus spasi pada string yang terdapat di awal dan di akhir string.
const kalimat2 = "     Manusia Api     ";
console.log(kalimat2, kalimat2.length);
console.log(kalimat2.trim(), kalimat2.trim().length);
