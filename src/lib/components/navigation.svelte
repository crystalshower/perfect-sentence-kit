<script>
    import  homeIcon  from '$lib/assets/home.svg';
	import  translateIcon  from '$lib/assets/translate.svg';
	import  grammarIcon  from '$lib/assets/grammar.svg';
</script>

<nav>
	<div class="flex flex-row bg-mat-black-slate w-[6%] min-h-screen pt-5 fixed top-0 left-0">
		<div class="mx-auto w-full space-y-10">

			<a class="group w-3/4 mx-auto flex flex-col" href="/" data-sveltekit-replacestate>
				<div class="group-hover:bg-gray-600 rounded-3xl group-hover:bg-opacity-30 py-1 transition duration-200 ease-in-out">
					<img src={homeIcon} alt="Home" class="m-auto" />
				</div>
				<span class="font-bold mx-auto text-center text-xs text-gray-300">Home</span>
			</a>

			<a class="group w-3/4 mx-auto flex flex-col" href="/translate" data-sveltekit-replacestate>
				<div class="group-hover:bg-gray-600 group-hover:bg-opacity-30 rounded-3xl py-1 transition duration-200 ease-in-out">
					<img src={translateIcon} alt="Home" class="m-auto" />
				</div>
				<span class="font-bold mx-auto text-center text-xs text-gray-300">Translate</span>
			</a>

			<a class="group w-3/4 mx-auto flex flex-col" href="/grammar" data-sveltekit-replacestate>
				<div class="group-hover:bg-gray-600 group-hover:bg-opacity-30 rounded-3xl py-1 transition duration-200 ease-in-out">
					<img src={grammarIcon} alt="Home" class="m-auto" />
				</div>
				<span class="font-bold mx-auto text-center text-xs text-gray-300">Grammar</span>
			</a>
		</div>
	</div>
</nav>