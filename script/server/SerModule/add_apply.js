const fs = require('fs');
module.exports = (req, res) => {
    let params = req.body;
    let resident_list = JSON.parse(fs.readFileSync('./data_table/apply_list.json'))
    let lists = resident_list.list;
    let len = lists.length
    let newId = lists[len - 1].id * 1 + 1;
    let newMsg = params.msg ? params.msg : '-';
    var code = 1;
    lists.forEach((item, index) => {
        if (item.name === params.name) {
            code = 0
        }
    })
    if (code) {
        lists.unshift({
            id: newId,
            name: params.name,
            tel: params.tel,
            date: params.time,
            msg: newMsg
        })
        fs.writeFileSync('./data_table/apply_list.json', JSON.stringify(resident_list));
        res.end(JSON.stringify({'code': code, msg: 'Success', len: len}))
    }
}