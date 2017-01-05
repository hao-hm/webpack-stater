import 'babel-polyfill';
import 'font-awesome/scss/font-awesome.scss';
import 'bulma/bulma.sass';
import './index.scss';



//demo ES6
let a = [1,2,3];
let b = [1,2,3].map(n => n + 1);
console.log(b);
//handle nav toggle
const burger = document.querySelector('.nav-toggle');
const menu = document.querySelector('.nav-menu');
burger.addEventListener('click', function() {
  burger.classList.toggle('is-active');
  menu.classList.toggle('is-active');
});