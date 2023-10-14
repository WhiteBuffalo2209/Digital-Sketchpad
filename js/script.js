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

let gridCount = 8;

for (i=0 ; i < gridCount**2 ; i++){
    addDiv()
    console.log(`${i+1} boxes`);
}


