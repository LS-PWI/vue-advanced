<script>
export default {
  methods: {
    emitEvent() {
      this.$emit('my-event')
    }
  }
}
</script>

<template>
  <button @click="emitEvent">Click me!</button>
</template>
