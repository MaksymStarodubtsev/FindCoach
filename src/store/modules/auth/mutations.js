export default {
  setUser (state, payLoad) {
    state.token = payLoad.token
    state.userId = payLoad.userId
    state.tokenExpiration = payLoad.tokenExpiration
  }
}
