const crypto = require('crypto');

let users = [{id:"1", name: "User 1"}];

function getUser(id) {
    return users.find(item => item.id === id);
}

function getUsers() {
    return users
}

function createUser(userData) {
    const newUser = {...userData, id: crypto.randomUUID()}
    users.push(newUser)
    return newUser;
}

function deleteUser(id) {
    users = users.filter(item => item.id != id);
    return {id}
}

function updateUser(userData) {
    const index = users.findIndex(item => item.id === userData.id);

    if(index !== -1) {
        users[index] = {...userData }
    }
    
    return users[index];
}


module.exports = { getUser, getUsers, createUser, deleteUser, updateUser}