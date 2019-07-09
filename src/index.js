import AppService from './modules/app.service'
import {config} from './modules/config'
// import './modules/header.component'
import './css/index.css'// Импортирую css файлы
import './less/index.less'// Импортирую less файлы
import './scss/index.scss'// Импортирую scss файлы
// import './common.blocks/switch/tgSwitch'// Импортирую scss файлы
import 'jquery'// Импортирую jquery
// import './modules/Datepicker/datepicker'// Datepicker
// import './common.blocks/dropdown/dropdown'// Datepicker
import $ from 'jquery';
import './modules/slick/slick'
 
global.jQuery = $;
global.$ = $;

jQuery(document).ready(function($) {               // Для проверки работоспособности jQuery
  $('.slider').slick({
    infinite: false,
    dots: true,
    mobileFirst: true,
    arrows: true
  });
});

document.querySelector('.burger').addEventListener('click', (element) => {
  element.preventDefault();
  let sideBar = document.querySelector('.left-sidebar');
  let mainSection = document.querySelector('.main-section');

  if (sideBar.style.left != '0px') {
    sideBar.style.left = '0px';
    mainSection.style.marginLeft = '215px';
  } else {
    sideBar.style.left = '-215px';
    mainSection.style.marginLeft = '0px';
  }
});

let lupein = document.querySelectorAll('.eyes__lupein-adult');

lupein.forEach(function(element) {
  element.addEventListener('mouseenter', () => {
    let description = element.nextSibling;
    description.style.display = 'block';
    let eyeBlock = element.parentElement;


    eyeBlock.addEventListener('mouseleave', () => {
      description.style.display = 'none';
    })

  })
})