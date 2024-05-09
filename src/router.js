import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./pages/HomePage.vue";
import ProjectsPage from "./pages/ProjectsPage.vue";
import SingleProject from "./pages/SingleProject.vue";

import App from "./App.vue"

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: "/",
      name: "home",
      component: ProjectsPage,
    },
    {
      path: "/projects/:slug",
      name: "single-project",
      component: SingleProject,
    },
  ],
});

export { router };


