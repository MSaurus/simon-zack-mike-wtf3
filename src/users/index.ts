import * as AJAX from "../ajax/index"

export function send_ajax() {
    console.log("Entering send_ajax function")
    
    let id = window.location.href.substr(window.location.href.lastIndexOf("/") + 1) 
    let url = `http://localhost:3000/api/users/${id}`

    console.log(id + "\n" + url)

    AJAX.get(url)
    .then( response => {
        let h = document.getElementById("greetings")!
        h.innerHTML += ` ${response['username']}`
    })
    .catch( response => {
        console.log(response)
    })
}