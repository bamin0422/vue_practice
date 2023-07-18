import {fetchNewsList} from "@/api";

const newsState = {
    news: []
}

export default {
    state: newsState,
    getters: {
        getNewsList(state) {
            return state.news
        }
    },
    mutations: {
        setNewsList(state, news) {
            state.news = news;
        }
    },
    actions: {
        FETCH_NEWS({ commit }) {
            fetchNewsList()
                .then((response) => commit('setNewsList', response.data))
                .catch((error) => console.log(error))
        }
    }
}