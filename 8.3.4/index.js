/*

För att simulera att det kan bli fel i uppkopplingen (NetworkError) så
ska ni använda funktionen get_request och skriva er fetch så här:

fetch(get_request);

Ni ska använda async i detta fall, så någonstans i koden ska det stå:
const response = await fetch(get_request);

*/
document.querySelector("button").addEventListener("click", f1);

function get_request () {
  const URL1 = "https://teaching.maumt.se/apis/random_color/";
  const URL2 = "alsödjkfhasöjdkfh";
  const coin = Math.random() > .5; // true 50% av gångerna och false 50% av gångerna.
  if (coin) {
    return URL1;
  } else {
    return URL2;
  }
}

async function f1 (event) {
      document.querySelector(".feedback").textContent = "Hämtar ny färg...";
      document.querySelector("button").setAttribute("disabled", true);

  try {
    const response = await fetch(get_request());
    const resource = await response.json();
        document.querySelector("body").style.backgroundColor = resource;
        document.querySelector(".feedback").textContent = "Ny färg: " + resource;
        document.querySelector("button").removeAttribute("disabled");
  } catch (error) {
    document.querySelector("body").style.backgroundColor = "white";
    document.querySelector(".feedback").innerHTML = `Hej, det verkar vara något fel i uppkopplingen. <br> Testa gärna igen senare.`
    document.querySelector("button").removeAttribute("disabled");
  };
  
}