<template>
  <ul>
    <li v-for="(item, index) in data" @click="selected(item)" :key="index"></li>
  </ul>
</template>

<script>
  export default {
    props: ['data'],
    methods: {
      selected (item) {
        this.$emit("selected", item)
      }
    }
  }
</script>