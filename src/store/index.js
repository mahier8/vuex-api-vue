// store/index.js
import { createStore } from 'vuex'
import axios from 'axios'
export default createStore({
    state: {
        // the users array originally empty
        orders: [],
    },
    actions: {
      // my async function, fetchUsers
      async fetchUsers({ commit }) {
          try {
              // the api call now to the db.json file
            const data = await axios.get('http://localhost:3000/orders')
              commit('SET_USERS', data.data)
            }
            catch (error) {
                alert(error)
                console.log(error)
            }
        }
    },
    mutations: {
        // the data from the api call above, 
        // which should now populate the users array above
        SET_USERS(state, orders) {
          state.orders = orders
      }
    }
})