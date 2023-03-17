"user strict";

function statistics (people) {
  
  const country_counters = [];
  people.forEach(person => {
    if (!country_counters.find(cc => cc.country === person.location.country)) {
      //om cc.country inte kan hittas i arrayen counttry_counters så ska detta hända
      country_counters.push({
        counter: 0,
        country: person.location.country
      });
    }
    country_counters
      .find(cc => cc.country === person.location.country).counter++;
  });

  return country_counters;
}

function two_decimals (number) {
  return Math.round(100 * number) / 100;
}

function vizualise (distribution, n_people) {
  console.log(distribution);
  const main_dom = document.querySelector("main");
  console.log(main_dom);
  const is_first = main_dom.childNodes.length === 0;

  const column_dom = document.createElement("ul");
  main_dom.append(column_dom);

  distribution.sort((a,b) => a.country < b.country ? 1:-1);

  if (is_first) {

    column_dom.innerHTML = "<li>Statistics</li>";

    for (const country_counter of distribution) {
      column_dom.innerHTML += `<li>${country_counter.country}</li>`;
    }

    vizualise(distribution, n_people);

  } else {

    const n_series = document.querySelectorAll("main ul").length - 1;
    column_dom.innerHTML = `<li>S-${n_series}</li>`;
    let sum = 0;
    for (const country_counter of distribution) {
      // for (const key in distribution) {
      const pc = two_decimals(100 * country_counter.counter / n_people);
      column_dom.innerHTML += `<li>${pc}%</li>`;
      sum += pc;
    }

    column_dom.innerHTML += `<li>${Math.round(sum)}</li>`;
  }
}