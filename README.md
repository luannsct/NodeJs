# NodeJs
Projeto de Node Js usando Rotas


![Counter](https://komarev.com/ghpvc/?username=luannsct&color=grey&label=Visitas)

## Uso/Exemplos

```
const bodyParser = require('body-parser');
const express = require('express');
const  path  = require('path');

const app = express();

app.use( bodyParser.json()); //Para suportar JSON ENCODED 
app.use(bodyParser.urlencoded({ //PARA SUPORTAR URLENCODE 
    extended:true
}));

app.engine('html', require('ejs').renderFile);
app.set('view engine','html');
app.use('/public', express.static(path.join(__dirname,'public')));
app.set('views', path.join(__dirname, '/views'));


//criando lista de tarefas

var tarefas = [];

app.post('/',(req,res)=>{
    tarefas.push(req.body.tarefa);
    res.render('index',{tarefasList:tarefas});
})


app.get('/',(req,res)=>{

    res.render('index',{tarefasList:tarefas});

});

app.get('/deletar/:id',(req,res)=>{
    tarefas = tarefas.filter((val,index)=>{
        if(index != req.params.id){
            return val;
        }
    })
    res.render('index',{tarefasList:tarefas});
})

app.listen(5000,()=>{
    console.log('Servidor Online');
})
```
