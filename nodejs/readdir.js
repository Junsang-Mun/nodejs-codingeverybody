let folder = './syntax'
let fs = require('fs')

fs.readdir(folder, function(error, filelist){
    console.log(filelist); // return value looks like array
})