const http = require('http');
const fs = require('fs');
const url = require('url');

function templateHTML(title, list, body){
  return `
  <!doctype html>
  <html>
  <head>
    <title>WEB1 - ${title}</title>
    <meta charset="utf-8">
  </head>
  <body>
    <h1><a href="/">WEB</a></h1>
      ${list}
      <li><a href="/create">create</a></li>
      ${body}
    </body>
    </html>
    `;
}

function templateList(filelist){
  let list = '<ul>';
  let i = 0;
  while(i < filelist.length){
    list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
    i++;
  }
  list = list + '</ul>';
  return list;
}

let app = http.createServer(function(request,response){
    let _url = request.url;
    let querydata = url.parse(_url, true).query;
    let pathname = url.parse(_url, true).pathname;
    
    if(pathname === '/') {
      if(querydata.id === undefined){
        fs.readdir('./data', function(error, filelist){
          const title = 'Welcome';
          const description = 'Hello Node.js';
          const list = templateList(filelist);
          const template = templateHTML(title, list, `<h2>${title}</h2>${description}`);
          response.writeHead(200);
          response.end(template);
        });
      } else {
        fs.readdir('./data', function(error, filelist){
          fs.readFile(`data/${querydata.id}`, 'utf8', function(error, description){
            const title = querydata.id;
            const list = templateList(filelist);
            const template = templateHTML(title, list, `<h2>${title}</h2>${description}`);
            response.writeHead(200);
            response.end(template);
          });
        });
      }
    } else if(pathname === '/create'){
      let template;
      fs.readdir('./data', function(error, filelist){
          const title = 'WEB - create';
          const list = templateList(filelist);
          template = templateHTML(title, list, `
            <form action="/create_process" method="post">
              <p><input type="text" name="title" placeholder="title"></p>
              <p>
                <textarea name="description" placeholder="description"></textarea>
              </p>
              <p>
                <input type="submit">
              </p>
            </form>
          `);
        response.writeHead(200);
        response.end(template)
      });
    } else if(pathname === '/create_process'){
      let title;
      let body = '';
      request.on('data', function(data){
          body = body + data;
      });
      request.on('end', function(){ 
        title = new URLSearchParams(body).get('title');
        description = new URLSearchParams(body).get('description');
        console.log(title);
        console.log(description);
      });
      response.writeHead(200);
      response.end('success');
    } else {
    response.writeHead(404);
    response.end('out');
    }
  } 
  
  );
app.listen(3000);