const fs = require("fs");
const path = require("path");

// fs.mkdir(path.join(__dirname, "templates"), e => {
//     if (e) {
//         throw new Error(e);
//     }
//     console.log("Created folder");
// });

// fs.writeFile(path.join(__dirname, "templates", "txt.txt"), "Pashol ti", e => {
//     if (e) throw new Error(e);
//     console.log("Created");
//     fs.appendFile(path.join(__dirname, "templates", "txgitgit t.txt"), " chort", e => {
//         if (e) throw new Error(e);
//         console.log("Changed");
//     })
//     fs.readFile(path.join(__dirname, "templates", "txt.txt"), (e, data) => {
//         if (e) throw new Error(e);
//         console.log("Readed");
//         console.log(Buffer.from(data).toString());
//     })
//     fs.readFile(path.join(__dirname, "templates", "txt.txt"), "utf-8", (e, data) => {
//         if (e) throw new Error(e);
//         console.log(data);
//     })
// });

// fs.rmdir(path.resolve(__dirname, "templates"), e => {
//     if (e) throw e;
//     console.log("removed");
// });

const writeFileAsync = async (path, data) => {
    return new Promise(
        (resolve, reject) => {
            fs.writeFile(path, data,
                e => {
                    if (e) {
                        return reject(e.message);
                    }
                    resolve();
                }
            )
        }
    )
}
const appendFileAsync = async (path, data) => {
    return new Promise(
        (resolve, reject) => {
            fs.appendFile(path, data,
                e => {
                    if (e) {
                        return reject(e.message);
                    }
                    resolve();
                }
            )
        }
    )
}
const readFileAsync = async (path) => {
    return new Promise(
        (resolve, reject) => {
            fs.readFile(path, { encoding: "utf-8" },
                (e) => {
                    if (e) {
                        return reject(e.message);
                    }
                    return resolve()
                }
            )
        }
    )
}
const rmFileAsync = async (path) => {
    return new Promise(
        (resolve, reject) => {
            fs.rm(path,
                (e, data) => {
                    if (e) {
                        return reject(e.message);
                    }
                    return resolve(data)
                }
            )
        }
    )
}

// writeFileAsync(path.resolve(__dirname, 'text.txt'), "Birnarsalar ...").then(() => {
//     appendFileAsync(path.resolve(__dirname, "templates", "text.txt"), "\nyana nimadir");
// })
//     .then(() => {
//         readFileAsync(path.resolve(__dirname, "templates", "text.txt"));
//     })
//     .then((data) => console.log(data) )
//     .catch((e) => {
//         console.log(e);
//     })

rmFileAsync(path.resolve(__dirname, "templates", "text.txt")).then(() => console.log("deleted"));
