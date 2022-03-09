# Pijar Camp - Week 2 - Javascript 2

Tugas Bootcamp Pijar Camp Minggu Kedua Materi Javascript 2.

## Soal

1.Buat dan jelaskanlah 10 method bawaan JavaScript (Built-in Functions) beserta
contoh penggunaannya(kecuali : split, reverse, join, foreach, map)

---

2.Buatlah program searching nama yang dapat dibatasi jumlah outputnya yang
menerapkan callback function dengan data sebagai berikut:

```javascript
const name = [
  "Abigail",
  "Alexandra",
  "Alison",
  "Amanda",
  "Angela",
  "Bella",
  "Carol",
  "Caroline",
  "Carolyn",
  "Deirdre",
  "Diana",
  "Elizabeth",
  "Ella",
  "Faith",
  "Olivia",
  "Penelope",
];
```

Contoh:

```javascript
searchName(“an”, 3, callback)
```

Output:

```bash
[“Alexandra”,”Amanda”,”Angela”]
```

---

3.Buatlah fungsi yang memiliki parameter nilaiAwal (number) dan nilaiAkhir
(number), serta dataArray (array).
Fungsi tersebut memiliki validasi nilaiAwal < nilaiAkhir dan jumlah data dalam
dataArray harus lebih dari 5.
Fungsi tersebut akan mencari data didalam dataArray yang memiliki nilai diantara
nilaiAwal dan nilaiAkhir, mengurutkan hasil pencarian dan menampilkannya ke
layar/console.

Contoh:

```javascript
SeleksiNilai(5, 20 , [2, 25, 4, 14, 17, 30, 8])
```

Output:

```bash
[8, 14, 17]
```

Contoh:

```javascript
SeleksiNilai(15, 3 , [2, 25, 4, 14, 17, 30, 8])
```

Output:

```bash
“Nilai akhir harus lebih besar dari nilai awal”
```

Contoh:

```javascript
SeleksiNilai(5, 17 , [2, 25, 4])
```

Output:

```bash
“Jumlah angka dalam dataArray harus lebih dari 5”
```

Contoh:

```javascript
SeleksiNilai(5, 17 , [2, 25, 4, 1, 30, 18])
```

Output:

```bash
“Nilai tidak ditemukan”
```
