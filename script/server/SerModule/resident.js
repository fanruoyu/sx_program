const fs = require('fs');
module.exports = (req, res) => {
    let resident_list = JSON.parse(fs.readFileSync('./data_table/resident_list.json')).list
    let params = req.body;
    let count = params.count;// 请求条数
    let pS = params.pageSize;//页数
    let len = resident_list.list.length;
    let lists = resident_list.list.slice((pS - 1) * count, pS * count)
    res.end(JSON.stringify({list: lists, len: len}))
}