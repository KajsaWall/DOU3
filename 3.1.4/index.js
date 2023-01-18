
const o1 = {
  m1: function () {
    console.log("MAU");
  },
  m2: function () {
    console.log("Malmö");
  },
  k1: "Norrland"
}



const a = {
  kk: function () {
    document.querySelector("body > div").textContent = "OK";
  },
  ff: function () {
    document.querySelector("body > div").textContent = "NOT OK";
  },
  jj: function () {
    console.log("OK");
  }
}



// 1) Använd dig av o1 för att logga "MAU" på consolen
o1.m1();


// 2) Använd dig av o1 för att logga "Malmö" på consolen
o1.m2();


// 3) Använd dig av o1 för att logga "Norrland" på consolen
console.log(o1.k1);


// 4) Använd dig av någon av objekten ovan för att visa "OK" på sidan (inte på consolen)
a.kk();

