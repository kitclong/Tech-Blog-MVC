const { User } = require('../models');

const userData = [
    {
        username: "Sally",
        email: "sally@email.com",
        password: "12341234"
    },
    {
        username: "James",
        email: "james@email.com",
        password: "12341234"
    },
    {
        username: "Miller",
        email: "miller@email.com",
        password: "12341234"
    },
    {
        username: "Gennero",
        email: "gennero@email.com",
        password: "12341234"
    },
    {
        username: "Salvatore",
        email: "salvatore@email.com",
        password: "12341234"
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;