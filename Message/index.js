import Vue from 'vue'
import Message from './Message'

const MessageConstructor = Vue.extend(Message)
let instances = []
let instance
let seed = 1
const HdMsg = (options) => {
  if (typeof options === 'string') {
    options = {
      msg: options
    }
  }
  instance = new MessageConstructor({
    data: options
  })
  const userOnClose = options.onClose
  const id = `message_${seed++}`
  options.onClose = () => {
    HdMsg.close(id, userOnClose)
  }
  instance.id = id
  instance.vm = instance.$mount()
  instances.push(instance.vm)
  document.body.appendChild(instance.vm.$el)
}

HdMsg.close = (id, userOnClose) => {
  for (let i = 0; i < instances.length; i++) {
    if (id === instances[i].id) {
      if (typeof userOnClose === 'function') {
        userOnClose(instances[i])
      }
      instances.splice(i, 1)
      break
    }
  }
}

const install = () => {
  Object.defineProperty(Vue.prototype, '$message', {
    writable: false,
    configurable: false,
    enumerable: false,
    value: HdMsg
  })
}

export default install
