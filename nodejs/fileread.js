const fs = require('fs');
fs.readFile('sample.txt', 'utf8', function(err,data){ //상위 디렉터리에서 접근하려면 ./nondejs/sample.txt로 접근하면 될것같음
    console.log(data);
});