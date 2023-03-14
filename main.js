const inputDiscount = document.querySelector("#discount");
const inputPrice = document.querySelector("#price");
const btn = document.querySelector("#calcular");
const pResult = document.querySelector("#result");

btn.addEventListener("click", calcularPrecioConDescuento);

function calcularPrecioConDescuento() {
    // (P * (100 - D)) / 100

    const price = Number(inputPrice.value);
    const discount = Number(inputDiscount.value);

    if (!price || !discount) {
        pResult.innerText = "Por favor, ingrese un precio y un descuento";
        Return;
    } else if (discount > 100) {
        pResult.innerText = "Por favor, ingrese un porcentaje válido";
        Return;
    }

    const newPrice = (price * (100 - discount)) / 100;
    pResult.innerText = `El precio con descuento aplicado es de: $${newPrice}`;
}
