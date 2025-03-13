<script>
	export const prerender = true;

	import About from '$lib/components/About.svelte';
	import Experience from '$lib/components/Experience.svelte';
	import * as Avatar from "$lib/components/ui/avatar/index";
	import Links from '$lib/components/Links.svelte';
	import SideProjects from '$lib/components/SideProjects.svelte';

</script>

<main class=" bg-none">
	<div class="py-4 sm:py-10 px-4 sm:px-6 lg:px-8 flex flex-col gap-8">
		<div class="flex gap-4 items-center">
			<Avatar.Root class="h-[3.875rem] w-[3.875rem] ring-2 ring-secondary">
				<Avatar.Image src="/favicon.svg" alt="Developer Profile" />
				<Avatar.Fallback>JB</Avatar.Fallback>
			</Avatar.Root>

			<div class="flex flex-col text-primary">
				<h1 class="block text-2xl font-bold text-primary sm:text-4xl">
					Jezer Dave Bacquian
				</h1>
				<span class="text-sm">Software Developer</span>
			</div>
		</div>



		<About/>

		<Experience/>

		<SideProjects/>

		<Links/>

		<div class="flex flex-col gap-2 mt-8">
			<img class="rounded-sm" src="https://holopin.me/@sush1lemon" alt="Holopin badges">
		</div>
	</div>
</main>