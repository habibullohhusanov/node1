require("dotenv").config()

const PORT = process.env.PORT;
const URL = process.env.URL;
const DB_URL = process.env.DB_URL;
const mongoose = require("mongoose")
const userRouter = require("./route/user");
const urlParse = require("./middlware/urlParse");
const jsonParse = require("./middlware/jsonParse");
const Applications = require("./public/Applications");

const app = new Applications();

app.use(jsonParse);
app.use(urlParse(`${URL}:${PORT}`));
app.addRoute(userRouter);


const start = async () => {
    try {
        await mongoose.connect(DB_URL);
        app.listen(PORT);
    } catch(e) {
        console.log(e);
    }
}
start();