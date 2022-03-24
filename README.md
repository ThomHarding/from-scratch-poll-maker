required html
  home page
    login form
    login button

    signup form
    signup button
  polls page
    logout button

    submit form div
    increment poll votes buttons
    decrement poll votes buttons
    current poll div
    past polls div
required js
  app js
    displaycurrentpollel: displays current polll state to current pollelement
    displayallpolls: clears, displays past polls
  polls.js
    on load
      displayallpolls
    increment/decrement event listeners
    submit add questions and options buttons
      update variable for question and options of current poll
      displalycurrentpollel
    finish poll button
      add current poll to past polls in supabase
      fetch polls form supabase
      displayallpolls
  fetch utils
    check if they're logged in
    sign up
    sign in
    logout
    getPolls
    makePoll
  render utils
    renderPoll(poll): return dom node of poll

