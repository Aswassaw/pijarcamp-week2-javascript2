// 1. push (array)
// Method push digunakan untuk menambahkan satu atau lebih elemen ke dalam array.
const buah = ["Apel", "Jambu", "Melon"];
console.log(buah);
buah.push("Durian", "Semangka");
console.log(buah);
console.log("");

// 2. slice (array)
// Method slice digunakan untuk memotong sebuah array berdasarkan parameter yang dimasukkan, yaitu parameter pertama untuk index awal pemotongan dan parameter kedua untuk index sebelum akhir pemotongan.
const hp = ["Apple", "Xiaomi", "Samsung", "Asus", "Nokia", "Infinix"];
console.log(hp);
console.log(hp.slice(1, 4));
console.log("");

// 3. includes (array)
// Method includes digunakan untuk mengecek apakah sebuah array memiliki elemen berdasarkan parameter yang diberikan. Bersifat case-sensitive.
const hewan = ["Hiu", "Kucing", "Elang", "Semut", "Gajah"];
console.log(hewan.includes("Kucing", 0));
console.log(hewan.includes("Rafflesia", 0));
console.log("");

// 4. concat (array)
// Method concat digunakan untuk menggabungkan dua buah array menjadi satu.
const warna1 = ["Goldenrod", "Skyblue", "Aquamarine"];
const warna2 = ["Yellowgreen", "Whitesmoke", "Cornflowerblue"];
console.log(warna1.concat(warna2));

// 5. replace (string)
// Method replace digunakan untuk mencari suatu nilai pada sebuah string berdasarkan parameter pertama yang dimasukkan, lalu jika ditemukan maka string tersebut akan diubah berdasarkan parameter kedua yang dimasukkan. Bersifat case-sensitive.
const string1 = "Kucing oranye yang meminum ramuan sihir itu sekarang berubah menjadi raksasa oranye setinggi 20 meter.";
console.log(string1);
console.log(string1.replace("oranye", "hitam"));
console.log("");

// 6. trim (string)
// Method trim digunakan untuk menghapus spasi pada string yang terdapat di awal dan di akhir string.
const string2 = "     Manusia Api     ";
console.log(string2, string2.length);
console.log(string2.trim(), string2.trim().length);
console.log("");

// 7. repeat (string)
// Method repeat digunakan untuk membuat salinan string sebanyak parameter yang diberikan.
const string3 = "wk";
console.log(string3.repeat(5));
console.log(string3.repeat(10));
console.log("");

// 8. startsWith (string)
// Method startsWith digunakan untuk mengecek apakah suatu string memiliki awalan sesuai dengan parameter string yang dimasukkan.
const string4 = "Kucing itu sedang berandai-andai bahwa dirinya adalah seekor harimau.";
console.log(string4.startsWith("Kuc"));
console.log(string4.startsWith("Kuc", 1));
console.log("");

// 9. hasOwnProperty (object)
// Method hasOwnProperty digunakan untuk mengecek apakah suatu object memiliki key sesuai dengan parameter yang dimasukkan.
const biodata = {
  name: "Andry Pebrianto",
  alamat: "Trenggalek",
};
console.log(biodata.hasOwnProperty("name"));
console.log(biodata.hasOwnProperty("age"));
console.log("");

// 10. parseInt (number)
// Method parseInt digunakan untuk mengubah suatu nilai string menjadi number.
let angka = "27";
console.log(angka, typeof angka);
angka = Number.parseInt(angka);
console.log(angka, typeof angka);
