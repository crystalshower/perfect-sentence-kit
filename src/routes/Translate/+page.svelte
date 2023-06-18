<script lang="ts">
	import backdrop from '$lib/assets/backdrop/unnamed.jpg';
	import translate from '$lib/assets/translate.svg';
	import Backdrop from '$lib/components/backdrop.svelte';
</script>

<section>
	<div>
		<div>
			<Backdrop backdrop={backdrop} title="Translate" description="Translate your word into perfect human-like result" />
			<div class="flex flex-row justify-center">
				<div class="flex flex-col text-black m-auto mt-10">
					<button class="bg-[#FFB0C8] w-[229px] h-[58px] rounded-[35px] mb-4">English</button>			
					<div class="relative mb-3 border border-[#FFB0C8] rounded-[20px] w-[524px] h-[233px]" data-te-input-wrapper-init>
						<textarea
						  class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
						  id="exampleFormControlTextarea1"
						  rows="8"
						  placeholder="Your message"></textarea>
					  </div>
				</div>
				<div class="flex flex-col text-black m-auto mt-10">
					<div class="flex flex-row-reverse">
						<button class="bg-[#FFB0C8] w-[229px] h-[58px] rounded-[35px] mb-4">Bahasa Indonesia</button>					
					</div>
						
					<div class="relative mb-3 border border-[#FFB0C8] rounded-[20px] w-[524px] h-[233px]" data-te-input-wrapper-init>
						<textarea
						  class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
						  id="exampleFormControlTextarea1"
						  rows="8"
						  placeholder="Your message"></textarea>
					  </div>
				</div>
			  </div>
			  <div class="text-center m-16">
				<button class="bg-[#FFB0C8] w-[229px] h-[58px] rounded-[35px] mb-4">English</button>			
			  </div>
			  
		</div>
	</div>
</section>

<style>
</style>
