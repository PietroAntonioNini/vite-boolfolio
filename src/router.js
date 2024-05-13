import { createRouter, createWebHistory } from "vue-router";

import ProjectsPage from "./pages/ProjectsPage.vue";
import SingleProject from "./pages/SingleProject.vue";

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


