const fs = require('fs');
const express = require('express');
const body_parper = require('body-parser');
const multer = require('multer');
const app = express();
const jwt = require('jsonwebtoken');
const Mock = require('mockjs');
app.use(body_parper.json());

app.all('*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

// 分页内容
var list = Mock.mock({
    'list|100':[
        {
            'name': '@cname',
            'id|+1': 0,
            'tel': /1[3578][0-9]{9}$/,
            'msg|1':['已通知', '未通知'] 
        }
    ]
});
let result = {
    list: list.list,
    count: 10,
    pageSize: 1,
    pageIndex: 1
};
app.post('/list', (req, res) => {
    const results = Object.assign({}, result);
    const params = req.body;
    const count = params.count;// 请求条数
    const pS = params.pageSize;//页数
    const lists = results.list.slice((pS) * count, (pS) * count + 10)
    results.list = lists
    res.end(JSON.stringify(results))
});

// 侧边栏列表
app.get('/admin/menu/:name', (req, res) => {
    let data = null;
    switch (req.params.name) {
        case 'public': data = fs.readFileSync('../data/public.json', {encoding: 'utf-8'});
        break;
        case 'grid': data = fs.readFileSync('../data/grid.json', {encoding: 'utf-8'});
        break;
        case 'entry': data = fs.readFileSync('../data/entry.json', {encoding: 'utf-8'});
        break;
    };
    res.end(data);
});

// 登录验证
app.post('/admin/loginUser', (req, res) => {
    res.writeHead(200, {
        "content-type": "application/json;charset='utf-8'"
    })
    var token = jwt.sign(req.body, 'postpost', {expiresIn: 60 * 1})
    var admin_list = fs.readFileSync('../data/admin_list.json', {encoding: 'utf-8'})
    var admin_list = JSON.parse(admin_list)
    var code = 1, author = '';
    for (var i = 0; i < admin_list.list.length; i++) {
        if (admin_list.list[i].userName === req.body.userName && admin_list.list[i].userPwd === req.body.userPwd) {
            code = 0;
            author = admin_list.list[i].authorization;
        } else {
            author = 'visitor'
        }
    }
    const result = {
        "code": code,
        "token": token,
        "author": author,
        "Msg": req.body
    }
    res.end(JSON.stringify(result));
});

// 注册
app.post('/admin/regist', (req, res) => {
    var admin_list = fs.readFileSync('../data/admin_list.json', {encoding: 'utf-8'})
    var admin_list = JSON.parse(admin_list)
    var code = 0;
    for (var i = 0; i < admin_list.list.length; i++) {
        if (admin_list.list[i].userName === req.body.userName) {
            code = 1
        }
    }
    if (code === 0) {
        admin_list.list.push(req.body);
        fs.writeFileSync('../data/admin_list.json', JSON.stringify(admin_list))
    }
    const result = {
        code: code,
        msg: 'SUCCESS'
    }
    res.end(JSON.stringify(result))
});
// 图片上传
var storage = multer.diskStorage({
    //设置上传后文件路径，uploads文件夹会自动创建。
    destination: function (req, file, cb) {
        cb(null, './uploads')
    }, 
    //给上传文件重命名，获取添加后缀名
    filename: function (req, file, cb) {
        cb(null, file.fieldname +  "_" + file.originalname)
    }
});  
// 添加配置文件到muler对象。
var uploader = multer({
        storage: storage
});
app.post('/user/upload', uploader.single('file'), (req, res) => {
    let result = {
        code: 1,
        msg: 'success'
    }
    res.end(JSON.stringify(result))
});
// 活动列表
const Add = require('./SerModule/Add.js');
app.post('/admin/activity/add', Add);

// 城市联动
const Slect = require('./SerModule/Selct.js');
app.get('/admin/community/location/root', Slect);

// 居民邀请
const resident = require('./SerModule/resident.js');
app.post('/admin/resident', resident)

// 删除居民信息
const delete_resident = require('./SerModule/Delete.js');
app.post('/admin/delete', delete_resident);

// 编写备注信息
const replace_msg = require('./SerModule/Replace_msg.js');
app.post('/admin/replace', replace_msg);

// 报名名单请求
const apply_list = require('./SerModule/apply_list.js');
app.post('/admin/apply', apply_list);

// 删除报名信息
const delete_apply = require('./SerModule/Delete_apply_list.js');
app.post('/admin/delete_apply', delete_apply);

// 添加报名信息
const add_apply = require('./SerModule/add_apply.js');
app.post('/admin/add_apply', add_apply)
// 模糊查询邀请居民
const searchMsg = require('./SerModule/Search.js');
app.post('/admin/search', searchMsg);
// 查询后邀请居民
const applyResident = require('./SerModule/applyResident.js');
app.post('/admin/applyResident', applyResident)
//监听
app.listen(8888, () =>{console.log('listening....')});