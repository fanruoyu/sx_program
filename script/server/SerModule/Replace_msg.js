const fs  = require('fs')
module.exports = (req, res) => {
    let params = req.body;
    let resident_list = JSON.parse(fs.readFileSync('./data_table/resident_list.json'))
    let list = resident_list.list;
    list.list.forEach((item, index) => {
        if (params.id === item.id) {
            item.ps = params.newMsg;
        }
    })
    fs.writeFileSync('./data_table/resident_list.json', JSON.stringify(resident_list))
    res.end(JSON.stringify({msg: 'Success'}))
}