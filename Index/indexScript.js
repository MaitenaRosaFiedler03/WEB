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
function buscar(){
    const entr = document.getElementById('entrada');

    document.getElementById('busqueda-boton').addEventListener('click', function() {
        var nombreBebida = document.getElementById('entrada');
    
        fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + nombreBebida)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            const tragos = data.drinks; 
            tragos.forEach(bebida => {
                
                // Verifica si se encontró una bebida
                if (bebida) {
                // Crea una caja para mostrar la foto y el nombre de la bebida
                var caja = document.createElement('div');
                caja.className = 'bebida-box';
        
                // Crea la etiqueta de imagen y establece su fuente (URL de la foto)
                var imagen = document.createElement('img');
                imagen.src = bebida.strDrinkThumb;
        
                // Crea la etiqueta de título y establece el nombre de la bebida
                var titulo = document.createElement('h3');
                titulo.textContent = bebida.strDrink;
        
                // Agrega la imagen y el título a la caja
                caja.appendChild(imagen);
                caja.appendChild(titulo);
        
                // Agrega la caja al documento
                document.body.appendChild(caja);
                } else {
                console.log('Bebida no encontrada');
                }
            });
        })
        .catch(function(error) {
            console.log('Error:', error);
        });
    });
}    
function getCredentials(){
    var usuario = sessionStorage.getItem('usuario');
    const nombre  = document.getElementById("nombreUser");
    if( usuario != null ){

        
        nombre.href ="../Perfil/Perfil.html"; 
        nombre.textContent = usuario; 
    }
    else{
        nombre.href ="../InicioSesion/inicioSesion.html"; 
    }
}
getTragos();
buscar();
getCredentials(); 