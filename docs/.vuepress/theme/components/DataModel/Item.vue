<template>
  <component :is="component" class="item m-0" :to="link">
    <div class="item-container flex justify-center py-5 px-2">
      <h4 class="item-title m-0">{{ title }}</h4>
    </div>
  </component>
</template>

<script>
export default {
  name: "Item",
  props: ["link", "title"],
  computed: {
    component() {
      return this.link ? "router-link" : "div";
    }
  },
}
</script>

<style scoped lang="scss">
.item {
  display: block;
  height: 100%;
  text-decoration: none !important;
  transition: 0.3s;
  border-radius: 10px;
  border: 2px solid rgba(151, 151, 151, 0.2);
  box-sizing: border-box;

  &:hover {
    background-color: rgba(151, 151, 151, 0.06);
  }
}

.item-title {
  letter-spacing: 0.05rem;
  font-size: 0.8rem;
  word-break: break-all;
}

@media (max-width: 810px) {
  .item-title {
    font-size: 0.7rem;
    writing-mode: vertical-rl;
    transform: rotate(180deg);
  }
}
</style>