import AppService from './modules/app.service'
import {
  config
} from './modules/config'
// import './modules/header.component'
import './css/index.css' // Импортирую css файлы
import './less/index.less' // Импортирую less файлы
import './scss/index.scss' // Импортирую scss файлы
// import './common.blocks/switch/tgSwitch'// Импортирую scss файлы
import 'jquery' // Импортирую jquery
// import './modules/Datepicker/datepicker'// Datepicker
// import './common.blocks/dropdown/dropdown'// Datepicker
import $ from 'jquery';
import './modules/slick/slick'

global.jQuery = $;
global.$ = $;

jQuery(document).ready(function ($) { // Для проверки работоспособности jQuery
  $('.slider').slick({
    infinite: false,
    dots: true,
    mobileFirst: true,
    arrows: true
  });
});

let mainSection = document.querySelector('.main-section');
let sideBar = document.querySelector('.left-sidebar');
let tabs = document.querySelectorAll('.risk-groups__navigation a');

function stopDefAction(evt) {
  evt.preventDefault();
}

tabs.forEach(function (element) {
  element.addEventListener('click', stopDefAction);
});

window.addEventListener('resize', () => {
  let openWindow = window.innerWidth;
  if (openWindow > 1100 && mainSection.style.marginLeft == '215px') {
    mainSection.removeAttribute('style');
    sideBar.removeAttribute('style');
  }
})

document.querySelector('.burger').addEventListener('click', (element) => {
  element.preventDefault();
  let questionForm = document.querySelector('.header__question');

  if (sideBar.style.left != '0px') {
    sideBar.style.left = '0px';
    mainSection.style.marginLeft = '215px';
    questionForm.style.display = 'none';
  } else {
    sideBar.removeAttribute('style');
    mainSection.removeAttribute('style');
    setTimeout(() => {
      questionForm.style.display = 'block';
    }, 300);
  }
});

let lupein = document.querySelectorAll('.eyes__lupein-adult');

lupein.forEach(function (element) {
  element.addEventListener('mouseenter', () => {
    let description = element.nextSibling;
    description.style.display = 'block';
    let eyeBlock = element.parentElement;

    eyeBlock.addEventListener('mouseleave', () => {
      description.style.display = 'none';
    })
  })
})
