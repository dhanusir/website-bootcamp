function upcaseChildOne() {
  // Select element by ID
  const child1 = document.getElementById('child1');
  child1.classList.add('hide');
}
function downcaseChildOne() {
  const child1 = document.getElementById('child1');

  child1.style.textTransform = "lowercase";
  child1.style.textAlign = "left";
  child1.style.color = "red";
}

function updateChild1Style() {
  const child1Style = document.getElementById('child1Style');
  const styleValue = child1Style.value;
  const child1 = document.getElementById('child1');

  // See split https://www.w3schools.com/jsref/jsref_split.asp
  let info = styleValue.split(":");
  child1.style[info[0]] = info[1];
}

function delChildThree() {
  // const child3 = document.getElementById('child3');
  // // DOM Properties and Methods: https://www.w3schools.com/jsref/dom_obj_all.asp
  // child3.remove();

  // Or another way, when .remove() is not available
  const parent = document.querySelector('.parent');
  // Debug
  // parent.removeChild(parent.childNodes[2]);
  parent.removeChild(parent.children[2]);
}

document.getElementById('addChild').addEventListener('click', function(){
  const childName = document.getElementById('addChildInput').value;
  const parent = document.querySelector('.parent');

  // create child
  let newChild = document.createElement('div');
  newChild.innerHTML = childName;
  newChild.classList.add('child');
  parent.appendChild(newChild);
});

document.getElementById('updateColor').addEventListener('click', function(event) {
  const colorHex = document.getElementById('colorHex').value;
  // get all elements with class name 'child'
  const elements = document.getElementsByClassName('child');

  let i;
  for(i=0; i < elements.length; i++) {
    elements[i].style.color = colorHex;
  }
});
