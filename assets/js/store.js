"use strict";

(function(window, session) {
    // var sessionUuid = session.get();

    function updateTodo(id, todoModel, callbackFunction) {
        // ajax call to post method
    }

    function createTodo(todoModel, callbackFunction) {
        // ajax call to post method
    }

    function getTodos(callbackFunction) {
        // ajax get call
    }

    // Export to window
    window.app = window.app || {};
    window.app.Store = {
        updateTodo: updateTodo,
        createTodo: createTodo,
        getTodos: getTodos
    };
})(window, window.app.Session);
