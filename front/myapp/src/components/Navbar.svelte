<script>
    import { onMount } from 'svelte';
    import { page } from '$app/stores';
  </script>
  
  <nav>
    <a href="/">Home</a>
    <a href="/products">Products</a>
    <a href="/cart">Cart</a>
    <a href="/payment">Payment</a>
  </nav>
  
  <style>
    nav {
      display: flex;
      gap: 20px;
      background-color: #333;
      padding: 1rem;
    }
    
    a {
      color: white;
      text-decoration: none;
    }
    
    a:hover {
      text-decoration: underline;
    }
  </style>
  