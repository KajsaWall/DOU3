/*

I denna övning anväder vi oss av en av webbresurserna som visades i videon.
Webbresursen är en random siffra mellan 1 och 99.

Övningen går ut på att på sidan skriva alla siffror från 1 till siffran som vi får från webbresursen,
som övningens video visar.

*/

fetch("https://www.maumt.se/dbp/dbp22/chunks_material/resources/number.php")
  .then(r => r.text())
  .then(countup);


function countup (resource) {
  for (let i = 0; i < resource; i++) {
    document.querySelector("body > div").innerHTML += `
    <div>${i}</div>
    `;
  }
}




/*
function countup (resource) {

  console.log(resource);

  let wrapper = document.querySelector("#wrapper");

    for(let i = 0; i <= resource; i++) {
      let new_number = document.createElement("div");
      new_number.textContent = i;
      new_number.classList.add("number_class");
      wrapper.append(new_number);
    
  }
}
*/
