import {createRouter, createWebHistory} from "vue-router";
import NewsView from '../views/NewsView.vue';
import JobsView from '../views/JobsView.vue';
import AskView from '../views/AskView.vue';
import UserView from "@/views/UserView.vue";
import ItemView from "@/views/ItemView.vue";

const routes = [
    {
        path: '/',
        name: 'Main',
        redirect: '/news',
    },
    {
        path: '/news',
        name: 'News',
        component: NewsView,
    },
    {
        path: '/ask',
        name: 'Ask',
        component: AskView,
    },
    {
        path: '/jobs',
        name: 'Jobs',
        component: JobsView,
    },
    {
        path: '/user/:id',
        name: 'User',
        component: UserView,
    },
    {
        path: '/item/:id',
        name: 'Item',
        component: ItemView,
    },
];

const router = createRouter({
    mode: history,
    history: createWebHistory(),
    routes
});

export default router;