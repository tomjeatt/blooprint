import { writable } from 'svelte/store';

export type Card = {
    // Super quick thing just to do a demo
    id: string;
    text: string;
};

export type Grid = {
    // Super quick thing just to do a demo
    rows: number;
    columns: number;
    cards: Card[];
};

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
    removeCard: (id: string) => {
        store.update((state) => ({
            ...state,
            columns: state.columns - 1,
            cards: state.cards.filter(({ id: _id, text }) => _id != id),
        }));
    },
};
