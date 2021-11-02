import { fetchRequests, getRequests } from "./dataAccess.js"

export const Requests = () => {

    const requestArray = getRequests()

    const requestObject = (each) => {
            return `<li>${each.description}</li>`
        }
    

    let html = `
        <ul>
            ${
                requestArray.map(requestObject).join("")
            }
        </ul>
    `

    return html

}
