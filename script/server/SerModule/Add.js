const fs = require('fs');
module.exports = (req, res) => {
    var Act = JSON.parse(fs.readFileSync('./data_table/active_list.json'));
    Act.list.push(req.body);
    fs.writeFileSync('./data_table/active_list.json', JSON.stringify(Act))
    res.end('success');
}