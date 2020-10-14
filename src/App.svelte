<script lang="ts">
    import data from './data/card.json';
    import Grid from './components/Grid.svelte';
</script>

<main>
    <h1>Blooprint</h1>
    <p>A service blueprinting application.</p>
    <Grid rowData={data} />
</main>
