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
app.use(function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        var service = yield new dbservice();
        req.connection = yield service.connect();
        next();
    });
});
app.post('/', (req, res) => {
    console.log(req.connection);
    res.send('hi');
});
var port=process.env.PORT||8000;
app.use('/controller/ctrl-account', router_account);
app.listen(port, () => {
    console.log("Server Started at "+port);
});
//# sourceMappingURL=controller.js.map