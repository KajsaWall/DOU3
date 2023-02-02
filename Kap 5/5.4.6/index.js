
/*
Använd
https://teaching.maumt.se/apis/random_color/?all&bullet

Jag har skapat en lösning där man kan ändra antalet rader och kolumner i gridden som
ska fyllas med färgade celler.
Det går bra om ni föredrar att koda en lösning med ett fast antal rader och kolumner.

*/

// Globala konstanter och variabler
const n_columns = 13; // Måste vara udda (så att knappen kan vara mitt i)
const n_rows = 13; // Måste vara udda
const middle_row = Math.ceil(n_rows / 2);     // Math.ceil() rundar av decimaler uppåt. Math.ceil(1.3) = 2.
const middle_col = Math.ceil(n_columns / 2);
let free_spots = [];  // Arrayen för alla lediga celler i gridden


// Uppdatera griddens CSS
document.getElementById("wrapper").style.gridTemplateColumns = `repeat(${n_columns}, 1fr)`;
document.getElementById("wrapper").style.gridTemplateRows = `repeat(${n_rows}, 1fr)`;

// Placera knappen i mitten
document.getElementById("button_start").style.gridArea = `${middle_row} / ${middle_col}`;

// Aktivera knappen
document.getElementById("button_start").addEventListener("click", fill_colors);
function fill_colors () {

  // Deaktivera knappen så användaren inte kan göra fel
  document.getElementById("button_start").setAttribute("disabled", true);

  // Empty the grid (but leave the button!)  
  document.querySelectorAll("#wrapper .color").forEach(div => div.remove());

  // Vi säkerställer att free_spots är tom (den borde dock vara tom)
  free_spots = [];

  // Skapar ett element i arrayen free_spots för varje cell i gridden.
  // Vi kommer att använda dessa element för att veta vilka celler som har fyllts i och vilka
  // som fortfarande är lediga.
  // (lämna mitt-cellen utanför arrayen, där ligger ju knappen och den är från början upptagen)
  for (let row = 1; row <= n_rows; row++) {
    for (let col = 1; col <= n_columns; col++) {
      if (row === middle_row && col === middle_col) {
        continue;
      }
      free_spots.push({ row: row, col: col});
    }    
  }

  // Fyll i första boxen
  // Vi skickar med som argument arrayen av lediga celler
  get_one_color();
}

function get_one_color () {
  const request = "https://teaching.maumt.se/apis/random_color/?all&bullet";
  fetch(request)
    .then(r => r.json())
    .then(color => {

      // Välj en random index i arrayen free_spots
      const random_index = random_number(free_spots.length);

      // Splice elementen som har tagits bort.
      const current_spot = free_spots.splice(random_index, 1)[0];

      // Skapa boxen på sin plats i gridden
      create_box(color, current_spot);

      // Finns det fortfarande tomma spots?
      if (free_spots.length > 0) {
        // Om det finns, skapa en box till
        get_one_color(free_spots);
      } else {
        // Alla celler är ifyllda.
        // Reactivera knappen och byt text
        document.getElementById("button_start").removeAttribute("disabled");
        document.getElementById("button_start").textContent = "NEW";
      }
    
    });

}

function create_box (color, spot) {

  const div = document.createElement("div");
  div.classList.add("color");
  div.style.backgroundColor = color;
  div.style.gridArea = `${spot.row} / ${spot.col}`;

  // Append
  document.getElementById("wrapper").appendChild(div);

}

function random_number(max) {
  // Returnerar en random siffra mellan 0 och max - 1
  return Math.floor(max * Math.random());
}