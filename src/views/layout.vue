<template>
  <div class="layout-wrapper">
    <Layout class="layout-outer">
      <Sider collapsible hide-trigger breakpoint="sm" v-model="collapsed" class="sider-outer">
        <div class="logo-con">
          <icon-svg icon="fuchouzhelianmeng" :size="60"></icon-svg>
        </div>
        <side-menu :collapsed="collapsed" :list="routers"></side-menu>
      </Sider>
      <Layout>
        <Header class="header-wrapper">
          <Icon :class="triggerClasses"  type="md-menu" :size="32" @click.native="handleCollapsed" />
          Welcome --- {{ userName }}
        </Header>
        <Content class="content-con">
          <!-- <div>
            <Tabs type="card" :value="getTabNameByRoute($route)" @on-click="handleClickTab">
              <TabPane :label="labelRender(item)" :name="getTabNameByRoute(item)" v-for="(item, index) in tabList" :key="`tabNav${index}`" ></TabPane>
            </Tabs>
          </div> -->
          <div class="view-box">
          <Card shadow class="page-card">
            <router-view />
          </Card>
          </div>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>
<script>
import SideMenu from '_c/side-menu'
import { mapState } from 'vuex'
export default {
  name: 'layout',
  components: {
    SideMenu
  },
  data() {
    return {
      collapsed: false,
      routers: [
        {
          title: '1',
          name: 'menu1',
          icon: 'ios-alarm'
        },
        {
          title: '2',
          name: 'menu2',
          icon: 'ios-alarm'
        },
        {
          title: '3',
          name: 'menu3',
          icon: 'ios-alarm',
          children: [
            {
              title: '3-11',
              name: 'menu31',
              icon: 'ios-alarm'
            },
            {
              title: '3-22',
              name: 'menu32',
              icon: 'ios-alarm',
              children: [
                {
                  title: '3-22-11',
                  name: 'menu321',
                  icon: 'ios-alarm'
                },
                {
                  title: '3-22-22',
                  name: 'menu322',
                  icon: 'ios-alarm'
                }
              ]
            }
          ]
        }
      ]
    }
  },
  computed: {
    triggerClasses () {
      return [
        'trigger-icon',
        this.collapsed ? 'rotate' : ''
      ]
    },
    ...mapState({
      userName: state => state.user.userName
    })
  },
  methods: {
    handleCollapsed () {
      this.collapsed = !this.collapsed
    }
  },
  mounted () {
    console.log('111')
    console.log(this.userName)
  }
}
</script>
<style lang="less">
.layout-wrapper, .layout-outer{
  height: 100%;
  .header-wrapper{
    background: #fff;
    box-shadow: 0 1px 1px 1px rgba(0, 0, 0, .1);
    padding: 0 20px;
    .trigger-icon{
      cursor: pointer;
      transition: transform .3s ease;
      &.rotate{
        transform: rotateZ(-90deg);
        transition: transform .3s ease;
      }
    }
  }
  .logo-con{
    text-align: center;
  }
  .sider-outer{
    height: 100%;
    overflow: hidden;
    background: #fff;
    // border-right: 0.1px solid #dcdee2;
    // 隐藏右侧滚动条
    .ivu-layout-sider-children{
      margin-right: -20px;
      overflow-y: scroll;
      overflow-x: hidden;
    }
  }
  .content-con{
    padding: 10px;
  }
  .page-card{
    min-height: ~"calc(100vh - 84px)"
  }
}
</style>


