'use strict'; // use strict mode for better JS code

// get the todo list element
let todoList = $('#todoList');

// click on a close button to hide the todo item
$('#todoList .todo-item .close').click(function(){
  $(this).parent().css('display', "none");
});

// add a "checked" icon when clicking on a todo item
$('#todoList .todo-item').click(function(){
  $(this).addClass('checked');
});

// // add new todo item when clicking the "Add" button
function addTask(){
  let taskName = $('#todoInput').val();

  // show error if task is empty
  if (taskName == '') {
    alert('Nothing to add.')
    return true;
  }

  // create todo item node
  let liNode = $("<li class='todo-item'>" + taskName + "<span class='close'>&times;</span></li>");

  liNode.click(function(){
    $(this).addClass('checked');
  })
  liNode.find('.close').click(function(){
    $(this).parent().css('display', "none");
  });

  $('#todoList').prepend(liNode);
  // reset input
  $('#todoInput').val('');
}

// handle enter key press
$('#todoInput').keydown(function(e){
  if(e.key == "Enter") {
    addTask();
  }
});
