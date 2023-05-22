<!--
 * @Author: yxd
 * @Date: 2023-05-21 13:48:16
 * @LastEditors: ad ad@zhun-shi.com
 * @LastEditTime: 2023-05-21 22:27:54
 * @Description: 
-->
<template>
  <div p-35>
    <n-gradient-text flex items-center text-26 type="info">
      我的角色是：<n-gradient-text type="error">{{ userStore.name }}</n-gradient-text>
    </n-gradient-text>

    <n-gradient-text text-16 mt-10 type="info">我有这些页面的权限：</n-gradient-text>

    <ul mt-10>
      <li
        v-for="item in permissionStore.menus"
        :key="item.name"
        cursor-pointer
        hover-color-red
        @click="$router.push(item.path)"
      >
        {{ item.meta?.title }}
      </li>
    </ul>

    <n-button type="info" mt-20 size="small" @click="logout">换个角色看看</n-button>
  </div>
</template>

<script setup>
import { usePermissionStore } from '../../store/modules/permission'
import { useUserStore } from '../../store/modules/user'

const permissionStore = usePermissionStore()
console.log("permissionStore====",permissionStore)
console.log("permissionStore====",permissionStore.menus)
const userStore = useUserStore()

function logout() {
  userStore.logout()
  $message.success('已退出登录')
}
</script>
