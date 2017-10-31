<template>
  <div class="clearFix">
    <input type="text" @click="showlist" :value="value">
    <span></span>
  </div>
</template>

<script>
  export default {
    props: ['isShow', 'value'],
    computed: {
      initShow () {
        return this.isShow
      }
    },
    methods: {
      showlist () {
        this.$emit('update:isShow', !this.initShow)
      }
    }
  }
</script>
