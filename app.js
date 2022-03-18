// import functions and grab DOM elements

import { renderPollsEl } from './render-functions.js';

const questionInputEl = document.querySelector('#questioninput');
const option1InputEl = document.querySelector('#option1input');
const option2InputEl = document.querySelector('#option2input');
const option3InputEl = document.querySelector('#option3input');
const currentPollDestinationEl = document.querySelector('#current-poll-destination');
const option1ButtonAddEl = document.querySelector('#option1plus');
const option1ButtonMinusEl = document.querySelector('#option1minus');
const option2ButtonAddEl = document.querySelector('#option2plus');
const option2ButtonMinusEl = document.querySelector('#option2minus');
const pastPollDestinationEl = document.querySelector('#past-poll-destination');
const submitButtonEl = document.querySelector('#submit-button');
const publishButtonEl = document.querySelector('#publish-poll');
const dropDownEl = document.querySelector('#dropdown');
const option3ButtonAddEl = document.querySelector('#option3plus');
const option3ButtonMinusEl = document.querySelector('#option3minus');
const hidden1El = document.querySelector('.hidden1');
const hidden2El = document.querySelector('.hidden2');
const hidden3El = document.querySelector('.hidden3');
const hidden4El = document.querySelector('.hidden4');
const hidden5El = document.querySelector('.hidden5');





// let state

let question = '';
let option1 = '';
let option2 = '';
let option3 = '';
let option1Votes = 0;
let option2Votes = 0;
let option3Votes = 0;
const pastPollsArray = [];

dropDownEl.addEventListener('change', () => {

    const value = dropDownEl.value;
    if (Number(value) === 3) {
        hidden1El.style.display = 'flex';
        hidden2El.style.display = 'flex';
        hidden3El.style.display = 'flex';
        hidden4El.style.display = 'flex';
        hidden5El.style.display = 'flex';
        
       
        
    }
    
});



// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

submitButtonEl.addEventListener('click', () => {

    question = questionInputEl.value;
        
    
    option1 = option1InputEl.value;
    option2 = option2InputEl.value;
    option3 = option3InputEl.value;
    
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

option2ButtonMinusEl.addEventListener('click', () => {

    option2Votes--;
    displayCurrentPoll();
    
});

option3ButtonAddEl.addEventListener('click', () => {

    option3Votes++;
    displayCurrentPoll();
    
});
  
option3ButtonMinusEl.addEventListener('click', () => {

    option3Votes--;
    displayCurrentPoll();
    
});


publishButtonEl.addEventListener('click', () => {

    const pastPolls = {

        question: question,
        option1: option1,
        option2: option2,
        option1Votes: option1Votes,
        option2Votes: option2Votes,
        option3Votes: option3Votes,
    };
    
    // renderPollsEl(question, option1, option2, option1Votes, option2Votes);

    pastPollsArray.push(pastPolls);

    displayCurrentPoll();

    displayAllPolls();

    currentPollDestinationEl.textContent = '';
    option1Votes = 0;
    option2Votes = 0;
    option3Votes = 0;

 




  
});

function displayAllPolls(){

    pastPollDestinationEl.textContent = '';

    for (let pastPoll of pastPollsArray) {
        // make some stuff
        // when you create a DOM element, lets call that RENDER
        const container = renderPollsEl(pastPoll.question, pastPoll.option1, pastPoll.option2, pastPoll.option3, pastPoll.option1Votes, pastPoll.option2Votes, pastPoll.option3Votes);
  
        pastPollDestinationEl.append(container);

    }


   
}

  






function displayCurrentPoll() {

    const pollEl = renderPollsEl(question, option1, option2, option3, option1Votes, option2Votes, option3Votes);

    currentPollDestinationEl.textContent = '';

    currentPollDestinationEl.append(pollEl);
  
    

}