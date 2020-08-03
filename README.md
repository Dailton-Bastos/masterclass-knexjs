# :computer: Masterclass Knex.js

Conhecendo e usando na prática _A SQL Query Builder_ [**Knex.js**][knex].

Conteúdo disponível [aqui][video-url] pela **Rocketseat**.

---

## :link: Tecnologias

- [Node.js][node]
- [Express.js][express]
- [PostgreSQL][postgre]
- [Knex.js][knex]

**Iniciando o `Knexfile.js`**

```bash
$ yarn knex init
```

**Criar Migrate File**

```bash
$ yarn knex migrate:make create_table_users
```

**Criando a tabela no DB**

```bash
$ yarn knex migrate:latest
```

**Criar Seeds File**

```bash
$ yarn knex seed:make 001_users
```

**Inserindo dados com seeds**

```bash
$ yarn knex seed:run
```

**Inserindo dados com um seed específico**

```bash
$ yarn knex seed:run --specific 002_projects.js
```

**Soft Delete tabela users**

```bash
$ yarn knex migrate:make add_column_delete_at_to_users
```

**Procedures e Triggers**

```bash
#Obs: Alterar a data da migrate
$ yarn knex migrate:make add_custom_functions
```

**Desfazer todas migrations**

```bash
$ yarn knex migrate:rollback --all
```

[knex]: http://knexjs.org/#Schema-references
[video-url]: https://www.youtube.com/watch?v=U7GjS3FuSkA&feature=youtu.be
[node]: https://nodejs.org/en/
[express]: https://www.npmjs.com/package/express
[postgre]: https://www.postgresql.org/
