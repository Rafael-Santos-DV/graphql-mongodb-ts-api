<div align="center">
  <p>API GRAPHQL IN TYPESCRIPT</p>
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

```graphql
# querys

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

# mutation

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
