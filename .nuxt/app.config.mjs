
import { updateAppConfig } from '#app'
import { defuFn } from 'D:/Kuliah/Semester 5/Tugas/Sistem Informasi/Mid-SistemInformasi-branch_ramma/node_modules/defu/dist/defu.mjs'

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
