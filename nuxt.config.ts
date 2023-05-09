// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: "src",
  modules: ["@nuxtjs/tailwindcss"],
  typescript: {
    strict: true,
  },
  app: {
    head: {
      title: "Jezer Dave Bacquian",
      bodyAttrs: {
        class: "min-h-screen scroll-smooth",
      },
      htmlAttrs: {
        class: "scroll-smooth bg-slate-950",
        lang: "en",
      },
      script: [
        {
          src: "/preline/preline-dist/preline.js",
          body: true,
          defer: true,
        },
      ],
      meta: [
        {
          name: "description",
          content: `I'm a software developer with almost 5 years of experience developing web
      applications. I mostly use Laravel, Tailwind, and Vue, but I can also use
      other tools like Node.js, Go, Typescript, and Svelte.`,
        },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' }
      ]
    },
  },
});
