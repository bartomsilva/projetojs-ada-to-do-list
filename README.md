# TO-DO LIST
Projeto to-do list ...

## Organização das pastas
![image](https://github.com/bartomsilva/projetojs-ada-to-do-list/assets/106079184/2b30d131-e761-4060-8081-930d7d76d58e)

## Funcionalidades
- [x] Adicionar tarefa
- [x] Editar tarefa
- [x] Excluir tarefa
- [x] Listar todas tarefas
- [x] Listar tarefa por id
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
https://github.com/bartomsilva/projetojs-ada-to-do-list/tree/main
``` 
2) Abra o terminal do windows em uma pasta de sua preferência para fazer o clone do projeto com o seguinte comando:
```
  git clone cole-aqui-o-link-acima
```
3) Entre na nova pasta que foi criada após o Clone em seguida na pasta src e digite o seguinte comando:
```
  npm i
````  
4) Para efeturar os testes utillize o comando dentro da pasta src:
```
  node indexWithInterface
```

### Sobre os desenvolvedores: Equipe

- Gabriel Francelino
- Pablo Henrique
- Bart Silva

