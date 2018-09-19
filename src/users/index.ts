import * as AJAX from "../ajax/index"

export function send_ajax() {
    console.log("Entering send_ajax function")
    
    let id = window.location.href.substr(window.location.href.lastIndexOf("/") + 1) 
    let url = `http://localhost:3000/api/users/${id}`

    console.log(id + "\n" + url)

    AJAX.get(url)
    // ask David
    .then( (response : AJAX.User) => {
        let user = document.getElementById("user")!
        let id = document.getElementById("id")!
        user.innerHTML += response.username
        id.innerHTML += response.id
    })
    .catch( response => {
        console.log(response)
    })
}