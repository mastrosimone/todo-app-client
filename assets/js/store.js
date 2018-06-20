"use strict";

(function(window, session) {
     var sessionUuid = session.get();

    function updateTodo(id, todoModel, callbackFunction) {
        // ajax call to post method
        var xhr = new XMLHttpRequest(),
        method = "PUT",
        url = "http://192.168.20.173:7000/todos/" + id;
    
        xhr.open(method, url, true);
        xhr.setRequestHeader('Content-type', 'application/json', 'charset=utf-8');


        xhr.addEventListener('load', function (x) {
            callbackFunction(x.target.response);
        });

        xhr.send(todoModel);

    }

    function createTodo(todoModel, callbackFunction) {
        // ajax call to post method
        var xhr = new XMLHttpRequest(),
        method = "POST",
        url = "http://192.168.20.173:7000/todos";
    
        xhr.open(method, url, true);
        xhr.setRequestHeader('Content-type', 'application/json', 'charset=utf-8');

        xhr.addEventListener('load', function (x) {
            callbackFunction(x.target.response);
        });

        xhr.send(todoModel);

    }

    function getTodos(callbackFunction) {

        var xhr = new XMLHttpRequest(),
        method = "GET",
        url = "http://192.168.20.173:7000/todos"
        url = url + '?limit=1000&uuid=' + sessionUuid;

        xhr.open(method, url, true);

        xhr.addEventListener('load', function (x) {
            callbackFunction(x.target.response);
        });

        xhr.send();

    }

    // Export to window
    window.app = window.app || {};
    window.app.Store = {
        updateTodo: updateTodo,
        createTodo: createTodo,
        getTodos: getTodos,
    };
})(window, window.app.Session);
