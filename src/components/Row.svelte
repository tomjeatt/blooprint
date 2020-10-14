<script lang="ts">
    import Card from './Card/Card.svelte';
    import type { CardData } from '../main';
    export let cards: Array<CardData>;
    export let rowNumber: number;
</script>

<div class="row">
    {#each cards as card, i}
        <Card text={card.text} {rowNumber} cardNumber={i} />
    {/each}
</div>

<style>
    .row {
        display: flex;
    }
</style>
