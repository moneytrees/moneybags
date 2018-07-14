const transController = require("../controllers/transController");

module.exports = (app, express) => {
  const transRouter = express.Router();

  transRouter.route("/api/get_inst").post(transController.getInst);

  return transRouter;
};
