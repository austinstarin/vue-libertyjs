import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies: [
      {
        title: 'Breahless',
        director: 'Jean-Luc Godard',
        thumbnail: 'http://via.placeholder.com/250x350',
        rating: 0,
        cart: false
      },
      {
        title: 'Indiana Jones',
        director: 'Steven Spielberg',
        thumbnail: 'http://via.placeholder.com/250x350',
        rating: 0,
        cart: false
      },
      {
        title: '8 1/2',
        director: 'Federico Fellini',
        thumbnail: 'http://via.placeholder.com/250x350',
        rating: 0,
        cart: false
      },
      {
        title: 'E.T. the Extra-Terrestrial',
        director: 'Steven Spielberg',
        thumbnail: 'http://via.placeholder.com/250x350',
        rating: 0,
        cart: false
      }
    ]
  }
})
