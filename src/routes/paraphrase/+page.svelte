<script lang="ts">
	import backdrop from '$lib/assets/backdrop/galaxi.jpg';
	import translatenw from '$lib/assets/translatenw.svg';
	import Backdrop from '$lib/components/backdrop.svelte';
</script>

<section>
	<div>
		<div>
			<div class="w-full p-2 min-h-[75vh] max-h-[75vh] rounded-lg">
				<Backdrop {backdrop} title="Paraphrase" description="Write as you are native speaker" />
				<form class="flex flex-row px-[26px] pt-10">
					<div class="flex flex-col m-auto">
						<button
							class=" px-4 mb-4 rounded-full bg-[#be92f7] hover:bg-[#ae73fb] w-[229px] h-[58px] text-black flex flex-row justify-center pt-4 "
						>
							<div><img src={translatenw} alt="translatenw" class="w-8" /></div>
							<div class="text-lg font-medium pl-5">English</div>
						</button>
						<div class="m-auto w-full">
							<div dir="ltr">
								<textarea
									type="text"
									id="message"
									placeholder="Write as you are native speaker"
									class="w-[680px] h-[300px] bg-transparent border-2 border-solid border-[#be92f7] hover:border-[#9a51fb] text-white p-3 rounded-s-2xl focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
								/>
							</div>
						</div>
					</div>
					<div class="flex flex-col m-auto">
						
						<div class="m-auto w-full pt-[74px]">
							<div dir="rtl">
								<textarea disabled
									type="text"
									id="message"
									class=" w-[680px] h-[300px] bg-transparent border-2 focus:border-4 border-solid border-[#be92f7] hover:border-[#9a51fb] text-white p-3 rounded-s-2xl focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
								/>
							</div>
						</div>
					</div>
				</form>
				<div class="flex flex-row justify-center pt-8">
					<button
						class="px-4 mb-8 m-auto rounded-full bg-[#be92f7] w-[230px] h-[56px] text-black flex flex-row justify-center pt-4 hover:bg-[#ae73fb]"
					>
						<div><img src={translatenw} alt="translatenw" class="w-8" /></div>
						<div class="text-base font-medium pl-5">Correct Grammar</div>
					</button>
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
