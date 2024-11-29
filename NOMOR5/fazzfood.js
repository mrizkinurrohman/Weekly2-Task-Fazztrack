function Fazzfood(harga, voucher, jarak, pajak) {
  let diskon = 0;
  let biayaPengiriman = 5000;

  //hitung harga berdasarkan voucher
  if (voucher.toUpperCase() === "FAZZFOOD50" && harga >= 50000) {
    diskon = Math.min(harga * 0.5, 50000);
  } else if (voucher === "DITRAKTIR60" && harga >= 25000) {
    diskon = Math.min(harga * 0.6, 30000);
  }

  //hitung biaya pengiriman
  if (jarak > 2) {
    biayaPengiriman += (jarak - 2) * 3000;
  }

  //hitung pajak
  let biayaPajak = pajak ? harga * 0.05 : 0;

  //hitung total
  let total = harga - diskon + biayaPengiriman + biayaPajak;

  return `
    Harga Awal: ${harga}  
    Diskon: ${diskon}  
    Biaya Pengiriman: ${biayaPengiriman}        
    Biaya Pajak: ${biayaPajak}  
    Total: ${total}  
    `;
}

console.log(Fazzfood(75000, "fazzfood50", 5, true));
console.log(Fazzfood(50000, "FAZZFOOD50", 3, true));
// console.log(Fazzfood(49000, "FAZZFOOD50", 3, true));

// console.log(Fazzfood(140000, "DITRAKTIR60", 3, true));
// console.log(Fazzfood(30000, "FAZZFOOD50", 3, true));
