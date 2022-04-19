// Create elements within javascript
let domElements = {
    body: document.querySelector('body'),
    btn: document.createElement('button'),
    divNum: 8
}

function appendGrid(num) {
    let main = document.createElement('div');
    num = domElements.divNum * domElements.divNum;

    // Append 16 div into container div
    for (let i = 0; i < num; i++) {
        let div = document.createElement('div');
        // div.textContent = i;
        main.appendChild(div);
        console.log(i)
    }

    // Place all in html body
    main.classList.add('container');
    domElements.body.appendChild(main);
}

function hoverEffect() {
    // Change color of div when hovered
    let divColor = document.querySelectorAll('.container div');

    function hoveredDiv(e) {
        this.classList.add('color');
        console.log(this);
    }

    divColor.forEach(divColor => divColor.addEventListener('mouseover', hoveredDiv));
}

domElements.btn.addEventListener('click', function () {
    let gridNum = prompt('Enter number from 1-100');
    domElements.divNum = gridNum * gridNum;

    console.log(domElements.divNum)

    document.querySelector('.container').remove();
    appendGrid(domElements.divNum);
    hoverEffect();

});

// Dynamic width for div children
function dynamicDivWidth() {
    let parentElem = document.querySelector('.container'),
        childElem = document.querySelectorAll('.container div');

    for (const child of childElem) {
        child.style.flexBasis = Math.floor((parentElem.offsetWidth / domElements.divNum) - 2) + 'px'; // calculate the width for each div using input number
    }
}


// Add replay button to page 
domElements.btn.textContent = 'Replay';
domElements.body.appendChild(domElements.btn);

// Initial load
appendGrid(domElements.divNum);
hoverEffect();
dynamicDivWidth();




