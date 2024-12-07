const loadFood=()=>{
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
    .then((res)=>res.json())
    .then((res)=>{
        console.log(res)
        res['meals'].forEach(element => {
            const parent=document.getElementById("all-food-container")
           const div=document.createElement("div")
           div.innerHTML=`
           <div class="food-card">
            <h1>${element.strMeal}</h1>
            <h3>${element.strCategory}</h3>
          </div>
           `
           parent.appendChild(div)
        });
    })
    .catch((err)=>console.log("Something went wrong"));


    fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=b')
    .then((res)=>res.json())
    .then((res)=>{
        console.log(res)
        res['meals'].forEach(element => {
            const parent=document.getElementById("all-food-container")
           const div=document.createElement("div")
           div.innerHTML=`
           <div class="food-card">
            <h1>${element.strMeal}</h1>
            <h3>${element.strCategory}</h3>
          </div>
           `
           parent.appendChild(div)
        });
    })
    .catch((err)=>console.log("Something went wrong"))
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=c')
    .then((res)=>res.json())
    .then((res)=>{
        console.log(res)
        res['meals'].forEach(element => {
            const parent=document.getElementById("all-food-container")
           const div=document.createElement("div")
           div.innerHTML=`
           <div class="food-card">
            <h1>${element.strMeal}</h1>
            <h3>${element.strCategory}</h3>
          </div>
           `
           parent.appendChild(div)
        });
    })
    .catch((err)=>console.log("Something went wrong"));

    fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=d')
    .then((res)=>res.json())
    .then((res)=>{
        console.log(res)
        res['meals'].forEach(element => {
            const parent=document.getElementById("all-food-container")  
           const div=document.createElement("div")
           div.innerHTML=`
           <div class="food-card">
            <h1>${element.strMeal}</h1>
            <h3>${element.strCategory}</h3>
          </div>
           `
           parent.appendChild(div)
        });
    })
    .catch((err)=>console.log("Something went wrong"))
}

loadFood()