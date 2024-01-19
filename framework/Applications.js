const http = require("http");
const EventEmitter = require("events");
module.exports = class Applications {
    constructor() {
        this.emitter = new EventEmitter();
        this.server = this._CreateServer()
    }
    listen(port, callback) {
        this.server.listen(port, callback);
    }
    addRoute(router) {
        Object.keys(router.endpoints).forEach(path => {
            const endpoint = router.endpoints[path];
            Object.keys(endpoint).forEach(method => {
                const handler = endpoint[method];
                this.emitter.on(this._GetRouteMask(path, method), (req, res) => {
                    handler(req, res);
                })
            });
        })
    }
    _CreateServer() {
        return http.createServer((req, res) => {
            const emitted = this.emitter.emit(this._GetRouteMask(req.url, req.method), req, res);
            if (!emitted) {
                res.end(`${req.url} Not found!`)
            }
        });
    }
    _GetRouteMask(path, method) {
        return `[${path}]:[${method}]`;
    }
}