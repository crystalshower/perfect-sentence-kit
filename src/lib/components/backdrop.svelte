<script lang="ts">
    export let backdrop: string;
    export let title: string;
    export let description: string;
</script>


    <div class="relative rounded-2xl overflow-hidden h-max">
        <img
            src={backdrop}
            alt="Backdrop"
            class="object-cover min-w-full max-h-[423px] 2xl:max-h-[692px]"
        />
        <div
            class="absolute inset-0 flex flex-col items-baseline justify-center text-white space-y-2 left-[5%]"
        >
            <h1 class="unstyled font-extrabold text-9xl">{title}</h1>
            <p>{description}</p>
        </div>
    </div> 