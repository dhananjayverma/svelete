<script>
    import { Router } from 'svelte-routing';
    import { routes } from './routes';
  </script>
  
  <Router>
    {#each routes as route}
      <route.component />
    {/each}
  </Router>
  