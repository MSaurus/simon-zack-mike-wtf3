import * as Users from "./users/index"

window.addEventListener("load", () => {
    console.log("Sending Ajax request")
    Users.send_ajax()
})