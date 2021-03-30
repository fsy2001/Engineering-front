<template>
  <div class="input-container">
    <div :class="{
      'input-box': valid || focus,
      'input-box-error': !valid && !focus }">
      <input
          :type="config.password ? 'password' : 'input'"
          :placeholder="config.placeholder"
          @focusin="focus = true"
          @focusout="focus = false; $emit('check')"
          @input="$emit('input', $event.target.value)"
          v-model="value"/>
      <slot></slot>
    </div>
    <span class="input-error-msg">{{ (valid || focus) ? '' : config.errorMsg }}</span>
  </div>
</template>

<script>
export default {
  name: "Input",
  props: [
    'config', 'valid', 'value'
  ],
  data: function () {
    return {
      focus: false
    }
  }
}
</script>

<style scoped lang="scss">
@import "src/style/global";

.input-container {
  width: 100%;
}

.input-box {
  border: $input-border;
  border-radius: $input-border-radius;
  background-color: white;
  padding: 15px;
  margin: 6px 0 0 0;
  display: flex;
  justify-content: space-between;

  input {
    background: none;
    border: none;
    color: $input-text-color;
    font-size: $input-font-size;
    outline: none;

    &::placeholder {
      color: $input-placeholder-color;
    }
  }
}

.input-box-error {
  @extend .input-box;
  border-color: $input-error;
  background-color: $input-error-background;

  input {
    color: $input-error;
  }
}

.input-error-msg {
  color: $input-error;
  font-size: 10px;
}
</style>