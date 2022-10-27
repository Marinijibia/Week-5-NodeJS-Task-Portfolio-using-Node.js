const http = require('http');
const fs = require('fs');


const server = http.createServer((req, res) => {
  
  
  res.setHeader("Content-Type", "text/html" );


  let path = './pages/';
  switch(req.url){
    case '/':
      path += 'index.html';
      break;
    case '/about':
      path += 'about.html';
      break;
    case '/contact':
      path += 'contact.html';
      break;
    default:
      path += '404.html';
  }

  

  fs.readFile(path, (err, data) =>{
    if(err){
      console.log(err);
    }
    else{
      res.write(data);
      res.end();
    }
  });

});


server.listen(3000, "127.0.0.1", () =>{
  console.log('currently are listening')
});


