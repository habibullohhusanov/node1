const mongoose = require("mongoose")
const PORT = process.env.PORT || 5000;
const userRouter = require("./route/user");
const urlParse = require("./middlware/urlParse");
const jsonParse = require("./middlware/jsonParse");
const Applications = require("./public/Applications");

const app = new Applications();

app.use(jsonParse);
app.use(urlParse("http://localhost:5000"));
app.addRoute(userRouter);


const start = async () => {
    try {
        await mongoose.connect("mongodb+srv://habibullohhusanov:123ABS@node.ozdqkl1.mongodb.net/?retryWrites=true&w=majority");
        app.listen(PORT);
    } catch(e) {
        //
    }
}
start();