<template>
 <div>
   <h3>\{{$t('demo.title')}}</h3>
    <h2>\{{$t('demo.currentcode')}}：\{{code}}</h2>
    <h2>\{{$t('demo.precode')}}: \{{precode}}</h2>
    <button @click="changeCode">\{{$t('demo.changecode')}}</button>
    <select v-model="lang" @change="$i18n.locale = lang">
       <option value='zh'>中文</option>
       <option value='en'>Engilsh</option>
    </select>
 </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions, mapGetters } = createNamespacedHelpers('demo')

export default {
  name: 'demo_index',
  data () {
    return {
      lang: 'zh'
    }
  },
  mounted () {
    this.$bar.start()
    setTimeout(() => this.$bar.finish(), 2000)
  },
  computed: {
    ...mapState(['code']),
    ...mapGetters(['precode'])
  },
  methods: {
    ...mapActions(['changeCode'])
  }
}
</script>
