<template>
  <header
    class="flex justify-center h-20 bg-gradient-to-r from-red-500 bg-yellow-500">
    <div class="flex justify-between w-4/5 items-center">
      <h2 class="text-white text-2xl font-medium">Find a Coach</h2>
      <div class="flex justify-between w-4/12">
        <router-link to="/coaches" class="heder__button">All Coaches</router-link>
        <router-link to="/request" class="heder__button">Requests</router-link>
        <router-link to="/auth" class="heder__button">Login</router-link>
      </div>
    </div>
  </header>
</template>

<script>
export default ({
})
</script>

<style scoped>

  .heder__button {
    color: inherit;
    transition: transform ease-in-out 0.2s,color ease-in-out 0.2s;
  }
  .heder__button:hover {
    color: white;
    transform: scale(1.02);
  }
</style>
