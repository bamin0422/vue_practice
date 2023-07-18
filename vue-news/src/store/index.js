import {createStore} from "vuex";
import asks from "@/store/modules/asks";
import jobs from "@/store/modules/jobs";
import news from "@/store/modules/news";
import user from "@/store/modules/user";
import post from "@/store/modules/post";

export default createStore({
    modules: {
        asks,
        jobs,
        news,
        user,
        post
    }
});