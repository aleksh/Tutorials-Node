import model from './model.js';

function addItem(data) {
    const item = model.addItem(data);
    return {action: 'Added', data: item}
}

function getItems() {
    const items = model.getItems();
    return {action: 'Items', data: items}
}

function updateItem(data) {
    const item = model.updateItem(data);
    return {action: 'Updated', data: item}
}

function deleteItem(data) {
    const item = model.deleteItem(data);
    return {action: 'Deleted', data: item}
}


export default { addItem, getItems, updateItem, deleteItem }