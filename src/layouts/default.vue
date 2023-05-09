<template>
  <div class="h-screen">
    <div
      class="from-slate-950 to-slate-900 from-80% bg-gradient-to-b flex min-h-full"
    >
      <div class="max-w-[50rem] flex flex-col mx-auto w-full h-full">
        <!-- ========== HEADER ========== -->
        <Navbar />
        <!-- ========== END HEADER ========== -->
        <slot></slot>
        <!-- ========== FOOTER ========== -->
        <PageFooter />
        <!-- ========== END FOOTER ========== -->
      </div>
    </div>
  </div>
  <ImageModal/>
  <BackToTop/>
</template>

<script setup lang="ts">
import Navbar from "~/components/navbar/Navbar.vue";
import PageFooter from "~/components/PageFooter.vue";
</script>

<style scoped></style>