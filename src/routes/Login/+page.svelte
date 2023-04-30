<script>
    import vector from "$lib/assets/Vector.svg";
</script>
<main>
    <img
            src={vector}
            alt="vector"
            class="absolute opacity-70 w-screen h-screen -z-10 "
        />
    <div class="bg-[#252525] w-full h-screen">
        <div
            class="flex flex-row text-white items-center justify-center h-screen"
        >
            <div class="flex flex-col w-auto m-10">
                <div class="text-4xl">PerfectSentence</div>
                <div class="text-sm">Elevate your writing, effortlessly</div>
            </div>
            <form
                method="POST"
                action="?/login"
                class="m-10 border-2 w-80 h-72 border-white rounded-md p-10 shadow-white shadow-md"
            >
                <div class="flex-1 flex-row w-full my-5">
                    <div class="border-b-4 border-[#D9D9D9]">
                        <input
                            type="Username"
                            id="Username"
                            name="Username"
                            placeholder="Username"
                            class="w-60 h-8 bg-transparent text-white focus:outline-none"
                        />
                    </div>
                </div>
                <div class="flex-1 flex-row w-full">
                    <div class="border-b-4 border-[#D9D9D9]">
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="password"
                            class="w-72 h-8 bg-transparent text-white focus:outline-none"
                        />
                    </div>
                </div>
                <div>
                <button class="my-14 text-white bg-[#4A4954] rounded-md text-base w-60 h-8 font-bold transition hover:border cursor-pointer">
                    Login
                </button>
            </div>
            </form>
        </div>
    </div>
</main>
