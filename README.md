1. Planejamento do Projeto

Objetivo

Criar um sistema web para gerenciar tarefas, onde os usuários poderão adicionar, editar, listar e excluir tarefas.

Requisitos Funcionais

Cadastro de tarefas: O usuário pode cadastrar uma tarefa informando título e descrição.

Edição de tarefas: O usuário pode editar uma tarefa já cadastrada.

Listagem de tarefas: O usuário pode visualizar todas as tarefas cadastradas.

Exclusão de tarefas: O usuário pode excluir uma tarefa.


Requisitos Não Funcionais

Desempenho: O sistema deve ser capaz de listar até 100 tarefas de maneira eficiente.

Segurança: As informações das tarefas devem ser salvas em um banco de dados seguro.



---

2. Modelagem do Sistema

Diagrama de Casos de Uso

Usuário:

Cadastrar tarefas

Editar tarefas

Listar tarefas

Excluir tarefas



Diagrama de Classes

Classes principais:

Task (Tarefa)

Atributos: id, título, descrição, status (pendente ou concluída)

Métodos: adicionar, editar, excluir, listar


Database (Banco de Dados)

Atributos: conexão, tabela de tarefas

Métodos: conectar, salvar, remover, buscar




