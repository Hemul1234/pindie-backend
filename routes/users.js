const {
  sendMe,
  sendAllUsers,
  sendUserById,
  sendUserCreated,
  sendUserDeleted,
  sendUserUpdated,
} = require("../controllers/users");
const {checkAuth} = require("../middlewares/auth");
const {
  findAllUsers,
  filterPassword,
  findUserById,
  checkIsUserExists,
  checkEmptyNameAndEmailAndPassword,
  hashPassword,
  createUser,
  checkEmptyNameAndEmail,
  updateUser,
  deleteUser,
} = require("../middlewares/users");

// Создаём роут для запросов категорий
const usersRouter = require("express").Router();

// Импортируем вспомогательные функции

usersRouter.get("/me", checkAuth, sendMe);

// Обрабатываем GET-запрос с роутом '/users'
usersRouter.get("/users", findAllUsers, filterPassword, sendAllUsers);

usersRouter.get("/users/:id", findUserById, filterPassword, sendUserById);

usersRouter.post(
  "/users",
  findAllUsers,
  checkIsUserExists,
  checkEmptyNameAndEmailAndPassword,
  checkAuth,
  hashPassword,
  createUser,
  sendUserCreated
);
usersRouter.put("/users/:id", checkEmptyNameAndEmail, checkAuth, updateUser, sendUserUpdated);
usersRouter.delete("/users/:id", checkAuth, deleteUser, sendUserDeleted);

// Экспортируем роут для использования в приложении — app.js
module.exports = usersRouter;
