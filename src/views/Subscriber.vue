<script>
import Emitter from '../components/Emitter.vue'

export default {
  components: {
    Emitter
  },
  methods: {
    doSomething() {
      alert('I am doing something')
    }
  }
}
</script>

<template>
  <div>
    <h1>Subscriber</h1>
    <Emitter v-on:my-event="doSomething"></Emitter>
  </div>
</template>
