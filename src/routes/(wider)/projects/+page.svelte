<script lang="ts">
	export const prerender = true;

	import * as Card from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import * as Carousel from '$lib/components/ui/carousel';
	import { AspectRatio } from '$lib/components/ui/aspect-ratio/index.js';
	import { projects } from '$lib/stores/data';
	import * as Dialog from "$lib/components/ui/dialog/index.js";
	import type { Project } from '$lib/types';

	let open = $state(false)
	let images = $state<{alt: string, url: string}[]>([])

	const setProjectImages = (project: Project) => {
		console.log(project);
		open = true
		images = [];
		images.push({
			alt: `${project.name}-image-thumb`,
			url: project.thumbnail
		})

		if (project.folderName) {
			for (let x = 1; x < 5; x++) {
				images.push({
					alt: `${project.name}-image-thumb`,
					url: `/images/${project.folderName}/${x}.webp`
				})
			}
		}
	}

</script>

<svelte:head>
	<title>Jezer Dave Bacquian | Projects</title>
</svelte:head>

<main class="flex flex-col">
	<div class="mt-10">
		<h1 class="block text-2xl font-bold sm:text-4xl">Projects</h1>
	</div>

	<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mt-8">
		{#each projects as project}
			<Card.Root class="flex flex-col">
				<Card.Header class="px-0 pt-0">
					<AspectRatio ratio={16 / 9}>
						<button class="h-full" onclick={() => setProjectImages(project)}>
							<img class="cursor-pointer object-cover rounded-t-xl h-full" src="{project.thumbnail}" alt="{project.name}">
						</button>
<!--						<enhanced:img class="cursor-pointer object-cover rounded-t-xl" src="{}" alt="An alt text" />-->
					</AspectRatio>
				</Card.Header>
				<Card.Content class="h-36">
					<Card.Title>
						<a href="{project.link}" target="_blank">
							{project.name}
						</a>
					</Card.Title>
					<Card.Description class="max-h-[100px] overflow-clip overflow-ellipsis mt-0.5">
						{project.description}
					</Card.Description>
				</Card.Content>
				{#if (project.stack)}
					<Card.Footer class="mt-auto">
						<div class="space-x-1 space-y-1">
							{#each project.stack as stack}
								<Badge variant="secondary">{stack}</Badge>
							{/each}
						</div>
					</Card.Footer>
				{/if}
			</Card.Root>
		{/each}
	</div>
</main>


<Dialog.Root bind:open={open}>
	<Dialog.Content class="max-w-4xl">
		<Dialog.Header>
			<Dialog.Description class="">
				<Carousel.Root class="w-full">
					<Carousel.Content>
						{#each images as image, i (i)}
							<Carousel.Item>
								<img class="w-full h-[300px] md:h-[500px] object-cover" src="{image.url}" alt="{image.alt}">
<!--								<div class="p-1">-->
<!--									<Card.Root>-->
<!--										<Card.Content-->
<!--											class="flex aspect-square items-center justify-center p-6"-->
<!--										>-->
<!--											<span class="text-4xl font-semibold">{i + 1}</span>-->
<!--										</Card.Content>-->
<!--									</Card.Root>-->
<!--								</div>-->
							</Carousel.Item>
						{/each}
					</Carousel.Content>
					<Carousel.Previous class="hidden sm:inline-flex" />
					<Carousel.Next class="hidden sm:inline-flex" />
				</Carousel.Root>
			</Dialog.Description>
		</Dialog.Header>
	</Dialog.Content>
</Dialog.Root>