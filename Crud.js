const newElement = document.createElement("h2");
newElement.textContent = "I am coming";
newElement.id = "second";

const element = document.getElementById("first");

element.after(newElement);


const newElement2 = document.createElement('h3');
newElement2.textContent = "She is also coming";
newElement2.id = "third";
// newElement2.className = "she";


newElement2.classList.add("she");
newElement2.classList.add("me");

newElement2.style.backgroundColor = "pink";
newElement2.style.fontSize = "20px";


element.before(newElement2);

console.log(newElement2);

