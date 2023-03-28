(async () => {
    const like1El = document.createElement('a');
    const like2El = document.createElement('a');
    const like3El = document.createElement('a');
    const like4El = document.createElement('img');

    localStorage.setItem("birria", "/Recipes/birria_tacos.html");
    localStorage.setItem("bbq pork", "/Recipes/bbq_pork.html");
    localStorage.setItem("chicken parm", "/Recipes/chicken_parm.html");
    const link1 = localStorage.getItem("birria");
    const link2 = localStorage.getItem("bbq pork");
    const link3 = localStorage.getItem("chicken parm");

    like1El.textContent = "Birria Tacos";
    like1El.href = link1;

    like2El.textContent = "BBQ Pork";
    like2El.href = link2;

    like3El.textContent = "Chicken Parmesan Casserole";
    like3El.href = link3;

    like4El.className = "liked_image";
    like4El.src = "Recipes/images/birria-tacos.jpg"

    document.getElementById("myLikesObjects").appendChild(like1El);
    document.getElementById("myLikesObjects").appendChild(like4El);
    document.getElementById("myLikesObjects").appendChild(like2El);
    document.getElementById("myLikesObjects").appendChild(like3El);
})();