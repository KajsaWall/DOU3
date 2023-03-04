"use strict";


document.querySelector("button").addEventListener("click", do_one_set)

function do_one_set () {

  const n_people = 1000;
  start_up(n_people);

}

function start_up (amount) {

  const request = new Request("https://randomuser.me/api/?results=" + amount);
  fetch(request)
    .then(response_handler)
    .catch(e => {
      console.log("Error.");
    });

}

function response_handler (response) {

  if (!response.ok) {
    console.log("Error. Status: " + response.statusText);
  } else {
    response.json().then(resource => {
      const people = resource.results;
      const distribution = statistics(people);
      vizualise(distribution, people.length);
    });

  }

}