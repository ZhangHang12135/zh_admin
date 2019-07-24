<template>
  <div class="side-menu-wrapper">
    <slot></slot>
    <Menu v-show="!collapsed" width="auto" theme="light" @on-select="handleSelect">
      <template v-for="item in list">
        <re-submenu
        v-if=" item.children && item.children.length > 1"
        :key="`menu_${item.name}`"
        :name="item.name"
        :parent="item">
        </re-submenu>
        <menu-item
        v-else-if="item.children && item.children.length === 1"
        :key="`menu_${item.children[0].name}`"
        :name="item.children[0].name">
        <icon-svg :size="20" :icon="item.children[0].meta.icon"></icon-svg>
        {{ item.children[0].meta.title }}
        </menu-item>
        <menu-item
        v-else
        :key="`menu_${item.name}`"
        :name="item.name">
        <icon-svg :size="20" :icon="item.meta.icon"></icon-svg>
        {{ item.meta.title }}
        </menu-item>
      </template>
    </Menu>
    <div v-show="collapsed" class="drop-wrapper">
      <template v-for="item in list">
        <re-dropdown
        @on-select="handleSelect"
        v-if="item.children && item.children.length > 1"
        :show-title="false"
        :key="`drop_${item.name}`"
        :parent="item">
        </re-dropdown>
        <Tooltip
        v-else-if="item.children && item.children.length === 1"
        transfer
        :content="item.children[0].meta.title"
        placement="right"
        :key="`drop_${item.children[0].name}`">
          <span @click="handleClick(item.children[0].name)" class="drop-menu-span">
            <icon-svg :size="20" :icon="item.children[0].meta.icon"></icon-svg>
          </span>
        </Tooltip>
        <Tooltip
        v-else
        transfer
        :content="item.meta.title"
        placement="right"
        :key="`drop_${item.name}`">
          <span @click="handleClick(item.name)" class="drop-menu-span">
            <icon-svg :size="20" :icon="item.meta.icon"></icon-svg>
          </span>
        </Tooltip>
      </template>
    </div>
  </div>
</template>
<script>
import ReSubmenu from './re-submenu.vue'
import ReDropdown from './re-dropdown.vue'
export default {
  name: 'SideMenu',
  components: {
    ReSubmenu,
    ReDropdown
  },
  props: {
    collapsed: {
      type: Boolean,
      default: false
    },
    list: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    handleSelect (name) {
      if (name === 'blog') window.open('https://zhanghang12135.github.io/', '_blank')
      else this.$router.push({ name })
    },
    handleClick (name) {
      if (name === 'blog') window.open('https://zhanghang12135.github.io/', '_blank')
      else this.$router.push({ name })
    }
  },
  mounted () {

  }
}
</script>
<style lang="less">
.side-menu-wrapper{
  width: 100%;
  .ivu-tooltip, .drop-menu-span{
    display: block;
    width: 100%;
    text-align: center;
    padding: 5px 0;
  }
  .drop-wrapper > .ivu-dropdown{
    display: block;
    padding: 5px;
    margin: 0 auto;
  }

}
</style>

