<template>
  <ul>
    <li v-for="(value, index) in content" :key="value.id">
      <p @click="changeActive(value.id)" :class="{isActive: !value.children && (activeId === value.id)}">
        <i :class="(((activeIDArr.indexOf(value.id) !== -1) && value.children) ? activeIcon : icon)"></i>
        {{value.name}}
      </p>
      <List v-if="value.children"
       v-show="activeIDArr.indexOf(value.id) !== -1"
       :content.sync="value.children"
       :icon="icon"
       :activeIcon="activeIcon"
       :activeId.sync="activeId"
       :activeIDArr.sync="activeIDArr"
       @changeActive="changeActive" />
    </li>
  </ul>
</template>
<script>
import List from './List'

export default {
  name: "List",
  components: {
    List
  },
  props: {
    content: Array,
    icon: {
      type: String,
      default: ''
    },
    activeIcon: {
      type: String,
      default: ''
    },
    activeIDArr: {
      type: Array,
      default: []
    },
    activeId: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      className: [{icon: this.icon}, {activeIcon: this.activeIcon}]
    }
  },
  methods: {
    changeActive (id) {
      this.$emit('changeActive', id)
    }
  }
}
</script>
<style lang="">
.isActive {
  background: blue;
  color: #fff;
}
</style>
