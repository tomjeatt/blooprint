<script lang="ts">
    export let text: string;
    export let rowNumber: number;
    export let cardNumber: number;
    let textField: HTMLElement;

    const makeEditable: () => void = () => {
        console.log(`Editing Card at ${cardNumber}, ${rowNumber}`);
        textField.removeAttribute('readonly');
        textField.focus();
    };

    const saveCard: (event: Event) => void = (event) => {
        event.preventDefault();

        textField.setAttribute('readonly', 'true');
    };
</script>

<div class="card">
    <form on:submit={saveCard}>
        <textarea value={text} bind:this={textField} readonly />
        <button type="submit">✓</button>
    </form>
    <button on:click={makeEditable}>Edit</button>
</div>

<style>
    .card {
        border: 1px solid lightgray;
        margin: 0 auto;
        width: 300px;
    }

    textarea {
        display: block;
        margin: 5px auto;
        resize: none;
        width: 94%;
    }

    textarea:read-only {
        border: none;
    }
</style>
