// Create elements within javascript
let domElements = {
    body: document.querySelector('body'),
    btn: document.createElement('button'),
    divNum: 20
}

// Create and append grids
function appendGrid(num) {
    let main = document.createElement('div');
    gridNum = num * num;

    // Append 16 div into container div
    for (let i = 0; i < gridNum; i++) {
        let div = document.createElement('div');
        // div.textContent = i;
        main.appendChild(div);
        // console.log(i)
    }

    // Place all in html body
    main.classList.add('container');
    domElements.body.appendChild(main);
    dynamicDivWidth();
    hoverEffect();
}

// Add class to change color of div when hovered
function hoverEffect() {
    let divColor = document.querySelectorAll('.container div');

    function hoveredDiv(e) {
        if (this.classList.contains('col')) {
            console.log(this.style.backgroundColor)
        } else {
            this.classList.add('col');
            this.style.backgroundColor = randomColor();
        }
    }

    divColor.forEach(divColor => divColor.addEventListener('mouseover', hoveredDiv));
}

// Replay button to prompt user and reset game
domElements.btn.addEventListener('click', function () {
    let gridNum = prompt('Enter number from 1-100');
    domElements.divNum = gridNum;

    document.querySelector('.container').remove();
    appendGrid(domElements.divNum);
});

// Dynamic width for div children
function dynamicDivWidth() {
    let parentElem = document.querySelector('.container'),
        childElem = document.querySelectorAll('.container div'),
        widthViewP = viewportWidth();
    let vwVal = 100 * (Math.floor(parentElem.offsetWidth / domElements.divNum) - 1) / widthViewP + 'vw';

    for (const child of childElem) {
        child.style.flexBasis = vwVal; // calculate the width for each div using input number
        // console.log(vwVal);
    }
}

// Get viewport to calculate individual grid width
function viewportWidth() {
    var win = window,
        doc = document,
        docElem = doc.documentElement,
        body = doc.getElementsByTagName('body')[0],
        x = win.innerWidth || docElem.clientWidth || body.clientWidth;
    return x;
}

// Generate random rgb color
function randomColor() {
    let rgb = {
        r: Math.round(Math.random() * 255),
        g: Math.round(Math.random() * 255),
        b: Math.round(Math.random() * 255),
        color: function () {
            return 'rgb(' + this.r + ',' + this.g + ',' + this.b + ')';
        }
    };

    return rgb.color();
}

// Add replay button to page 
domElements.btn.textContent = 'Replay';
domElements.body.appendChild(domElements.btn);

// Initial load
appendGrid(domElements.divNum);




