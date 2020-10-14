<script lang="ts">
    import data from './data/card.json';
    import Row from './components/Row.svelte';
    import type { RowData } from './main';
    const rowData: Array<RowData> = data;
</script>

<main>
    <h1>Blooprint</h1>
    <p>A service blueprinting application.</p>
    <button>New Column</button>
    <button>New Row</button>
    <div>
        {#each rowData as row, i}
            <Row cards={row} rowNumber={i} />
        {/each}
    </div>
</main>

<style>
    button {
        width: 10rem;
    }
</style>
