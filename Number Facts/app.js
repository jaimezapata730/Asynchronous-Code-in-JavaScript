const h1 = document.querySelector('h1')

function changeColor(el, color) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            el.style.color = color;
            resolve()
        },1000)
    })
}

async function rainbow(el) {
    await changeColor(el, 'red')
    await changeColor(el, 'orange')
    await changeColor(el, 'yellow')
    await changeColor(el, 'green')
    await changeColor(el, 'blue')
    await changeColor(el, 'indigo')
    await changeColor(el, 'violet')
}

rainbow(h1)

let favNumber = 8;
let baseURL   = "http://numbersapi.com"

async function part1() {
    let data = await $.getJSON(`${baseURL}/${favNumber}?json`);
    console.log(data);
}
part1();

//part2.

const favNumbers = [8, 16, 28];
async function part2() {
    let data = await $.getJSON(`${baseURL}/${favNumbers}?json`);
    console.log(data);
}
part2();

//part.3

async function part3() {
    let facts = await Promise.all(Array.from({length:4}, () => $.getJSON(`${baseURL}/${favNumber}?json`)));
    facts.forEach(data => {
        $("body").append(`<p>${data.text}</p>`);
    });
}
part3();

