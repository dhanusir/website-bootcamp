'use strict'; // use strict mode for better JS code

// get the todo list element
let todoList = document.getElementById("todoList");

// click on a close button to hide the todo item
let close = document.getElementsByClassName("close");
let i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    let spanParent = this.parentElement;  // this refers to current span
    spanParent.style.display = "none";
  }
}

// add a "checked" icon when clicking on a todo item
todoList.addEventListener('click', function(event){
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('checked');
  }
});

// add new todo item when clicking the "Add" button
function addTask() {
  // create li element
  let li = document.createElement("li");

  // create span element
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
  // register on click to newly created span
  span.onclick = function() {
    let spanParent = this.parentElement;
    spanParent.style.display = "none";
  }

  let inputValue = document.getElementById("todoInput").value;
  let txtNode = document.createTextNode(inputValue);
  li.appendChild(txtNode);
  li.classList.add('todo-item');
  if (inputValue === '') {
    alert("Nothing to add.");
  } else {
    // insert or prepend as first item
    todoList.insertBefore(li, todoList.firstChild);

    // See what happens when you do below
    // todoList.appendChild(li);
  }

  // reset the input
  document.getElementById("todoInput").value = "";
}

/****** Extras *********/
// NOTE: We have hard coded close icon in the HTML but we can
//       add dynamically like below
// create a "close" button and append it to each todo item

// let i;
// for (i = 0; i < todoList.children.length; i++) {
//   let span = document.createElement("span");
//   // \u00D7 denotes Unicode character code for X (multiplication)
//   let txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   todoList.children[i].appendChild(span);
// }
