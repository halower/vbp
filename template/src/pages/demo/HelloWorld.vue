<template>
 <div>
   <h3>该页面在实际开发可以删除，本例用于使用vuex管理页面状态的演示</h3>
    <h2>当前模块：\{{name}}</h2>
    <h1>\{{greet}}</h1>
    <button @click="changeName('测试')">改变模块名称</button>
 </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions, mapGetters } = createNamespacedHelpers('test')

export default {
  name: 'HelloWorld',
  computed: {
    ...mapState(['name']),
    ...mapGetters(['greet'])
  },
  methods: {
    ...mapActions(['changeName'])
  }
}
</script>
