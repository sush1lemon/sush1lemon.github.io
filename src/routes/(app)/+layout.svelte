<script lang="ts">
	let { children } = $props();
</script>



<div class="max-w-[50rem] flex flex-col mx-auto w-full h-full">
	{@render children()}
</div>