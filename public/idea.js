var recipeImage = "";

function getRecipe() {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then((x) => x.json())
        .then((response) => {
            console.log(response);
            document.getElementById("newRecipe").textContent = response.meals[0].strMeal;
            recipeImage = response.meals[0].strMealThumb;
            getPic();
    });
}

function getPic() {
    fetch(recipeImage)
        .then((response) => response.blob())
        .then((blob) => {
         const objectURL = URL.createObjectURL(blob);
        document.getElementById("newRecipeImage").src = objectURL;
        });
}