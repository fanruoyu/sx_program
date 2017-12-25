const fs = require('fs')
module.exports = (req, res) => {
    let params = req.body;
    let resident_list = JSON.parse(fs.readFileSync('./data_table/apply_list.json'))
    let lists = resident_list.list;
    let len = lists.length
    let newId = lists[len - 1].id * 1 + 1;
    let newMsg = params.msg ? params.msg : '-';
    params.list.forEach((item, index) => {
        lists.unshift(item)
    })
    fs.writeFileSync('./data_table/apply_list.json', JSON.stringify(resident_list));
    console.log(lists)
    res.end(JSON.stringify({ msg: 'Success'}))
}