<template>
  <div>
    <div class="grid grid-cols-3 gap-2 place-items-strech">
      <div/>
      <item title="Entity"/>
      <div/>
    </div>
    <div class="grid grid-cols-1 place-items-strech">
      <connector center/>
    </div>
    <div class="grid grid-cols-1 place-items-center">
      <div class="grid grid-cols-4 place-items-strech w-4/5">
        <connector left top/>
        <connector left top right middle/>
        <connector right top middle/>
        <connector right top/>
      </div>
    </div>
    <div class="grid grid-cols-5 gap-2 place-items-strech">
      <item link="/about/README.md#user" title="User"/>
      <item link="/about/README.md#resource" title="Resource"/>
      <item link="/about/README.md#asset" title="Asset"/>
      <item link="/about/README.md#review" title="Review"/>
      <item link="/about/README.md#history" title="History"/>
    </div>
  </div>
</template>

<script>
import Item from "./Item";
import Connector from "./Connector";

export default {
  name: "DataModel",
  components: {Connector, Item},
}
</script>

<style scoped lang="scss">
</style>