function addDiv(){
    content = document.createElement('div');
    content.classList.add('content');
    content.textContent = '';
    content.style.width = `${(600/gridCount)-2}px`;  //content border 2px
    content.style.height = `${(600/gridCount)-2}px`;
    container.appendChild(content);

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
    trigger.classList.add('up');
}));

triggers.forEach(trigger => trigger.addEventListener('mouseenter', (e) => {
    console.log(e);
    if (e.buttons === 1) {
        trigger.classList.add('up');
    }
    //e.buttons === 1
    //target === div.content.up
}));







//create git branch
//create event listerner for mousedown

