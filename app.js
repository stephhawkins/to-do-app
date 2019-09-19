function onReady() {
  const ADD_TODO_FORM = document.getElementById('addToDoForm');
  const NEW_TODO_TEXT = document.getElementById('newToDoText');
  const TODO_LIST = document.getElementById('toDoList');

  ADD_TODO_FORM.addEventListener('submit', (event) => {
    event.preventDefault();
    let title = NEW_TODO_TEXT.value;
    let newLi = document.createElement('li');
    let checkbox = document.createElement('input');
    checkbox.type = "checkbox";

    let deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener('click', function(event) {
      TODO_LIST.removeChild(this.parentElement);
    })

    newLi.textContent = title;
    newLi.appendChild(checkbox);
    newLi.appendChild(deleteButton);
    TODO_LIST.appendChild(newLi);
    NEW_TODO_TEXT.value = '';
  });
};

window.onLoad = function() {
  onReady();
};


// function onReady() {
//   const addToDoForm = document.getElementById('addToDoForm');
//   const newToDoText = document.getElementById('newToDoText');
//   const toDoList = document.getElementById('toDoList');
//   addToDoForm.addEventListener('submit', (event) => {
//     event.preventDefault();
//     // get the text
//     let title = newToDoText.value;
//     // create a new li
//     let newLi = document.createElement('li');
//     // create a new input
//     let checkbox = document.createElement('input');
//     // set the input's type to checkbox
//     checkbox.type = 'checkbox';
//     // set the title
//     newLi.textContent = title;
//     // attach the checkbox to the li
//     newLi.appendChild(checkbox);
//     // attach the li to the ul
//     toDoList.appendChild(newLi);
//     // empty the input
//     newToDoText.value = '';
//   });
// }
//
// window.onload = function() {
//   alert("The window has loaded!");
// };
