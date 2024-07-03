import {ref, reactive} from 'vue'

const globalLangData: any = reactive({})
const currentLang = ref('zh-CN')

function setI18nRules(datas: any){
  for(let key in datas){
    globalLangData[key] = datas[key]
  }
}

function getI18nRule(key: string){
  const keyData = globalLangData[key]
  if(!keyData || keyData === key) return key
  return keyData[currentLang.value]
}

function setLang(lang: string){
  currentLang.value = lang
}

const getLang = () => currentLang.value

const t = getI18nRule

export {
  setI18nRules, t, setLang, getLang
}