const http = require('http');
const fs = require('fs');
const readline = require('readline');

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

// fs.appendFile('teste.txt',"\nOutro Conteúdo!",(err)=>{
//     if (err) throw err;
//     console.log('Nova linha salva com sucesso!');
// })
//lê arquivo
// fs.readFile('teste.txt',(err,data)=>{
//     if(err) throw err;
//     let str = data.toString();
//     let newStr = str.substr(0,10);
//     console.log(newStr);
// })
// Deletar arquivo
// fs.unlink('teste.txt',(err)=>{
//     if(err) throw err;
//     console.log('Arquivo excluido com sucesso!');
// })
// // Renomer arquivo
// fs.rename('teste.txt','NewTeste.txt',(err)=>{
//     if(err) throw err;
//     console.log("Renomeado com sucesso!");
// })

// const server = http.createServer((req,res)=>{
//     fs.readFile('index.html',function(err,data){
//         console.log(req.headers);
//         res.writeHead(200,{'Content-Type':'text/html'});
//         res.write(data);
//         return res.end();
//     })
// });

// server.listen(port,hostname,()=>{
//     console.log("servidor está on-line");
// });

//lendo inputs
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Qual seu nome?',(name)=>{
    console.log('O nome do usuario é: '+name);
    rl.question('Qual sua idade?',(idade)=>{
        console.log('A idade é: '+idade);
    });
})
rl.on('close',()=>{
    console.log('Adeus!');
    process.exit(0);
});
