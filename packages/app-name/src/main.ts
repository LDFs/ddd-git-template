import './style.css'
import App from './App.vue'

import { createWebApp } from 'ddd-web'

createWebApp({
  root: App,
  router: {
    glob: import.meta.glob('@/views/**/router.ts', { eager: true, import: 'default' })
  }
})
