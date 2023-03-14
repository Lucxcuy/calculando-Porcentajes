const inputCoupon = document.querySelector("#coupon");
const inputPrice = document.querySelector("#price");
const btn = document.querySelector("#calcular");
const pResult = document.querySelector("#result");

btn.addEventListener("click", calcularPrecioConDescuento);

function calcularPrecioConDescuento() {
    // (P * (100 - D)) / 100

    const price = Number(inputPrice.value);
    const coupon = inputCoupon.value;

    if (!price || !coupon) {
        pResult.innerText = "Por favor, ingrese un precio y un descuento";
        Return;
    }

    let discount;

    switch (coupon) {
        case "caca_de_gato":
            discount = 30;
            break;
        case "caca_de_perro":
            discount = 25;
            break;
        default:
            pResult.innerText = "El cupón ingresado no es válido";
            return;
    }

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
