import Vue from "vue";
import Router from "vue-router";
import Main from "@/components/Main";
import Skills from "@/components/Skills";
import Technical from "@/components/Technical";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import BootstrapVue from 'bootstrap-vue';

Vue.use(BootstrapVue);
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Main",
      component: Main
    },
    {
      path: "/skills",
      name: "Skills",
      component: Skills
    },
    {
      path: "/technical",
      name: "Technical",
      component: Technical
    },
    {
      path: "/experience",
      name: "Experience",
      component: Experience
    },
    {
      path: "/education",
      name: "Education",
      component: Education
    },
    {
      path: "/certifications",
      name: "Certifications",
      component: Certifications
    },
  ]
});
