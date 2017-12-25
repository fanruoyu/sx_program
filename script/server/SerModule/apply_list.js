const fs = require('fs');
module.exports = (req, res) => {
    let apply_list = JSON.parse(fs.readFileSync('./data_table/apply_list.json'));
    // console.log(apply_list.list);
    res.end(JSON.stringify(apply_list.list));
}