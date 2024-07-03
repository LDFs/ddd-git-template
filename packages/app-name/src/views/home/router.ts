import { setI18nRules } from "ddd-web";
import { setThemeRules } from "ddd-web";
import langData from "./i18n";
import themeData from "./theme";

setI18nRules(langData);
setThemeRules(themeData);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("./app.vue"),
    meta: {
      keepAlive: false,
      menuCode: 'home-menucode-content',
    },
  },
];

export default routes;
