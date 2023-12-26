"use strict"
document.addEventListener("DOMContentLoaded", function(){
    let burgerIcon=document.getElementById("burger-icon");
    let menu = document.getElementById("menu");

    burgerIcon.addEventListener("click", function(){
        menu.classList.toggle("active");
    });
});

let button = document.querySelector('button');
let type = 'light';

let headStyle = (type) => {
  let head = document.getElementsByTagName('head')[0];
  let style = document.createElement('link');
  style.rel = 'stylesheet';
  style.id = 'colorTheme';
  style.href = `./style.${type}.css`;
  head.appendChild(style);
  document.documentElement.setAttribute('data-theme', type)
  console.log(style);
}

button.addEventListener('click', () => {
  let colorTheme = document.querySelector('#colorTheme');
  colorTheme.parentNode.removeChild(colorTheme);
  let typeTheme = document.documentElement.getAttribute('data-theme');
  typeTheme === 'light' ? headStyle('dark') : headStyle('light')
})

window.addEventListener('load', headStyle(type));