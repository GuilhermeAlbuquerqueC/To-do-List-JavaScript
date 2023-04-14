const localStorageKey = 'to-do-list-GA'

function newTask() {
  let input = document.getElementById('input-new-task');

  //validacao
  if (!input.value) {
    alert('Digite algo para inserir em sua lista');
  }
  else {
    // incremeant to localStorage
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
    values.push({ name: input.value });
    localStorage.setItem(localStorageKey, JSON.stringify(values));
    showValues();
  }
}

function showValues() {
  let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
  let list = document.getElementById("to-do-list");
  list.innerHTML = '';
  for (let i = 0; i < values.length; i++) {
    list.innerHTML += `<li>${values[i]['name']}<button id ='btn-ok' onclick="removeItem('${values[i]['name']}')">OK</button></li>`;
  }
}

function removeItem(data) {
  console.log(data);
}

showValues();
