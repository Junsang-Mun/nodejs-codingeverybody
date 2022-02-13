let http = require('http');
let fs = require('fs');
let url = require('url');

let title;
let description;

let app = http.createServer(function(request,response){
    let _url = request.url;
    let querydata = url.parse(_url, true).query;
    let pathname = url.parse(_url, true).pathname;
    title = querydata.id
    
    if(pathname === '/') {
      if(querydata.id === undefined){
        title = 'Hello';
        description = 'hello there!';
      }
      console.log(title);
      fs.readFile(`data/${title}`, 'utf8', function(err, data){
        console.log(data);
        if(data !== undefined){
          description = data;
        } else {}
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
          response.writeHead(200);
          response.end(template);
      });
    } else {
      response.writeHead(404);
      response.end('Not found');
    }
 
});
app.listen(3000);