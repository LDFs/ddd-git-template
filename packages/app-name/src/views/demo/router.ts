import {setI18nRules} from 'ddd-web'
import { setThemeRules } from 'ddd-web'
import langData from './i18n'
import themeData from './theme'

setI18nRules(langData)
setThemeRules(themeData)

const routes = [
  {
    path: '/demo',
    name: 'demo',
    component: () => import('./app.vue')
  }
]

export default routes