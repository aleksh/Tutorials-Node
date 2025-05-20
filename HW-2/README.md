## Available routers

GET - http://localhost:3000/    ``` Return all users ```

GET - http://localhost:3000/users   ``` Return all users ```

GET - http://localhost:3000/user?id=1   ``` Return a user ```


POST http://localhost:3000/user   ```Add a new user```
```
{
  "name": "new user name"
}
```


PUT http://localhost:3000/user   ```Update a user```
```
{
  "id": "1",
  "name": "update name"
}
```


DELETE http://localhost:3000/user   ```Delete a user```
```
{
  "id": "1",
}
```