const app_id = "14d4d879";
const app_key = "60167b0d690d0b46be0c205c4f5b45b7";

var button = document.querySelector("button");
console.log(button);


const get_recipe = async () => {
    var input = document.querySelector("input");
    console.log(input);

    const response = await fetch(
        'https://api.edamam.com/api/recipes/v2?type=public&q=${query}D&app_id=$14d4d879&app_key=$60167b0d690d0b46be0c205c4f5b45b7'
    );
    const data = await response.json();


    console.log(data);
    //   data = data.hits;
    var cards = document.querySelector(".Cards-selection");
    cards.innerHTML = "";
    for(let i = 0; i < data.hits.length; i++){
        cards.innerHTML +=
        <div class="cards">
        <div class="card__body">
            <img 
                src="${data.hits[i].recipe.image}"
                alt=""
                class="card__image"
            />
            <h2 class="card__title">${data.hits[i].recipe.label}</h2>
            <p class="card__description">
                Take your boring salads up a knotch. This recipe is perfect for lunch and only contains 5 ingredients!
            </p>
        </div>
            <button class="cards__btn">View Recipe</button>
        </div>
    }
};
 
button.addEventListener("click", get_recipe);
