<script lang="ts">
	import { enhance } from '$app/forms';
	import backdrop from '$lib/assets/backdrop/galaxi.jpg';
	import translatenw from '$lib/assets/translatenw.svg';
	import Backdrop from '$lib/components/backdrop.svelte';

	export let form;
</script>

<section>
	<div>
		<div>
			<div class="w-full p-2 min-h-[75vh] max-h-[75vh] rounded-lg">
				<Backdrop {backdrop} title="Paraphrase" description="Your word are on your own" />
				<form action="?/paraphrase" method="post" use:enhance={()=>{
					return async ({ update }) => {
						await update({reset: false});
					};
					
				}}>
					<div class="flex flex-row px-[26px] pt-10">
						<div class="flex flex-col m-auto">
							<button
								class=" px-4 mb-4 rounded-full bg-[#be92f7] hover:bg-[#ae73fb] w-[229px] h-[58px] text-black flex flex-row justify-center pt-4"
							>
								<div><img src={translatenw} alt="translatenw" class="w-8" /></div>
								<div class="text-lg font-medium pl-5">Indonesia</div>
							</button>
							<div class="m-auto w-full">
								<div dir="ltr">
									<textarea
										id="input"
										name="input"
										placeholder="Your text to paraphrase"
										class="w-[680px] h-[300px] bg-transparent border-2 border-solid border-[#be92f7] hover:border-[#9a51fb] text-white p-3 rounded-s-2xl focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
									/>
								</div>
							</div>
						</div>
						<div class="flex flex-col m-auto">
							<div class="m-auto w-full pt-[74px]">
								<div>
									{#if form?.result}
										<textarea
											disabled
											id="output"
											name="output"
											class=" w-[680px] h-[300px] bg-transparent border-2 focus:border-4 border-solid border-[#be92f7] hover:border-[#9a51fb] text-white p-3 rounded-e-2xl focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
										>{form.result}</textarea>
									{:else}
										<textarea
											disabled
											placeholder="Your paraphrased text"
											id="output"
											name="output"
											class=" w-[680px] h-[300px] bg-transparent border-2 focus:border-4 border-solid border-[#be92f7] hover:border-[#9a51fb] text-white p-3 rounded-e-2xl focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
										/>
									{/if}
								</div>
							</div>
						</div>
					</div>
					<div class="flex flex-row justify-center pt-8">
						<button
							type="submit"
							class="px-4 mb-8 m-auto rounded-full bg-[#be92f7] w-[230px] h-[56px] text-black flex flex-row justify-center pt-4 hover:bg-[#ae73fb]"
						>
							<div><img src={translatenw} alt="translatenw" class="w-8" /></div>
							<div class="text-base font-medium pl-5">Paraphrase</div>
						</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</section>

<style>
	section {
		min-height: 100vh;
	}
</style>
