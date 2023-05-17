<script>
  import { page } from "$app/stores";
</script>

<header
  class="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full text-sm py-4"
>
  <nav
    aria-label="Global"
    class="w-full px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
  >
    <div class="flex items-center justify-end">
      <!--        <a-->
      <!--          aria-label="Brand"-->
      <!--          class="flex-none text-xl font-semibold text-white"-->
      <!--          href="#"-->
      <!--          >Brand</a-->
      <!--        >-->
      <div class="sm:hidden">
        <button
          aria-controls="navbar-collapse-with-animation"
          aria-label="Toggle navigation"
          class="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border border-gray-700 hover:border-gray-600 font-medium text-gray-300 hover:text-white shadow-sm align-middle focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-blue-600 transition-all text-sm"
          data-hs-collapse="#navbar-collapse-with-animation"
          type="button"
        >
          <svg
            class="hs-collapse-open:hidden w-4 h-4"
            fill="currentColor"
            height="16"
            viewBox="0 0 16 16"
            width="16"
          >
            <path
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              fill-rule="evenodd"
            />
          </svg>
          <svg
            class="hs-collapse-open:block hidden w-4 h-4"
            fill="currentColor"
            height="16"
            viewBox="0 0 16 16"
            width="16"
          >
            <path
              d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </button>
      </div>
    </div>
    <div
      id="navbar-collapse-with-animation"
      class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
    >
      <div
        class="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5"
      >
        <a data-hs-collapse="#navbar-collapse-with-animation" aria-current="page" class="text-right font-medium text-gray-400 hover:text-gray-500" class:active-nav="{$page.url.pathname === '/'}" href="/"
        >About</a
        >
        <a data-hs-collapse="#navbar-collapse-with-animation" class="text-right font-medium text-gray-400 hover:text-gray-500" href="/#experience"
        >Experience</a
        >
        <a data-hs-collapse="#navbar-collapse-with-animation" class="text-right font-medium text-gray-400 hover:text-gray-500" class:active-nav="{$page.url.pathname.includes('/projects')}" href="/projects"
        >Projects</a
        >
        <a data-hs-collapse="#navbar-collapse-with-animation" class="text-right font-medium text-gray-400 hover:text-gray-500" href="/#links"
        >Links</a
        >
      </div>
    </div>
  </nav>
</header>