function cekPalindrom(str) {
  str = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return str + " Bukan palindrom";
    } else {
      left++;
      right--;
    }
  }
  return str + " Merupakan palindrom";
}

console.log(cekPalindrom("malam"));
console.log(cekPalindrom("KATAK"));
console.log(cekPalindrom("katak"));
