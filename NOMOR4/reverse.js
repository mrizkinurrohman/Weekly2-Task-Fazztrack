const sentence = "Saya belajar JavaScript";
// console.log(sentence.length);
const words = []; // Array untuk menyimpan kata-kata
let tempWord = ""; // Variabel sementara untuk menyimpan kata

for (let i = 0; i < sentence.length; i++) {
  if (sentence[i] === " ") {
    // Jika menemukan spasi, tambahkan kata ke array dan reset tempWord
    if (tempWord.length > 0) {
      words.push(tempWord);
      tempWord = "";
    }
  } else {
    // Tambahkan karakter ke tempWord
    tempWord += sentence[i];
  }
}

// Tambahkan kata terakhir (jika ada)
if (tempWord.length > 0) {
  words.push(tempWord);
}

// console.log(words)

// console.log("Hasil split kalimat:", words);
// console.log(words.length);

let result= "";
for (let i = words.length-1; i >= 0; i--) {
    result += words[i];
    if (i !== 0) {
        result += " "; // Tambahkan spasi antara kata
    }
}

// console.log(result.length);
console.log(result);

