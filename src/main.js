/*
 * @Author: yxd
 * @Date: 2023-05-21 13:00:03
 * @LastEditors: ad ad@zhun-shi.com
 * @LastEditTime: 2023-05-21 13:49:49
 * @Description: 
 */
import '@/styles/index.scss'
import 'uno.css'

import { createApp } from 'vue'
import { setupRouter } from '@/router'
import { setupStore } from '@/store'
import App from './App.vue'

const app = createApp(App)
setupStore(app)
setupRouter(app)

app.mount('#app')
