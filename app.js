function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
    const newToDoText = document.getElementById('newToDoText');
    const toDoList = document.getElementById('toDoList');

       addToDoForm.addEventListener('submit', () => {
         event.preventDefault();

           let title = newToDoText.value;

           // create a new li
    let newLi = document.createElement('li');

    // create a new input
    let checkbox = document.createElement('input');

    // set the input's type to checkbox
    checkbox.type = "checkbox";
});
window.onload = function() {
   alert("The window has loaded!");
   onReady();
 };
