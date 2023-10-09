<script>
import ListItem from "../components/ListItem.vue";

export default {
  components: {ListItem},
  data() {
    return {
      listItems: [
        {
          id: 1,
          name: "Item 1",
          description: "This is the first item",
          imageUrl: "https://via.placeholder.com/150"
        },
        {
          id: 2,
          name: "Item 2",
          description: "This is the second item",
          imageUrl: "https://via.placeholder.com/150"
        },
        {
          id: 3,
          name: "Item 3",
          description: "This is the third item",
          imageUrl: "https://via.placeholder.com/150"
        }
      ]
    }
  }
}
</script>

<template>

  <ul>
    <li v-for="item in listItems" v-bind:key="item.id">
      <h3>{{ item.name }}</h3>
      <p>{{ item.description }}</p>
      <img v-bind:src="item.imageUrl" v-bind:alt="item.name">
    </li>
  </ul>

</template>

<style scoped>

</style>