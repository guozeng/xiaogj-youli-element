<template>
  <div>
    <div class="wrap" :class="isCollapse ?'collapse__wrap':''">
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
          <el-menu-item index="1-4-2">校管家111</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>

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
    },
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

<style>
.wrap{
  width: 200px;
  background-color: #232650;
  padding: 0 16px;
}
.collapse__wrap {
  width: 84px;
  padding: 0 10px;
  box-sizing: border-box;
}
</style>
