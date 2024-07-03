<template>
  <div class="whole-container">
    <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <div>
    <button type="button" @click="setLang('zh-CN')">中</button>
    <button type="button" @click="setLang('en')" class="margin-left-10">英</button>
  </div>
  <router-link to="/">{{t('home-title')}}</router-link> - 
  <router-link to="/demo">{{t('demo-title')}}</router-link> 
  <router-view></router-view>
  <div>
    <button type="button" @click="setTheme('light')">浅色</button>
    <button type="button" @click="setTheme('dark')" class="margin-left-10">深色</button>
  </div>
  </div>
  
</template>

<script setup lang="ts">
import { setLang, t } from 'ddd-web';
import { setTheme } from 'ddd-web';

</script>

<style scoped>
.whole-container {
  background-color: var(--home-bg-color);
  height: 100vh;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
