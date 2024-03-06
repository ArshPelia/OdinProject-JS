const http = require('node:http');
const fs = require('fs');
const hostname = '127.0.0.1';
const port = 3000;


fs.readFile('../index.html', function (err, html) {

  if (err) throw err;    

  http.createServer(function(request, response) {  
    console.log('creating server')

      response.writeHeader(200, {"Content-Type": "text/html"});  
      response.write(html);  
      response.end();  
  }).listen(port);
});

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });