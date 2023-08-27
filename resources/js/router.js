import * as VueRouter from "vue-router"
import { auth } from "./auth.js"
import { component } from "./MyComponents.js"
import {api} from "./api.js"

const appUrl = '/'

const routes = [
    {
        path: `${appUrl}dashboard/tasks`,
        name: "tasks",
        component: component.Tasks,
        meta: { title: "Task Manager", requiresAuthentication: true },
    },

    {
        path: `${appUrl}dashboard/task-editor`,
        name: "task_editor",
        component: component.TaskEditor,
        meta: { title: "Task Editor", requiresAuthentication: true },
    },

    {
        path: `${appUrl}dashboard/task-details`,
        name: "task_details",
        component: component.TaskDetails,
        meta: { title: "Task Details", requiresAuthentication: true },
    },
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes, 
});

export {component, router, api, appUrl}