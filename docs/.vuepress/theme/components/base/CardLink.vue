<template>
  <router-link class="card-link m-0" :to="link">
    <div class="card-link-container p-3">
      <h4 class="card-link-title m-0">{{ title }}</h4>
      <p class="card-link-content m-0 mt-2">
        <slot>
        </slot>
      </p>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "CardLink",
  props: ["link", "title"]
}
</script>

<style scoped lang="scss">
.card-link {
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
.card-link-container {
  // padding: 14px;
  .card-link-content {
    font-size: 0.9rem;
    color: var(--c-text-lighter);
  }
}
.card-link-title {
  letter-spacing: 0.05rem;
  font-size: 0.9rem;
}

</style>