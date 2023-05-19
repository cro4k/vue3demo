<template>
  <el-menu
    default-active="1"
    class="el-menu-vertical-demo">

    <template v-for="route in routes">
      <template v-if="route.children">
        <el-sub-menu :index="route.path">
          <template #title>
            <span>{{route.name}}</span>
          </template>
          <RouterLink v-for="item in route.children" :to="route.path+'/'+item.path">
            <el-menu-item :index="route.path+'/'+item.path">
              <span>{{item.name}}</span>
            </el-menu-item>
          </RouterLink>
        </el-sub-menu>
      </template>
      <template v-else>
        <RouterLink :to="route.path">
          <el-menu-item :index="route.path">
            <span>{{route.name}}</span>
          </el-menu-item>
        </RouterLink>
      </template>
    </template>

  </el-menu>

</template>

<script setup lang="ts">
import routes from "@/router/routes";

</script>
