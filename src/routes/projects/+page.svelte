<script>
  import Project from "../../components/Project.svelte";
  import { projects, sideProjects } from "../../stores/data";
</script>

<main id="content">
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
        {#each projects as project}
          <Project project="{project}" showGallery="{true}" />
        {/each}

        {#each sideProjects as project}
          <Project project="{project}" showGallery="{true}" />
        {/each}
      </div>
    </div>
  </div>
</main>