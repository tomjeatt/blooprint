<script lang="ts">
    import Row from './Row.svelte';
    import type { RowData } from '../main';

    export let rowData: Array<RowData>;

    const addRow = () => {
        const rowLength = rowData[0].length;
        rowData = [...rowData, new Array(rowLength).fill({ text: '' }, 0, rowLength)];
        console.log('rowData :>> ', rowData);
    };

    const addColumn = () => {
        const columnLength = rowData.length;
        rowData = rowData.map((row) => [...row, { text: '' }]);
    };
</script>

<div>
    <button on:click={addColumn}>New Column</button>
    <button on:click={addRow}>New Row</button>
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
