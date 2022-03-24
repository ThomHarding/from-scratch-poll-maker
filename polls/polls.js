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
//get the new poll form element

checkIfLoggedIn();

let votes1 = 0;
let votes2 = 0;

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

finishPollButton.addEventListener('click', () => {
    //insert current poll into supabase table
    displayAllPolls();
    //reset state
    displayCurrentPollEl();
});

function displayCurrentPollEl() {
    //update dom with state
}

function displayAllPolls() {
    //get the polls from supabase
    pastPollDisplay.textContent = '';
    //loop through polls got above
        //render it
        //append it to past polls
}

    submit add questions and options buttons
      update variable for question and options of current poll
      displalycurrentpollel