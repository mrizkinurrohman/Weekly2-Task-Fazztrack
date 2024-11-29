async function fetchApi() {
    // fetch try and catch
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    // const hasil = data.forEach(element => {
    //     console.log(`${element.id}. ${element.name}`);
    // });
    // const output = data.map((user) => `${user.id}. ${user.name}`).join("\n");
    // console.log(output);
    console.log(data[0]["name"]);
  } catch (error) {
    console.log(error);
  }

  // fetch then and catch
  const URL = "https://jsonplaceholder.typicode.com/users";

  fetch(URL)
      .then((response) => {
          // console.log(response);
          if (!response.ok) {
              throw new Error("Data tidak ditemukan");
          }
          return response.json();
      }).then((data) => {
        // console.log(data);
          // console.log(data[0]["name"]);
          data.forEach(element => {
              console.log(`${element.id}. ${element.name}`);
          });
      }).catch((error) => console.log(error));
}

fetchApi();
