let usuarioTxt = document.getElementById("usuario");
let montoTXT = document.getElementById("monto");
let gastoTXT = document.getElementById("gasto");

let p = document.getElementById("mensaje"); //parrafo

let passwordTtx = document.getElementById("password");

    función(){
    //Iniciar sesión aquí
    p.innerHTML = "Login Correcto, " + usuarioTxt.value; //cambia el texto en el parrafo
let gastosArreglo = []; //Arreglo vacio

    limpiar();
}
    función agregarAarreglo(){
    let nuevogasto = gastoTXT.value + ": $" + montoTXT.value;

    función registro(){
    //Registro aqui
    p.innerHTML = "Registro con éxito, " + usuarioTxt.value; //cambia el texto en el parrafo

    gastosArreglo.push(nuevogasto);

    limpiar();
}

función limpiar(){
    usuarioTxt.value = "";
    passwordTtx.value = "";
    } 

    console.log(gastosArreglo);
}