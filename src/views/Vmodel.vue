<script>
/*
v-model is a two-way binding
 */
export default {
  data() {
    return {
      text: ""
    }
  },
  methods: {
    modifyModel() {
      this.text = "Button clicked"
    }
  }
}
</script>

<template>
  <p>This is the text: {{ text }}</p>
  <form>
    <label for="vmodel-example">vmodel example:</label>
    <input id="vmodel-example" v-model="text">
  </form>

  <button v-on:click="modifyModel()">Modify model through javascript</button>

</template>