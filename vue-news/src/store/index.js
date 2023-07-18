import {createStore} from "vuex";
import asks from "@/store/modules/asks";
import jobs from "@/store/modules/jobs";
import news from "@/store/modules/news";

export default createStore({
    modules: {
        asks,
        jobs,
        news,
    }
});