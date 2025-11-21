// Add javascript code to Party Parrot Clicker such that:
const state = {
  clickCount: 0,
  imgElement: null,
  h1Element: null,
  buttonElement: null
};

console.log(state);

const counter = () => {
  state.clickCount += 1;
  console.log(state.clickCount);
  state.h1Element.textContent = `Clicks: ${state.clickCount}`;
};

const resetCounter = () => {
  state.clickCount = 0;
  state.h1Element.textContent = `Clicks: ${state.clickCount}`
};

const registerEvents = () => {
  state.imgElement.addEventListener('click', counter);
  state.buttonElement.addEventListener('click', resetCounter);

};

const loadControls = () => {
  state.imgElement= document.getElementsByTagName('img')[0];
  state.h1Element= document.getElementsByTagName('h1')[0];
  state.buttonElement= document.getElementById('resetButton');
  
};


const onLoaded = () => {
  // steps to carry out when the page has loaded
  loadControls();
  registerEvents();
};


// document.addEventListener('DOMContentLoaded', onLoaded);
onLoaded();


// 1. A click on the Party Parrot increases the counter by 1
// 2. Add a button called ‘reset’ that will reset the
//    click count to ‘0’.
// 3. Add an effect whenever the clickCount
//    reaches a specific number.
//    (Ex: make parrot bigger, smaller, change the text/emoji,
//    etc.)

// Extra:
// // Box 1: When the mouse hovers over Box 1, switch the background to pink
// Box 2: When the spacebar is pressed down, make the text in Box 2 turn into a flan emoji
// Box 3: When Box 3 is clicked on, make Party Parrot appear and disappear
// Box 4: When Box 4 is double clicked, an alert shows up
