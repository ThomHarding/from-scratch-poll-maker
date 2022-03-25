import { checkIfLoggedIn, getPolls, logout, createPoll } from '../fetch-utils.js';
import { renderPoll } from '../render-utils.js';

const logoutButton = document.getElementById('logout');
const finishPollButton = document.getElementById('finish-button');
const votes1UpButton = document.getElementById('option-1-up-button');
const votes1DownButton = document.getElementById('option-1-down-button');
const votes2UpButton = document.getElementById('option-2-up-button');
const votes2DownButton = document.getElementById('option-2-down-button');
const pastPollDisplay = document.getElementById('past-polls');
const newPollForm = document.getElementById('new-poll-form');
const currPollTitle = document.getElementById('current-poll-title');
const currVotes1Display = document.getElementById('option-1-votes');
const currVotes2Display = document.getElementById('option-2-votes');
const currOption1Name = document.getElementById('option-1-name');
const currOption2Name = document.getElementById('option-2-name');

checkIfLoggedIn();

let title = 'Title';
let votes1 = 0;
let votes2 = 0;
let option1 = 'Default Option 1';
let option2 = 'Default Option 2';

window.addEventListener('load', async () => {
    displayAllPolls();
});

votes1UpButton.addEventListener('click', () => {
    votes1++;
    displayCurrentPollEl();
});

votes1DownButton.addEventListener('click', () => {
    votes1--;
    displayCurrentPollEl();
});

votes2UpButton.addEventListener('click', () => {
    votes2++;
    displayCurrentPollEl();
});

votes2DownButton.addEventListener('click', () => {
    votes2--;
    displayCurrentPollEl();
});

logoutButton.addEventListener('click', () => {
    logout();
});

finishPollButton.addEventListener('click', async () => {
    await createPoll(title, option1, option2, votes1, votes2);
    displayAllPolls();
    title = 'Title';
    votes1 = 0;
    votes2 = 0;
    option1 = 'Default Option 1';
    option2 = 'Default Option 2';
    displayCurrentPollEl();
});

newPollForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(newPollForm);

    title = data.get('title');
    option1 = data.get('option-1-name');
    option2 = data.get('option-2-name');
    if (title === '') {
        title = 'Title';
    } if (option1 === '') {
        option1 = 'Default Option 1';
    } if (option2 === '') {
        option2 = 'Default Option 2';
    }
    newPollForm.reset();
    displayCurrentPollEl();
});

function displayCurrentPollEl() {
    let currentPolls = document.querySelectorAll('.current-poll');
    for (let poll of currentPolls) {
        poll.parentNode.removeChild(poll);
    }
    currPollTitle.textContent = title;
    currOption1Name.textContent = option1;
    currOption2Name.textContent = option2;
    currVotes1Display.textContent = votes1;
    currVotes2Display.textContent = votes2;
}

async function displayAllPolls() {
    const polls = await getPolls();
    pastPollDisplay.textContent = '';
    for (let poll of polls) {
        let renderedPoll = renderPoll(poll);
        renderedPoll.classList.add('poll');
        pastPollDisplay.append(renderedPoll);
    }
}