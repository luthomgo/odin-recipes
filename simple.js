// fetch(
//   `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?tags=vegetarian%2Cdessert&number=1`,
//   {
//     method: "GET",
//     headers: {
//       "x-rapidapi-key": "78d3c11a91msh46c25b8b8ef3a9bp19fa8djsnf1b132e6fa2c",
//       "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
//     },
//   }
// )
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => console.log(data))
//   .catch((error) => console.log("Error"));
const form = document.getElementById("search-form");
const apiKey = "78d3c11a91msh46c25b8b8ef3a9bp19fa8djsnf1b132e6fa2c";
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const query = encodeURIComponent(document.getElementById("query").value);
  const action = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=${query}&number=10&apiKey=${apiKey}`;

  fetch(action, {
    method: "GET",
    headers: {
      "x-rapidapi-key": "78d3c11a91msh46c25b8b8ef3a9bp19fa8djsnf1b132e6fa2c",
      "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log("Error"));
});