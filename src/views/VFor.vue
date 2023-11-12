<script>
import ListItem from "../components/ListItem.vue";

export default {
  components: { ListItem },
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
  <section class="mx-auto max-w-4xl">
    <ul role="list" class="flex flex-col justify-content-center divide-y divide-gray-100 w-3/5">
      <ListItem v-for="item in listItems" :key=item.id :id=item.id :name=item.name :description=item.description
        :image-url=item.imageUrl>
      </ListItem>
    </ul>
  </section>
</template>

<style scoped>
</style>
