<script lang="ts">
  import "../app.css";
  import Navbar from "../components/navbar/Navbar.svelte";
  import Footer from "../components/Footer.svelte";
  import ImageModal from "../components/ImageModal.svelte";
  import BackToTop from "../components/BackToTop.svelte";
</script>

<svelte:head>
  <title>Jezer Dave Bacquian</title>
  <meta name="description" content="I'm a software developer with almost 5 years of experience developing web applications. I mostly use Laravel, Tailwind, and Vue, but I can also use other tools like Node.js, Go, Typescript, and Svelte.">
  <script src="/preline/preline-dist/preline.js" defer></script>
</svelte:head>

<div class="h-screen">
  <div
    class="from-slate-950 to-slate-900 from-80% bg-gradient-to-b flex min-h-full"
  >
    <div class="max-w-[50rem] flex flex-col mx-auto w-full h-full">

      <Navbar/>
      <slot></slot>
      <Footer/>

      <ImageModal/>
    </div>
  </div>
</div>
<BackToTop/>