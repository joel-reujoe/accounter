var url = require('url');
var path = require('path');
var express = require('express');
var sql = require('mysql');
var bodyParser = require('body-parser');
const Master_Functions1=require('/function/lib/dependencies/masterfunctions.js');
var dbservice=require('/function/lib/dependencies/db.js');
var router_account=require('/function/lib/routers/router_account.js');
var app=express();
app.use(bodyParser());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(async function(req, res, next) {
    var service = await new dbservice();
    req.connection =await service.connectdb();
    next();
});
app.use('/urlparser', async (req,res,next) => {
    var service1 = await new dbservice();
    let connection1 =await service1.connectdb();

    var sql = "select gen_mca_user_details_id,photo from gen_mca_user_details";
    connection1.query(sql,function(err,result)
    {
        console.log(sql);
    if (err) throw next(err);
    else{
        let send={
            data:(result),
            status:"true"
        }
        for (const key in result) {
            //console.log(key+"  "+result[key].gen_mca_user_details_id)
           // console.log(result[key].photo);
            let photo=result[key].photo;
            let gen_mca_user_details_id=result[key].gen_mca_user_details_id;
            let parsedurl = url.parse(photo);
            let imagename=(path.basename(parsedurl.pathname));
            let mainurl=`https://istatsbackend.com/images/mcaimages/${imagename}`;
            if(imagename!="noimage.gif")
            {
                console.log("image update"+gen_mca_user_details_id)
                var sql1=`UPDATE gen_mca_user_details SET photo = "${mainurl}"
                WHERE gen_mca_user_details_id=${gen_mca_user_details_id}`;
                    connection1.query(sql1,function(err,result)
                    {
                    if (err) throw err;
                    // services.disconnectdb(connection);
                    //resolve(data);
                    });
            }
            else{
                //console.log("noimage");
            }
        }
    }});
});
app.post('/',(req,res)=>{
    console.log(req.body);
    res.send('hi')
})
app.use('/controller/ctrl-account',router_account);
app.listen(8000,()=>{
    console.log("Server Started at 8000");
})