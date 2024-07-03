import { createApp, type App as AppType } from "vue";
import { initRouter } from "../router";


let app: AppType | null = null;

export const createWebApp = (config: any) => {
  const { router, root } = config;
  const router1 = initRouter(router)

  if (!app) {
    app = createApp(root)
    app.use(router1).mount('#app')
  }
}