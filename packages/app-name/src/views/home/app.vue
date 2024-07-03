<template>
  <div>
    <h2 class="home-title">{{t('home-title')}}</h2>
    <button :disabled="!authBtn.read">详情</button>
  </div>
</template>

<script setup lang="ts">
import { t } from 'ddd-web';

import {useAuth} from './hooks/use-auth.ts'

const {
    authBtn,
    loading
  } = useAuth('home')

</script>

<style scoped>
.home-title {
  color: var(--home-title-color);
}
</style>