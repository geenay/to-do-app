function onReady() {
  let toDos = JSON.parse(localStorage.getItem('toDos')) || [];
  let id = toDos.length || 0;
  const addToDoForm = document.getElementById('newToDoText');

  function createNewToDo(){
    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: ++id
    });
  }
  function deleteToDo(id){
    return toDos.filter(toDo => toDO.id !== id);
}

function saveToDos() {
  localStorage.seItem('toDos', JSON.stringify(toDos) );
}
function renderTheUI(){
  const toDoList = document.getElementById('toDoList');
  toDoList.textContent = '';

  toDos.forEach(function(toDo){
    const newLi = document.createElement('li');

    const checkbox = document.createElement('li');
    checkbox.type = "checkbox";
    checkbox.checked = toDo.complete;

    const DeleteBtn = document.createElement('Button')
DeleteBtn.innerHTML = '<span>Delete</span>';

newli.innerHTML = toDo.title;

checkbox.addEventListener( 'click', function(){
  toDo.complete = checkbox.checked ? true : false;
  saveToDos();
});

newLi.appendChild(checkbox);
toDoList.appendChild(newLi);
newLi.appendChild(DeleteBtn);

deleteBtn.addEventListener('click',() => {
  toDos = deleteToDo(toDo.id);
  renderTheUI();
  saveToDos();

});
});
}

  addToDoForm.addEventListener('submit', function(event){
       event.preventDefault();
       createNewToDo();
       newToDoText.value = '';
       renderTheUI();
       saveToDos();
  });
  renderTheUI();
  saveToDos();
}



window.onload = function() {
   onReady();
 };
