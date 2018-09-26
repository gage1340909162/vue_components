<template>
  <List
   :content.sync="content"
   :icon="icon"
   :activeIcon="activeIcon"
   :activeId.sync="activeId"
   :activeIDArr.sync="activeIDArr"
   @changeActive="changeActive" />
</template>
<script>
import List from './List'

export default {
  name: "Tree",
  components: {
    List
  },
  props: {
    content: {
      type: Array,
      default: []
    },
    autoExpandParent: {
      type: Boolean,
      default: false
    },
    defaultExpandAll: {
      type: Boolean,
      default: false
    },
    defaultExpandParent: {
      type: String,
      default: ''
    },
    defaultSelectedKeys: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    activeIcon: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      activeIDArr: [],
      activeId: ''
    }
  },
  computed: {
    
  },
  methods: {
    changeActive (id) {
      let flag = true
      this.activeIDArr.forEach((val, i) => {
        if(val === id) {
          this.activeIDArr.splice(i, 1)
          flag = false
        }
      })
      flag && this.activeIDArr.push(id)
      this.activeId = id
      this.$emit('onExpand', id)
    },
    _showTreeList (arr, deShow) {
      arr.forEach((val, i) => {
        if (val.children) {
          if (deShow) {
            (val.id === deShow) && this.activeIDArr.push(val.id)
          } else {
            this.activeIDArr.push(val.id)
          }
          this._showTreeList(val.children)
        }
      })
    }
  },
  watch: {
    content (newVal, oldVal) {
      if (this.defaultSelectedKeys) {
        const deArr = this.defaultSelectedKeys.split('-')
        for (let i = 0; i < deArr.length; i++) {
          if (i === 0) {
            this.activeIDArr.push(deArr[i])
          } else if (i === (deArr.length - 1)) {
            const str = this.activeIDArr[i-1] + '-' + deArr[i]
            this.activeId = str
          } else {
            const str = this.activeIDArr[i-1] + '-' + deArr[i]
            this.activeIDArr.push(str)
          }
        }
      }

      // if (this.autoExpandParent) {
      //   console.log(this.content)
      //   this.content.forEach((val, i) => {
      //     this.activeIDArr.push(val.id)
      //   })
      // }

      // if (this.defaultExpandParent) {
      //   const deArr = this.defaultExpandParent.split('-')
      //   for (let i = 0; i < deArr.length; i++) {
      //     if (i === 0) {
      //       this.activeIDArr.push(deArr[i])
      //     } else {
      //       const str = this.activeIDArr[i-1] + '-' + deArr[i]
      //       this.activeIDArr.push(str)
      //     }
      //   }
      // }
      
      // if (this.defaultExpandAll) {
      //   this._showTreeList(this.content)
      //   console.log(this.activeIDArr)
      // }
    }
  }
}
</script>
<style lang="">

</style>
