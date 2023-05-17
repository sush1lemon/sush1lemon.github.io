<script lang="ts">
  import { modalImage } from "$lib/stores/modalImage";
</script>
<div
  id="hs-image-modal"
  class="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto flex justify-center items-center"
>
  <div
    class="hs-overlay-open:mt-0 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-10 opacity-0 transition-all max-w-full w-full sm:hs-overlay-open:mt-10 sm:mt-0 sm:max-w-6xl sm:mx-auto"
  >
    <!--            <div class="flex flex-col bg-white sm:border sm:rounded-xl sm:shadow-sm dark:bg-gray-800 sm:dark:border-gray-700">-->
    <!--            </div>-->
    <img src="{$modalImage}" alt="project-image" class="min-h-[16rem]" />
  </div>
</div>

