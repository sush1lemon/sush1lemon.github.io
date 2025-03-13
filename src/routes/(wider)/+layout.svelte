<script lang="ts">
	let { children } = $props();
</script>



<div class="max-w-[70rem] px-3 sm:px-2 flex flex-col mx-auto w-full h-full">
	{@render children()}
</div>