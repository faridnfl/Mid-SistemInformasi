
import { updateAppConfig } from '#app'
import { defuFn } from 'D:/KULIAH/5. SEMESTER 5/Sistem Informasi/Tugas_MID_SISFOR/node_modules/defu/dist/defu.mjs'

const inlineConfig = {
  "nuxt": {}
}

// Vite - webpack is handled directly in #app/config
if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    updateAppConfig(newModule.default)
  })
}



export default /* #__PURE__ */ defuFn(inlineConfig)
