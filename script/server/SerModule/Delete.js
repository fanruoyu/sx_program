const fs = require('fs');
const jwt = require('jsonwebtoken');
module.exports = (req, res) => {
    let params = req.body;
    jwt.verify(params.token, 'postpost', function(err, decoded) {
        if (err) {
            err.code = 1001;
            res.end(JSON.stringify(err))
        } else {
            let resident_list = JSON.parse(fs.readFileSync('./data_table/resident_list.json'))
            let lists = resident_list.list
            lists.list.forEach((item, index) => {
                if (item.id === params.id) {
                    resident_list.list.list.splice(index, 1)
                }
            })
            fs.writeFileSync('./data_table/resident_list.json', JSON.stringify(resident_list));
            let len = resident_list.list.list.length;
            res.end(JSON.stringify({msg: 'Success', len: len}))
        }
    });
    
}