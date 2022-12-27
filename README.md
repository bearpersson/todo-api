# TODO App API

This is a practice task that involves implementing an UI for a simple todo API.

## Technologies used

-   Express (https://expressjs.com/)
-   Jest (https://jestjs.io/)

## Task

1. Clone this repo and install it's dependencies. Run `npm run build:development` followed by `npm run start`. Head over to `http://localhost:8080/` and you should see an empty list. The server is up and running.
2. Decide on what framework you want to use to build the UI.
3. Implement a list view for the todos.
4. We need to implement a priority feature. User should be able to rank the todos with 1-3, where 1 has the highest prior. The list should be sorted by priority (high to low). Changes should be made serverside. Add unit test for the implemented feature.
5. Implement a form to add new todos.
6. Implement a delete button to remove a todo.
7. Implement a complete button to change status.

## API documentation

### Get list of todos

#### Request

`GET /`

curl --location --request GET 'http://localhost:8080/' --header 'Accept: application/json'

#### Response

200 OK

```
[
    {
        "text": "Task",
        "completed": false,
        "id": "174"
    }
]
```

### Create todo

#### Request

`POST /`

curl --location --request POST 'http://localhost:8080/' \
--header 'Content-Type: application/json' \
--data-raw ' {
"text": "New task"
}'

#### Response

200 OK

### Update todo

#### Request

`PUT /:id`

curl --location --request PUT 'http://localhost:8080/123' \
--header 'Content-Type: application/json' \
--data-raw '{
"text": "New task",
"completed": true
}'

#### Response

200 OK

### Delete todo

#### Request

`DELETE /:id`

curl --location --request DELETE 'http://localhost:8080/57'

#### Response

200 OK
