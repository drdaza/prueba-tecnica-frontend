import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import '../src/assets/styles/main.scss'

const vuetify = createVuetify({
  components,
  directives,
})

const pinia = createPinia()

pinia.use((context)=>{
  const storeId = context.store.$id

  const serializer = {
    serialize: JSON.stringify,
    deserialize: JSON.parse
  }


  const fromStorage = serializer.deserialize(window.localStorage.getItem(storeId))


  if(fromStorage){
    context.store.$patch(fromStorage)
  }

  context.store.$subscribe((mutation, state)=>{
    window.localStorage.setItem(storeId, serializer.serialize(state))
  })

  
})


const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(vuetify)

app.mount('#app')
