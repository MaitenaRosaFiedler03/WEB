const nombreUser = document.getElementById("nombreUser"); 
var usuario = sessionStorage.getItem('usuario');
nombreUser.textContent = usuario; 


document.getElementById("cerrarSesion").addEventListener("click",  function() {
    
    sessionStorage.setItem('usuario', "");
    var usuario2 = sessionStorage.getItem('usuario');
    console.log("user :" + usuario2)
   window.location.href = "../Index/index.html"; 
});

