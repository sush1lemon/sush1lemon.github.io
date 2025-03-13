<script>
	import '../app.css';

	let { children } = $props();
	import BackToTop from '$lib/components/BackToTop.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';

	const since = 2018
	const elapsedYear = new Date().getFullYear() - since
</script>


<svelte:head>
	<title>Jezer Dave Bacquian</title>
	<meta name="description" content="I'm a software developer with almost {elapsedYear} years of experience developing web applications. I mostly use Laravel, Tailwind, and Vue, but I can also use other tools like Node.js, Go, Typescript, and Svelte.">
</svelte:head>


<div class="h-screen">
	<Navbar/>
<!--	class="from-slate-950 to-slate-900 from-80% bg-gradient-to-b flex flex-col min-h-full p-2"-->

	<div
		class="dark:from-slate-950 dark:to-slate-900 dark:from-80% dark:bg-gradient-to-b bg-background flex flex-col min-h-full p-2"
	>

		{@render children()}

		<Footer/>
	</div>
</div>

<BackToTop/>
