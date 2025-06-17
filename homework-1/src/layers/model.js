import crypto from 'crypto';
import { now, readData, writeData } from '../utils/index.js';

function addItem(data) {
    const newItem = {freq: "week", date: now(), done: false, id: crypto.randomUUID(), ...data};
    const rawData = readData();

    rawData.push(newItem)
    writeData(rawData);

    return newItem;
}

function getItems() {
    return readData();
}

function updateItem(data) {
    const rawData = readData();
    const index = rawData.findIndex(item => item.id === data.id);

    if(index !== -1) {
        rawData[index] = {...rawData[index], ...data }
    }
    
    writeData(rawData);
    return rawData[index];
}

function deleteItem(data) {
    let rawData = readData();
    rawData = rawData.filter(item => item.id != data.id);
    writeData(rawData);
    return { data }
}

export default { addItem, getItems, updateItem, deleteItem }