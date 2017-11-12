export default {
  COMMIT_ADD_TO_LIST ({ commit }, payload) {
    // Fake asynchronous call to server
    return setTimeout(() => {
      return commit('ADD_TO_LIST', payload)
    }, 1000)
  },
  COMMIT_REMOVE_FROM_LIST ({ commit }, payload) {
    // Fake asynchronous call to server
    return setTimeout(() => {
      return commit('REMOVE_FROM_LIST', payload)
    }, 1000)
  }
}
