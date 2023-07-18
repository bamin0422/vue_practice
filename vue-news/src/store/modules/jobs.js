import {fetchJobsList} from "@/api";

const jobState = {
    jobs: []
}

export default {
    state: jobState,
    getters: {
        getJobList(state) {
            return state.jobs
        }
    },
    mutations: {
        setJobList(state, jobs) {
            state.jobs = jobs;
        }
    },
    actions: {
        FETCH_JOBS({commit}) {
            fetchJobsList()
                .then((response) => {
                    commit('setJobList', response.data)
                    console.log(response.data);
                })
                .catch((error) => console.log(error))
        }
    }
}