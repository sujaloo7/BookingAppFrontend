import Repository, { baseUrl } from "./Repository"

export function Addproperty(payload) {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await Repository.post(`${baseUrl}/add_property`, payload)

            return resolve(response.data)
        } catch (error) { }
    })
}

export function Getproperty(payload) {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await Repository.post(`${baseUrl}/get_property`, payload)

            return resolve(response.data)
        } catch (error) { }
    })
}


