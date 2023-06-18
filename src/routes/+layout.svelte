<script>
	import '../app.css';
	import '@fontsource/plus-jakarta-sans';
	import Navigation from '$lib/components/navigation.svelte';
 
	export let data
</script>

{#if !data.layout?.hideNav}
	<Navigation />

	<main class="ml-[6%]">
		<slot />
	</main>
{:else}
	<slot />
{/if}

<style>
	main {
		display: flex;
		flex-direction: column;
	}
</style>