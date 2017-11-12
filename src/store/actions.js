export default {
  COMMIT_ADD_TO_LIST ({ commit }, payload) {
    // Fake asynchronous call to server
    return setTimeout(() => {
      return commit('ADD_TO_LIST', payload)
    }, 500)
  },
  COMMIT_REMOVE_FROM_LIST ({ commit }, payload) {
    // Fake asynchronous call to server
    return setTimeout(() => {
      return commit('REMOVE_FROM_LIST', payload)
    }, 500)
  },
  COMMIT_UPDATE_RATING ({ commit }, payload) {
    // Fake asynchronous call to server
    return setTimeout(() => {
      return commit('UPDATE_RATING', payload)
    }, 500)
  }
}
