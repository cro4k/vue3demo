<script setup lang="ts">
import Navigator from './layout/navigator/Navigator.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="64" height="64" style="padding: 10px"/>
<!--        <span>Navigator Example</span>-->
      </el-header>
      <el-container>
        <el-aside width="200px">
          <Navigator/>
        </el-aside>
        <el-main>
          <RouterView/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped></style>
