const model = require('./model');

function getUsers() {
    const users = model.getUsers();

    return {
        data: users,
        time: new Date().toISOString(),
    }
}

function getUser(id) {
    const user = model.getUser(id);

    return {
        data: user,
        time: new Date().toISOString(),
    }
}

function createUser(userData) {
    const user = model.createUser(userData);
    return {
        data: user,
        time: new Date().toISOString(),
    }
}

function deleteUser(userData) {
    model.deleteUser(userData.id);
    return {
        message: `Deleted ${userData.id}!`,
        time: new Date().toISOString(),
    }
}

function updateUser(userData) {
    const user = model.updateUser(userData);
    return {
        data: user,
        time: new Date().toISOString(),
    }
}

module.exports = { getUsers, getUser, createUser, deleteUser, updateUser }