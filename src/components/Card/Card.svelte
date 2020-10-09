<script lang="ts">
    import grid from '../../stores/grid';
    export let id;
    export let text;

    const deleteCard = () => {
        grid.removeCard(id);
    };
</script>

<div class="card">
    <button on:click={deleteCard}> X </button>
    <h2>Card</h2>
    <p>{text}</p>
</div>

<style>
    .card {
        display: flex;
        flex-direction: column;
        border: 1px black solid;
        border-radius: 1rem;
        padding: 1rem;
    }

    button {
        position: relative;
        width: fit-content;
        align-self: flex-end;
    }
</style>
