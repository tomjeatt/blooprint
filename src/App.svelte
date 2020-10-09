<script lang="ts">
    import Card from './components/Card/Card.svelte';
    import store from './stores/grid';
    const createCard = () => {
        store.addCard({
            id: `${Math.random()}`, //(Could be position, could be a uuid, could be anything)
            text: 'New Card Text',
        });
    };
</script>

<main>
    <h1>Blooprint</h1>
    <p>A service blueprinting application.</p>
    {#if $store.cards.length}
        {#each $store.cards as card}
            <Card {...card} />
        {/each}
    {/if}

    <button on:click={createCard}> + </button>
</main>
