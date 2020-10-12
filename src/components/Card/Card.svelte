<script lang="ts">
  import data from "../../data/card.json";

  const { text } = data;

  let textField: HTMLElement;

  const makeEditable: () => void = () => {
    textField.removeAttribute("readonly");
    textField.focus();
  };

  const saveCard: (event: Event) => void = (event) => {
    event.preventDefault();

    textField.setAttribute("readonly", "true");
  };
</script>

<style>
  .card {
    border: 1px solid lightgray;
    margin: 0 auto;
    width: 400px;
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

<div class="card">
  <form on:submit={saveCard}>
    <textarea value={text} bind:this={textField} readonly />
    <button type="submit">✓</button>
  </form>
  <button on:click={makeEditable}>Edit</button>
</div>
