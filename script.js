const inputField = document.querySelector('.inputField');
const btn = document.querySelector('.btn');
const toDoContainer = document.querySelector('.toDoContainer');



btn.addEventListener('mousedown', () => {
    const item = document.createElement('li');
    item.innerText = inputField.value;
    item.classList.add('toDoAdded');
    toDoContainer.appendChild(item);
    inputField.value = '';

    item.addEventListener('mousedown', () => {
        item.classList.add('toDoCompleted')
    })

    item.addEventListener('dblclick', () => {
        toDoContainer.removeChild(item);
    })
})