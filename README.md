# TO-DO LIST
Lógica de Programação - Projeto final
O que?
Desenvolver, utilizando os conceitos abordados ao longo do módulo, uma aplicação de lista de tarefas (ToDo List).

**Requisitos**<br/>
Dentre as funcionalidades, espera-se que seja possível:

- Adicionar uma tarefa
- Editar uma tarefa salva
- Remover uma tarefa salva
- Listar todas as tarefas salvas
- Obter uma tarefa, através de um parâmetro (id)
**Observações**
Não haverá a persistência das tarefas em banco de dados. Para isso, podem utilizar um array para armazenar a lista das tarefas cadastradas.

## Organização das pastas
![image](https://github.com/bartomsilva/projetojs-ada-to-do-list/assets/106079184/7f86d303-57eb-4a43-80e7-493d21acd135)

## Funcionalidades
- [x] <a href="https://github.com/bartomsilva/projetojs-ada-to-do-list/blob/main/src/task/addTask.js">Adicionar tarefa</a>
- [x] <a href="https://github.com/bartomsilva/projetojs-ada-to-do-list/blob/main/src/task/editTask.js">Editar tarefa</a>
- [x] <a href="https://github.com/bartomsilva/projetojs-ada-to-do-list/blob/main/src/task/deleteTask.js">Excluir tarefa</a>
- [x] <a href="https://github.com/bartomsilva/projetojs-ada-to-do-list/blob/main/src/task/listTasks.js" >Listar todas tarefas</a>
- [x] <a href="https://github.com/bartomsilva/projetojs-ada-to-do-list/blob/main/src/task/getTask.js">Obter tarefa por id</a>
- [x] Pausar tarefa
- [x] Cancelar tarefa
- [x] Finalizar tarefa
- [x] Reabrir tarefa
      
## Estrutura do objeto `task`
~~~javascript
task: {
  id: string 
  desc: string,
  date: string(data: dia/mês/ano),
  time: string (hora:minutos),
  status: string (aberta/finalizada/pausada/cancelada),
  created_at: date,
  updated_at: date
}
~~~

## Para executar este projeto 
1) copie o link abaixo:
```
https://github.com/bartomsilva/projetojs-ada-to-do-list.git
``` 
2) Abra o terminal do windows em uma pasta de sua preferência para fazer o clone do projeto com o seguinte comando:
```
  git clone cole-aqui-o-link-acima
```
3) Entre na nova pasta que foi criada após o Clone em seguida na pasta src e digite o seguinte comando:
```
  npm i
````  
4) Para efeturar os testes utillize o comando abaixo:
```
  npm start
```
Será exibirá a seguinte tela:<br>

![image](https://github.com/bartomsilva/projetojs-ada-to-do-list/assets/106079184/7cdebe4a-2323-4e25-839a-46cd13bf195b)





### Sobre os desenvolvedores: Equipe

- Gabriel Francelino
- Pablo Henrique
- Bart Silva

