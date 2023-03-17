"use strict";


document.querySelector("button").addEventListener("click", do_one_set) 

async function do_one_set () { 

  const n_people = 1000;
  const people = await get_people(n_people);
  if (people) { 
    const distribution = statistics(people);
    console.log(distribution);
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
  //Randomuser returnerar ett objekt med två nycklar. results och info. results har en array med objekt beroende på hur många personer vi kallar.
  const resource = await controlled_fetch(request);
  console.log(resource);
  if (resource) {
    return resource.results;
  } else {
    return false;
  }
}