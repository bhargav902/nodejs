/*const Person= require('./person');



const person1 = new Person('bhargav',33);

person1.greetings();

const Loger = require('./loger');

const loger =new Loger();
loger.on('message',(data)=> console.log('called listener',data));

loger.log('hello world');*/
const http=require('http');
const path= require('path');
const fs =require('fs');

const server =http.createServer((req,res)=>{
    /*if(req.url == '/api/users'){
        const users=[
            {name:"bhargav",age:30},
            {name:"jothish",age:40}
        ];
        res.writeHead(200,{'Content-Type': 'application.json'});

        res.end(JSON.stringify(users));

       
        
    }*/

    let filePath=path.join(__dirname,'public',req.url ==='/'?'index.html':req.url);
   
    let extname=path.extname(filePath);

    let contentType='text/html';


    switch(extname){
        case '.js':
            contentType='text/javascript';
            break;
        case '.css':
            contentType='text/css';
            break;
        case '.json':
            contentType='application/json';
            break;
        case '.png':
            contentType='image/png';
            break;
        case '.jpg':
            contentType='image/jpg';
            break;

    }


    fs.readFile(filePath,(err, content)=>{
        if(err){
            if(err.code=='ENOENT'){
                fs.readFile(path.join(__dirname,'public','404.html'),(err, content)=>{
                    res.writeHead(200,{'ContentType': 'text/html'});
                    res.end(content,'utf8');
                })

            }else{
                res.writeHead(500);
                res.end(`server error: ${err.code}`);
            }
        }else{
            res.writeHead(200,{'ContentType': contentType});
            res.end(content, 'utf8');

        }
    });

});
const PORT =process.env.PORT ||  5000;
server.listen(PORT, ()=>console.log(`server running on port${PORT}`));
