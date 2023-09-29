import '../src/assets/css/bootstrap-grid.min.css'
import '../src/assets/css/bootstrap-reboot.min.css'
import '../src/assets/css/bootstrap.min.css'
import '../src/assets/css/mbr-additional.css'
import '../src/assets/css/mobirise-icons-bold.css'
import '../src/assets/css/style.css'









import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
