import Repository, { baseUrl } from "./Repository"

export function userRegister(payload) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await Repository.post(`${baseUrl}/user_register`, payload)

      return resolve(response.data)
    } catch (error) { }
  })
}
export function getRoles(payload) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await Repository.post(`${baseUrl}/get_roles`, payload)

      return resolve(response.data)
    } catch (error) { }
  })
}
export function userLogin(payload) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await Repository.post(`${baseUrl}/user_login`, payload)

      return resolve(response.data)
    } catch (error) { }
  })
}


