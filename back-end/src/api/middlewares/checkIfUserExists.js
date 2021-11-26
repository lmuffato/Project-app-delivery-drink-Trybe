const { StatusCodes } = require('http-status-codes');
const UserService = require('../services/user');

/** @type {import('express').RequestHandler} */
const checkIfUserExists = async (req, res, next) => {
  const { fullName, email } = req.body;
  try {
    const users = await UserService.findAll();
    const userExists = users.some(
      (userData) => (userData.name === fullName || userData.email === email),
    );
    if (userExists) return res.status(StatusCodes.CONFLICT).json('ja existe');
    // if (!userExists) res.status(StatusCodes.CREATED).json('nao existe');
    next();
  } catch (error) {
    console.error(error);
    res.status(StatusCodes.BAD_REQUEST);
  }
};

module.exports = checkIfUserExists;
