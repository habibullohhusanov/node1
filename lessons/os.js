const os = require("os");
const cluster = require("cluster");

// console.log(os.platform()); // win 32
// console.log(os.arch()); // 64
// console.log(os.cpus()); // al cpus
// console.log(os.cpus().length); // cpus count

const cpus = os.cpus()

// if (cluster.isMaster) {
//     for (let i = 0; i < os.cpus().length - 2; i++) {
//         cluster.fork()
//     }
//     cluster.on("exit", (worker, code, signal) => {
//         console.log(`chiqarildi ${worker.process.pid}`);
//         if (code) {
//             cluster.fork()
//         } else {
//             console.log("birnarsada");
//         }
//     } )
// } else {
//     console.log(`band ${process.pid}`);
//     setInterval(() => {
//         console.log(`ishlayapti ${process.pid}`);
//     }, 5000)
// }

// console.log(process.pid);