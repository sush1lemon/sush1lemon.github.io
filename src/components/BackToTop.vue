<template>
  <div
    ref="scrollTopButton"
    class="fixed w-full flex justify-end bottom-0 pb-3 pr-5 transition"
  >
    <div class="text-gray-400 hover:text-blue-400 transition">
      <button
        aria-label="scroll to top of the page"
        role="button"
        class="bg-slate-800 hover:bg-slate-700 rounded-lg p-1"
        @click="scrollToTop"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M7.4 15.4L6 14l6-6l6 6l-1.4 1.4l-4.6-4.6l-4.6 4.6Z"/></svg>
      </button>
    </div>
  </div>
</template>
<script>
export default defineComponent({
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },

  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },

  methods: {
    handleScroll() {
      const scrollBtn = this.$refs.scrollTopButton;

      if (window.scrollY > 100) {
        scrollBtn.classList.remove("invisible");
      } else {
        scrollBtn.classList.add("invisible");
      }
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
});
</script>
