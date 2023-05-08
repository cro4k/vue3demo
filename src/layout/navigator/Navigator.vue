<template>
  <el-menu
    default-active="1"
    class="el-menu-vertical-demo">
<!--    <el-menu-item index="0" >-->
<!--      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="64" height="64" style="padding: 10px"/>-->
<!--    </el-menu-item>-->

    <RouterLink to="/">
      <el-menu-item index="1">
        <el-icon><icon-menu /></el-icon>
        <span>Home</span>
      </el-menu-item>
    </RouterLink>


    <el-sub-menu index="2">
      <template #title>
        <el-icon><location /></el-icon>
        <span>Example</span>
      </template>

      <RouterLink to="/example">
        <el-menu-item index="2-1">
          <span>Index</span>
        </el-menu-item>
      </RouterLink>

      <RouterLink to="/example/show">
        <el-menu-item index="2-2">
          <span>Show</span>
        </el-menu-item>
      </RouterLink>

      <RouterLink to="/example/manage">
        <el-menu-item index="2-3">
          <span>Manage</span>
        </el-menu-item>
      </RouterLink>

    </el-sub-menu>


    <RouterLink to="/about">
      <el-menu-item index="3">
        <el-icon><InfoFilled /></el-icon>
        <span>About</span>
      </el-menu-item>
    </RouterLink>

  </el-menu>
</template>

<script setup lang="ts">
import {
  InfoFilled,
  Menu as IconMenu,
  Location,
} from '@element-plus/icons-vue'
import IconDocumentation from "@/components/icons/IconDocumentation.vue";


</script>