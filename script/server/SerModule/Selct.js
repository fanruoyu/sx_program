const fs = require('fs')
module.exports = (req, res) => {
    var list = JSON.parse(fs.readFileSync('./data_table/city_list.json'))
    res.end(JSON.stringify(list));
}