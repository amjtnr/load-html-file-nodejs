var app = require("express")();
var http = require('http').Server(app);
var path = require('path')
const PORT = process.env.PORT || 3000;

app.get('/',(req,res)=>{
    
    var option = {
        root : path.join(__dirname)
    }
    var filename = 'index.html';
    res.sendFile(filename,option)    
})

http.listen(PORT,(req, res)=>{
console.log(`Server is running on port ${PORT}`)
})