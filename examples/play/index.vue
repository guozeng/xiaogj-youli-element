<template>
  <div>
    <el-menu :defaultActive="activeIndex" :mode="mode" :collapse="isCollapse">
      <el-menu-item index="1-1">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <!--
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
        <el-submenu index="1-4-2">
          <span slot="title">选项4</span>
          <el-menu-item index="1-4-2-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-menu>

    <div style="margin-top: 30px">
      <button @click="onModeChange">
        {{ mode === 'vertical' ? '水平模式' : '垂直模式' }}
      </button>
      <button @click="onCollapse">{{ isCollapse ? '展开' : '折叠' }}</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      mode: 'vertical',
      isCollapse: false,
      activeIndex: '1-4-1',
    }
  },
  methods: {
    onCollapse() {
      if (this.mode === 'vertical') {
        this.isCollapse = !this.isCollapse
      }
    },
    onModeChange() {
      if (this.mode === 'vertical') {
        this.isCollapse = false
      }
      this.mode = this.mode === 'vertical' ? 'horizontal' : 'vertical'
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
