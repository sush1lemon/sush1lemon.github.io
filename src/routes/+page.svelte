<script>
  import About from "../components/About.svelte";
  import Experience from "../components/Experience.svelte";
  import Links from "../components/Links.svelte";
  import { projects, sideProjects } from "../stores/data";
  import Project from "../components/Project.svelte";
</script>

<main id="content">
  <div class="py-10 px-4 sm:px-6 lg:px-8 flex flex-col gap-8">
    <div class="flex gap-4 items-center">
      <img
        class="inline-block h-[3.875rem] w-[3.875rem] rounded-full ring-2 ring-white dark:ring-gray-800"
        src="/favicon.svg"
        alt="Developer Profile Image"
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
        {#each projects.slice(0, 3) as project}
          <Project project="{project}" showGallery="{false}" />
        {/each}

        <a href="/projects" class="text-white font-medium">> See all Projects</a>
      </div>
    </div>

    <Links />

    <div id="side-projects">
      <h1 class="text-lg block font-bold text-white mt-3 mb-1">
        Side Projects
      </h1>
      <div class="flex flex-col gap-4 sm:pl-4">
        {#each sideProjects as project}
          <Project project="{project}" showGallery="{false}" />
        {/each}
      </div>
    </div>


  </div>
</main>