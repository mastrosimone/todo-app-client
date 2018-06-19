"use strict";

(function(window, document) {

    // Please read me! https://stackoverflow.com/a/8835458
    window.addEventListener('load', function() {


        window.app.Session.get();
        window.app.Store.getTodos(function(response){
        response = JSON.parse(response);
            console.log(response)

        })
        // for(x = 0;x < data.content.lenght;x++)


        var center = document.querySelector('#center')
        var div = document.createElement("div")
        div.textContent = ''
        // div.textContent = json.data.docs
        center.appendChild(div)
        
        // for(i = 0;i < json.data.length;i++)


        
        window.app.Session.get()

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

                json = JSON.stringify(json);
                
                window.app.Store.createTodo(json, function(response) {
                    response = JSON.parse(response);

                })

            // xhr.send(json);
                    
        });
            
    });
    
    
})(window, document);