import { ref } from 'vue'
import axios from 'axios';

type methodType = 'get' | 'post' | 'put' | 'delete'

// 模拟获取本地public中的文件
const http = axios.create({ baseURL: 'http://localhost:5173', headers: { token: '', project: '' } })


const createApiService = (prefix: string) => {
  const methods = (method: methodType) => {
    return (url: string) => {
      return (payload?: any) => {
        const loading = ref(false)
        const run = (runPayload?: any) =>
          new Promise((resolve) => {
            loading.value = true
            if (runPayload) payload = runPayload
            if (method === 'get' || method === 'delete') {
              payload = { params: payload }
            }
            http[method](`${prefix}${url}`, payload)
              .then((res: any) => {
                resolve([null, res])
              })
              .catch((err: any) => {
                resolve([err, null])
              })
              .finally(() => {
                loading.value = false
              })
          })
        return { run, loading, url: `${prefix}${url}` }
      }
    }
  }
  return {
    get: methods('get'),
    post: methods('post'),
    put: methods('put'),
    delete: methods('delete'),
  }
}

const service = createApiService('')

export const getAuth = service.get('/authes.json')
