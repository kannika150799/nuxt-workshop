export default function () {
  this.$fire.auth().onAuthStateChanged((user) => {
    if (!user) {
      this.$router.replace('/login')
    }
  })
}
