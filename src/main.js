import { createApp } from 'vue'
import App from './App.vue'
// 全局导入组件库
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'
// 图标库
import '@/assets/icon/iconfont.css'
import '@/assets/base.scss'
// 引入cookie
import VueCookies from 'vue-cookies'
// 自定义组件
import Dialog from '@/components/Dialog.vue'
import Avatar from '@/components/Avatar.vue'
import Table from '@/components/Table.vue'
import Icon from '@/components//Icon.vue'
import NoData from '@/components/NoData.vue'
// 工具
import Verify from '@/utils/Verify.js'
import Request from '@/utils/Request.js'
import Message from '@/utils/Message.js'
import Confirm from '@/utils/Confirm.js'
import Utils from '@/utils/Utils.js'
const app = createApp(App)
app.use(router)
app.use(ElementPlus)

app.component('Dialog', Dialog)
app.component('Avatar', Avatar)
app.component('Table',Table)
app.component('Icon',Icon)
app.component('NoData',NoData)
app.config.globalProperties.Verify = Verify
app.config.globalProperties.Message = Message
app.config.globalProperties.Request = Request
app.config.globalProperties.Confirm=Confirm
app.config.globalProperties.Utils=Utils
app.config.globalProperties.VueCookies = VueCookies
app.config.globalProperties.globalInfo = {
  avatarUrl: '/api/getAvatar/',
  imageUrl:'/api/file/getImage/'
}
app.mount('#app')
