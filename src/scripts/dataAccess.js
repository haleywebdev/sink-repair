const applicationState = {
    requests: []
}

const API = "http://localhost:8088"

export const fetchRequests = () => {
    return fetch(`${API}/requests`)
        .then(response => response.json())
        .then(
            (service) => {
                // Store the external state in application state
                applicationState.requests = service
            }
        )
}

export const getRequests = () => {
    return applicationState.requests.map(request => ({ ... request }))
}
