const achvController = require("../controllers/achvController");

module.exports = (app, express) => {
    const achvRouter = express.Router();
    achvRouter.route("/api/getAllAchievements").post(achvController.getAllAchievements);
    achvRouter.route("/api/getAchievement").post(achvController.getOneAchievement);

    return achvRouter;
};