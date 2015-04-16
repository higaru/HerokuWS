var WebSocketServer = require("ws").Server
var http = require("http")
var express = require("express")
var app = express()
var port = process.env.PORT || 5000

app.use(express.static(__dirname + "/"))

var server = http.createServer(app)
server.listen(port)

console.log("http server listening on %d", port)

var wss = new WebSocketServer({server: server})
console.log("websocket server created")

wss.on("connection", function(ws) {
  var i = 0;
  var id = setInterval(function() {

  	var txt = "";
  	if(i === 0)
  	txt = "Hey ! Salut Toi !";
  	if(i === 1)
  	txt = "Je suis une intéligence artificiel !";
  	if(i === 2)
  	txt = "Je sais, c'est incroyable!";
  	if(i === 3)
  	txt = "Tu me crois pas !?";
  	if(i === 4)
  	txt = "Tu va penser à un chiffre entre 0 et l'infini";
  	if(i === 5)
  	txt = "Je vais deviner !";
  	if(i === 6)
  	txt = "........";
  	if(i === 7)
  	txt = "Je suis en train de chercher....";
  	if(i === 8)
  	txt = "Je cherche....";
  	if(i === 9)
  	txt = "....";
  	if(i === 10)
  	txt = "..hum.....";
  	if(i === 11)
  	txt = "..peut être.....";
  	if(i === 12)
  	txt = "..non tu serais pas aussi stupide...";
  	if(i === 13)
  	txt = "....";
  	if(i === 14)
  	txt = "..Je cherche..";
  	if(i === 15)
  	txt = "..Tu va tricher, je le sens :(";
  	if(i === 16)
  	txt = "....";
  	if(i === 17)
  	txt = "..Je cherche..";
  	if(i === 18)
  	txt = "..Je suis pas très rapide...dsl";
  	if(i === 19)
  	txt = "..Si tu pouvais arrêter de tricher !!!";



    ws.send(JSON.stringify(txt), function() {  });
    //i++;
    if(i < 16)
  	i++;
  	else
  	{
  		var rand = Math.round(Math.random()*10);
  		if(rand === 5)
  		i=17;
  		else
  		if(rand === 6)
  		i=18;
  		else
  		if(rand === 7)
  		i=19;
  		else
  		i=16;
  		console.log(rand);
  	}
  }, 1000)

  console.log("websocket connection open")

  ws.on("close", function() {
    console.log("websocket connection close")
    clearInterval(id)
  })
})
