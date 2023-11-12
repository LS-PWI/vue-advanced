<script>
export default {
  props: {
    id: Number,
    name: String,
    description: String,
    imageUrl: String
  }
}
</script>

<template>
  <li class="flex justify-between gap-x-6 py-5">
    <div class="flex min-w-0 gap-x-4">
      <img class="h-12 w-12 flex-none rounded-full bg-gray-50" :src="imageUrl" alt="" />
      <div class="min-w-0 flex-auto">
        <p class="text-sm font-semibold leading-6 text-gray-900">{{ name }}</p>
      </div>
    </div>
    <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
      <p class="text-sm leading-6 text-gray-900">{{ description }}</p>
    </div>
  </li>
</template>

<style scoped>
</style>
