export function renderPoll(poll) {
    let renderedPoll = document.createElement('div');
    let pollTitleDiv = document.createElement('div');
    let option1Div = document.createElement('div');
    let option2Div = document.createElement('div');
    let option1Votes = document.createElement('div');
    let option2Votes = document.createElement('div');
    
    pollTitleDiv.textContent = poll.title;
    option1Div.textContent = poll.option1;
    option2Div.textContent = poll.option2;
    option1Votes.textContent = poll.votes1;
    option2Votes.textContent = poll.votes2;
    
    renderedPoll.append(pollTitleDiv, option1Div, option1Votes, option2Div, option2Votes,);
    
    return renderedPoll;
}