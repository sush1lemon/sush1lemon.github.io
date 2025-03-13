<script>
	import { page } from '$app/state';
	import * as Sheet from "$lib/components/ui/sheet/index.js";
	import { MenuIcon } from 'lucide-svelte';
	import { afterNavigate } from '$app/navigation';
	let open = $state(false)

	afterNavigate(() => {
		if (open) {
			open = false
		}
	})
</script>

<header class="w-full px-4 py-3">
	<div>
		<div class="max-w-[50rem] mx-auto  flex justify-end">
			<div class="hidden sm:flex gap-4 text-sm font-medium text-gray-400">
				<a href="/" class:active-nav="{page.url.pathname === '/'}" class="hover:text-gray-500">About</a>
				<a href="/projects" class:active-nav="{page.url.pathname === '/projects'}" class="hover:text-gray-500">Projects</a>
<!--				<a href="/skills-and-tools" class:active-nav="{page.url.pathname === '/skills-and-tools'}" class="hover:text-gray-500">Skills & Tools</a>-->
			</div>

			<Sheet.Root bind:open={open}>
				<Sheet.Trigger class="block sm:hidden">
					<MenuIcon size={32}/>
				</Sheet.Trigger>
				<Sheet.Content>
					<div class="flex flex-col gap-2 text-lg font-medium text-gray-400">
						<a href="/" class:active-nav="{page.url.pathname === '/'}" class="hover:text-gray-500">About</a>
						<a href="/projects" class:active-nav="{page.url.pathname === '/projects'}" class="hover:text-gray-500">Projects</a>
<!--						<a href="/skills-and-tools" class:active-nav="{page.url.pathname === '/skills-and-tools'}" class="hover:text-gray-500">Skills & Tools</a>-->
					</div>
				</Sheet.Content>
			</Sheet.Root>
		</div>
	</div>
</header>