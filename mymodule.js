const fs = require('fs')
const path = require('path')
module.exports = (directory, extension, callback)=> {
    fs.readdir(directory, (err, list)=> {
        if(err) callback(err)
       list = list.filter(file=> path.extname(file)=== `.${extension}`) 
        callback(null, list)
    })
}