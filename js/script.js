function hello(){
    console.log('Hello World!');
}

function addDiv(){
    content = document.createElement('div');
    content.classList.add('content');
    content.textContent = 'This is a div from DOM methods';
    container.appendChild(content);
}

const container = document.querySelector('.container');
let content;


