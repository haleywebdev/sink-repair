import { fetchRequests, getRequests } from "./dataAccess.js"

export const Requests = () => {

    const requestArray = getRequests()

    const requestObject = () => {
        for (const request of requestArray) {
            return `<li>${request.description}</li>`
        }
    }

    let html = `
        <ul>
            ${requestArray.map(requestObject)}
        </ul>
    `

    return html
}
