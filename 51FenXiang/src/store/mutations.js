const mutations = {
  setToken (state, token) {
    state.token = token
  },
  setAppId (state, appid) {
    state.appid = appid
  },
  setAlipayId (state, alipayId) { // alipayId
    state.alipayId = alipayId
  },
  setAppDownUrl (state, url) { // app下载链接
    state.appDownUrl = url
  },
  setIsShowDownApp (state,booleans) { // 0 1 app里不显示，分享到微信显示下载app按钮
    state.isShowDownApp = booleans
  },
  setFromPage (state, fromPage) {
    state.fromPage = fromPage
  },
}
export default mutations
