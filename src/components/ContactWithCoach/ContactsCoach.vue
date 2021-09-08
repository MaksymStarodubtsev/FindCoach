<template>
  <div>
    <slot>
      <div class="flex flex-col gap-4">
        <h3 class="text-2xl">{{ name }}</h3>
        <h5 class="text-xl">${{ paid }}/hour</h5>
      </div>
    </slot>
  </div>
</template>

<script>
export default ({
  data () {
    return {
      name: 'Maksym',
      paid: 20
    }
  }
})
</script>
