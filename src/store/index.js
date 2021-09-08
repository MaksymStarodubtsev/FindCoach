import { createStore } from 'vuex'

const store = createStore({
  state () {
    return {
      coaches: [],
      filterForSkills: []
    }
  },
  getters: {
    coachesList (state, getters) {
      if (state.coaches.length > 0) {
        return state.coaches.filter((coach) => (
          state.filterForSkills.every((filter) => coach.skills.includes(filter))
        ))
      }
      return state.coaches
    }
  },
  mutations: {
    setInData (state, dataFromServer) {
      const newCoach = Object.values(dataFromServer)
      state.coaches = newCoach
      console.log(dataFromServer, newCoach)
    },
    setFiltersInState (state, skillsFilters) {
      state.filterForSkills = skillsFilters
    }
  },
  actions: {
    getCoaches (context, productData) {
      fetch('https://vue-http-demo-763e4-default-rtdb.europe-west1.firebasedatabase.app/FindCoaches/Coaches.json')
        .then((response) => response.json())
        .then((data) => {
          context.commit('setInData', data)
          console.log('action')
        })
        .catch((err) => {
          console.log(err)
        })
        .finally(() => {
          console.log('lol')
        })
    },
    toSortCoaches (context, filtersForCoachesList) {
      context.commit('setFiltersInState', filtersForCoachesList)
    }
  }
})

export default store
