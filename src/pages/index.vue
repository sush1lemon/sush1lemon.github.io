<template>
  <!-- ========== MAIN CONTENT ========== -->
  <main id="content" role="main">
    <div class="py-10 px-4 sm:px-6 lg:px-8 flex flex-col gap-8">
      <div class="flex gap-4 items-center">
        <img
            class="inline-block h-[3.875rem] w-[3.875rem] rounded-full ring-2 ring-white dark:ring-gray-800"
            src="https://api.dicebear.com/6.x/lorelei/svg?seed=Cookie"
            alt="Image Description"
        />
        <div class="flex flex-col text-white">
          <h1 class="block text-2xl font-bold text-white sm:text-4xl">
            Jezer Dave Bacquian
          </h1>
          <span class="text-sm">Software Developer</span>
        </div>
      </div>

      <About />
      <Experience />

      <div id="projects">
        <h1 class="text-lg block font-bold text-white mt-3 mb-1">
          Projects
        </h1>
        <div class="flex flex-col gap-4 sm:pl-4">
          <Project v-for="project in projects.slice(0,3)" :project="project" :key="project.name" :show-gallery="false" />

          <nuxt-link to="/projects" class="text-white font-medium">> See all Projects</nuxt-link>
        </div>
      </div>
      <Links />


      <div id="tools">
        <h1 class="text-lg block font-bold text-white mt-3">Tools</h1>
        <div class="flex gap-1.5 mt-1">
          <component :is="tool" :key="tool.name" v-for="tool in tools"></component>
        </div>
      </div>

      <div id="tools">
        <h1 class="text-lg block font-bold text-white mt-3 mb-1">
          Side Projects
        </h1>
        <div class="flex flex-col gap-4 sm:pl-4">
          <Project v-for="project in sideProjects" :project="project" :key="project.name" :show-gallery="false" />
        </div>
      </div>

    </div>
  </main>
  <!-- ========== END MAIN CONTENT ========== -->
</template>

<script lang="ts" setup>
import {useData} from "~/composables/useData";

const { projects, tools, sideProjects } = useData()
import Navbar from "~/components/navbar/Navbar.vue";
import About from "~/components/About.vue";
import Experience from "~/components/Experience.vue";
import Links from "~/components/Links.vue";
import Project from "~/components/project/Project.vue";
</script>

<style scoped></style>