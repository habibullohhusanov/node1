module.exports = (req, res) => {
    res.writeHead(200, {
        "Content-type": "application/json",
    });
    res.send = (data) => {
        console.log(data);
        res.end(JSON.stringify(data));
    };
}