let http = require('http');
let fs = require('fs');
let url = require('url');
let description;

let app = http.createServer(function(request,response){
    let _url = request.url;
    let querydata = url.parse(_url, true).query;
    let title = querydata.id
    if(_url == '/'){
      _url = '/index.html';
    }
    if(_url == '/favicon.ico'){
        response.writeHead(404);
        response.end();
        return;
    }
    response.writeHead(200);
    fs.readFile(`data/${title}`, 'utf8', function(err, data){
      description = data; 
    });
    let template = `
    <!doctype html>
<html>
<head>
  <title>WEB1 - ${title}</title>
  <meta charset="utf-8">
</head>
<body>
  <h1><a href="index.html">WEB</a></h1>
  <ol>
    <li><a href="/?id=html">HTML</a></li>
    <li><a href="/?id=css">CSS</a></li>
    <li><a href="/?id=javascript">JavaScript</a></li>
  </ol>
  <h2>${title}</h2>
  <p>${description}
  </p>
  </body>
  </html>
    `;

    response.end(template);
 
});
app.listen(3000);