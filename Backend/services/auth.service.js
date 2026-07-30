const User = require("../models/user");

const findUserById = async (id) => {
    return await User.findOne({ id });
};

const findUserByEmail = async (email) => {
    return await User.findOne({ email });
};

const createUser = async (data) => {
    return await User.create(data);
};

const findUserWithPassword = async (email) => {
    return await User.findOne({ email }).select("+password");
};

module.exports = {
    findUserById,
    findUserByEmail,
    createUser,
    findUserWithPassword
};