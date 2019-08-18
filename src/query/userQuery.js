export default {
  async isInGame() {
    try {
      let res = await window.$axios.get('api/user/world')
      console.log(res)
    }
  }
}
