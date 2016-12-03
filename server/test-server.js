//app.js
// Load the built in 'http' library
var http = require('http');
var util = require('util');

// Create a function to handle every HTTP request
function handler(req, res){
  if(req.method == "GET"){
    console.log('get');
    res.setHeader('Content-Type', 'text/html');
    res.writeHead(200);
    res.end("<html><body><form action='/' method='post'><input type='text' name='hello'><input type='submit'></form></body></html>");
  } else if(req.method == 'POST'){
    console.log('post');
    // var hello = req.body.hello;
    var hello = 'world';
    res.setHeader('Content-Type', 'text/html');
    res.writeHead(200);
    res.end("<html><body><h1>Hello " +hello + "!</h1></body></html>");
  } else {
    res.writeHead(200);
    res.end();
  };
};

http.createServer(handler).listen(3000, function(err){
  if(err){
    console.log('Error starting http server');
  } else {
    console.log('Server listening on port 3000');
  };
});

// var http = require('http');

// function getTestPersonaLoginCredentials(callback) {

//     return http.get({
//         host: 'personatestuser.org',
//         path: '/email'
//     }, function(response) {
//         // Continuously update stream with data
//         var body = '';
//         response.on('data', function(d) {
//             body += d;
//         });
//         response.on('end', function() {

//             // Data reception is done, do whatever with it!
//             var parsed = JSON.parse(body);
//             callback({
//                 email: parsed.email,
//                 password: parsed.pass
//             });
//         });
//     });

// },