<script>
export default {
  methods: {
    displayAlert() {
      alert(this.$root.emperorsName + " says: Hello there")
    },
    changeName() {
      this.$root.emperorsName = "Palpatine"
    }
  }
}
</script>

<template>
  <button v-on:click="displayAlert()">Display Alert</button>
  <button v-on:click="changeName()">Change Name</button>
</template>
