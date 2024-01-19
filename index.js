const PORT = process.env.PORT || 5000;
const Router = require("./Framework/Route");
const Applications = require("./framework/Applications");

const app = new Applications();

const router = new Router();

router.get('/users', (req, res) => {
    res.end(`You are in ${req.url}`);
});
router.get('/posts', (req, res) => {
    res.end(`You are in ${req.url}`);
});

app.addRoute(router);

app.listen(PORT, () => console.log(`http://localhost:${PORT}/users`));
