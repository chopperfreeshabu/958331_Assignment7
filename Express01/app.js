/*
const express = require('express')
const app = express()

app.get('/hello', function(req, res){
    res.send("Hello World <br/>Bye World...")
    })



app.listen(9999,function(){
    console.log("Server is running on PORT 9999")
})

*/


let http = require('http');
let url = require('url');
http.createServer(function (req, res) {
res.writeHead(200, {'Content-Type': 'text/html'});
/*Use the url module to turn the querystring into an object:*/
var q = url.parse(req.url, true).query;
/*Return the year and month from the query object:*/

//var txt = q.year + " " + q.month;

//var txt = "Name:" + q.name + "<br/>" + "Login Date:" + q.date;
var txt = "Name:" + q.firstname + " " + q.lastname + "<br/>" + "Login Date:" + q.month + " "+ q.date + ", " + q.year;


res.end(txt);
}).listen(9999);

