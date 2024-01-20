const Router = require("../public/Router");
const userController = require("../controller/userController");

const router = new Router();
router.get('/users', userController.getUser);
router.post('/users', userController.postUser);

module.exports = router;