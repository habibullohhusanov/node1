const fs = require("fs");
const path = require("path");

// fs.mkdir(path.join(__dirname, "templates"), e => {
//     if (e) {
//         throw new Error(e);
//     }
//     conclssole.log("Created folder");
// });
fs.writeFile(path.join(__dirname, "templates", "txt.txt"), "Pashol ti", e => {
    if (e) throw new Error(e);
    console.log("Created");
    fs.appendFile(path.join(__dirname, "templates", "txgitgit t.txt"), " chort", e => {
        if (e) throw new Error(e);
        console.log("Changed");
    })
    fs.readFile(path.join(__dirname, "templates", "txt.txt"), (e, data) => {
        if (e) throw new Error(e);
        console.log("Readed");
        console.log(Buffer.from(data).toString());
    })
    fs.readFile(path.join(__dirname, "templates", "txt.txt"), "utf-8", (e, data) => {
        if (e) throw new Error(e);
        console.log(data);
    })
})