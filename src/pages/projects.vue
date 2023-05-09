<template>
  <main id="content" role="main">
    <div class="py-10 px-4 sm:px-6 lg:px-8 flex flex-col gap-8">
      <div class="flex gap-4 items-center">
        <div class="flex flex-col text-white">
          <h1 class="block text-2xl font-bold text-white sm:text-4xl">
            Projects
          </h1>
        </div>
      </div>

      <div id="projects">
        <div class="flex flex-col gap-10">
          <Project
            v-for="project in projects"
            :key="project.name"
            :project="project"
            show-gallery
          />
          <Project
            v-for="project in sideProjects"
            :key="project.name"
            :project="project"
            show-gallery
          />
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { useData } from "~/composables/useData";

const { projects, sideProjects } = useData();
</script>

<style scoped></style>
