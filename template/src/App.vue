<template>
  <div id="app">
    <img src="./assets/logo.png">
    {{#router}}
    <router-view/>
    {{else}}
    <demo/>
    {{/router}}
  </div>
</template>

<script>
{{#unless router}}
import Demo from '@/pages/demo/index'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

{{/unless}}
export default {
  {{#vuesocket}}
  beforeCreate () {
    this.$store.commit('initSocket', this.$socket)
  },{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  {{/vuesocket}}
  name: 'app'{{#router}}{{#if_eq lintConfig "airbnb"}},{{/if_eq}}{{else}},
  components: {
    Demo{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}{{/router}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
