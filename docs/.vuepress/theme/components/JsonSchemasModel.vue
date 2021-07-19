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
      <item link="/about/README.md#resource" title="Resource"/>
      <item link="/about/README.md#user" title="User"/>
      <item link="/about/README.md#review" title="Review"/>
      <item link="/about/README.md#history" title="History"/>
      <item link="/about/README.md#asset" title="Asset"/>
    </div>

    <div class="grid grid-cols-1">
      <div class="grid grid-cols-5 place-items-strech">
        <connector center />
        <div/>
        <div/>
        <div/>
        <connector center />
      </div>
    </div>
    <div class="grid grid-cols-1 place-items-center">
      <div class="grid grid-cols-5 place-items-strech w-4/5">
        <connector left right top middle/>
        <connector top right/>
        <div/>
        <div/>
        <connector left top right middle/>
      </div>
    </div>
    <div class="grid grid-cols-6 gap-2 place-items-strech">
      <item title="File"/>
      <item title="UrbanPulse"/>
      <item title="..."/>
      <div/>
      <item title="..."/>
      <item title="UrbanPulse"/>
    </div>

    <div class="grid grid-cols-1">
      <div class="grid grid-cols-5 place-items-strech">
        <connector center />
        <div/>
        <div/>
        <div/>
      </div>
    </div>
    <div class="grid grid-cols-1 place-items-center">
      <div class="grid grid-cols-5 place-items-strech w-4/5">
        <connector left right top middle/>
        <connector top right/>
        <div/>
      </div>
    </div>
    <div class="grid grid-cols-6 gap-2 place-items-strech">
      <item title="PDF"/>
      <item title="CSV"/>
      <item title="..."/>
    </div>
  </div>
</template>

<script>
import Item from "./DataModel/Item";
import Connector from "./DataModel/Connector";
export default {
  name: "JsonSchemasModel",
  components: {Connector, Item}
}
</script>

<style scoped>

</style>