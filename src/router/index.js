import { createRouter, createWebHistory } from 'vue-router'

import Von from "../views/Von.vue";
import Vprops from "../views/Vprops.vue";
import Vbind from "../views/Vbind.vue";
import Vmodel from "../views/Vmodel.vue";
import VFor from "../views/VFor.vue";
import Root from "../views/Root.vue";
import Subscriber from "../views/Subscriber.vue";
const routes = [
    {
        path: "/",
        name: "home",
        component: Von
    },
    {
        path: "/von",
        name: "von",
        component: Von
    },
    {
        path: "/vprops",
        name: "vprops",
        component: Vprops
    },
    {
        path: "/vbind",
        name: "vbind",
        component: Vbind
    },
    {
        path: "/vmodel",
        name: "vmodel",
        component: Vmodel
    },
    {
        path: "/vfor",
        name: "vfor",
        component: VFor
    },
    {
        path: "/root",
        name: "root",
        component: Root
    },
    {
        path: "/emitter",
        name: "emitter",
        component: Subscriber
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
