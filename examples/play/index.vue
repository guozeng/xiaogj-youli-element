<template>
  <div style="display: flex">
    <div style="background: #232650">
      <el-menu
        :default-active="'5-1'"
        background-color="#232650"
        :collapse="isCollapse"
        class="el-menu-vertical-youli"
      >
        <template v-for="menu in menuData">
          <el-submenu
            v-if="menu.submenu"
            :key="menu.id"
            :index="menu.id"
            popper-class="left-menu-popper"
          >
            <template slot="title">
              <i class="el-icon-delete"></i>
              <span slot="title" class="ml-10px">{{ menu.label }}</span>
            </template>
            <el-menu-item
              v-for="submenu in menu.submenu"
              :key="submenu.id"
              :index="submenu.id"
              @click.native="onMenuClick(submenu)"
            >
              {{ submenu.label }}
            </el-menu-item>
          </el-submenu>
          <el-menu-item v-else :key="menu.id" :index="menu.id" @click.native="onMenuClick(menu)">
            <i class="el-icon-delete"></i>
            <span slot="title" class="ml-10px">{{ menu.label }}</span>
          </el-menu-item>
        </template>
      </el-menu>
    </div>
    <div>
      <el-button @click="isCollapse = !isCollapse">展开收起</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: true,
      menuData: [
        {
          label: '经营记账',
          jumpUrl: 'amoeba-make-note',
          icon: 'jz',
          id: '2',
        },
        {
          label: '经营核算',
          icon: 'hs',
          id: '4',
          submenu: [
            {
              label: '经营巴管理',
              jumpUrl: 'amoeba-org',
              id: '4-1',
            },
            {
              label: '分摊模版管理',
              jumpUrl: 'tan-template',
              id: '4-2',
            },
            {
              label: '人力核算',
              jumpUrl: 'emp-cost',
              id: '4-3',
            },
          ],
        },
        {
          label: '经营驾驶舱',
          jumpUrl: 'df-report-index',
          icon: 'jsc',
          id: '1',
        },
        {
          label: '报表中心',
          icon: 'bb',
          id: '5',
          submenu: [
            {
              label: '经营核算概要表',
              jumpUrl: 'amoeba-report',
              id: '5-1',
            },
            {
              label: '经营核算详情表',
              jumpUrl: 'amoeba-report2',
              id: '5-2',
            },
          ],
        },
        {
          label: '目标与预算',
          icon: 'mb',
          id: '3',
          submenu: [
            {
              label: '制定预算',
              jumpUrl: 'set-plan',
              id: '3-1',
            },
            {
              label: '预算详情',
              jumpUrl: 'plan-detail-month',
              id: '3-2',
            },
          ],
        },
        {
          label: '设置',
          icon: 'setting',
          id: '6',
          submenu: [
            {
              label: '业务类目',
              jumpUrl: 'ba-subject',
              id: '6-1',
            },
            {
              label: '资金账户',
              jumpUrl: 'amoeba-account',
              id: '6-2',
            },
            {
              label: '产品管理',
              jumpUrl: 'product',
              id: '6-3',
            },
            {
              label: '成员管理',
              jumpUrl: 'emp',
              id: '6-4',
            },
            {
              label: '系统设置',
              jumpUrl: 'sys',
              id: '6-5',
            },
          ],
        },
      ],
    }
  },
}
</script>

<style>
body {
  margin: 0;
}
.el-menu-vertical-youli:not(.el-menu--collapse) {
  width: 180px;
}
</style>
