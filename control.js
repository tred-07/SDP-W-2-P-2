const loadFood = () => {
  fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=b")
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      res["meals"].forEach((element) => {
        const parent = document.getElementById("all-food-container");
        const div = document.createElement("div");
        div.innerHTML = `
           <div  class="food-card" onclick="foodDetails(${element.idMeal})">
           <img src=${element.strMealThumb} title="Ok">
            <h1>${element.strMeal}</h1>
            <h3>${element.strCategory}</h3>
          </div>
           `;
        parent.appendChild(div);
      });
    })
    .catch((err) => console.log("Something went wrong"));
};

const foodDetails = (id) => {
  const parent = document.getElementById("selectedItem");
  const div = document.createElement("div");
  selectedItem.innerHTML = ``;
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then((res) => res.json())
    .then((data) => {
      if (data["meals"].length > 0) {
        data["meals"].forEach((el) => {
          div.innerHTML = `
          <img class="foodDetailsImg" src="${el["strMealThumb"]}">
          <h1>${el["strMeal"]}</h1> 
          <h1>${el["strCategory"]}</h1>
          <h1> ${el["strTags"]}</h1>
          <h3>${el["strIngredient1"]}, ${el["strIngredient2"]}, ${el["strIngredient3"]}, ${el["strIngredient4"]}, ${el["strIngredient5"]}, ${el["strIngredient6"]}, ${el["strIngredient7"]}, ${el["strIngredient8"]}</h3>
          <h3><a href="${el["strYoutube"]}">Click here</a></h3>
          `;
          console.log(el["strArea"], el["strInstructions"], el["strYoutube"]);
          parent.appendChild(div);
        });
      }
    })
    .catch((err) => console.log(err));
};

document.getElementById("searchBtn").addEventListener("click", (e1) => {
  e1.preventDefault();
  const parent = document.getElementById("selectedItem");
  const totalFood = document.getElementById("totalFood");
  selectedItem.innerHTML = ``;
  totalFood.innerHTML = ``;
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${document.getElementById("searchBox").value}`)
    .then((res) => res.json())
    .then((data) => {
      if (data["meals"]== 'no data found') {
        parent.innerHTML = `<h1>No data found.</h1>`;
      } else {
        totalFood.innerText=`${data["meals"].length} Found`
        console.log(data['meals'].length,typeof(data),data)
        data["meals"].forEach((el) => {
          const div = document.createElement("div");
          div.innerHTML = `
        <img class="foodDetailsImg" src="${el["strMealThumb"]}">
        <h1>${el["strMeal"]}</h1>
        <h1>${el["strCategory"]}</h1>
        <h1> ${el["strTags"]}</h1>
        <h3>${el["strIngredient1"]}, ${el["strIngredient2"]}, ${el["strIngredient3"]}, ${el["strIngredient4"]}, ${el["strIngredient5"]}, ${el["strIngredient6"]}, ${el["strIngredient7"]}, ${el["strIngredient8"]}</h3>
        <h3><a href="${el["strYoutube"]}">Click here</a></h3>
        `;
          console.log(el["strArea"], el["strInstructions"], el["strYoutube"]);
          parent.appendChild(div);
          div.classList.add("selectedItem")
        });
      }
    })
    .catch((err) => console.log(err));
});

loadFood();
