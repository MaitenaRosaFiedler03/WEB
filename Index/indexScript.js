var usuario = sessionStorage.getItem('usuario');
 const nombre  = document.getElementById("nombreUser");
 console.log("usu : " + usuario)
 function ver (){
    if((usuario == null) || (usuario == "" ) ){
        nombre.textContent = "Perfil";
     }
 }
function getTragos(){
    const cocktailContainer = document.getElementById('tragos-caja');


    // Realiza la petición a la API para obtener las bebidas alcohólicas
    fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic')
        .then(response => response.json())
        .then(data => {
            const cocktails = data.drinks;

            // Crea una caja por cada cóctel
            cocktails.forEach(cocktail => {
                const cocktailBox = document.createElement('div');
                cocktailBox.classList.add('cocktail-box');


                const cocktailImage = document.createElement('img');
                cocktailImage.src = cocktail.strDrinkThumb;
                cocktailImage.alt = cocktail.strDrink;
                cocktailBox.appendChild(cocktailImage);
                
                const cocktailName = document.createElement('p');
                cocktailName.textContent = cocktail.strDrink;
                cocktailBox.appendChild(cocktailName);

                // Al hacer clic en una caja, muestra más información
                cocktailBox.addEventListener('click', () => {
                    window.location.href = `../DetalleEvento/detalle.html?id=${cocktail.idDrink}`;
                });

                cocktailContainer.appendChild(cocktailBox);
            });
        });
}

   
    document.getElementById('busqueda-boton').addEventListener('click', function() {
        var bebidas = document.getElementById("tragos-caja"); 
        bebidas.innerHTML= '';
        var nombreBebida = document.getElementById('entrada');
        console.log("nombre : " + nombreBebida.value)
    
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${nombreBebida.value}`)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            const tragos = data.drinks; 
            tragos.forEach(bebida => {
                
                // Verifica si se encontró una bebida
                if (bebida) {
                // Crea una caja para mostrar la foto y el nombre de la bebida
                const cocktailBox = document.createElement('div');
                cocktailBox.classList.add('cocktail-box');


                const cocktailImage = document.createElement('img');
                cocktailImage.src = bebida.strDrinkThumb;
                cocktailImage.alt = bebida.strDrink;
                cocktailBox.appendChild(cocktailImage);
                
                const cocktailName = document.createElement('p');
                cocktailName.textContent = bebida.strDrink;
                cocktailBox.appendChild(cocktailName);

                // Al hacer clic en una caja, muestra más información
                cocktailBox.addEventListener('click', () => {
                    window.location.href = `../DetalleEvento/detalle.html?id=${bebida.idDrink}`;
                });

                bebidas.appendChild(cocktailBox);
                } else {
              alert('Bebida no encontrada');
                }
            });
        })
        .catch(function(error) {
            console.log('Error:', error);
        });
    });

function getCredentials(){
    
    if( usuario != "" && usuario != null){
 
        nombre.href ="../Perfil/Perfil.html"; 
        nombre.textContent = usuario; 
    }
    else{
        nombre.href ="../InicioSesion/inicioSesion.html"; 
        nombre.textContent = "Perfil";
    }
}
ver(); 
getTragos();
getCredentials(); 