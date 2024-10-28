<script>
    import Navbar from '../../components/Navbar.svelte';
  
  </script>
  
  <Navbar />
  <h1>Payment Page</h1>
  <p>Enter your payment details here.</p>
  
  <form>
    <label>
      Name:
      <input type="text" required />
    </label>
    <label>
      Credit Card Number:
      <input type="text" required />
    </label>
    <button type="submit">Pay</button>
  </form>
  
  <style>
    form {
      display: flex;
      flex-direction: column;
      gap: 10px;
      width: 300px;
      margin: auto;
    }
  </style>
  