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
          <icon-svg :icon="avatarImgPath" :size="32"></icon-svg>
          <Button @click="handlelogout">退出</Button>
        </Header>
        <Content class="content-con">
          <div>
            <Tabs type="card" :value="getTabNameByRoute($route)" @on-click="handleClickTab">
              <TabPane :label="labelRender(item)" :name="getTabNameByRoute(item)" v-for="(item, index) in tabList" :key="`tabNav${index}`" ></TabPane>
            </Tabs>
          </div>
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
import { mapState, mapActions, mapMutations } from 'vuex'
import { getUser, getTabNameByRoute, getRouteById } from '@/lib/util'
export default {
  name: 'layout',
  components: {
    SideMenu
  },
  data() {
    return {
      collapsed: false,
      getTabNameByRoute
    }
  },
  watch: {
    '$route' (newRoute) {
      this.UPDATE_ROUTER(newRoute)
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
      tabList: state => state.tabNav.tabList,
      routers: state => state.router.routers.filter(item => {
        return item.name
      })
    }),
    userName () {
      return getUser().userName
    },
    avatarImgPath () {
      return getUser().avatarImgPath
    }
  },
  methods: {
    ...mapActions([
      'logout',
      'handleRemove'
    ]),
    ...mapMutations([
      'UPDATE_ROUTER'
    ]),
    handleCollapsed () {
      this.collapsed = !this.collapsed
    },
    handlelogout () {
      this.$Modal.confirm({
        title: '提示',
        content: '确定登出？',
        onOk: () => {
          this.logout().then(res => {
          this.$router.push({ path: '/login'})
        })
        }
      })
    },
    handleClickTab (id) {
      let route = getRouteById(id)
      this.$router.push(route)
    },
    labelRender (item) {
      return h => {
        return (
          <div>
            <span>{item.meta.title}</span>
            {
              item.name !== 'home'
              ? <icon nativeOn-click={this.handleTabRemove.bind(this,getTabNameByRoute(item))} type="md-close-circle" style="line-height: 10px"/>
              : ''
            }
          </div>
        )
      }
    },
    handleTabRemove (id, event) {
      // 阻止点击事件冒泡到tab
      event.stopPropagation()
      this.handleRemove({
        id,
        $route: this.$route
      }).then(nextRoute => {
        this.$router.push(nextRoute)
      })
    }
  },
  mounted () {
  }
}
</script>
<style lang="less">
.layout-wrapper, .layout-outer{
  height: 100%;
  .header-wrapper{
    background: #fff;
    box-shadow: 0 1px 1px 1px rgba(0, 0, 0, .1);
    padding: 0 23px;
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
    height: 64px;
    text-align: center;
  }
  .sider-outer{
    height: 100%;
    // 这里设置了超出隐藏，那么dropdown那边就要设置tranfer 使弹出层在body
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
    .ivu-tabs-bar{
      margin-bottom: 0;
    }
    .ivew-box{
      padding: 0;
    }
  }
  .page-card{
    min-height: ~"calc(100vh - 84px)"
  }
}
</style>


