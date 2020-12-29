function upcaseChildOne() {
  // Select element by ID
  // const child1 = document.getElementById('child1');
  // child1.classList.add('upcase');

  const child1 = $('#child1');
  child1.addClass('upcase');
}
function downcaseChildOne() {
  // const child1 = document.getElementById('child1');
  // child1.style.textTransform = "lowercase";

  const child1 = $('#child1');
  child1.css('text-transform', 'lowercase');
}

function updateChild1Style() {
  $("#child1").attr("style", $("#child1Style").val())
}

// For Replacing Child use .replaceWith() See: https://api.jquery.com/replaceWith/

function delChildThree() {
  $('.parent #child3').remove();
}

// document.getElementById('addChild').addEventListener('click', function(){
//   const childName = document.getElementById('addChildInput').value;
//   const parent = document.querySelector('.parent');

//   // create child
//   let newChild = document.createElement('div');
//   newChild.innerHTML = childName;
//   // newChild.classList.add('child');
//   parent.appendChild(newChild);
// });

$('#addChild').click(function(){
  const childName = $("#addChildInput").val();
  $('.parent').append("<div class='child'>"+childName+"</div>");
});

// document.getElementById('updateColor').addEventListener('click', function(event) {
//   const colorHex = document.getElementById('colorHex').value;
//   const children = document.getElementsByClassName('child');

//   let i;
//   for(i=0; i < children.length; i++) {
//     children[i].style.color = colorHex;
//   }
// });

$('#updateColor').click(function(){
  const colorHex = $("#colorHex").val();
  $('.parent').children().css('color', colorHex);
});
