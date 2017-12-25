let fs = require('fs');
module.exports = (req, res) => {
    let params = req.body;
    let reg = new RegExp(params.msg);
    let resident_list = JSON.parse(fs.readFileSync('./data_table/resident_list.json'))
    let lists = resident_list.list;
    let code = 0;
    let result = []
    lists.list.forEach((item, index) => {
        if (item.tel.indexOf(params.msg) == 0 || item.name.indexOf(params.msg) == 0) {
            code = 1;
            result.push(item);
            
        }
    })
    if (code) {
        res.end(JSON.stringify({code:1, msg: 'Success', list: result}));
    } else {
           res.end(JSON.stringify({code:0, msg: 'Error'}))
    }
}