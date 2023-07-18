import {fetchPostInfo} from "@/api";

const postState = {
    post: {}
}

export default {
    state: postState,
    getters: {
        getPostInfo(state) {
            return state.post;
        }
    },
    mutations: {
        setPostInfo(state, postInfo) {
            state.post = postInfo;
        }
    },
    actions: {
        FETCH_POST_INFO({commit}, postId) {
            fetchPostInfo(postId)
                .then((response) => {
                    console.log(response);
                    commit('setPostInfo', response.data)
                })
                .catch((error) => console.log(error))
        }
    }
}