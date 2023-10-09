<script>
export default {
  props: {
    id : Number,
    name : String,
    description : String,
    imageUrl : String
  }
}
</script>

<template>

  <li>
    <h3>{{ name }}</h3>
    <p>{{ description }}</p>
    <img v-bind:src="imageUrl" v-bind:alt="name">
  </li>

</template>

<style scoped>

</style>