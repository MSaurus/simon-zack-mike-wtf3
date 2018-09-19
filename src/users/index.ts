import * as AJAX from "../ajax/index"

export function send_ajax() {
    console.log("Entering send_ajax function")

    let url = ""
    
    if (window.location.href != "http://localhost:3000/users") {
        let id = window.location.href.substr(window.location.href.lastIndexOf("/") + 1) 
        url = `http://localhost:3000/api/users/${id}`
    } else {
        url = `http://localhost:3000/api/users`
    }

    AJAX.get(url)
    // ask David
    .then( (response : AJAX.User) => {
        console.log(response.data)
        if (response.data == null || undefined) {
            response.data = []
        }
        for (let i = 0; i < response.data.length; i++) {
            console.log(response.data[i]);
            console.log(response.data[i].user_info)
            
            let user = document.createElement("h1")
            let id = document.createElement("h1")
            let hr = document.createElement("hr")
            user.innerHTML = `User: ${response.data[i].user_info.username}`
            id.innerHTML = `ID: ${response.data[i].user_info.id}`
            document.body.appendChild(user)
            document.body.appendChild(id)
            document.body.appendChild(hr)
        }

        // let user = document.getElementById("user")!
        // let id = document.getElementById("id")!
        // user.innerHTML += response.user_info.username
        // id.innerHTML += response.user_info.id
    })
    .catch( response => {
        console.log(response)
    })
}