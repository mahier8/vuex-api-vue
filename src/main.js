import { createApp } from 'vue'
import App from './App.vue'
//Add the line below to the file
import store from "./store";


createApp(App)
//Add the line below to the file
.use(store)
.mount('#app')

//other lines have already been added to your main.js file by default
