<div align="center">
  <p>GRAPHQL API IN TYPESCRIPT</p>
</div>

install dependencies

```bash
  yarn install
```

start server

```bash
  yarn dev
```

Acesse: [localhost:4000](http:localhost:4000)

Tecnologias:

<div>
  <img src="https://img.shields.io/badge/-GRAPHQL-%23E10098" alt="Graphql" />
</div>
<div>
  <img src="https://img.shields.io/badge/-MONGODB-%234DB33D" alt="Mongodb" />
</div>
<div>
  <img src="https://img.shields.io/badge/-TYPESCRIPT-%23007acc" alt="Typescript" />
</div>
<div>
  <img src="https://img.shields.io/badge/-NODE.JS-%2368A063" alt="Node">
</div>

Queries

```graphql
# unique user
query User {
  showUser(id: "userid") {
    id # String
    email # String
    firstName # String
    games # [String]
    lastName # String
  }
}

# All users
query User {
  showUsers {
    id # String
    email # String
    firstName # String
    games # [String]
    lastName # String
  }
}
```

Mutation

```graphql
# example
mutation NewUser {
  createUser(
    games: "['God Of War', 'Grand Theft Auto Five', 'Call Of Duty']"
    firstName: "Rafael"
    lastName: "Dev"
    password: "93hhhfa87"
    email: "test@dev.com"
  ) {
    games
    firstName
    lastName
    email
  }
}
```
