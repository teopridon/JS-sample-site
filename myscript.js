var myHeading = document.querySelector('h1')

myHeading.textContent = 'Be Kind';

/* var myData = [7, "John", 17, "Jane"]; 

myData[3]; //Jane

myData.push(10); //add nr. 10 to end of array
myData.pop();      //remove the last added element
*/

document.querySelector('html'),onclick = function () {
    this.alert('Ouch! Stop poking me!')
}


var whaleImg = document.querySelector('img');

whaleImg.onclick = function () {
    var myImage = whaleImg.getAttribute('src');

    if(myImage === 'whale.jpg') {
        whaleImg.setAttribute('src', 'turtle.jpg');
    } else {
        whaleImg.setAttribute('src', 'whale.jpg');
    }
}

var nameButton = document.querySelector('button');
var myHeading =  document.querySelector('h1');

function setUserName() {
    'use strict';
    var myName = window.prompt('Please enter your name:');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Have a nice day, ' + myName + '!';
}

if (!localStorage.getItem('name')){
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Have a nice day, ' + storedName + '!';
}

nameButton.onclick = function () {
    'use strict';
    setUserName();
}