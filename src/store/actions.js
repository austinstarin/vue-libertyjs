export default {
  COMMIT_TO_LIST ({ commit }, payload) {
    // Fake asynchronous call to server
    return setTimeout(() => {
      return commit('UPDATE_LIST', payload)
    }, 1000)
  }
}
