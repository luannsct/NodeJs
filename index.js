const http = require('http');
const fs = require('fs');

const hostname = "127.0.0.1";
const port = 3000;

//criar novo arquivo
/*
fs.writeFile('teste.txt','Teste de Escrita em arquivo',(err)=>{
    if(err) throw err;
    console.log('O arquivo foi criado com sucesso!')
 })
*/
//cria novo arquivo ou insere conteudo depois do que já existe

fs.appendFile('teste.txt',"\nOutro Conteúdo!",(err)=>{
    if (err) throw err;
    console.log('Nova linha salva com sucesso!');
})

fs.readFile('teste.txt',(err,data)=>{
    if(err) throw err;
    console.log(data.toString());
})

const server = http.createServer((req,res)=>{
    fs.readFile('index.html',function(err,data){
        console.log(req.headers);
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        return res.end();
    })
});

server.listen(port,hostname,()=>{
    console.log("servidor está on-line");
});