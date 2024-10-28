<script context="module" lang="ts">
  type Product = {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
    quantity?: number;
  };

  export async function load({ params }: { params: { id: string } }) {
    const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
    const product: Product = await res.json();
    return { props: { product } };
  }
</script>

<script lang="ts">
  import { cart } from '../../../store/cartStore.js';
  import Navbar from '../../../components/Navbar.svelte';
  export let product: Product;

  function addToCart() {
    cart.update((items: Product[]) => {
      const existing = items.find((item) => item.id === product.id);
      if (existing) {
        existing.quantity = (existing.quantity || 1) + 1;
      } else {
        items.push({ ...product, quantity: 1 });
      }
      return items;
    });
  }

  function imgError(event: Event) {
    (event.target as HTMLImageElement).src = 'https://via.placeholder.com/200';
  }
</script>

<Navbar />

{#if product}
  <img 
    src="{product.image}" 
    alt="{product.title}" 
    on:error={imgError} 
    style="display: block; margin: 0 auto; width: 200px; height: auto;" 
  />
  <h1>{product.title}</h1>
  <p>{product.description}</p>
  <p>Price: ${product.price}</p>
  <button on:click={addToCart}>Add to Cart</button>
{:else}
  <p>Loading...</p>
{/if}

<style>
  h1, p {
    text-align: center;
    margin: 10px 0;
  }
  button {
    display: block;
    margin: 20px auto;
    padding: 10px 20px;
    cursor: pointer;
  }
</style>
