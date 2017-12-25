const fs = require('fs');
module.exports = (req, res) => {
    let params = req.body;
    let resident_list = JSON.parse(fs.readFileSync('./data_table/apply_list.json'))
    let lists = resident_list.list
    lists.forEach((item, index) => {
        if (item.id === params.id) {
            resident_list.list.splice(index, 1)
        }
    })
    fs.writeFileSync('./data_table/apply_list.json', JSON.stringify(resident_list));
    res.end(JSON.stringify({msg: 'success'}))
}