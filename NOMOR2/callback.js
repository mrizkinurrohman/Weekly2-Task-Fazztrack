function getDataFromServer(status, callback) {
  setTimeout(function () {
    if (status === true) {
      callback(["produk 1", "produk 2", "produk 3"], null);
    } else {
      const err = new Error("Data tidak ditemukan");
      error.name = "Data tidak ada";
      callback(null, err);
    }
  }, 3000);
}

// callback pake try catch
function processData(data) {
  try {
    const result = data;
    console.log("Data berhasil di dapatkan", result);
  } catch (error) {
    console.log(error);
  }
}

getDataFromServer(true, processData); // kondisi benar
// getDataFromServer(false, processData); // kondisi benar
