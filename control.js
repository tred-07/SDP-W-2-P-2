const loadFood = () => {
  fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
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
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then((res) => res.json())
    .then((data) => {
      data['meals'].forEach((el) => {
        const parent = document.getElementById("selectedItem");
        const div = document.createElement("div");
        div.innerHTML = `
        <h1>Ok</h1>
        `;
        console.log(el["strArea"],el['strCategory'],el['strInstructions'],el['strMeal'],el['strMealThumb'],el['strTags'],el['strYoutube'])
        parent.appendChild(div);
      });
    })
    .catch((err) => console.log(err));
};

loadFood();

