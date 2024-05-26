const {
  sendGameCreated,
  sendAllGames,
  sendGameById,
  sendGameUpdated,
  sendGameDeleted,
} = require("../controllers/games");
const {checkAuth} = require("../middlewares/auth");
const { checkIfCategoriesAvaliable } = require("../middlewares/categories");
const {
  findAllGames,
  checkIsVoteRequest,
  checkIsGameExists,
  checkEmptyFields,
  createGame,
  findGameById,
  updateGame,
  deleteGame,
} = require("../middlewares/games");
const { checkIfUsersAreSafe } = require("../middlewares/users");

const gamesRouter = require("express").Router();

gamesRouter.get("/games", findAllGames, sendAllGames);

gamesRouter.get("/games/:id", findGameById, sendGameById);

gamesRouter.post(
  "/games",
  findAllGames,
  checkIsGameExists,
  checkIfCategoriesAvaliable,
  checkEmptyFields,
  checkAuth,
  createGame,
  sendGameCreated
);

gamesRouter.put(
  "/games/:id",
  findGameById,
  checkIsVoteRequest,
  checkIfUsersAreSafe,
  checkIfCategoriesAvaliable,
  checkEmptyFields,
  checkAuth,
  updateGame,
  sendGameUpdated
);

gamesRouter.delete(
  "/games/:id", // Слушаем запросы по эндпоинту
  checkAuth,
  deleteGame,
  sendGameDeleted // Тут будут функция удаления элементов из MongoDB и ответ клиенту
);

module.exports = gamesRouter;
