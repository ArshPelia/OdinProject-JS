const http = require("http");
const fs = require('fs').promises;
const path = require('path');

const host = 'localhost';
const port = 8080;

const server = http.createServer((req, res) => {
    let filePath;

    // Parse the URL path
    const urlPath = req.url;

    // Set the file path based on the URL path
    if (urlPath === '/') {
        filePath = '../index.html';
    } else if (urlPath === '/about') {
        filePath = '../about.html';
    } else if (urlPath === '/contact-me') {
        filePath = '../contact-me.html';
    } else {
        filePath = '../404.html';
    }

    // Read the HTML file and serve it
    fs.readFile(path.join(__dirname, filePath))
        .then(contents => {
            res.setHeader("Content-Type", "text/html");
            res.writeHead(200);
            res.end(contents);
        })
        .catch(err => {
            console.error(`Could not read file: ${err}`);
            res.writeHead(500);
            res.end('Server Error');
        });
});

server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
