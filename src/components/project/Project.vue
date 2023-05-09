<template>
    <div class="flex flex-col gap-2">
        <div class="text-white flex flex-col">
            <h2 class="font-medium">
                {{ project.name }}
                <a class="text-gray-300" :href="project.link" target="_blank">({{ project.link }})</a>
            </h2>
            <span class="text-sm">{{ project.description }}</span>
        </div>
        <div class="grid grid-cols-2 gap-0.5 sm:gap-1"  v-if="showGallery && project.showImage">
            <img v-for="x in 4" class="inline-block min-h-[4rem] sm:min-h-[10rem] aspect-video rounded cursor-pointer" :src="`/images/${project.folderName}/${x}.webp`"
                 :alt="`${project.name} image`" loading="lazy"  data-hs-overlay="#hs-image-modal" @click="setPreviewImage(`/images/${project.folderName}/${x}.webp`)">
        </div>
        <div v-if="project.stack">
            <h3 class="text-sm text-white">Tech Stack</h3>
            <div class="flex gap-1.5 mt-1">
                <template v-for="tstack in project.stack">
                    <span class="tool bg-white text-gray-600" v-if="!tools.includes(tstack)">
                        {{ tstack }}
                    </span>
                    <component v-else :is="tstack as string"></component>
                </template>
<!--                <span class="inline-flex items-center py-0.5 sm:py-1 px-3 rounded-full text-xs font-medium bg-red-600 text-white">Laravel</span>-->
<!--                <span class="inline-flex items-center py-0.5 sm:py-1 px-3 rounded-full text-xs font-medium bg-emerald-700 text-white">Vue</span>-->
<!--                <span class="inline-flex items-center py-0.5 sm:py-1 px-3 rounded-full text-xs font-medium bg-lime-700 text-white">Node.js</span>-->
<!--                <span class="inline-flex items-center py-0.5 sm:py-1 px-3 rounded-full text-xs font-medium bg-sky-500 text-white">Quasar</span>-->
<!--                <span class="inline-flex items-center py-0.5 sm:py-1 px-3 rounded-full text-xs font-medium bg-white text-gray-600">Redis</span>-->
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">

import {useModalImage} from "~/composables/useModalImage";
import {useData} from "~/composables/useData";

const { setPreviewImage } = useModalImage()
const { tools } = useData()

interface ProjectProp extends Project {
    showImage?: boolean
    stack?: ProjectTool[]
}

const props = defineProps<{ project: ProjectProp, showGallery: boolean }>()
</script>