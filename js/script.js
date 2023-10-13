function addDiv(){
    content = document.createElement('div');
    content.classList.add('content');
    content.textContent = 'Child Box';
    container.appendChild(content);
}

const container = document.querySelector('.container');
let content;

let gridCount = 4;

for (i=0 ; i < gridCount**2 ; i++){
    addDiv()
    console.log(i);
}


