function addFooter(e) {
  const componentEl = document.createElement("footer");

  componentEl.className = "footer";

  componentEl.innerHTML = ` 
  <img class="footer__logo" src="./images/Lukelogo.png" alt="" />

  <div class="footer__nav">
    <div class="footer__nav_div">
      <img class="footer__li__img" src="./images/Vector.svg" alt="" />
      <a href="https://lukebro82.github.io/componentes_desafio/contacto.html" class="footer__li__link">Home</a>
    </div>

    <div class="footer__nav_div">
      <img class="footer__li__img" src="./images/user.svg" alt="" />
      <a href="" class="footer__li__link">Servicios</a>
    </div>

    <div class="footer__nav_div">
      <img class="footer__li__img" src="./images/phone.png" alt="" /><a
        href=""
        class="footer__li__link"
        >Contacto</a
      >
    </div>
  </div>

  <div class="footer__socials">
    <img class="footer__socialImages" src="./images/link.svg" alt="" />
    <img class="footer__socialImages" src="./images/github.svg" alt="" />
    <img class="footer__socialImages" src="./images/x2.svg" alt="" />
  </div>

  <div class="footer__copy">©2023 - https://apx.school</div>
  `;

  e.appendChild(componentEl);
}
