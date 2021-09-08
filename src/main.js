import { createApp } from 'vue'
import App from './App.vue'
import installElementPlus from './plugins/element'
import './index.css'
import router from './Routes'
import store from './store/index'

const app = createApp(App)
app.use(router)
app.use(store)
installElementPlus(app)
app.mount('#app')
