<script lang="ts">
    //TODO: figure out why the JSON importing is funky
    // import data from '../data/card.json';
    import Grid from '../components/Grid.svelte';

    const data = [
        [
            {
                text: 'Row 1 : Card 1 text example',
            },
            {
                text: 'Row 1 : Card 2 text example',
            },
            {
                text: 'Row 1 : Card 3 text example',
            },
            {
                text: 'Row 1 : Card 4 text example',
            },
            {
                text: 'Row 1 : Card 5 text example',
            },
        ],
        [
            {
                text: 'Row 2 : Card 1 text example',
            },
            {
                text: 'Row 2 : Card 2 text example',
            },
            {
                text: 'Row 2 : Card 3 text example',
            },
            {
                text: 'Row 2 : Card 4 text example',
            },
            {
                text: 'Row 2 : Card 5 text example',
            },
        ],
    ];
</script>

<main>
    <h1>Blooprint</h1>
    <p>A service blueprinting application.</p>
    <Grid rowData={data} />
</main>
