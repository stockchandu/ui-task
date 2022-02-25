import { createStore } from "vuex";
import axios from "axios";
export const store = createStore({
    state() {
        return {
            count: 0
        }
    },

    //mutation is the method to update the state
    mutations: {
        increment(state, random) {
            state.count += random
        },
        decrement(state) {
            state.count--
        }
    },

    //actions is similar to mutations,actions commit mutations. actions can be asynchronous operations and it takes some time to commit the mutations,does not reflect immediately in UI.  
    actions: {
        increaseCounter({ commit }) {
            const baseRandomAPI = "http://www.randomnumberapi.com/api/v1.0/random?min=100&max=1000&count=5"
            axios.get(baseRandomAPI).then(response => {
                commit('increment', response.data[0])
            })
        }
    },

    //getters are very usefull for computing like square ,filter,sort etc
    getters: {
        squareNumbered(state) {
            return state.count * state.count
        }
    }
})

