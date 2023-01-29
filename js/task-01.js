const name = document.getElementsByClassName("item");

const tag = document.getElementsByTagName('h2');
const list = document.getElementsByTagName("ul");


let message= 'Number of categories:' + name.length;
console.log(message);

let message1= 'Category: ' + tag[0].textContent;
console.log(message1);
let messagealt1= 'Elements:' + list[1].textContent;
console.log(messagealt1);

let message3= 'Category: ' + tag[1].textContent;
console.log(message3);
let messagealt2= 'Elements:' + list[2].textContent;
console.log(messagealt2);

let message4= 'Category: ' + tag[2].textContent;
console.log(message4);
let messagealt3= 'Elements:' + list[3].textContent;
console.log(messagealt3);
