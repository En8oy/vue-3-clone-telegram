import { App } from 'vue';

export default {
  install(app: App) {
    const Storage = {
      get(key: string) : any{
        if(window.localStorage){
          const sKey = window.localStorage.getItem(`${process.env.VUE_APP_SITENAME}_${key}`);
          return sKey;
        }
        return null;
      },
      set(key: string, value : any) : void {
        if(window.localStorage){
          window.localStorage.setItem(`${process.env.VUE_APP_SITENAME}_${key}`, JSON.stringify(value))
        }else{
          console.warn("Tu navegador no soporta localstorage")
        }
      },
      delete(key : string){
        if(window.localStorage){
          window.localStorage.removeItem(`${process.env.VUE_APP_SITENAME}_${key}`)
        }else{
          console.warn("Tu navegador no soporta localstorage")
        }
      }
    }
    const { config : {globalProperties}} = app
    globalProperties.$storage = Storage
    //Para que vue3 pueda usar el this.$storage
    app.provide('Storage', Storage)
    console.log(process.env.VUE_APP_SITENAME)
  },
};
