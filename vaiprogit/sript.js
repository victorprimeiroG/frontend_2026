const textInput = document.getElementById('taskInput');
const textList = document.getElementById('taskList');

function addTask(){
  const textInput = taskInput.value.trim();
  if(textInput !== ''){
    const newItem = document.createElement('li');
    newItem.innerHTML = 
    `<span>${textInput}</span>
    <button onclick="editar()">editar</button>
    <button onclick="remover(this)">remover</button>
    <button onclick="concluir(this)">confirmar</button>`
    taskList.appendChild(newItem);
  }
}

function remover(button){
  const itemToRemove = button.parentElement;
  taskList.removeChild(itemToRemove);
}
function concluir(button){
  const itemToMark = button.parentElement;
  itemToMark.classList = 'completed';
}
