const Router = require("./../framework/Route");

const router = new Router();
const users = [
    {id: 1, name: "Habibulloh"},
    {id: 2, name: "Habibulloh"},
    {id: 3, name: "Habibulloh"},
    {id: 4, name: "Habibulloh"},
    {id: 5, name: "Habibulloh"},
    {id: 6, name: "Habibulloh"},
    {id: 7, name: "Habibulloh"},
]

router.get('/users', (req, res) => {
    res.send(users);
});
router.post('/users', (req, res) => {
    res.send(users);
});

module.exports = router;