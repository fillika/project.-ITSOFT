import AppService from './modules/app.service'
import {
  config
} from './modules/config'
// import './modules/header.component'
import './css/index.css' // Импортирую css файлы
import './less/index.less' // Импортирую less файлы
import './scss/index.scss' // Импортирую scss файлы
import 'jquery' // Импортирую jquery
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
  $(".left-sidebar__navigation").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
});
});

let mainSection = document.querySelector('.main-section');
let sideBar = document.querySelector('.left-sidebar');
let tabs = document.querySelectorAll('.risk-groups__navigation a');
let questionForm = document.querySelector('.header__question');

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
    questionForm.removeAttribute('style');
  }
})

document.querySelector('.burger').addEventListener('click', (element) => {
  element.preventDefault();

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


let links = document.querySelectorAll('.risk-groups__link');

links.forEach((e) => {
  e.addEventListener('click', () => {
   
    let data = e.getAttribute('data-set');
    let article = document.querySelectorAll('.risk-groups__tab')
  
    for (let i = 0; i < article.length; i++) {
      let dataArticle = article[i].getAttribute('data-set')
      article[i].classList.remove('active-tab')
      links[i].classList.remove('active')
      
      if (dataArticle == data) {
        article[i].classList.add('active-tab')
        links[i].classList.add('active')
      }
    }

  })
})

let feedbackFoorm = document.querySelector('.header__question')

feedbackFoorm.addEventListener('click', () => {
  let form = document.querySelector('.feedback-form');
  if (form.classList.contains('hide-feedback')) {
    form.classList.remove('hide-feedback')
  } else {
    form.classList.add('hide-feedback')
  }
})
