const request = new Request("https://teaching.maumt.se/apis/random_number/?t_min=1");

get_number();

async function get_number () {
    const response1 = await fetch(request);
    const number1 = await response1.json();
    document.querySelector("#number1").textContent = number1;
    const response2 = await fetch(request);
    const number2 = await response2.json();
    document.querySelector("#number2").textContent = number2;
    document.querySelector("#sum").textContent = number1 + number2;
}

