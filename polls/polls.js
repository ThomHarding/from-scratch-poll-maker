import { checkIfLoggedIn, getPolls, logout } from '../fetch-utils';

const logoutButton = document.getElementById('logout');
const finishPollButton = document.getElementById('finish-button');
const votes1UpButton =  document.getElementById('option-1-up-button');
const votes1DownButton =  document.getElementById('option-1-down-button');
const votes1Display = document.getElementById('option-1-votes');
const votes2UpButton =  document.getElementById('option-1-up-button');
const votes2DownButton =  document.getElementById('option-2-down-button');
const votes2Display = document.getElementById('option-2-votes');
const pastPollDisplay = document.getElementById('past-polls')
const newPollForm = document.getElementById('new-poll-form');
const currentPollDisplay = document.getElementById('current-poll');

checkIfLoggedIn();

let title = '';
let votes1 = 0;
let votes2 = 0;
let option1 = '';
let option2 = '';

let currentPoll = {title: '', option1: '', option2: '', votes1: 0, votes2: 0 };

window.addEventListener('load', async () => {
    await getPolls();
});

votes1UpButton.addEventListener('click', () => {
    votes1++;
    displayCurrentPollEl();
});

votes1UpButton.addEventListener('click', () => {
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
    //insert current poll into supabase table
    displayAllPolls();
    //reset state
    displayCurrentPollEl();
});

newPollForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(newPollForm);

    title = data.get('title');
    option1 = data.get('option-1-name');
    option2 = data.get('option-2-name');
    newPollForm.reset();
    displayCurrentPollEl();
});

function displayCurrentPollEl() {
    currentPollDisplay.textContent = '';
    updateCurrentPoll();
    let renderedPoll = renderPoll(currentPoll);
    renderedPoll.classList.add('current');
    currentPollDisplay.append(renderedPoll);
}

function updateCurrentPoll() {
    currentPoll = {
        title: title,
        option1: option1,
        option2: option2,
        votes1: votes1,
        votes2: votes2 };
}

async function displayAllPolls() {
    const polls = await getPolls();
    pastPollDisplay.textContent = '';
    for (let poll of polls) {
        let renderedPoll = renderPoll(poll);
        pastPollDisplay.append(renderedPoll);
    }
}