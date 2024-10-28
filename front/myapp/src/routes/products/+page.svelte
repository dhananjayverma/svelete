<script lang="ts">
  import { onMount } from 'svelte';
  import Navbar from '../../components/Navbar.svelte';
  import { cart } from '../../store/cartStore.js';

  // Define the structure of a product
  type Product = {
    id: number;
    title: string;
    description: string;
    price: number;
    quantity?: number; // Optional because it may not initially exist
  };

  let products: Product[] = []; // Explicitly declare products as an array of Product objects

  onMount(async () => {
    const res = await fetch('https://fakestoreapi.com/products');
    products = await res.json();
  });

  function addToCart(product: Product) {
    cart.update((items: Product[]) => {
      const existing = items.find((item) => item.id === product.id);
      if (existing) {
        existing.quantity = (existing.quantity || 1) + 1; // Ensure quantity exists before incrementing
      } else {
        items.push({ ...product, quantity: 1 }); // Initialize quantity if item is added for the first time
      }
      return items;
    });
  }
</script>

<Navbar />
<h1>Products</h1>
<ul>
  {#each products as product}
    <li>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <button on:click={() => addToCart(product)}>Add to Cart</button>
      <a href={`/products/${product.id}`}>View Details</a>
    </li>
  {/each}
</ul>

<style>
  ul {
    list-style-type: none;
  }

  li {
    margin: 20px 0;
  }

  button {
    margin-right: 10px;
  }
</style>
