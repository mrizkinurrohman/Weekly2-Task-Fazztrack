function divideAndSort(number) {
  // Konversi angka menjadi string dan pisahkan berdasarkan '0'
  const parts = number.toString().split("0");

  // Sorting setiap bagian dan gabungkan kembali
  const sortedParts = parts.map((part) => {
    return part.split("").sort().join("");
  });

  // Gabungkan semua bagian yang sudah disortir
  const result = sortedParts.join("");

  // Konversi kembali ke angka jika diperlukan (optional)
  return parseInt(result, 10);
}

// Contoh penggunaan
const inputNumber = 5956560159466056;
const output = divideAndSort(inputNumber);
console.log("Input:", inputNumber);
console.log("Output:", output);
