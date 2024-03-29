const  path = require("path");

// __filename
console.log(path.basename(__filename));
console.log(path.dirname(__filename));
console.log(path.extname(__filename));
console.log(path.parse(__filename));

// __dirname
console.log(path.basename(__dirname));
console.log(path.dirname(__dirname));
console.log(path.parse(__dirname));


console.log(path.join(__dirname, "templates", "index.js"));
console.log(path.resolve(__dirname, "./templates", "/index.js"));


const siteURL = "http://127.0.0.1:8000/users?id=5";
const url = new URL(siteURL);
console.log(url);