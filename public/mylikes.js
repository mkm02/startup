(async () => {

    recipes = await getRecipes();
    //console.log(recipes[0]);
    const like1El = document.createElement('a');
    const like2El = document.createElement('a');
    const like3El = document.createElement('a');
    const like4El = document.createElement('img');

    /*
    localStorage.setItem("birria", "/Recipes/birria_tacos.html");
    localStorage.setItem("bbq pork", "/Recipes/bbq_pork.html");
    localStorage.setItem("chicken parm", "/Recipes/chicken_parm.html");
    const link1 = localStorage.getItem("birria");
    const link2 = localStorage.getItem("bbq pork");
    const link3 = localStorage.getItem("chicken parm");
    */

    if (recipes.length > 0) {

        link1 = "/Recipes/" + recipes[0];
        link1Name = link1.substring(9, link1.length - 5);
        link1Name = link1Name.replace("_", " ");
        link1Name = link1Name.toUpperCase();

        like1El.textContent = link1Name;
        like1El.href = link1;

        document.getElementById("myLikesObjects").appendChild(like1El);

        if (recipes.length > 1) {
            link2 = "/Recipes/" + recipes[1];
            link2Name = link2.substring(9, link2.length - 5);
            link2Name = link2Name.replace("_", " ");
            link2Name = link2Name.toUpperCase();

            like2El.textContent = link2Name;
            like2El.href = link2;

            document.getElementById("myLikesObjects").appendChild(like2El);

            if (recipes.length > 2) {
                link3 = "/Recipes/" + recipes[2];
                link3Name = link3.substring(9, link3.length - 5);
                link3Name = link3Name.replace("_", " ");
                link3Name = link3Name.toUpperCase();

                like3El.textContent = link3Name;
                like3El.href = link3;

                document.getElementById("myLikesObjects").appendChild(like3El);
            }
        }
    }
    //like4El.className = "liked_image";
    //like4El.src = "Recipes/images/birria-tacos.jpg"
    
})();


async function getRecipes() {
    const userName = localStorage.getItem('userName');
    currentUser = { user: userName }

    const response = await fetch('/api/mylikes', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(currentUser),
    });

    recipesJSON = await response.json();

    //recipes = JSON.parse(recipesJSON);
    //recipes = response.body;
    console.log(recipesJSON[0]);
    return recipesJSON;
}