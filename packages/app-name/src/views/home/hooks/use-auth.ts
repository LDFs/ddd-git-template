import { ref } from 'vue'
import { useRoute } from 'vue-router'
import * as apis from '../api'

const allAuthInfo = ref<any>({})

export const useAuth = (page: string) => {
  const route = useRoute()
  const defaultPermission = { add: false, delete: false, edit: false, read: false }
  
  type A = {
    [key: string]: any
  }
  const authBtn = ref<A>({})
  const loading = ref(true)
  apis.getAuth().run().then((res: any) => {
    loading.value = true
    const [, r] = res
    const thisPage = r.data.find((item: any) => item.menuCode === route.meta.menuCode)
    authBtn.value = thisPage?.permission || defaultPermission
  }).finally(() => {
    loading.value = false
  })
  
  allAuthInfo.value[page] = {
    authBtn,
  }
  return {
    authBtn,
    loading
  }
}

