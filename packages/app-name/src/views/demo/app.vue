<template>
  <div>
    <h2 class="demo-title">{{t('demo-title')}}</h2>
  </div>
</template>

<script setup lang="ts">
import { t } from 'ddd-web';
</script>

<style scoped>
.demo-title {
  color: var(--demo-title-color);
}
</style>