<template>
  <div>
    <el-menu :defaultActive="activeIndex" :mode="mode" :collapse="isCollapse">
      <!-- <el-menu-item index="1-1">
        <i class="el-icon-edit"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="1-2">关于</el-menu-item>
      <el-submenu index="1-3">
        <template slot="title">
          产品
        </template>
        <el-menu-item index="1-3-1">校管家</el-menu-item>
      </el-submenu> -->
      <el-submenu index="1-4">
        <template slot="title">
          <i class="el-icon-edit"></i>
          <span>产品中心</span>
        </template>
        <el-menu-item index="1-4-1">校管家</el-menu-item>
      </el-submenu>
    </el-menu>

    <div style="margin-top: 30px">
      <button @click="mode = mode === 'vertical' ? 'horizontal' : 'vertical'">
        {{ mode === 'vertical' ? '垂直模式' : '水平模式' }}
      </button>
      <button @click="isCollapse = !isCollapse">{{ isCollapse ? '折叠' : '展开' }}</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      mode: 'vertical',
      isCollapse: false,
      activeIndex: '1-1',
    }
  },
  created() {
    // console.log('parent created')
  },
  mounted() {
    // console.log('parent mounted')
    // this.$refs.input.$emit('inputSelect')
  },
}
</script>
