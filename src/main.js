import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import routes from './routes'
import { createPinia } from 'pinia'; // ✅ importar Pinia
const app = createApp(App)
const pinia = createPinia()
app.use(pinia) // ✅ usar Pinia
app.use(routes)
app.mount('#app')