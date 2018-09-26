<template>
  <div class="hd_message">
    <span class="hd_message_close" v-if="closeBtn" @click="closeMsg">x</span>
    <h2 class="hd_message_title" v-if="title">{{title}}</h2>
    <div class="hd_message_content" v-html="msg"></div>
    <div v-if="showCancelBtn || showSuccessBtn" class="hd_message_btn">
      <button v-if="showCancelBtn" class="hd_message_btn_cancel" @click="closeMsg">{{cancelBtnText}}</button>
      <button v-if="showSuccessBtn" class="hd_message_btn_success" @click="callback">{{successBtnText}}</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Message',
  data () {
    return {
      title: '',
      msg: '内容',
      closeBtn: false,
      cancelBtnText: '取消',
      successBtnText: '确定',
      closed: false,
      timer: null,
      duration: 3000,
      onClose: null,
      showCancelBtn: false,
      showSuccessBtn: false,
      successCallback: null
    }
  },
  mounted () {
    this.startTimer()
  },
  watch: {
    closed (newVal) {
      if (newVal) {
        this.destroyElement()
      }
    }
  },
  methods: {
    startTimer () {
      if (!(this.closeBtn || this.showCancelBtn || this.showSuccessBtn)) {
        if (this.duration > 0) {
          this.timer = setTimeout(() => {
            this.closeMsg()
          }, this.duration)
        }
      }
    },
    closeMsg () {
      this.closed = true
      if (typeof this.onClose === 'function') {
        this.onClose()
      }
      clearTimeout(this.timer)
    },
    destroyElement () {
      this.$destroy(true)
      this.$el.parentNode.removeChild(this.$el)
    },
    async callback () {
      this.successCallback && await this.successCallback()
      this.closeMsg()
    }
  }
}
</script>
<style lang="">
  *{
    padding: 0;
    margin: 0;
  }
  .hd_message {
    position: absolute;
    top: 150px;
    left: 50%;
    transform: translate3d(-50%, 0, 0);
    background: rgba(0, 0, 0, .5);
    padding: 10px 20px;
    border-radius: 8px;
    color: #fff;
  }

  .hd_message_close {
    width: 40px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    position: absolute;
    right: 0;
    top: 0;
    font-size: 24px;
    cursor: pointer;
  }

  .hd_message_title {
    height: 60px;
    line-height: 60px;
    text-align: center;
  }

  .hd_message_content {
    max-width: 400px;
  }

  .hd_message_btn {
    height: 60px;
    line-height: 60px;
    text-align: right;
  }

  .hd_message_btn button {
    padding: 10px 20px;
    border-radius: 5px;
    border: 0;
    margin-left: 20px;
    cursor: pointer;
  }

  .hd_message_btn_success {
    color: #fff;
    background: #409eff;
  }
</style>
