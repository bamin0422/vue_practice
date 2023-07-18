import {fetchAskList} from "@/api";

const askState = {
    asks: []
}

export default {
    state: askState,
    getters: {
        getAskList(state) {
            return state.asks
        }
    },
    mutations: {
        setAskList(state, asks) {
            state.asks = asks;
        }
    },
    actions: {
        FETCH_ASKS({ commit }) {
            fetchAskList()
                .then((response) => commit('setAskList', response.data))
                .catch((error) => console.log(error))
        }
    }
}