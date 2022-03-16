export function renderPollsEl(question, option1, option2, votes1, votes2){


    const pollEl = document.createElement('div');
    const questionEl = document.createElement('h3');
    const option1El = document.createElement('p');
    const option2El = document.createElement('p');

    questionEl.textContent = question;
    option1El.textContent = `${option1}: ${votes1}`;
    option2El.textContent = `${option2}: ${votes2}`;

    pollEl.append(questionEl, option1El, option2El);

    return pollEl;
}