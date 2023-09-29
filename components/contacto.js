function addContact(e) {
  const componentEl = document.createElement("section");

  componentEl.className = "section";

  componentEl.innerHTML = ` 
    <div class="contact-container">
    <h2 class="contact-title">Escribime</h2>

    <form action="" class="contact-form">
      <div class="contact-nameandemail">
        <label class="contact-label" for=""
          >Nombre
          <input id="name" class="contact-input" type="text" placeholder="Tu nombre..."
        /></label>
        <label class="contact-label" for=""
          >Email
          <input id="email" class="contact-input" type="email" placeholder="tu@mail.com"
        /></label>
      </div>
      <label class="contact-label" for=""
        >Mensaje
        <textarea
          class="contact-input contact-textarea"
          name=""
          id="message"
          cols="30"
          rows="10"
        ></textarea>
      </label>

      <div class="contact-button-div">
        <button class="contact-button">
          Enviar <img src="./images/enviar.svg" alt="" />
        </button>
      </div>
    </form>
  </div>
    `;

  e.appendChild(componentEl);
  sendForm();
}

function sendForm() {
  const form = document.querySelector(".contact-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let nombre = form.querySelector("#name").value;
    let correo = form.querySelector("#email").value;
    let message = form.querySelector("#message").value;

    let data = `Nombre: ${nombre},email: ${correo},Mensaje: ${message}`;

    fetch("https://apx-api.vercel.app/api/utils/dwf", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ to: "lucas.82@hotmail.com.ar", message: data }),
    });
  });
}
