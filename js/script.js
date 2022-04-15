// Create elements within javascript
const domElements = {
    body: document.querySelector('body'),
    main: document.createElement('div')
}

// Append 16 div into container div
let divNum = 16 * 16;

for (let i = 0; i < divNum; i++) {
    let div = document.createElement('div');
    // div.textContent = i;
    domElements.main.appendChild(div);
}

// Place all in html body
domElements.main.classList.add('container');
domElements.body.appendChild(domElements.main);

// Change color of div when hovered
let divColor = document.querySelectorAll('.container div');

function hoveredDiv(e) {
    this.classList.add('color');
}

divColor.forEach(divColor => divColor.addEventListener('mouseover', hoveredDiv));
