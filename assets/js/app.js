"use strict";

(function(window, document) {

    // Please read me! https://stackoverflow.com/a/8835458
    window.addEventListener('load', function() {


        window.app.Session.get();
        window.app.Store.getTodos(function(response){
        console.log(response)
        response = JSON.parse(response);
        console.log(response)

        })

        
        

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

                form.reset()

                json = JSON.stringify(json);
                
                window.app.Store.createTodo(json, function(response) {
                console.log('submit prima del parse:', response)
                response = JSON.parse(response);
                console.log('submit dopo il parse:',response)

                var center = document.getElementById('center');
                var div = document.createElement("div");
                div.classList.add("div_class");

                var input = document.createElement("input")
                input.classList.add("checkbox")
                input.setAttribute("type", "checkbox")

                var space = document.createElement("space")
                input.classList.add("space")

                var h1 = document.createElement("h1");
                h1.textContent = response.data.content

                div.appendChild(input)
                div.appendChild(h1);
                div.appendChild(space)
                center.appendChild(div);
               
                

                })

                /* window.app.Store.updateTodo(json, function(response) {
                    console.log('submit prima del parse:', response)
                    response = JSON.parse(response);
                    console.log('submit dopo il parse:',response)
                   
                    
    
                }) */

             
                    
        });
            
    });
    
    
})(window, document);