import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

export default (app) => {

  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }

  app.use(ElementPlus)
}
