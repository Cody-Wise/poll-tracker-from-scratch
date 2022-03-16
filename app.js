// import functions and grab DOM elements

import { renderPollsEl } from './render-functions.js';

const questionInputEl = document.querySelector('#questioninput');
const option1InputEl = document.querySelector('#option1input');
const option2InputEl = document.querySelector('#option2input');
const currentPollDestinationEl = document.querySelector('#current-poll-destination');
const option1ButtonAddEl = document.querySelector('#option1plus');
const option1ButtonMinusEl = document.querySelector('#option1minus');
const option2ButtonAddEl = document.querySelector('#option2plus');
const option2ButtonMinusEl = document.querySelector('#option2minus');
const pastPollDestinationEl = document.querySelector('#past-poll-destination');
const submitButtonEl = document.querySelector('#submit-button');
const publishButtonEl = document.querySelector('#publish-poll');



// let state

let question = '';
let option1 = '';
let option2 = '';
let option1Votes = 0;
let option2Votes = 0;
const pastPollsArray = [];


// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

submitButtonEl.addEventListener('click', () => {

    question = questionInputEl.value;

    option1 = option1InputEl.value;
    option2 = option2InputEl.value;

    displayCurrentPoll();
    
});

option1ButtonAddEl.addEventListener('click', () => {

    option1Votes++;
    displayCurrentPoll();
    
});
  
option1ButtonMinusEl.addEventListener('click', () => {

    option1Votes--;
    displayCurrentPoll();
    
});

option2ButtonAddEl.addEventListener('click', () => {

    option2Votes++;
    displayCurrentPoll();
    
});
  
option1ButtonMinusEl.addEventListener('click', () => {

    option2Votes--;
    displayCurrentPoll();
    
});


publishButtonEl.addEventListener('click', () => {

  const poll = renderPollsEl(question, option1, option2, option1Votes, option2Votes);

  pastPollsArray.push(poll);

  displayAllPolls();

  currentPollDestinationEl.textContent = '';




  
});

function displayAllPolls(){

  pastPollDestinationEl.textContent = '';

  for (let polls of pastPollsArray){

    const container = renderPollsEl(question, option1, option2, option1Votes, option2Votes);

    pastPollDestinationEl.append(container);

  }
}

  






function displayCurrentPoll() {

    const pollEl = renderPollsEl(question, option1, option2, option1Votes, option2Votes);

    currentPollDestinationEl.textContent = '';

    currentPollDestinationEl.append(pollEl);
  
}





