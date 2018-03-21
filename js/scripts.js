console.log('Be like Browser, hello');

// Light Gallery
$('#gallery').lightGallery();

// Randomizer
var max = 3;
var randNum = Math.floor( Math.random() * max );

// Greetings
var msg0 = 'Come have a';
var msg1 = 'Have a';
var msg2 = 'Give me a';

// Change Greeting

$('h2 span').text( eval('msg' + randNum) );

console.log( randNum );

$('.parallax-window').parallax({imageSrc: 'img/tequila_lime.png'});