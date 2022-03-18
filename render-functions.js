export function renderPollsEl(question, option1, option2, option3, votes1, votes2, votes3){


    const pollEl = document.createElement('div');
    const questionEl = document.createElement('h3');
    const option1El = document.createElement('p');
    const option2El = document.createElement('p');
    

    questionEl.textContent = question;
    option1El.textContent = `${option1}: ${votes1}`;
    option2El.textContent = `${option2}: ${votes2}`;
    
    if (option3){
        const option3El = document.createElement('p');

        option3El.textContent = `${option3}: ${votes3}`;
        pollEl.append(questionEl, option1El, option2El, option3El);
    } else {
        pollEl.append(questionEl, option1El, option2El);
    }
  

    return pollEl;
}