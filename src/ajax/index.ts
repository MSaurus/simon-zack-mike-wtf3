export function get(url : string) : Promise<User>{
    return new Promise((resolve : (resp : User) => void, reject) => {
        const request = new XMLHttpRequest()
        request.open("GET", url, true)
        request.send()
        request.onreadystatechange = () => {
            if(request.readyState == XMLHttpRequest.DONE) {
                if(request.getResponseHeader("content-type") == "application/json; charset=utf-8") 
                {
                    let resp = JSON.parse(request.responseText)
                    resolve(resp)
                }
                else 
                { 
                    reject(new Error("That's not an json"))
                }
            }
        }
    })
}

export interface User {
    username: string;
    id: number;
}
  