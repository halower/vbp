const Mixins = {
  mounted () {
    if (this.$bar) this.$bar.start()
  }
}

export default Mixins
