<template>
 <section>
      <selectInput :value="value" :is-show.sync="listShow"></selectInput>
      <list :data="datas" v-show="listShow" @selected="selected"></list>
 </section>
</template>

<script>
import list from "@/components/editselect/selectlist";
import selectInput from "@/components/editselect/selectInput";
export default {
  props: ["datas"],
  data() {
    return {
      listShow: false,
      value: ""
    };
  },
  methods: {
    selected(item) {
      this.listShow = !this.listShow;
      this.value = item.value;
      this.$emit('selected', item)
    }
  },
  components: {
    list,
    selectInput
  }
};
</script>
