let clase = document.createElement("class")
clase.className= "item";

let text = document.createTextNode('Ingrediente');
clase.appendChild(text);

let li = document.createElement('li');
li.textContent = 'potatoes';
clase.appendChild(li);
document.body.appendChild(clase);

console.log(clase);
console.log(li);


