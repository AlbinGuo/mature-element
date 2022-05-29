import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as Icons from '@element-plus/icons'
import { toLine } from './utils/index'

const app = createApp(App)

// 注册全局组件
for (const key in Icons) {
  console.log(`el-icon${toLine(key)}`)
  app.component(`el-icon${toLine(key)}`, (Icons as any)[key])
}

app.use(router)
   .use(ElementPlus)
app.mount('#app')
