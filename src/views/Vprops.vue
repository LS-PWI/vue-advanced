<script>
/*
Props are like component constructor parameters
 */
import AParameterComponent from "../components/AParameterComponent.vue";
export default {
  components: { AParameterComponent },
  data() {
    return {
      aParentVariable: 1
    }
  },
  methods: {
    addOne() {
      this.aParentVariable = this.aParentVariable + 1
    }
  }
}

</script>

<template>
  <button v-on:click="addOne()">Add one</button>
  <AParameterComponent v-bind:aParameter=aParentVariable></AParameterComponent>

  <AParameterComponent aParameter=StaticParameter></AParameterComponent>
</template>
