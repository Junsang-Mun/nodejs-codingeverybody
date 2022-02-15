const http = require('http');
const fs = require('fs');
const url = require('url');

let title;
let description;
let list = '';

let app = http.createServer(function(request,response){
    let _url = request.url;
    let querydata = url.parse(_url, true).query;
    let pathname = url.parse(_url, true).pathname;
    title = querydata.id
    
    if(pathname === '/') {
      if(querydata.id === undefined){
        title = 'Hello';
        description = 'hello there!';

        console.log(title);
        fs.readdir('data/', 'utf8', function(err, filelist){
        console.log(filelist);

        let i = 0;
        while(i < filelist.length){
          list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`
          i++;
          console.log(i);
        } //TODO: 무한생성 이슈 fix

        /*
        let list = '';
        let i = 0;
        while(i < filelist.length){
          list = list + `<li><a href="${filelist[i]}.html">${filelist[i]}</a></li>`
        }
        메모리 누수 의심 위치
        */
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
            ${list}
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
      }
      
    } else {
      response.writeHead(404);
      response.end('Not found');
    }
 
});
app.listen(3000);