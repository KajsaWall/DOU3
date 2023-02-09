/*

Använd denna resurs för att hämta varje färg:
https://teaching.maumt.se/apis/random_color/


De fyra färgerna i varje grupp hämtas parallelt.
Varje grupp hämtas efter att den förra är på plats (serie).

*/

const color_score = {
  hotpink: 8,
  gold: 7,
  skyblue: 6,
  lightseagreen: 5,
  coral: 4,
  orange: 3,
  limegreen: 2,
  cadetblue: 1
};


function get_group () {
  const request = "https://teaching.maumt.se/apis/random_color/";
  let color_array = [];
  for(let i = 0; i < 4; i++) {
    fetch(request)
      .then(r => r.json())
      .then(color => {
        color_array.push(color);
        if(color_array.length === 4) {
          make_group(color_array);
        }
      });
  }
}

function make_group (color_array) {
  const wrapper = document.querySelector("#wrapper");
  console.log(color_array);
  const div = document.createElement("div");
  wrapper.append(div);
  div.classList.add("group");
  div.innerHTML = `<div class="colors"><div>`;

  div.querySelector(".colors").firstChild.remove();

  color_array
    .forEach(color => {
      const div_color = document.createElement("div");
      div_color.style.backgroundColor = color;
      div.querySelector(".colors").append(div_color);
    })

    const score_dom = document.createElement("div");
    score_dom.classList.add("score");
    div.append(score_dom);

    let scores = 0;
    color_array
      .forEach(color => {
        scores += color_score[color];
      });
    score_dom.textContent = scores;
    

    if (wrapper.querySelectorAll(".group").length < 4) {
      get_group();
    }  
}

get_group();
