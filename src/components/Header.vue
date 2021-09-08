<template>
  <header
    class="flex justify-center h-20 bg-gradient-to-r from-red-500 bg-yellow-500">
    <div class="flex justify-between w-4/5 items-center">
      <h2 class="text-white text-2xl font-medium">Find a Coach</h2>
      <div class="flex justify-between w-52">
        <router-link to="/coaches">All Coaches</router-link>
        <router-link to="/contacts">Requests</router-link>
      </div>
    </div>
  </header>
</template>

<script>
export default ({
})
</script>

<style scoped>
</style>
