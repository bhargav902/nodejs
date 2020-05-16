const fs =require('fs');

const path = require('path');

/*fs.makdir(path.join(__dirname,'/test'),{},function(err){
    if(err) throw err;
    console.log('Floder created...');
});


fs.writeFile
(path.join(__dirname,'/test','hello.txt'),'hello bharghav',function(err){
    if(err) throw err;
    console.log('File written...');

    fs.writeFile(path.join(__dirname,'/test','hello.txt'),'I love my self',function(err){
        if(err) throw err;
        console.log('File written...');
    });




});

fs.readFile(path.join(__dirname,'/test','hello.txt'),'utf8',function(err, data){
    if(err) throw err;
    console.log(data);
});*/


fs.rename(path.join(__dirname,'/test','hello.txt'),path.join(__dirname,'/test','helloworld.txt'),function(err){
    if(err) throw err;
    console.log('File renamed');
});




