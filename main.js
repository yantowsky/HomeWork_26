const numberCards = [];
const personCards = [];
const letterCard = ["J", "Q", "K", "T"];
let allCards = [];

let cardSuitImg = [
    `<img src="./images/clubs.svg" alt="clubs">`,
    `<img src="./images/spades.svg" alt="spades">`,
    `<img src="./images/diamonds.svg" alt="diamonds">`,
    `<img src="./images/hearts.svg" alt="hearts">`
];

let cardPersonImg = [
    `<img class="person" src="./images/jack.svg" alt="jacks">`,
    `<img class="person" src="./images/queen.svg" alt="queen">`,
    `<img class="person" src="./images/king.svg" alt="king">`
];

let cardVipImg = [
    `<img class="person" src="./images/clubs.svg" alt="clubs">`,
    `<img class="person" src="./images/spades.svg" alt="spades">`,
    `<img class="person" src="./images/diamonds.svg" alt="diamonds">`,
    `<img class="person" src="./images/hearts.svg" alt="hearts">`
];

for (i = 2; i <= 10; i++) {
    for (j = 0; j < cardSuitImg.length; j++) {
        numberCards.push(`
            <div class="card">
                <div class="card__info">
                    ${i}${cardSuitImg[j]}
                </div>
                <div class="card__info">
                    ${i}${cardSuitImg[j]}
                </div>
            </div>
        `);
    }
    j -= 4;
}

for (i = 0; i < 4; i++) {
    if (i !== 3) {
        for (j = 0; j < cardSuitImg.length; j++) {
            personCards.push(`
                <div class="card card--person">
                    <div class="card__info">
                        ${letterCard[i]}${cardSuitImg[j]}
                    </div>
                    ${cardPersonImg[i]}
                    <div class="card__info">
                        ${letterCard[i]}${cardSuitImg[j]}
                    </div>
                </div>
            `);
        }
    } else {
        for (j = 0; j < cardSuitImg.length; j++) {
            personCards.push(`
                <div class="card card--person">
                    <div class="card__info">
                        ${letterCard[i]}${cardSuitImg[j]}
                    </div>
                    ${cardVipImg[j]}
                    <div class="card__info">
                        ${letterCard[i]}${cardSuitImg[j]}
                    </div>
                </div>
            `);
        }
    }
    j -= 4;
}

allCards = [...numberCards, ...personCards];

document.write(`<div class="wrapper">${allCards.join("")}</div>`);