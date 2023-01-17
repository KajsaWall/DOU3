
// I resursen "https://randomuser.me/api/?results=20" finns det 20 random personer.
// Studera noggrannt hur resursen är strukturerad genom att öppna resursen direkt
// på webbläsaren eller console.logga den. Sedan ska du koda funktionen make_cards
// som utgår från resursen som har tagits emot och skapar en sida enligt videon.


fetch("https://randomuser.me/api/?results=20")
  .then(r => r.json())
  .then(make_cards);


function make_cards (resource) {
  console.log(resource.results);
  let result = resource.results;
  array_each(result, print_card);

  function print_card (card) {
    const card_dom = document.createElement("div");
    document.querySelector("div").append(card_dom);

    card_dom.innerHTML = `
    <div class="photo" style="background-image:url(${card.picture.large})"></div>
    <div class="name">${card.name.title} ${card.name.first} ${card.name.last}</div>
    `;
  }
};

