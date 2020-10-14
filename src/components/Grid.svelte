<script lang="ts">
    import Row from './Row.svelte';
    import type { RowData } from '../main';

    export let rowData: Array<RowData>;
</script>

<div>
    <button>New Column</button>
    <button>New Row</button>
    <div>
        {#each rowData as row, i}
            <Row cards={row} rowNumber={i} />
        {/each}
    </div>
</div>

<style>
    button {
        width: 10rem;
    }
</style>
