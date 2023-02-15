<template>
  HomeView
</template>

<script>
export default {
  name: "HomeView",
  created() {
    this.$store.dispatch('user/login', {'username': 'test', 'userpass': {'a': '1', 'b': 2}}).then((response) => {
      console.log('login')
    }).catch(error => {
      console.log(error.message)
    })
  }
}
</script>

<style scoped>

</style>
