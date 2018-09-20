import * as AJAX from "../ajax/index"

export function send_ajax() {

    let url = ""
    
    if (window.location.href != "http://localhost:3000/users") 
    {
        let id = window.location.href.substr(window.location.href.lastIndexOf("/") + 1) 
        url = `http://localhost:3000/api/users/${id}`
        console.log(url)
        AJAX.get_one(url)
        // ask David
        .then( (response : AJAX.User) => {
            console.log(response)

            let user = document.createElement("h1")
            let id = document.createElement("h1")
            let hr = document.createElement("hr")
            user.innerHTML = `User: ${response.data.user_info.username}`
            id.innerHTML = `ID: ${response.data.user_info.id}`
            document.body.appendChild(user)
            document.body.appendChild(id)
            document.body.appendChild(hr)
        })
        .catch( response => {
            console.log(response)
        })
    } 
    else 
    {
        url = `http://localhost:3000/api/users`
        AJAX.get_all(url)
        // ask David
        .then( (response : AJAX.Users) => {
            if (response.data == null || undefined) {
                response.data = []
            }
            for (let i = 0; i < response.data.length; i++) {
                
                let user = document.createElement("h1")
                let id = document.createElement("h1")
                let hr = document.createElement("hr")
                user.innerHTML = `User: ${response.data[i].user_info.username}`
                id.innerHTML = `ID: ${response.data[i].user_info.id}`
                document.body.appendChild(user)
                document.body.appendChild(id)
                document.body.appendChild(hr)
            }
        })
        .catch( response => {
            console.log(response)
        })     
    }
}

