function addDiv(){
    content = document.createElement('div');
    content.classList.add('content');
    content.textContent = 'This is a div from DOM methods';
    container.appendChild(content);
}

const container = document.querySelector('.container');
let content;

let gridCount = 4;

for (i=0;i <= gridCount**2;i++){
    addDiv()
    console.log(i);
}


