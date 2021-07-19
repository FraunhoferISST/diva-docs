<template>
  <div class="connector" :class="[{left: left}, {right: right}, {top: top}, {center: center}, {middle: middle}]">
  </div>
</template>

<script>
export default {
  name: "Connector",
  props: {
    left: Boolean,
    right: Boolean,
    center: Boolean,
    top: Boolean,
    middle: Boolean,
  },
}
</script>

<style scoped lang="scss">
.connector {
  position: relative;
  height: 28px;
  border-color: rgba(151, 151, 151, 0.2);

  &.middle {
    border-radius: 0 !important;
  }

  &.left {
    border-left-width: 2px;
    border-left-style: solid;
    border-top-left-radius: 10px;
  }

  &.right {
    border-right-width: 2px;
    border-right-style: solid;
    border-top-right-radius: 10px;
  }

  &.top {
    border-top-width: 2px;
    border-top-style: solid;
  }

  &.center {
    &:after {
      content: "";
      display: block;
      width: 2px;
      position: absolute;
      height: 100%;
      left: 0;
      right: 0;
      top: 0;
      background-color: rgba(151, 151, 151, 0.2);
      margin: auto;
    }
  }
}
</style>