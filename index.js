// thêm modul express

var express = require('express');
//tạo app để cấu hình router
var app = express();
var multer = require('multer');
// modul dùng để upload file
var bodyparser = require('body-parser')
//thiết lập cho express sử dụng thư viện body-parser để lấy dữ liệu từ form
app.use(bodyparser.urlencoded({
    extended:false
}));

//kết nối với csdl môngo
var mongoDB = require('mongodb');
var Mongoclient = mongoDB.MongoClient;



var expressHBS = require('express-handlebars');
app.engine('.hbs',expressHBS({
    extname: "hbs",
    defaultLayout: false,
    layoutsDir: "views/layouts/"
}));
app.set('view engine','.hbs');

app.get('/',function (request,response) {
    response.render('login');
    // var path = request.url;
    // console.log(path);
    // if(path.match('home')){
    //     response.render('home');
    // }
});
app.get('/home',function (request,response) {
    response.render('home');

})
app.get('/home/add',function (request,response) {
    response.render('add');
})
app.get('/home/fix',function (request,response) {
    response.render('fix');
})
app.get('/signup',function (request,response) {
    response.render('signup');
})
// //chay lên localhosst

app.listen(process.env.PORT || '4000');



