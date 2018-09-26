<template>
<input
  :type="type"
  :placeholder="placeholder"
  :value="value"
  :maxLength="maxLength"
  :className="className"
  @focus="handleFocus"
  @input="handleInput"
  @blur="handleBlur"
>
</template>
<script>
export default {
  name: "input",
  props: {
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: ''
    },
    dataKey: {
      type: String,
      default: ''
    },
    value: {},
    maxLength: {
      type: Number,
      default: 50
    },
    className: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleFocus (e) {
      this.$emit('handleFocus', e)
    },
    handleInput () {
      this.$emit('handleBlur', e.target.value)
    },
    handleBlur (e) {
      this.$emit('handleBlur', e)
    }
  }
}
</script>
<style scoped>
  input {
    padding: 5px 10px;
    border-radius: 3px;
    border: 1px solid #ccc;
    outline: 0;
  }
</style>