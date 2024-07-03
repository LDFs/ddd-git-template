import { createRouter, createWebHistory } from "vue-router"

function initRouter(router: any){
  const globRoutes = Object.values(router?.glob || [])
    .filter((item) => !!item)
    .flat()
    .sort((a: any, b: any) => (a.index ?? 0) - (b.index ?? 0))

  const routes = globRoutes.map((item: any) => {
    const meta = item.meta || {}
    meta.keepAlive = meta.keepAlive ?? true
    return { ...item, meta }
  })
  return createRouter({ history: createWebHistory(), routes })
}

export { initRouter }