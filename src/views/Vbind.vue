<script>
/*
One-way binding
 */
export default {
  data() {
    return {
      isHidden: true,
      buttonText: "Display?"
    }
  },
  methods: {
    changeState() {
      if (this.isHidden === false) {
        this.isHidden = true;
        this.buttonText = "Display?"
      } else {
        this.isHidden = false;
        this.buttonText = "Hide?"
      }
    }
  }
}
</script>

<template>
  <button v-on:click="changeState()">{{ buttonText }}</button>

  <p v-bind:class="{ hidden: isHidden }">This is a text</p>
</template>

<style scoped>
.hidden {
  display: none;
}
</style>
