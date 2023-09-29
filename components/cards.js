function addCard(e) {
  const componentEl = document.createElement("div");
  componentEl.className = "div";
  componentEl.innerHTML = ` 
  
  <template id="contenido-container">
      <div class="contenido-container">
                  <img
            class="container-image"
            src="https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU"
            alt=""
          />

          <h4 class="container-titulo">Un trabajo</h4>
        <p class="container-text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores,
          dignissimos necessitatibus repellendus architecto sunt consequatur at
          assumenda.
        </p>
         </div>
    </template>

  `;

  e.appendChild(componentEl);
  Contentful();
}

function obtenerData(resultado) {
  const content = document.querySelector(".div__servicios");
  const template = document.querySelector("#contenido-container");

  let imagenes = {};

  for (let i = 0; i < resultado.items.length; i++) {
    imagenes[resultado.includes.Asset[i].sys.id] =
      resultado.includes.Asset[i].fields.file.url;
  }

  for (i = 0; i < resultado.items.length; i++) {
    const clone = document.importNode(template.content, true); // poner content (contenido del template)
    clone.querySelector(".container-titulo").textContent =
      resultado.items[i].fields.titulo;
    clone.querySelector(".container-text").textContent =
      resultado.items[i].fields.texto;
    clone
      .querySelector(".container-image")
      .setAttribute("src", imagenes[resultado.items[i].fields.imagen.sys.id]);

    content.appendChild(clone);
  }
}

function Contentful() {
  fetch(
    "https://cdn.contentful.com/spaces/xvc1gx2u86ps/environments/master/entries?access_token=vhRKm_LE9OHrMPOFHbImd3mMFRKI3Gvuc7JToATa5PU&content_type=servicios"
  )
    .then((response) => response.json())
    .then((data) => {
      obtenerData(data);
    });
}
