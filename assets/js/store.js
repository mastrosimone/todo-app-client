"use strict";


//64a30e80-c75c-836e-0eba-e8ae9629e45e

//2fd7b454-301c-f8b1-84b0-4eed488e0e1d

(function(window, session) {
     var sessionUuid = session.get();

    function updateTodo(id, todoModel, callbackFunction) {
        // ajax call to post method
        console.log('ciao')
    }

    function createTodo(todoModel, callbackFunction) {
        // ajax call to post method
        var xhr = new XMLHttpRequest(),
        method = "POST",
        url = "http://todoapp.mosfarm.eu/todos";
    
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
        url = "http://todoapp.mosfarm.eu/todos"
        url = url + '?uuid=' + sessionUuid;

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
        getTodos: getTodos
    };
})(window, window.app.Session);
