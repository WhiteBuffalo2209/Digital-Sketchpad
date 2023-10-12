function hello(){
    console.log('Hello World!');
}

const container = document.querySelector('.container');
const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is a div from DOM methods';
container.appendChild(content);