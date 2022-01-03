<script lang="ts">
	import Header from '../_components/Header.svelte';
  import Footer from '../_components/Footer.svelte';
</script>

<svelte:head>
  <link rel="icon" href="/favicon.png" />
  <link rel="stylesheet" href="/global.css">
</svelte:head>

<Header/>
<slot></slot>
<Footer/>


