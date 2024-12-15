
document.addEventListener('DOMContentLoaded', loadItems);

function loadItems() {
    const items = JSON.parse(localStorage.getItem('items')) || [];
    const itemList = document.getElementById('itemList');
    itemList.innerHTML = '';
    items.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = item;
        li.appendChild(createEditButton(index));
        li.appendChild(createDeleteButton(index));
        itemList.appendChild(li);
    });
}

function addItem() {
    const itemInput = document.getElementById('itemInput');
    const itemValue = itemInput.value.trim();
    if (itemValue) {
        const items = JSON.parse(localStorage.getItem('items')) || [];
        items.push(itemValue);
        localStorage.setItem('items', JSON.stringify(items));
        itemInput.value = '';
        loadItems();
    }
}

function createEditButton(index) {
    const button = document.createElement('button');
    button.textContent = 'Edit';
    button.onclick = () => editItem(index);
    return button;
}

function createDeleteButton(index) {
    const button = document.createElement('button');
    button.textContent = 'Delete';
    button.onclick = () => deleteItem(index);
    return button;
}

function editItem(index) {
    const items = JSON.parse(localStorage.getItem('items'));
    const newItem = prompt('Edit item:', items[index]);
    if (newItem !== null) {
        items[index] = newItem;
        localStorage.setItem('items', JSON.stringify(items));
        loadItems();
    }
}

function deleteItem(index) {
    const items = JSON.parse(localStorage.getItem('items'));
    items.splice(index, 1);
    localStorage.setItem('items', JSON.stringify(items));
    loadItems();
}