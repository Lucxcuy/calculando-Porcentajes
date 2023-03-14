const inputCoupon = document.querySelector("#coupon");
const inputPrice = document.querySelector("#price");
const btn = document.querySelector("#calcular");
const pResult = document.querySelector("#result");

btn.addEventListener("click", calcularPrecioConDescuento);

//CREAMOS EL OBJETO PARA GUARDAR TODOS LOS CUPONES CON SUS DESCUENTOS (COMPLETADO)
//const arrayUObjeto = undefined //['cupones' : descuento] {}?

// const couponsObj = {
//     caca_de_gato: 30,
//     caca_de_perro: 25,
//     caca_de_raton: 20,
//     caca_de_oso: 15,
//     caca_de_pajaro: 10,
// };

//CREAMOS UN ARRAY PARA GUARDAR TODOS LOS CUPONES CON SUS DESCUENTOS, dentro del array agregamos los objetos (COMPLETADO)
const couponsList = [];
couponsList.push({
    name: "caca_de_gato",
    discount: 30,
});
couponsList.push({
    name: "caca_de_perro",
    discount: 25,
});
couponsList.push({
    name: "caca_de_raton",
    discount: 20,
});
couponsList.push({
    name: "caca_de_oso",
    discount: 15,
});

function calcularPrecioConDescuento() {
    // (P * (100 - D)) / 100

    const price = Number(inputPrice.value);
    const coupon = inputCoupon.value;

    if (!price || !coupon) {
        pResult.innerText = "Por favor, ingrese un precio y un descuento";
        Return;
    }

    let discount;
    // aca lo que pedimos con la el metodo filter si hay algun elemento en nuestro array que cumpla la condicion que pedimos en la función
    // En este caso lo que dice la función es que la propiedad .name del elemento que estamos hablando sea igual a lo que los usuarios hayan escrito en el input coupon :)
    function isCouponInArray(cuponElement) {
        return cuponElement.name == coupon;
    }

    // PODEMOS UTILIZAR DOS METODOS, EL FIND O EL FILTER. EN EL CASO DEL FILTER CREA UN ARRAY CON UN OBJETO DENTRO, LO CUAL NOS HACE tener que encontrar la posicion del objeto dentro del array para luego ubicar la posicion del discount para poder aplicarlo. CON EL METODO FIND SIMPLEMENTE CREA EL OBJETO DONDE PODEMOS ACCEDER MAS FACIL A LA PROPIEDAD .DISCOUNT
    const couponInArray = couponsList.find(isCouponInArray); //{}

    // CUPONES UTILIZANDO UN ARRAY
    if (couponInArray) {
        //.length > 0 esto si es con el .filter
        discount = couponInArray.discount; //couponInArray[0].discount si es con .filter
    } else {
        pResult.innerText = "El cupón ingresado no es válido";
        return;
    }

    // CUPONES LLAMANDOLOS DESDE EL OBJETO (COMPLETADO)
    // if (couponsObj[coupon]) {
    //     discount = couponsObj[coupon];
    // } else {
    //     pResult.innerText = "El cupón ingresado no es válido";
    //     return;
    // }

    // CUPONES UTILIZANDO CONDICIONALES SWITCH E IF

    // switch (coupon) {
    //     case "caca_de_gato":
    //         discount = 30;
    //         break;
    //     case "caca_de_perro":
    //         discount = 25;
    //         break;
    //     default:
    //         pResult.innerText = "El cupón ingresado no es válido";
    //         return;
    // }

    // if (coupon == "caca_de_gato") {
    //     discount = 30;
    // } else if (coupon == "caca_de_perro") {
    //     discount = 25;
    // } else {
    //     pResult.innerText = "El cupón ingresado no es válido";
    //     return;
    // }

    const newPrice = (price * (100 - discount)) / 100;
    pResult.innerText = `El precio con descuento aplicado es de: $${newPrice}`;
}
