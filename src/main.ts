import App from './App.svelte';

const app = new App({
    target: document.body,
});

export type CardData = {
    text: string;
};
export type RowData = Array<CardData>;

export default app;
