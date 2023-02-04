const request = new Request("https://teaching.maumt.se/apis/random_number/?t_min=1");

start_up();

async function get_number () {
    const response1 = await fetch(request);
    const number1 = await response1.json();
    return number1;
}

async function start_up() {
    let n1 = await get_number();
    console.log(n1);
}

