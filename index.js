
//barra lateral//
var btnExp=document.querySelector(`#btn-exp`)
var menuSide=document.querySelector(`.menu-lateral`)

btnExp.addEventListener(`click`,function(){
    menuSide.classList.toggle(`expandir`)
}
)

//Carrito de Compras//
const btnCart = document.querySelector(`.container-cart-icon`)
const containerCartProducts = document.querySelector(`.container-cart-products`)

btnCart.addEventListener(`click`, () => {
    containerCartProducts.classList.toggle(`hidden-cart`)
})
