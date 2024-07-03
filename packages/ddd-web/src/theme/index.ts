import {ref} from 'vue'

const currentTheme = ref('light')
const themeClassPrefixKey = 'ddd'

const globalThemeData = ref<any>({
  light: {},
  dark: {}
})
const customThemeData = ref<any>({
  light: {},
  dark: {}
})

function getDasThemeStyleSheet(type?: 'global' | 'custom') {
  const globalStyleId = `das-global-theme`
  const customStyleId = `das-custom-theme`

  if (!document.getElementById(customStyleId)) {
    const style = document.createElement('style')
    style.appendChild(document.createTextNode(''))
    style.setAttribute('id', customStyleId)
    document.head.appendChild(style)
  }
  if (!document.getElementById(globalStyleId)) {
    const style = document.createElement('style')
    style.appendChild(document.createTextNode(''))
    style.setAttribute('id', globalStyleId)
    document.head.appendChild(style)
  }

  if (!type) type = 'custom'
  let style: HTMLStyleElement = document.getElementById(customStyleId) as HTMLStyleElement
  if (type === 'global') style = document.getElementById(globalStyleId) as HTMLStyleElement
  return style.sheet as CSSStyleSheet
}
function setThemeRules(datas: any, type?: 'global' | 'custom'){
  if(!type) type = 'custom'
  const sheet = getDasThemeStyleSheet(type)
  const themeData = pureThemeData(datas)
  for (const themeKey in themeData) {   // light; dark
    const themeItem = themeData[themeKey]
    for (const themeRuleKey in themeItem) {    // --home-bg-color;;
      const themeRule = themeItem[themeRuleKey]
      const className = `${themeClassPrefixKey}-${themeKey}`
      sheet.insertRule(`.${className} { ${themeRuleKey}:${themeRule} } `, sheet.cssRules.length)
    }

    if (type === 'global') {
      if (!globalThemeData.value[themeKey]) globalThemeData.value[themeKey] = {}
      globalThemeData.value[themeKey] = { ...globalThemeData.value[themeKey], ...themeItem }
    }

    if (type === 'custom') {
      if (!customThemeData.value[themeKey]) customThemeData.value[themeKey] = {}
      customThemeData.value[themeKey] = { ...customThemeData.value[themeKey], ...themeItem }
    }
  }
  const currentThemeClassName = `${themeClassPrefixKey}-${currentTheme.value}`
  if (document.body.classList.contains(currentThemeClassName)) return
  document.body.classList.add(currentThemeClassName)
}

function pureThemeData(datas: any){
  // datas: { '--home-color': { 'light': '123', 'dark': '321' } }
  const res: any = {
    light: {},
    dark: {}
  }
  let {light= {}, dark= {}, base= {}, ...data} = datas
  res.light = {...light, ...base} || {}
  res.dark = dark || {}
  for(let key in data){
    const dataItem = data[key]
    if (typeof dataItem === 'string') {
      res.light[key] = dataItem
    }

    if (typeof dataItem === 'object') {
      for (const themeKey in dataItem) {
        if (!res[themeKey]) res[themeKey] = {}
        if (!res[themeKey][key]) res[themeKey][key] = {}
        res[themeKey][key] = dataItem[themeKey]
      }
    }
  }
  return res
}

function setTheme(theme: string){  
  document.body.classList.add(`${themeClassPrefixKey}-light`)
  if (theme === 'light') document.body.classList.remove(`${themeClassPrefixKey}-${currentTheme.value}`)
    
  currentTheme.value = theme
  document.body.classList.add(`${themeClassPrefixKey}-${currentTheme.value}`)
}

export {
  setThemeRules, setTheme
}