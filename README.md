# NodeJs
Projeto de Node Js usando Rotas


![Counter](https://komarev.com/ghpvc/?username=luannsct&color=grey&label=Visitas)

```

<body>
    
    <div class="tarefas">
        <form action="" method="post">
            <input type="text" name="tarefa" id="tarefaSalvar"/>
            <input type="submit" value="Inserir" name="acao">
        </form>

        <% for (let i = 0; i< tarefasList.length;i++ ){ %>

            <p> 
                <%= tarefasList[i]%>
                | <a href="/deletar/<%= i %>">X</a>
            </p>

        <% } %>
    </div>


</body>

```
