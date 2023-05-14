<script lang="ts">
	import { enhance } from '$app/forms';
	import vector from '$lib/assets/Vector.svg';

	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

<main>
	<img src={vector} alt="vector" class="absolute opacity-70 w-screen h-screen -z-10" />
	<div class="bg-[#252525] w-full h-screen">
		<div class="flex flex-row text-white items-center justify-center h-screen">
			<div class="flex flex-col w-auto m-10">
				<div class="text-4xl">PerfectSentence</div>
				<div class="text-sm">Elevate your writing, effortlessly</div>
			</div>
			<form
				method="POST"
				action="?/login"
				use:enhance
				class="m-10 border-2 w-80 h-fit border-white rounded-md px-10 py-11 shadow-white shadow-md space-y-8"
			>
				<div>
					<div class="space-y-9">
						<div class="flex-1 flex-row w-full my-5">
							<div class="border-b-4 border-[#D9D9D9]">
								<input
									type="Username"
									id="username"
									name="username"
									placeholder="Username"
									class="w-60 h-8 bg-transparent text-white focus:outline-none"
									required
								/>
							</div>
						</div>
						<div class="flex-1 flex-row w-full">
							<div class="border-b-4 border-[#D9D9D9]">
								<input
									type="password"
									id="password"
									name="password"
									placeholder="Password"
									class="w-72 h-8 bg-transparent text-white focus:outline-none"
									required
								/>
							</div>
						</div>
					</div>

					{#if form?.code === 400}
						<div class="rounded-md p-4 mt-6 border">
							<h3 class="font-bold unstyled text-base">Invalid Password</h3>
							<p class="unstyled text-xs">Your password might be incorrect.</p>
						</div>
					{/if}
				</div>
				<div>
					<button
						class="btn bg-initial text-white bg-[#4A4954] rounded-md text-base w-full font-bold transition cursor-pointer"
					>
						Login
					</button>
				</div>
			</form>
		</div>
	</div>
</main>
