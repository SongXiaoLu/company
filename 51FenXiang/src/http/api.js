import service from "./fetch"
import qs from "qs"

const get = function (url, params = "") {
  return service.get(url,{params})
}

const post = function (url, data) {
  return service.post(url, data)
}

const put = function (url, data) {
  return service.put(url, qs.stringify(data))
}

const del = function (url, params = "") {
  return service.delete(url,{params})
}
export default {
  get,
  post,
  put,
  del
}
