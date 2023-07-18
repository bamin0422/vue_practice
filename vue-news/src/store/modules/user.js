import {fetchUserInfo} from "@/api";

const userState = {
    user: {}
}

export default {
    state: userState,
    getters: {
        getUserInfo(state) {
            return state.user;
        }
    },
    mutations: {
        setUserInfo(state, userInfo) {
            state.user = userInfo;
        }
    },
    actions: {
        FETCH_USER_INFO({commit}, userName) {
            fetchUserInfo(userName)
                .then((response) => commit('setUserInfo', response.data))
                .catch((error) => console.log(error))
        }
    }
}