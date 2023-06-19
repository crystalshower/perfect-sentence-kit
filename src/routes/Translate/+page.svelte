<script lang="ts">
	import backdrop from '$lib/assets/backdrop/unnamed.jpg';
	import translatenw from '$lib/assets/translatenw.svg';
	import Backdrop from '$lib/components/backdrop.svelte';
</script>

<section>
	<div>
		<div>
			<div class="w-full p-2 min-h-[75vh] max-h-[75vh] rounded-lg">
				<Backdrop
					{backdrop}
					title="Translate"
					description="Translate your word into perfect human-like result"
				/>
				<form class="flex flex-row mx-7">
					<div class="flex flex-col text-black m-auto mt-10">
						<div class="flex flex-row">
							<button class="bg-[#FFB0C8] w-[229px] h-[58px] rounded-[35px] mb-4">English</button>
							
						</div>
						
						<textarea
							class=" peer w-[680px] h-[300px] block min-h-[auto] bg-transparent border border-solid border-[#FFB0C8] text-white p-3 rounded-l-2xl focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
							id="exampleFormControlTextarea1"
							rows="8"
							placeholder="Your message"
						/>
					</div>
					<div class="flex flex-col text-black m-auto mt-10">
						<div class="flex flex-row-reverse">
							<button class="bg-[#FFB0C8] w-[229px] h-[58px] rounded-[35px] mb-4"
								>Bahasa Indonesia</button
							>
						</div>

						<textarea
							class=" peer w-[680px] h-[300px] block min-h-[auto] bg-transparent border border-solid border-[#FFB0C8] text-white p-3 rounded-r-2xl focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
							id="exampleFormControlTextarea1"
							rows="8"
							placeholder="Your message"
						/>
					</div>
				</form>
				<div
					class="text-center m-16 outline-none focus:ring-4 transition duration-200 ease-in-out active:scale-95"
				>
					<button class="bg-[#FFB0C8] w-[229px] h-[58px] rounded-[35px] mb-4">Translate</button>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
</style>
