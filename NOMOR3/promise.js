const cekangBarang = (Barang) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const Datamotor = ["vario", "mio", "pcx", "beat",];
        const result = Datamotor.find((item) => item === Barang);
        if (result) {
          resolve(`Motor ${result} ready`);
        } else {
          reject(`data not found`);
        }
      }, 1000);
    });
  };
  // 
  cekangBarang("vario").then((cek) => {
    console.log(cek);
  }).catch((err) => {
    console.log(err)
  })



const cekangWarna = (color) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const Datawarna = ["merah", "kuning", "hijau"];
        const result = Datawarna.find((item) => item === color);
        if (result) {
          resolve(`Warna ${result} tersedia`);
        } else {
          reject(`data not found`);
        }
      }, 1000);
    });
  };
  // 
  cekangWarna("merah").then((cek) => {
    console.log(cek);
  }).catch((err) => {
    console.log(err)
  })