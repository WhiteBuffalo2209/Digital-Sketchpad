function addDiv(){
    content = document.createElement('div');
    content.classList.add('content');
    content.textContent = '';
    content.style.width = `${(600/gridCount)-2}px`;  //content border 2px
    content.style.height = `${(600/gridCount)-2}px`;
    container.appendChild(content);
}
function generateRandomColor(){
    let maxVal = 0xFFFFFF;
    let randomNumber = Math.random()*maxVal;
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6,0);
    return `#${randColor.toUpperCase()}`;
}

const container = document.querySelector('.container');
let content;
let gridCount = 16;

for (i=0 ; i < gridCount**2 ; i++){
    addDiv()
    console.log(`${i+1} boxes`);
}

const triggers = document.querySelectorAll('.content');

triggers.forEach(trigger => trigger.addEventListener('mousedown', () => {
    trigger.style.backgroundColor = generateRandomColor();
}));
triggers.forEach(trigger => trigger.addEventListener('mouseenter', (e) => {
    if (e.buttons === 1) {
        trigger.style.backgroundColor = generateRandomColor();
    }
}));

const button = document.querySelector('button');


//button grid count


