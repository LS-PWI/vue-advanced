<script>
export default {
  data() {
    return {
      name: "???"
    }
  },
  methods: {
    displayAlert() {
      alert(this.name + " says: Hello there")
    },
    changeName() {
      this.name = "Obi Wan"
    }
  }
}
</script>

<template>

  <button v-on:click="displayAlert()">Display Alert</button>
  <button v-on:click="changeName()">Change Name</button>

</template>