<template>
 <div>
   <h3>\{{$t('test.title')}}</h3>
    <h2>\{{$t('test.currentcode')}}：{{code}}</h2>
    <h2>\{{$t('test.precode')}}: {{precode}}</h2>
    <button @click="changeCode">\{{$t('test.changecode')}}</button>
    <button @click="alert">\{{$t('test.simplealert')}}</button>
    <select v-model="lang" @change="$i18n.locale = lang">
       <option value='zh'>中文</option>
       <option value='en'>Engilsh</option>
    </select>
 </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions, mapGetters } = createNamespacedHelpers('test')

export default {
  name: 'HelloWorld',
  data () {
    return {
      lang: 'en'
    }
  },
  computed: {
    ...mapState(['code']),
    ...mapGetters(['precode'])
  },
  methods: {
    ...mapActions(['changeCode']),
    alert () {
      this.$modal.show('dialog', {
        title: this.$t('test.alerttitle'),
        text: `<span style='color:red'>${this.$t('test.code')}</span> = ${this.code}`,
        buttons: [
          { title: this.$t('test.ok'), handler: () => { alert(this.$t('test.welcome')) } },
          { title: this.$t('test.close') }
        ]
      })
    }
  }
}
</script>
