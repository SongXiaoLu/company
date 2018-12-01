const mutations = {
  setToken (state, token) {
    state.token = token
  },
  setAppDownUrl (state, url) {
    state.appDownUrl = url
  },
  setIsShowDownApp (state,booleans) { // 0 1
    state.appDownUrl = booleans
  }
}
export default mutations
