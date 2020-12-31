'use strict'; // use strict mode for better JS code

// click on a close button to hide the todo item
$('#todoList .todo-item .close').click(function(){
  // $(this) denotes clicked .close element
  // take its parent element and add the display to none using .css() method
});

// add a "checked" icon when clicking on a todo item
$('#todoList .todo-item').click(function(){
  // add 'checked' class to this clicked element
});

// // add new todo item when clicking the "Add" button
function addTask(){
  // take the value of input #todoInput using .val() method
  // and store into a variable say taskName

  // show error if task is empty
  if (taskName == '') {
    alert('Nothing to add.')
    return true;
  }

  // create todo item node
  let liNode = $("<li class='todo-item'>" + taskName + "<span class='close'>&times;</span></li>");

  // enable click listener to node post creation
  liNode.click(function(){
    // add class 'checked' using .addClass() method
  })
  // find the .close span element and enable click listener
  liNode.find('.close').click(function(){
    // add display to none css to its parent
  });

  // prepend the #todoList with above liNode
  // reset input
}

// handle enter key press
$('#todoInput').keydown(function(e){
  if(e.key == "Enter") {
    // call the addTask() method
  }
});
