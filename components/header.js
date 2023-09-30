function addHeader(e) {
  const componentEl = document.createElement("header");

  componentEl.className = "header";

  componentEl.innerHTML = ` 
  <a href="./index.html"><img class="header__logo" src="./images/Lukelogo.png" alt="" /></a>
 
  <ul class="header__nav">
    <li><a href="./portfolio.html" class="nav__link">Portfolio</a></li>
    <li><a href="./servicios.html" class="nav__link">Servicios</a></li>
    <li><a href="./contacto.html" class="nav__link">Contacto</a></li>
  </ul>

  <img class="header__burguer" src="./images/burguer.png" alt="" />

  <div class="burger-menu">
  <img class="burger-x" src="./images/ximg.svg" alt="" />
    
    <a href="./portfolio.html" class="burger__link">Portfolio</a>
    <a href="./servicios.html" class="burger__link">Servicios</a>
    <a href="./contacto.html" class="burger__link">Contacto</a>
  </div>
`;

  e.appendChild(componentEl);
  burgerMenu();
}

function burgerMenu() {
  const imageMenu = document.querySelector(".header__burguer");
  const burgerDiv = document.querySelector(".burger-menu");
  const xclose = document.querySelector(".burger-x");

  imageMenu.addEventListener("click", () => {
    burgerDiv.style.display = "inherit";
  });

  xclose.addEventListener("click", () => {
    burgerDiv.style.display = "none";
  });
}
