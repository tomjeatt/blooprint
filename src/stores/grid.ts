import { writable } from 'svelte/store';

const createEmptyGrid = (): Grid => ({
    rows: 0,
    columns: 0,
    cards: [],
});

const store = writable(createEmptyGrid() as Grid);

export default {
    subscribe: store.subscribe,
    addCard: (card: Card) => {
        store.update((state) => ({
            ...state,
            columns: state.columns + 1,
            cards: [...state.cards, card],
        }));
    },
    removeCard: (card: Card) => {
        store.update((state) => ({
            ...state,
            columns: state.columns - 1,
            cards: state.cards.filter(({ id, text }) => id != card.id),
        }));
    },
};
export type Card = {
    id: string;
    text: string;
};

export type Grid = {
    rows: number;
    columns: number;
    cards: Card[];
};
