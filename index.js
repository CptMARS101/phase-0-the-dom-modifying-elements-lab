// Write your code here!
const mainElement = document.getElementById(`main`);
const newHeader = document.createElement(`h1`);
newHeader.setAttribute('id', 'victory');
newHeader.textContent = 'Marcus is the champion';
mainElement.parentNode.replaceChild(newHeader, mainElement);
