<template>
  <div style="position: relative">
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
export default {
  name: 'PC',
  data () {
    return {}
  },
  methods: {},
  beforeMount () {
    const isMobile = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
    if (isMobile) {
      this.$router.push('/mobile')
    }
  },
}
</script>

<style lang="less" scoped>

</style>
