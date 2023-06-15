var storedUser = localStorage.getItem('currentUser');
  var usuario = JSON.parse(storedUser);


const cocktailDetails = document.getElementById('trago-detalle');
const cocktailName = document.getElementById('nombreTrago');
const cocktailImage = document.getElementById('foto');
const ingredientList = document.getElementById('ingredientes');
const instructionList = document.getElementById('pasos');




// Obtiene los detalles del cóctel a partir del ID recibido en la URL
function getCocktailDetails() {
    var urlParams = new URLSearchParams(window.location.search);
    

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`)
        .then(response => response.json())
        .then(data => {
            const cocktail = data.drinks[0];

            // Muestra el nombre del cóctel
            cocktailName.textContent = cocktail.s;

            // Muestra la imagen del cóctel
            const cocktailImg = document.createElement('img');
            cocktailImg.src = cocktail.strDrinkThumb;
            cocktailImg.alt = cocktail.strDrink;
            cocktailImage.appendChild(cocktailImg);

            // Muestra los ingredientes
            for (let i = 1; i <= 15; i++) {
                const ingredientName = cocktail[`strIngredient${i}`];
                const ingredientMeasure = cocktail[`strMeasure${i}`];

                if (ingredientName && ingredientMeasure) {
                    const li = document.createElement('li');
                    li.textContent = `${ingredientMeasure} ${ingredientName}`;
                    ingredientList.appendChild(li);
                }
            }

            // Muestra los pasos a seguir
            const instructions = cocktail.strInstructions.split('\n');
            instructions.forEach(instruction => {
                if (instruction.trim() !== '') {
                    const li = document.createElement('li');
                    li.textContent = instruction.trim();
                    instructionList.appendChild(li);
                }
            });
        });
}

  
// Llama a la función para obtener los detalles del cóctel
getCocktailDetails();
