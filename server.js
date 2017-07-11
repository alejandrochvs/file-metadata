var express = require("express");
var app = express();
var router = express.Router();
var path = require("path");
var multer = require("multer");
var upload = multer();
var port = process.env.PORT || 80;
app.use(express.static(path.join(__dirname, '/public')));
app.use('/file',upload.single('file'),function(req,res){
    res.json({size : req.file.size});
})
app.listen(port,function(err){
    if (err){
        return console.log(err);
    }
    console.log("App listening on port " + port);
});

