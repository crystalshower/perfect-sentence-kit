<script lang="ts">
	import backdrop from '$lib/assets/backdrop/unnamed.jpg';
	import translate from '$lib/assets/translate.svg';
</script>

<section>
	<div>
		<div>
			<div class="w-full p-2 min-h-[75vh] max-h-[75vh] rounded-lg">
				<div class="relative rounded-2xl overflow-hidden h-max">
					<img
						src={backdrop}
						alt="Backdrop"
						class="object-cover min-w-full max-h-[423px] 2xl:max-h-[692px]"
					/>
					<div
						class="absolute inset-0 flex flex-col items-baseline justify-center text-white space-y-2 left-[5%]"
					>
						<h1 class="unstyled font-extrabold text-9xl">Translate</h1>
						<p>Translate your word into perfect human-like result</p>
					</div>
				</div>
				<div class="flex flex-row justify-center">
					<div class="flex flex-col text-black m-auto mt-10">
						<button class="bg-[#FFB0C8] w-[229px] h-[58px] rounded-[35px] mb-4">English</button>
						<div
							class="relative mb-3 border border-[#FFB0C8] rounded-[20px] w-[524px] h-[233px]"
							data-te-input-wrapper-init
						>
							<textarea
								class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
								id="exampleFormControlTextarea1"
								rows="8"
								placeholder="Your message"
							/>
						</div>
					</div>
					<div class="flex flex-col text-black m-auto mt-10">
						<div class="flex flex-row-reverse">
							<button class="bg-[#FFB0C8] w-[229px] h-[58px] rounded-[35px] mb-4"
								>Bahasa Indonesia</button
							>
						</div>
	
						<div
							class="relative mb-3 border border-[#FFB0C8] rounded-[20px] w-[524px] h-[233px]"
							data-te-input-wrapper-init
						>
							<textarea
								class=" peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
								id="exampleFormControlTextarea1"
								rows="8"
								placeholder="Your message"
							/>
						</div>
					</div>
				</div>
				<div class="text-center m-16 outline-none focus:ring-4 shadow-lg transform active:scale-75 transition-transform">
					<button class="bg-[#FFB0C8] w-[229px] h-[58px] rounded-[35px] mb-4">Translate</button>
				</div>
			</div>
			</div>
	</div>
</section>

<style>
</style>
	