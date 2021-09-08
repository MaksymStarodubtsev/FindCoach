import { createStore } from 'vuex'

const store = createStore({
  state () {
    return {
      coaches: [],
      requests: [],
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
    },
    requestsFromStudent (state, getters) {
      if (state.requests.length > 0) {
        return state.requests
      }
      return state.requests
    }
  },
  mutations: {
    setInData (state, dataFromServer) {
      const newCoach = Object.values(dataFromServer)
      state.coaches = newCoach
    },
    setInRequests (state, dataFromServer) {
      const requests = Object.values(dataFromServer)
      state.requests = requests
    },
    setFiltersInState (state, skillsFilters) {
      state.filterForSkills = skillsFilters
    },
    addNewCoach (state) {
      fetch('https://vue-http-demo-763e4-default-rtdb.europe-west1.firebasedatabase.app/FindCoaches/Coaches.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: 3,
          name: 'Mark Berg',
          paid: 30,
          skills: ['Front-end', 'Back-end', 'career support']
        })
      })
    }
  },
  actions: {
    getCoaches (context) {
      fetch('https://vue-http-demo-763e4-default-rtdb.europe-west1.firebasedatabase.app/FindCoaches/Coaches.json')
        .then((response) => response.json())
        .then((data) => {
          context.commit('setInData', data)
        })
        .catch((err) => {
          console.log(err)
        })
        .finally(() => {
          console.log('finaly')
        })
    },
    getRequests (context) {
      fetch('https://vue-http-demo-763e4-default-rtdb.europe-west1.firebasedatabase.app/FindCoaches/Request.json')
        .then((response) => response.json())
        .then((data) => {
          context.commit('setInRequests', data)
        })
        .catch((err) => {
          console.log(err)
        })
        .finally(() => {
          console.log('finaly')
        })
    },
    toSortCoaches (context, filtersForCoachesList) {
      context.commit('setFiltersInState', filtersForCoachesList)
    },
    setRequests (context, requestsData) {
      fetch('https://vue-http-demo-763e4-default-rtdb.europe-west1.firebasedatabase.app/FindCoaches/Request.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: 1,
          coachName: requestsData.name,
          email: requestsData.email,
          desc: requestsData.desc
        })
      })
    }
  }
})

export default store
