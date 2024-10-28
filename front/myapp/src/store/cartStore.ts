// cartStore.ts
import { writable, type Writable } from 'svelte/store';

// Define the Product type
export type Product = {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
    quantity?: number;
};

// Create a writable store with an initial value of an empty array of Products
export const cart: Writable<Product[]> = writable<Product[]>([]);
