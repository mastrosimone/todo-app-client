# MDA TodoApp

## Getting started

1. Fork this repository
1. Clone it

```bash
git clone https://github.com/my-username/todo-app.git
```

```bash
cd todo-app
```

## Install dependencies

```bash
npm install
```

## Start web server

```bash
npm start
```

and navigate to [http://localhost:8000](http://localhost:8000)

you can change the default (8000) web server port

```bash
npm start 8888
```

and navigate to [http://localhost:8888](http://localhost:8888)

## Write code

### To do list of TodoApp

Code in order to create a simple to do app.

- Todos is a list of todos model stored and retrieved from the provided service.

```js
var todos = [ { /* ... i'm a todo model ... */ }, {} ]
```

- Each todo has the following model

```js
var todo = {
    /* ... */
    id: 'alfanumericid',
    content: 'text',
    done: true || false
    /* ... */
}
```

- You can add more than one todo
- You can delete a todo
- Each change to the model must be reflected into the Store object
- Store object should be written in order to make three ajax call, GET (retrieve data), POST (create data), PATCH (update date)
- Extra functionality: show/hide done todos from the view
- Extra functionality: Todos pagination

### Api Service

#### Retrieve to do list

GET:http://apiserviceendpoint.locl/todos?uuid={uuid}

Response

```json
{
    "data": {
        "docs": [
            {
                "_id": "5b289e57121bde36675dd4b8",
                "updatedAt": "2018-06-19T06:10:31.341Z",
                "createdAt": "2018-06-19T06:10:31.341Z",
                "uuid": "woeivnewiojwehvehvehve",
                "deleted": false,
                "done": true,
                "content": ""
            }
        ],
        "total": 1,
        "limit": 10,
        "offset": 0,
        "page": 1,
        "pages": 1
    }
}
```

#### Create one to do

POST:http://apiserviceendpoint.locl/todos

Request

```json
{
    "data": {
        "uuid": {uuid},
        "content": "text",
        "done": true
    }
}
```

Response

```json
{
    "data": {
        "updatedAt": "2018-06-19T06:10:31.341Z",
        "createdAt": "2018-06-19T06:10:31.341Z",
        "uuid": "woeivnewiojwehvehvehve",
        "deleted": false,
        "_id": "5b289e57121bde36675dd4b8",
        "done": true,
        "content": ""
    }
}
```

#### Update one to do

PATCH:http://apiserviceendpoint.locl/todos/{_id}

Request

```json
{
    "data": {
        "done": true
    }
}
```

## Ready for production

### Release phase

The current version of the project is 0.0.1

```bash
npm version patch #will move version to 0.0.2
```

```bash
npm version minor #will move version to 0.1.0
```

```bash
npm version major #will move version to 1.0.0
```

This is called [Semantic Versioning](https://semver.org)

In package.json I've added two npm scripts, version and postversion. These are called hooks, and are fired after/before a version event. It's a good practice to make an half automatized release.

```json
"scripts": {
    "preversion": "npm test", // this is just an example, version will not fire if test fails
    "version": "git add package.json", // fired during version command (npm version something)
    "postversion": "git push && git push --tags" // fired after version command, it will push all tags created
}
```

### Deploy phase

see [Github pages](https://pages.github.com)

## Inspired by

[todomvc](http://todomvc.com/examples/vanillajs)
