<script>
    import { cart } from '../store/cartStore.js';
    import { onMount } from 'svelte';
  
    let cartItems = [];
  
    // Subscribe to the cart store to get the current cart items
    const unsubscribe = cart.subscribe((value) => {
      cartItems = value;
    });
  
    // Cleanup subscription on component destroy
    onMount(() => {
      return () => unsubscribe();
    });
  
    // Function to remove an item from the cart
    function removeFromCart(id) {
      cart.update((items) => {
        return items.filter(item => item.id !== id);
      });
    }
  
    // Function to clear the cart (optional)
    function clearCart() {
      cart.set([]);
    }
  </script>
  
  <style>
    ul {
      list-style-type: none;
      padding: 0;
    }
  
    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ddd;
      padding: 10px 0;
    }
  
    button {
      background-color: red;
      color: white;
      border: none;
      padding: 5px 10px;
      cursor: pointer;
    }
  
    button:hover {
      background-color: darkred;
    }
  
    .clear-button {
      margin-top: 20px;
      padding: 10px;
      background-color: green;
      color: white;
      border: none;
      cursor: pointer;
    }
  
    .clear-button:hover {
      background-color: darkgreen;
    }
  </style>
  
  <h1>Your Cart</h1>
  {#if cartItems.length > 0}
    <ul>
      {#each cartItems as item}
        <li>
          <div>
            <strong>{item.title}</strong> (Quantity: {item.quantity})
          </div>
          <button on:click={() => removeFromCart(item.id)}>Remove</button>
        </li>
      {/each}
    </ul>
    <button class="clear-button" on:click={clearCart}>Clear Cart</button>
  {:else}
    <p>Your cart is empty.</p>
  {/if}
  