<script lang="ts">
  import { setPreviewImage } from "../stores/modalImage";
  import { tools } from "../stores/data";
  import type { Project } from "../types";
  export let project: Project;

  export let showGallery = false;
</script>

<div class="flex flex-col gap-2">
  <div class="text-white flex flex-col">
    <h2 class="font-medium">
      { project.name }
      <a class="text-gray-300" href="{project.link}" target="_blank">({ project.link })</a>
    </h2>
    <span class="text-sm">{ project.description }</span>
  </div>
  {#if showGallery && project.showImage }
    <div class="grid grid-cols-2 gap-0.5 sm:gap-1">
      {#each Array(4) as _, i}
        <img class="inline-block min-h-[4rem] sm:min-h-[10rem] aspect-video rounded cursor-pointer"
             src="{`/images/${project.folderName}/${i+1}.webp`}"
             alt="{`${project.name} image`}" loading="lazy" data-hs-overlay="#hs-image-modal"
             on:click="{setPreviewImage(`/images/${project.folderName}/${i+1}.webp`)}">
      {/each}
    </div>
  {/if}
  {#if project.stack}
    <div>
      <h3 class="text-sm text-white">Tech Stack</h3>
      <div class="flex gap-1.5 mt-1">
        {#each project.stack as tool}
          {#if !tools.includes(tool)}
                    <span class="tool bg-white text-gray-600">
                        { tool }
                    </span>
          {:else }
            <svelte:component this="{tool}"></svelte:component>
          {/if}
        {/each}
      </div>
    </div>
  {/if}
</div>