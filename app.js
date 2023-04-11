const today = new Date();
const hourNow = today.getHours();
const timeNow = today.toLocaleTimeString();
let hello ="welcome to my Website";
let greeting;




if (hourNow > 18) {
    greeting = 'Good evening' ;
} else if (hourNow > 12) {
    greeting = 'Good afternoon' ;
} else if (hourNow > 0) {
    greeting = 'Good morning';
} else {
    greeting =' Welcome' ;
}

document.write('<h2>' + greeting +'<br>'+ timeNow + '</h2>' + '<h2>'+ hello + '</h2>');
