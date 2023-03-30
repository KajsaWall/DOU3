function timer (sekunder) {
    let millisekunder = sekunder * 1000;
    if(sekunder === 1) {
        setTimeout(() => {console.log(`${millisekunder} sekund har gått`);}, millisekunder);
    } else {
        setTimeout(() => {console.log(`${millisekunder} sekunder har gått`);}, millisekunder);
    }
}

const numbers = [1, 2, 3];

for (const number of numbers) {
    timer(number);
}