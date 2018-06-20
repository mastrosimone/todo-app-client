"use strict";
var devmode = false;

(function(window, document) {

    // Please read me! https://stackoverflow.com/a/8835458
    window.addEventListener('load', function() {

        window.app.Session.get();
        window.app.Store.getTodos(function(response){
            if (devmode == true){
                console.log(response)
            }
        response = JSON.parse(response);
            if (devmode == true){
                console.log(response)
            }

                var center = document.getElementById('center')

                for (var i = 0;i < response.data.docs.length;i++){
                    createElement(response.data.docs[i])
                }
    
        }
    )

    var form = document.querySelector('#insert_form')
    form.addEventListener('submit', function() {
        
        window.app.Session.get()

        event.preventDefault()
        var content = document.querySelector('#nota').value
        
        var json = {}
        json.data = {}
        json.data.uuid = window.app.Session.get()
        json.data.content = content
        json.data.done = false

        form.reset()

        json = JSON.stringify(json);
        
            window.app.Store.createTodo(json, function(response) {
                console.log(response);
                var response = JSON.parse(response)
                createElement(response.data)

            })

    });
});
    
function createElement(todo){

    var idnote = todo._id
    var content = todo.content
    var done = todo.done
    var div = document.createElement("div")
    div.classList.add("div_class")

    var label = document.createElement("label")
    label.setAttribute("id", idnote)
    var input = document.createElement("input")
    input.classList.add("checkbox")
    input.checked = done
    input.addEventListener("change", function(e){
        
        var id = e.target.parentNode.id

        // event.preventDefault()
        //var content = document.querySelector('#nota').value
        var json = {
            data: {
                done: e.target.checked
            }
        }
        
        
        console.log(json)
        json = JSON.stringify(json)
        console.log(json)

        window.app.Store.updateTodo(id, json, function(response){
            console.log(response)
        })

    })
    input.setAttribute("type", "checkbox")

    var space = document.createElement("space")
    input.classList.add("space")

    var h1 = document.createElement("h1")
    h1.textContent = content

    div.appendChild(label)
    label.appendChild(input)
    label.appendChild(h1);
    div.appendChild(space)
    center.appendChild(div)
    
}
    
})(window, document);