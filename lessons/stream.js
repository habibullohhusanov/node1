const fs = require("fs");
const path = require("path");

// simple read

// fs.readFile(path.resolve(__dirname, "text.txt"), (e, data) => {
//     if (e) throw e;
//     console.log(data);
// })

// stream read

// const stream = fs.createReadStream(path.resolve(__dirname, "text.txt"))
// stream.on("data", (chunk) => {
//     console.log(chunk);
// })
// stream.on("end", () => console.log("Tugadi"));
// stream.on("open", () => console.log("Boshlandi"));
// stream.on("error", (e) => console.log(e.syscall));

// stream write

// const stream = fs.createWriteStream(path.resolve(__dirname, "text2.txt"));
// for (let i = 0; i < 1000; i++) {
//     stream.write(i + '-si\n');
// }

// HTTP

// const http = require("http");

// http.createServer((req, res) => {
//     const stream = fs.createReadStream(path.resolve(__dirname, "text2.txt"));
//     // stream.on("data", (chunk) => {
//     //     res.write(chunk);
//     // });
//     // stream.on("end", (chunk) => res.end());
//     stream.pipe(res);
// });