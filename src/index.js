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
 
global.jQuery = $;
global.$ = $;

// jQuery(document).ready(function($) {               // Для проверки работоспособности jQuery
//   $('p').css('background-color', 'orange');
// });