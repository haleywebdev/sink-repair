import { getRequests } from "./dataAccess.js"
import { fetchRequests } from "./dataAccess.js"

export const Requests = () => {
    const requests = getRequests()

    let html = `
        <ul>
            ${
                requests.map()
            }
        </ul>
    `

    return html
}
