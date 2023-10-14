function addDiv(){
    content = document.createElement('div');
    content.classList.add('content');
    content.textContent = '';
    container.appendChild(content);
}

const container = document.querySelector('.container');
let content;

let gridCount = 16;

for (i=0 ; i < gridCount**2 ; i++){
    addDiv()
    console.log(`${i+1} boxes`);
}


