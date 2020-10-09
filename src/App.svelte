<script lang="ts">
    import Card from './components/Card/Card.svelte';
    import store from './stores/grid';
    const createCard = () => {
        store.addCard({
            id: `${Math.random()}`,
            text: 'New Card Text',
        });
    };
</script>

<main>
    <h1>Blooprint</h1>
    <p>A service blueprinting application.</p>
    {#if $store.cards.length}
        {#each $store.cards as card}
            <Card />
        {/each}
    {/if}

    <button on:click={createCard}> + </button>
</main>
