var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var url = require('url');
var path = require('path');
var express = require('express');
var sql = require('mysql');
var bodyParser = require('body-parser');
const Master_Functions1 = require('./functions/lib/dependencies/masterfunctions.js');
var dbservice = require('./functions/lib/dependencies/db.js');
var router_account = require('./functions/lib/routers/router_account.js');
var app = express();
app.use(bodyParser());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.get('/login.html',async(req,res)=>{
    res.setHeader('content-type','text/html')
    res.sendFile(__dirname+'/pages/html/login.html');
})
app.get('/front-end-js/general.js',async(req,res)=>{
    res.setHeader('content-type','text/javascript')
    res.sendFile(__dirname+'/pages/front-end-js/general.js');
})
app.get('/main.html',async(req,res,next)=>{
    res.sendFile(path.join(__dirname,'/pages/html/main.html'))
})
app.get('/addSociety',async(req,res,next)=>{
    res.setHeader('content-type','text/html')    
    res.sendFile(__dirname+'/pages/html/addPage.html')
})
app.get('/addResident',async(req,res,next)=>{
    res.setHeader('content-type','text/html');
    res.sendFile(path.join(__dirname,'/pages/html/addResident.html'))
})
app.get('/createBill',async(req,res,next)=>{
    res.setHeader('content-type','text/html');
    res.sendFile(path.join(__dirname,'/pages/html/createBill.html'))
})
app.get('/viewAll',async(req,res,next)=>{
    res.setHeader('content-type','text/html');
    res.sendFile(path.join(__dirname,'/pages/html/viewAll.html'))
})
app.get('/viewBill',async(req,res,next)=>{
    res.setHeader('content-type','text/html');
    res.sendFile(path.join(__dirname,'/pages/html/viewBill.html'))
})
app.get('/viewSociety',async(req,res,next)=>{
    res.setHeader('content-type','text/html');
    res.sendFile(path.join(__dirname,'/pages/html/viewPage.html'))
})
app.get('/viewResident',async(req,res,next)=>{
    res.setHeader('content-type','text/html');
    res.sendFile(path.join(__dirname,'/pages/html/viewResident.html'))
})
var port=process.env.PORT||8000;
app.use('/controller/ctrl-account', router_account);
app.listen(port, () => {
    console.log("Server Started at "+port);
});
//# sourceMappingURL=controller.js.map