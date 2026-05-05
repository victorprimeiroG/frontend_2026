const textInput = document.getElementById('taskInput');
const textList = document.getElementById('taskList');

function addTask(){
  const temTexto = textInput.value.trim();
  if(temTexto !== ''){
    const taskAdd = document.createElement('li');
    taskAdd.innerHTML = 
    `<span>${temTexto}</span>
    <button onclick="">editar<button>
    <button onclick="">remover<button>
    <button onclick="">confirmar<button>`
    taskList.appendChild(taskAdd);
  }
}