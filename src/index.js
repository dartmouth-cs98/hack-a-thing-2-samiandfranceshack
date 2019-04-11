import $ from 'jquery';
import './style.scss';

let num = 0;
window.setInterval(() => {
  $('#main').html(`you've been on this page for ${num} seconds`);
  num += 1;
}, 1000);
