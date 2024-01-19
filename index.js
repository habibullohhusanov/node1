const PORT = process.env.PORT || 5000;
const userRouter = require("./src/user-router");
const Applications = require("./framework/Applications");
const jsonParse = require("./framework/jsonParse");

const app = new Applications();
app.use(jsonParse);
app.addRoute(userRouter);

app.listen(PORT, () => console.log(`http://localhost:${PORT}/users`));
