import { defineAsyncComponent } from "vue";

const asyncComponent = {
    DashboardMenu:defineAsyncComponent(() =>import('./components/layout/DashboardMenu.vue')),
    Loading : defineAsyncComponent(() =>import('./components/includes/Loading.vue')),
    GoBackBtn:defineAsyncComponent(() =>import('./components/includes/GoBackBtn.vue')),
    BodyHeader:defineAsyncComponent(() =>import('./components/includes/BodyHeader.vue')),
}

const component = {
    Tasks: () => import("./components/dashboard/Tasks.vue"),
    TaskEditor: () => import("./components/dashboard/TaskEditor.vue"),
    TaskDetails: () => import("./components/dashboard/TaskDetails.vue"),
};

export {component, asyncComponent}