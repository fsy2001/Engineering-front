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
$input-error: rgb(222, 7, 28);
$input-error-background: rgb(254, 240, 240);

.input-container {
  width: 100%;
}

.input-box {
  border: 1px solid rgb(214, 214, 214);
  border-radius: 6px;
  background-color: white;
  padding: 15px;
  margin: 6px 0 0 0;
  display: flex;
  justify-content: space-between;

  input {
    background: none;
    border: none;
    color: #353535;
    font-size: 17px;
    outline: none;

    &::placeholder {
      color: rgb(155, 155, 155);
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