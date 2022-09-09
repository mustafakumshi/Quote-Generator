'use strict'

let btn = document.querySelector("#new-quote");
let quoteVar = document.querySelector(".quote");
let personVar = document.querySelector(".person");

const quotes = [{
    quote: `"Do you not know that a man is not dead while his name is still spoken?"`,
    person: `Terry Pratchett`
}, {
    quote: `"If there's a book that you want to read, but it hasn't been written yet, then you must write it."`,
    person: `Toni Morrison`
}, {
    quote: `"Either write something worth reading or do something worth writing."`,
    person: `Benjamin Franklin`
}, {
    quote: `"I kept always two books in my pocket, one to read, one to write in."`,
    person: `Robert Louis Stevenson`
}, {
    quote: `"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success."`,
    person: `James Cameron`
}, {
    quote: `"Many of life's failures are people who did not realize how close they were to success when they gave up."`,
    person: `Thomas A. Edison`
}, {
    quote: `"Life is what happens when you're busy making other plans."`,
    person: `John Lennon`
}, {
    quote: `"The secret of success is to do the common thing uncommonly well."`,
    person: `John D. Rockefeller Jr.`
}, {
    quote: `"There are no secrets to success. It is the result of preparation, hard work, and learning from failure."`,
    person: `Colin Powell`
}, {
    quote: `"If you are not willing to risk the usual, you will have to settle for the ordinary."`,
    person: `Jim Rohn`
},
];

btn.addEventListener("click", function(){

    let random = Math.floor(Math.random() * quotes.length);


    quoteVar.innerText = quotes[random].quote;
    personVar.innerText = quotes[random].person;

})
