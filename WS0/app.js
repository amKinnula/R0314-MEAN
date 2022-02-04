var http = require("http");
http.createServer(function (request, response){
    // Send the HTTP header. HTTP Status: 200 = OK
    // Content Type: text/http
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write('<h1>Hello World!</h>');
    response.write('<table>' +
        '<tr>' +
          '<td>Nimi</td>' +
          '<td>Kaupunki</td>' +
          '<td>Osoite</td>' +
        '</tr>' +
        '<tr>' +
          '<td>Harri</td>' +
          '<td>Harrinpää</td>' +
          '<td>Harrintie 6</td>' +
        '</tr>' +
      '</table>')
    // Send the response body as "Hello world"
    response.end('Hello World\n');
}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');