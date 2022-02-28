const bannerImages = ["image/carrosel.png","image/carrosel1.png","image/carrosel2.png"];
const carroselButtons = document.querySelectorAll(".carousel__container__buttons__button");
const banner = document.querySelector(".carousel");
const atualiza = setInterval(atualizaBanner, 3000);
let bannerContador = 0;

const headerButtonCart = document.querySelector('.cart');
const fastBuy = document.querySelectorAll('.buy__button');
let cartItems = 0;

// Confere se o usuário deseja avançar ou retroceder a imagem no banner da página.
carroselButtons.forEach((elemento, index) => {
  elemento.addEventListener("click", () => {
    atualizaBanner(index);
  });
});

function atualizaBanner(index = "") {
  index === 0 || index === 1 ? clearInterval(atualiza): '';
  if (index === "" || index === 1) {
    bannerContador++;
    bannerContador = bannerContador > 2 ? 0 : bannerContador;
    banner.style.backgroundImage = `url(${bannerImages[bannerContador]})`;
  } else {
    bannerContador--;
    bannerContador = bannerContador < 0 ? 2 : bannerContador;
    banner.style.backgroundImage = `url(${bannerImages[bannerContador]})`;
  }
}

// Atualiza número de produtos no carrinho do usuário
fastBuy.forEach((button)=>{
  button.addEventListener('click', ()=>{
    if (cartItems === 99) {
      headerButtonCart.innerText = '+99';
      return;
    }
    cartItems++;
    headerButtonCart.innerText = cartItems;
    headerButtonCart.style.backgroundColor = '#ffa200';
  })
})







const dialogButton = document.querySelector('.dialogflow__button');
const dialogContainer = document.querySelector('.dialogflow__container');
console.log(dialogContainer)

dialogButton.addEventListener('click', ()=>{
dialogContainer.classList.toggle('dialogflow__container__active')
dialogButton.classList.toggle('dialogflow__button__active')
})