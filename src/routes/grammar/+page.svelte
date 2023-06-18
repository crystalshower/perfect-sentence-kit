<script lang="ts">
	import backdrop from '$lib/assets/backdrop/unnamed (1).jpg';
	import translatenw from '$lib/assets/translatenw.svg';
	import Backdrop from '$lib/components/backdrop.svelte';
</script>

<section>
	<div>
		<div>
			<Backdrop {backdrop} title="Grammar" description="Write as you are native speaker" />
			<div class="flex flex-col px-56">
				<div class="flex flex-col">
					<button
						class="px-4 mb-8 rounded-full bg-[#8DCDFF] w-[172px] h-[56px] text-black flex flex-row justify-center pt-4 hover:bg-[#81C7FE]"
					>
						<div><img src={translatenw} alt="translatenw" class="w-8" /></div>
						<div class="text-lg font-medium pl-5">English</div>
					</button>
				</div>
				<div class="w-full px-4 mb-8">
					<textarea
						type="text"
						id="message"
						class="w-[894px] h-[405px] bg-transparent border border-solid hover:border-[#8DCDFF] text-white p-3 rounded-2xl focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
					/>
				</div>
				<button
					class="px-4 mb-8 m-auto rounded-full bg-[#8DCDFF] w-[230px] h-[56px] text-black flex flex-row justify-center pt-4 hover:bg-[#81C7FE]"
				>
					<div><img src={translatenw} alt="translatenw" class="w-8" /></div>
					<div class="text-base font-medium pl-5">Correct Grammar</div>
				</button>
				<div class="px-4 mb-8">
					<label for="message" class="text-white font-medium text-xl">Result</label>
				</div>
				<div class="px-4 mb-8 w-full">
					<button
						class=" w-[894px] h-[405px] bg-transparent border border-solid hover:border-[#8DCDFF] text-white p-3 rounded-2xl focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
					/>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	section {
		min-height: 100vh;
	}
</style>
