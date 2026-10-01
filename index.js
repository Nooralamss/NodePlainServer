const http=require('http');
const PORT=3000;
const server=http.createServer((req,res)=>{
     console.log('Request received');
     console.log(req);
     console.log(res);
     if (req.url=='/'){
          res.write("Home");
     }
     else if(req.url=='/ping'){
          res.write('pong');
     }
     else{
          res.write('hello world');
     }
     
     res.end();
});
server.listen(PORT,()=>{
    console.log("server listening on : http://localhost:",PORT);
})