<script>
    import Navbar from "$lib/components/navbar.svelte";
</script>

<div class=" h-screen w-full bg-center bg-cover bg-home">
<div class="flex flex-col h-screen bg-black bg-opacity-25 text-white">
    <Navbar />
    <div class="flex-auto"><slot /></div>
</div>
</div>