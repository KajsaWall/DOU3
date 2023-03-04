"use strict";


document.querySelector("button").addEventListener("click", do_one_set)

async function do_one_set () {

  const n_people = 1000;
  const people = await get_people(n_people);
  if (people) {
    const distribution = statistics(people);
    vizualise(distribution, n_people);
  } else {
    console.log("Problems getting the list of users");
  }

}

async function controlled_fetch(_request) {

  try {
    
    const response = await fetch(_request);
    if (!response.ok) {
      console.log("Error. Status: " + response.statusText);
      return false;
    }

    return response.json();

  } catch (error) {

    console.log("Error.");
    return false;

  }
  
}

async function get_people (amount) {
  const request = new Request("https://randomuser.me/api/?results=" + amount);
  const resource = await controlled_fetch(request);
  if (resource) {
    return resource.results;
  } else {
    return false;
  }
}