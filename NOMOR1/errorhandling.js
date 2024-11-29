function fetchData(status) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      if (status === true) {
        resolve("Data berhasil di dapatkan");
      } else {
        reject("Data gagal di dapatkan");
      }
    }, 3000);
  });
}

// Pemanggilan fungsi dengan then dan catch
fetchData(false)
  .then((result) => {
    console.log(result); // Output: Data berhasil di dapatkan
  })
  .catch((error) => {
    console.error(error);
  });

// async await
async function main () {
    try {
        const result = await fetchData(true);
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

main();