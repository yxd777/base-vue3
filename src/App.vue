<!--
 * @Author: yxd
 * @Date: 2023-05-21 13:11:09
 * @LastEditors: ad ad@zhun-shi.com
 * @LastEditTime: 2023-05-21 13:50:00
 * @Description: 
-->
<template>
  <AppProvider>
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </AppProvider>
</template>

<script setup>
import AppProvider from '@/components/AppProvider/index.vue'
</script>

<style lang="scss">
#app {
  height: 100%;
  .n-config-provider {
    height: inherit;
  }
}
</style>
