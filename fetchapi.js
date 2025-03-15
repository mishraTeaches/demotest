// Define the API URL
const apiUrl = "https://dummyjson.com/users";

// Make a GET request
// fetch(apiUrl)
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });

async function getData() {
  try {
    const data = await fetch(apiUrl);
    const response = await data.json();
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
getData();
