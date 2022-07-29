import axios from "axios"
const baseDomain = "http://b54b-122-160-30-226.ngrok.io/api"
const imageDomain = "http://b54b-122-160-30-226.ngrok.io"

export const customHeaders = {
  Accept: "application/json",
  /* Authorization: authorization_prefix + token || undefined*/
}

export const baseUrl = `${baseDomain}`
export const imageUrl = `${imageDomain}`

export default axios.create({
  baseUrl,
  headers: customHeaders,
})

