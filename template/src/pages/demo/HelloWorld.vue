<template>
 <div>
   <h3>该页面在实际开发可以删除，本例用于使用vuex管理页面状态的演示</h3>
    <h2>当前编码：\{{code}}</h2>
    <h2>之前编码: \{{precode}}</h2>
    <button @click="changeCode">改变编码</button>
    <button @click="alert">简单弹框</button>
 </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions, mapGetters } = createNamespacedHelpers('test')

export default {
  name: 'HelloWorld',
  computed: {
    ...mapState(['code']),
    ...mapGetters(['precode'])
  },
  methods: {
    ...mapActions(['changeCode']),
    alert () {
      this.$modal.show('dialog', {
        title: this.name,
        text: `<span style='color:red'>当前编码</span> = ${this.code}`,
        buttons: [
          { title: '确认', handler: () => { alert('测试弹框!') } },
          { title: '关闭' }
        ]
      })
    }
  }
}
</script>
