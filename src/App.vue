<script>

export default {
  data() {
    return {
      emperorsName: "Root of evil"
    }
  }
}

</script>

<template>
  <header>
    <nav>
      <router-link to="./vbind">v-bind</router-link>
      <router-link to="./vmodel">v-model</router-link>
      <router-link to="./von">v-on</router-link>
      <router-link to="./vprops">v-props</router-link>
      <router-link to="./vfor">v-for</router-link>
      <router-link to="./root">root</router-link>
      <router-link to="./emitter">emitter</router-link>
    </nav>
    <main>
      <router-view></router-view>
    </main>
  </header>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: space-evenly;
}
</style>
