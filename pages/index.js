function main() {
  const headerEl = document.querySelector(".header");
  const footerEl = document.querySelector(".footer");
  const contactEl = document.querySelector(".contact");
  const servicioEl = document.querySelector(".div__servicios");

  addHeader(headerEl);
  addFooter(footerEl);
  addContact(contactEl);
  addCard(servicioEl);
}

main();
