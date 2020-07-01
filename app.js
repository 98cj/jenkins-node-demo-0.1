const express = require("express");
const app = express();


app.get("/", function(req, res){
	res.send("Hello from docker!");
});

/**3000,8000,8080 ***/
app.listen(3000,function(){
	console.log("App listening on 3000");
});
