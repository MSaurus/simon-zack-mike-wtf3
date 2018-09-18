export function get(url : string) {
    var promise = new Promise((resolve, reject) => {
        let request = new XMLHttpRequest()
        request.open("GET", url, true)
        request.send()
        request.onreadystatechange = () => {
            if(request.readyState == XMLHttpRequest.DONE) {
                if(request.getResponseHeader("content-type") == "application/json") {
                    let resp = JSON.parse(request.responseText)
                    resolve(resp)
                }
            }
        }
    })
    return promise
}