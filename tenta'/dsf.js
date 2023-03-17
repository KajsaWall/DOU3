
play_bingo(16, 5, 29);

async function play_bingo (n_cards, n_numbers, max_number) {

  const button_text = "NYTT NUMMER!";
  const button_new_number_dom = document.getElementById("new_number");
  button_new_number_dom.textContent = button_text;

  await make_all_cards(n_cards, n_numbers, max_number);

  make_control(max_number);

  button_new_number_dom.addEventListener("click", new_number_out);
  async function new_number_out() {

    button_new_number_dom.setAttribute("disable", true);
    button_new_number_dom.textContent = "Väntar på nytt nummer...";
    button_new_number_dom.setAttribute("disabled", true);

    const number = await get_new_number(max_number);

    button_new_number_dom.textContent = `It's a ${number}!`;
    document.getElementById("number_" + number).classList.add("just_out");

    setTimeout(() => {
      document.getElementById("number_" + number).classList.add("out");
      document.getElementById("number_" + number).classList.remove("just_out");

      button_new_number_dom.removeAttribute("disabled");
      button_new_number_dom.textContent = button_text;
    }, 2000);
    
    
    const cards_dom = document.querySelectorAll("#cards > div");
    cards_dom.forEach(card_dom => check_number_in_card(card_dom, number));
    cards_dom.forEach(check_bingo);
  }

}

async function get_new_number (max_number) {
  
  const request = new Request(`https://teaching.maumt.se/apis/random_number/?min=1&max=${max_number}t_min=3&t_len=2`);
  let number = await (await fetch(request)).json();
  console.log(number);
  number = parseInt(number);
  
  const numbers_out = get_numbers_out();
  if (numbers_out.includes(number)) {
      console.log(`ojdå, den har redan varit ute (${number})`);
      return get_new_number(max_number);
  }

  return number;
}
async function _get_new_number (max_number) {
  let number = -1;
  const request = new Request(`https://teaching.maumt.se/apis/random_number/?min=1&max=${max_number}t_min=3&t_len=2`);
  const numbers_out = get_numbers_out();

  while (number === -1) {
    number = await (await fetch(request)).json();
    if (numbers_out.includes(number)) {
      console.log(`ojdå, den har redan varit ute (${number})`);
      number = -1;
    }
  }
  return number;
}

function get_numbers_out () {
  let numbers_out = document.querySelectorAll(".number.out");

  numbers_out = Array.from(numbers_out);
  return numbers_out.map(n_dom => parseInt(n_dom.textContent));
}

function make_control (max_number) {
  for (let i = 1; i <= max_number; i++) {
    const div = document.createElement("div");
    document.getElementById("control").append(div);
    div.id = "number_" + i;
    div.classList.add("number");
    div.textContent = i;
  }
}

function check_bingo (card_dom) {
  const n_numbers_in_card = card_dom.querySelectorAll("div").length;
  const n_marked_numbers_in_card = card_dom.querySelectorAll(".marked").length;
  if (n_marked_numbers_in_card === n_numbers_in_card) {
    we_have_bingo(card_dom);
  }
}

function check_number_in_card(card_dom, number_out) {
  const numbers_dom = card_dom.querySelectorAll("div");
  numbers_dom.forEach(check_number);
  function check_number (number_dom) {
    const number_in_card = parseInt(number_dom.textContent);
    if (number_in_card === number_out) {
      number_dom.classList.add("marked");
    }
  }
}

function we_have_bingo (card_dom) {

  card_dom.classList.add("bingo");

  const bingo_word_dom = document.createElement("div");
  bingo_word_dom.classList.add("bingo_word");
  bingo_word_dom.textContent = "BINGO!";
  card_dom.append(bingo_word_dom);

  document.querySelector("body").classList.add("bingo");

  document.querySelectorAll(".card:not(.bingo)").forEach(c => c.classList.add("not_bingo"));

  const control_numbers_dom = document.querySelectorAll("#control > div");
  control_numbers_dom.forEach(deactivate);
  function deactivate (control_number_dom) {
    control_number_dom.style.pointerEvents = "none";
    if (!control_number_dom.classList.contains("out")) {
      control_number_dom.classList.add("not_out");
    }
  }
}



async function make_all_cards (n_cards, n_numbers, max_number) {
  for (let i = 0; i < n_cards; i++) {
    await make_card(n_numbers, max_number);
  }
}

async function get_number (max_number) {
  const request = new Request(`https://teaching.maumt.se/apis/random_number/?min=1&max=${max_number}&t_min=0&t_len=0.1`);
  let response = await fetch(request);
  let resource = await response.json();
  return resource;
 // return await (await fetch(request)).json();
}

async function make_card (n_numbers, max_number) {

  const div_card = document.createElement("div");
  div_card.classList.add("card");
  document.getElementById("cards").append(div_card);

  let numbers = await get_different_numbers(n_numbers, max_number);

  numbers.sort((a,b) => a - b).forEach(n => {
    const div_number = document.createElement("div");
    div_card.append(div_number);
    div_number.classList.add("number");
    div_number.textContent = n;
  });

}

async function get_different_numbers (n_numbers, max_number) {

  let numbers = [];
  while (numbers.length < n_numbers) {
    const proposed_number = await get_number(max_number);
    if (!numbers.includes(proposed_number)) {
      numbers.push(proposed_number);
    }
  }

  return numbers;

}