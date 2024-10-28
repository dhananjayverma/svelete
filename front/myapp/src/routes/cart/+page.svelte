<script lang="ts">
  import { cart } from '../../store/cartStore.js';
  import Navbar from '../../components/Navbar.svelte';

  // Import or define the Product type if not already done
  type Product = {
      id: number;
      title: string;
      description: string;
      price: number;
      image: string;
      quantity?: number;
  };

  let cartItems: Product[] = []; // Specify the type for cartItems

  // Subscribe to cart updates and type the value
  $: cart.subscribe((value: Product[]) => {
    cartItems = value;
  });

  function removeFromCart(id: number) { // Specify the type for id
    cart.update((items: Product[]) => {
      return items.filter(item => item.id !== id);
    });
  }
</script>

<Navbar />
<h1>Your Cart</h1>
<ul>
  {#each cartItems as item}
    <li>
      <h2>{item.title}</h2>
      <p>Quantity: {item.quantity}</p>
      <button on:click={() => removeFromCart(item.id)}>Remove</button>
    </li>
  {/each}
</ul>

<style>
  ul {
      list-style-type: none;
  }
</style>
